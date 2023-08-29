import { useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Me from './components/Me'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'




function App() {
  

  return (
    <main className="text-black-400 text-justify bgh-14 bg-gradient-to-r from-fuchsia-100 to-fuchsia-300 body-font">
      

      <Navbar />
      <section className='overflow-hidden'>
        <About />
        <Me />
      </section>
      <TechnicalSkills />
      <Projects />
      <Contact />
      

      
    </main>
  )
}

export default App
