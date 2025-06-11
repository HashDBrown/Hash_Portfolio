import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import imagePath from "./assets/emerald.webp";

function App() {
  const [count, setCount] = useState(0)
  let items = ["Home", "Projects", "Resume", "Certs", "Education"];


  return (
    <>
      <div className="font-sans scroll-smooth">
        <div>
          <NavBar 
          brandName="Hashim Alkhateeb" 
          imageSrcPath={imagePath} 
          navItems={items}/>
        </div>
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900"> 
          <h1 className="text-4xl font-bold">Hi, I am Hashim Alkhateeb</h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">Aspiring Software Engineer & Cybersecurity Enthusiast</p>
        </section>
      </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
