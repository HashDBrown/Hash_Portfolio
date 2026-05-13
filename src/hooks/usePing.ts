import { useEffect } from 'react';

export function usePing() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (sessionStorage.getItem('pinged')) return;
    sessionStorage.setItem('pinged', '1');

    const params = new URLSearchParams(window.location.search);

    fetch('/api/ping', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || 'direct',
        screen: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        utm: {
        source: params.get('source') || params.get('utm_source'),
        medium: params.get('medium') || params.get('utm_medium'),
        campaign: params.get('campaign') || params.get('utm_campaign'),
        },
    }),
    keepalive: true,
    }).catch(() => {});
  }, []);
}