import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import imagePath from "./assets/emerald.webp";
import cysaLogo from './assets/cysaLogo.jpg';
import secLogo from './assets/secLogo.png';
import csapLogo from './assets/CompTIA_CSAP.png'
import 'virtual:uno.css'
// import Github from 'grommet-icons'


function App() {
  let items = ["Certs", "Experience", "Skills", "Projects", "Contact", "LinkedIn", "Github"];


  return (
    <>
      <div className="font-sans !scroll-smooth">
        <div>
          <NavBar 
          brandName="" 
          imageSrcPath={imagePath} 
          navItems={items}/>
        </div>

        <section
          id="hero"
          className="min-h-screen flex flex-col justify-start my-40 !prose m-auto mb-8 !max-w-[72ch]"
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
              className="max-w-5xl mx-auto px-6 md:px-0 mb-24 slide-enter-content"
            >
              <h2 className=" titles text-left text-black dark:text-white mb-6">
                Certifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 hover:shadow-green-700">
                {/* CSAP */}
                <a
                  href="https://www.credly.com/earner/earned/badge/b98ce555-e215-47f2-ab4c-2cf03dbbb153"
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
                  href="https://www.credly.com/earner/earned/badge/e4129dc4-6819-4b35-8271-fe06d572c736"
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
                  href="https://www.credly.com/earner/earned/badge/b312f53d-d952-4fba-bf71-3035916b113a"
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



          </div>
        </section>

      </div>
        
    </>
  )
}

export default App
