export const config = { runtime: 'edge' };

const BOT_PATTERNS = /bot|crawler|spider|crawling|headless|preview|curl|wget|python-requests|axios|node-fetch|monitor|pingdom|uptimerobot|lighthouse|gtmetrix|facebookexternalhit|slackbot|twitterbot|discordbot|telegrambot|whatsapp|linkedinbot|embedly|quora|outbrain|pinterest|ahrefs|semrush|dotbot|mj12bot|petalbot|bytespider/i;

const ALLOWED_ORIGINS = [
  'https://www.hash-dev.us',
  'https://hash-dev.us',
];

function corsHeaders(origin: string) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : 'https://www.hash-dev.us';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default async function handler(request: Request) {
  const origin = request.headers.get('origin') || '';
  const headers = corsHeaders(origin);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }
  if (request.method !== 'POST') {
    return new Response('ok', { status: 200, headers });
  }

  const ua = request.headers.get('user-agent') || '';
  if (BOT_PATTERNS.test(ua)) {
    return new Response('bot', { status: 204, headers });
  }

  // Vercel-provided geo + IP headers
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const country = request.headers.get('x-vercel-ip-country') || '??';
  const region = request.headers.get('x-vercel-ip-country-region') || '';
  const city = decodeURIComponent(request.headers.get('x-vercel-ip-city') || '??');

  const body = await request.json().catch(() => ({} as any));
  const path = body.path || '/';
  const ref = body.referrer || 'direct';
  const utm = body.utm || {};
  const screen = body.screen || 'unknown';
  const lang = body.language || 'unknown';

  const fields: any[] = [];

  if (utm.source) {
    const campaign = utm.campaign ? ` / ${utm.campaign}` : '';
    fields.push({
      name: '🎯 Campaign',
      value: `**${utm.source}** / ${utm.medium || '?'}${campaign}`,
      inline: false,
    });
  }

  fields.push(
    { name: '📍 Location', value: `${city}, ${region} ${country}`.trim(), inline: true },
    { name: '🌐 IP', value: `\`${ip}\``, inline: true },
    { name: '📄 Path', value: `\`${path}\``, inline: true },
    { name: '🔗 Referrer', value: ref === 'direct' ? '*direct*' : ref.slice(0, 80), inline: true },
    { name: '🖥️ Screen / Lang', value: `${screen} · ${lang}`, inline: true },
    { name: '🤖 User Agent', value: `\`\`\`${ua.slice(0, 400)}\`\`\``, inline: false },
  );

  const embed = {
    title: '👀 New portfolio visit',
    color: utm.source ? 0xf59e0b : 0x10b981,
    fields,
    timestamp: new Date().toISOString(),
  };

  const webhook = process.env.DISCORD_WEBHOOK;
  if (webhook) {
    // fire and forget
    fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    }).catch(() => {});
  }

  return new Response('ok', { status: 204, headers });
}