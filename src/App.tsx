import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar.tsx'
import imageLight from "./assets/emerald.webp";
import imageDark from './assets/pika.webp';
import cysaLogo from './assets/cysaLogo.jpg';
import secLogo from './assets/secLogo.png';
import csapLogo from './assets/CompTIA_CSAP.png'
import 'virtual:uno.css'

// import Github from 'grommet-icons'


function App() {
  let items = ["Certs", "Experience", "Projects", "Contact", "Resume", "LinkedIn", "Github"];
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode and update <html> class
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  useEffect(() => {
    // On first load, set mode based on existing class
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);


  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <div className="font-sans !scroll-smooth bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
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

              <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100">
                <span className=" col-span-1">2024 — 2025</span>
                <div className=" col-span-3">
                  <h3 className="text-lg font-semibold text-black dark:text-white mt-0">
                    Teaching Assistant · University of Central Florida
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Helped ~80 students one-on-one each week with logic, set theory, combinatorics, and proof techniques, reinforcing patience and clear technical communication skills. Monitored the Canvas discussion board and held virtual/onsite office hours, providing first-line support for
                    homework and lab questions.
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

              <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100">
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
                </div>
              </div>


              <div className="p-6 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-6 rounded-xl transition-all duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 hover:scale-105 !opacity-90 hover:!opacity-100">
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

            </div>
          </section>

        </div>
      </div>

        
    </>
  )
}

export default App
