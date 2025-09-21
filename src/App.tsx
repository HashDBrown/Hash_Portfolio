import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar.tsx'
import imageLight from "./assets/emerald.webp";
import imageDark from './assets/pika.webp';
import cysaLogo from './assets/cysaLogo.jpg';
import secLogo from './assets/secLogo.png';
import csapLogo from './assets/CompTIA_CSAP.png'
import wazuhLogo from './assets/wazuh.webp';
import suricataLogo from './assets/Suricata.png';
import splunkLogo from './assets/splunk.webp';
import trees from './assets/trees.jpg';
import 'virtual:uno.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const formUrl = import.meta.env.VITE_FORMSPREE_URL;

// import Github from 'grommet-icons'


function App() {
  let items = ["Certs", "Experience", "Projects", "Education", "Contact", "Resume", "LinkedIn", "Github"];
  const [darkMode, setDarkMode] = useState(true);

  const setPageBg = (isDark: boolean) => {
    const html = document.documentElement;
    html.style.backgroundColor = isDark ? '#111827' /* gray-900 */ : '#f9fafb' /* gray-50 */;
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    setPageBg(newMode);
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
    setPageBg(isDark);
  }, []);


  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <div className="font-sans !scroll-smooth bg-fixed bg-center transition-colors duration-300"
        style={{ backgroundImage: `url(${trees})` }}>
          <div className="bg-gray-50/97 dark:bg-gray-900/98.5 ">
            <div>
              <NavBar 
              brandName=""
              imageSrcPath={darkMode ? imageDark : imageLight}
              navItems={items}
              toggleDarkMode={toggleDarkMode}
              />
            </div>

            <section
              id="hero"
              className="min-h-screen flex flex-col justify-start py-40 !prose m-auto pb-8 !max-w-[72ch]"
            >
              <div className="text-left max-w-3xl slide-enter-content mr-3 ml-3">
                <h1 className="text-black dark:text-white animate-bounce-in animate-duration-1.5s">
                  Hashim Alkhateeb
                </h1>
                <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 prose m-auto">
                  Hey! I'm Hashim, an Aspiring SOC Analyst & Technical Support Specialist.
                </p>

                <section
                  id="certs"
                  className="max-w-5xl mx-auto px-6 md:px-0 mb-12 slide-enter-content"
                >
                  <h2 className=" titles text-left text-black dark:text-white mb-6">
                    Certifications
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 hover:shadow-green-700 dark:hover:shadow-blue300">
                    {/* CSAP */}
                    <a
                      href="https://www.credly.com/badges/b98ce555-e215-47f2-ab4c-2cf03dbbb153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 transition transform hover:-translate-y-1"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex gap-4">
                        <img src={csapLogo} alt="CSAP Badge" className="w-12 h-12 object-contain" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 mt-0">
                            CompTIA CSAP
                          </h3>
                    
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Awarded for completing both Security+ and CySA+ certifications.
                          </p>

                        </div>
                      </div>
                      {/* Skills List */}
                          <div className="skills flex flex-wrap gap-2 mt-4 no-underline">
                            <span className=" px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                              Threat Hunting
                            </span>
                            <span className=" px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                              SIEM Triage
                            </span>
                            <span className=" px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                              Vulnerability Management
                            </span>
                            <span className=" px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                              Nessus
                            </span>
                          </div>
                    </a>

                    {/* CySA+ */}
                    <a
                      href="https://www.credly.com/badges/e4129dc4-6819-4b35-8271-fe06d572c736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 transition transform hover:-translate-y-1"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex  gap-4">
                        <img src={cysaLogo} alt="CySA+ logo" className="w-12 h-12 object-contain" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 mt-0">
                            CompTIA CySA+
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Earned June 2025 — SIEM triage, threat hunting, and secure configs.
                          </p>
                        </div>
                      </div>
                      <div className="skills flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Splunk
                        </span>
                        <span className="px-3 py-1  rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          MITRE ATT&CK
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Wireshark
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Log Analysis
                        </span>
                      </div>
                    </a>

                    {/* Security+ */}
                    <a
                      href="https://www.credly.com/badges/b312f53d-d952-4fba-bf71-3035916b113a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 transition transform hover:-translate-y-1"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex gap-4">
                        <img src={secLogo} alt="Security+ logo" className="w-12 h-12 object-contain" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 mt-0">
                            CompTIA Security+
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Earned Jan 2025 — Core knowledge in network defense and incident response.
                          </p>
                        </div>
                      </div>

                      <div className="skills flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Network Defense
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Risk Management
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Secure Protocols
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                          Access Control
                        </span>
                      </div>

                    </a>
                  </div>
                </section>

                <section
                id="experience"
                className="max-w-5xl mx-auto px-6 md:px-0 mb-3 slide-enter-content">
                  <h2 className=" titles text-left text-black dark:text-white mb-4">
                    Experience
                  </h2>

                <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 mb-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                  <span className=" col-span-1">2024 — 2025</span>
                  <div className=" col-span-3">
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-0">
                      Teaching Assistant · University of Central Florida
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-0">
                      Helped ~80 students one-on-one each week with logic, set theory, combinatorics, and proof techniques, reinforcing patience and clear technical communication skills. Monitored the Canvas discussion board and held virtual/onsite office hours, providing first-line support for
                      homework and lab questions.
                    </p>
                  </div>
                </div>

                <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                  <span className="col-span-1">2023 — 2025</span>
                  <div className="col-span-3">
                    <h3 className="text-lg font-semibold no-underline text-black dark:text-white mt-0">
                      <a
                        href="https://www.etsy.com/shop/HashEmb?ref=seller-platform-mcnav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-700 dark:hover:text-blue-700 no-underline text-lg font-semibold"
                      >
                        HashEmb Embroidery Shop
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Founded and operated a niche Etsy embroidery shop focused on anime-inspired apparel, reaching over 130 sales and 40+ five-star reviews. Provided direct customer support, handled order issues and product inquiries, and maintained high satisfaction—sharpening communication and problem-solving skills relevant to help desk roles.
                    </p>
                  </div>
                </div>
                </section>

                <section
                id="projects"
                className="max-w-5xl mx-auto px-6 md:px-0 mb-3 slide-enter-content">
                  <h2 className=" titles text-left text-black dark:text-white mt-5 mb-4">
                    Projects
                  </h2>


                <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                  <span className="col-span-1">2025</span>
                  <div className="col-span-3">
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-0">
                      SOC Homelab
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Built a containerized SOC lab with Splunk, Wazuh, Suricata, and secure DNS to simulate enterprise threat monitoring. Centralized logs to detect 14 failed sudo attempts in a day, tracked file integrity changes, and responded to simulated intrusions with real-time network-based alert correlation. Fortified client privacy using Pi-hole and Unbound, blocking over 6,000 out of 35,000+ DNS queries.
                    </p>
                  </div>

                  <div className="skills flex flex-wrap gap-4 mt-4 items-center">
                    {/* Docker */}
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5 block dark:hidden" />
                      <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Docker</span>
                    </div>

                    {/* Splunk */}
                    <div className="flex items-center gap-1">
                      <img src={splunkLogo} alt="Splunk" className="w-5 h-5 block dark:hidden" />
                      <img src={splunkLogo} alt="Splunk" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Splunk</span>
                    </div>

                    {/* Linux */}
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/linux/000000" alt="Linux" className="w-5 h-5 block dark:hidden" />
                      <img src="https://cdn.simpleicons.org/linux/FFFFFF" alt="Linux" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Linux</span>
                    </div>

                    {/* Wazuh */}
                    <div className="flex items-center gap-1">
                      <img src={wazuhLogo} alt="Wazuh" className="w-5 h-5 block dark:hidden" />
                      <img src={wazuhLogo} alt="Wazuh" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Wazuh</span>
                    </div>

                    {/* Suricata */}
                    <div className="flex items-center gap-1">
                      <img src={suricataLogo} alt="Suricata" className="w-5 h-5 block dark:hidden" />
                      <img src={suricataLogo} alt="Suricata" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Suricata</span>
                    </div>

                    {/* Pi-hole */}
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/pihole/96060C" alt="Pi-hole" className="w-5 h-5 block dark:hidden" />
                      <img src="https://cdn.simpleicons.org/pihole/96060C" alt="Pi-hole" className="w-5 h-5 hidden dark:block" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Pi-hole</span>
                    </div>




                  </div>

                

                </div>


                <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                  <span className="col-span-1">2025</span>
                  <div className="col-span-3">
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-0">
                      Portfolio Website
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Designed and developed a personal portfolio website to showcase my work and resume using React, TypeScript, TailwindCSS, and UnoCSS. Implemented light/dark theme toggle, animated UI interactions, and responsive design. Deployed using Vite and Vercel.
                    </p>
                  </div>

                  <div className="skills flex flex-wrap gap-4 mt-4 items-center">
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">React</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="TailwindCSS" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Tailwind</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScriptt" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Vercel</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/unocss/333333" alt="UnoCSS" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">UnoCSS</span>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                      <a
                        href="https://github.com/HashDBrown/Hash_Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:opacity-80"
                        title="View on GitHub"
                      >
                        {/* Light mode icon */}
                        <img
                          src="https://cdn.simpleicons.org/github/000000"
                          alt="GitHub"
                          className="w-6 h-6 block dark:hidden"
                        />
                        {/* Dark mode icon */}
                        <img
                          src="https://cdn.simpleicons.org/github/ffffff"
                          alt="GitHub"
                          className="w-6 h-6 hidden dark:block"
                        />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                  <span className=" col-span-1">2024 — 2025</span>
                  <div className=" col-span-3">
                    <h3 className="text-lg font-semibold text-black dark:text-white mt-0">
                      Magneto UI
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Led a 7-member team as Project Manager using Agile and Scrum methodologies to build a web interface for MAGNETO, an automated oracle framework for Android app testing. Designed features for APK upload, test configuration, and results visualization.
                    </p>
                  </div>

                  <div className="skills flex flex-wrap gap-4 mt-4 items-center">
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Python</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Docker</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/jira/0052CC" alt="Jira" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Jira</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/slack/4A154B" alt="Slack" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Slack</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/androidstudio/3DDC84" alt="AndroidStudio" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Android Studio</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="w-5 h-5" />
                      <span className="text-sm text-gray-800 dark:text-gray-100">Git</span>
                    </div>
                  </div>
                </div>
                </section>


                <section
                  id="education"
                  className="max-w-5xl mx-auto px-6 md:px-0 mb-3 slide-enter-content"
                >
                  <h2 className="titles text-left text-black dark:text-white mb-4">
                    Education
                  </h2>

                  <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 mb-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                    {/* Graduation Years */}
                    <span className="col-span-1">2025 — 2026</span>
                    {/* Degree Info */}
                    <div className="col-span-3">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white mt-0">
                        <i className="fa-solid fa-spinner text-lg text-gray-800 dark:text-white"></i>
                        Master of Science in Computer Science · University of Central Florida
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-0">
                        Currently pursuing a master's degree at UCF. Focus on advanced cybersecurity courses.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 mb-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
                    {/* Graduation Years */}
                    <span className="col-span-1">2021 — 2025</span>
                    {/* Degree Info */}
                    <div className="col-span-3">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-black dark:text-white mt-0">
                        <i className="fa-solid fa-graduation-cap text-lg text-gray-800 dark:text-white"></i>
                        Bachelor of Science in Computer Science · University of Central Florida
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-0">
                        Magna Cum Laude · <span className="font-bold text-green-700 dark:text-blue-300">GPA 3.93</span> · Courses in cybersecurity, software engineering, & data structures.
                      </p>
                    </div>
                  </div>
                </section>


                <section
                  id="contact"
                  className="max-w-5xl mx-auto px-6 md:px-0 mb-24 slide-enter-content"
                >
                  <h2 className="titles text-left text-black dark:text-white mt-10 mb-6">
                    Contact Me
                  </h2>

                  <form
                    action={formUrl} // ← replace with your actual Formspree ID
                    method="POST"
                    className="grid grid-cols-1 gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                  >
                    <label className="block">
                      <span className="text-gray-700 dark:text-gray-200">Your name</span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none px-2 py-1"
                      />
                    </label>

                    <label className="block">
                      <span className="text-gray-700 dark:text-gray-200">Your email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none px-2 py-1"
                      />
                    </label>

                    <label className="block">
                      <span className="text-gray-700 dark:text-gray-200">Your message</span>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md shadow-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none px-2 py-1"
                      ></textarea>
                    </label>

                    <button
                      type="submit"
                      className="self-start bg-green-600 dark:bg-blue-200 dark:text-black dark:hover:bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </section>


              </div>
            </section>

          </div>
        </div>
      </div>

        
    </>
  )
}

export default App
