import { useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'




function App() {
  

  return (
    <main className="overflow-hidden text-black-400 bgh-14 bg-gradient-to-r from-fuchsia-100 to-fuchsia-300 body-font">
      

      <Navbar />
      <About />
      <TechnicalSkills />
      <Projects />
      <Contact />
      

      
    </main>
  )
}

export default App
