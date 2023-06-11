import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import TechnicalSkills from './components/TechnicalSkills'
import Home from './components/Home'


import Projects from './components/Projects'



function App() {
  

  return (
    <main className="text-black-400 bgh-14 bg-gradient-to-r from-fuchsia-100 to-fuchsia-300 body-font">
      <div>

      <Navbar />
      {/* <Home /> */}
      <About />
      <TechnicalSkills />
     
      
      <Projects />
     
      <Contact />
      
     
      
      

      </div>
      
    </main>
  )
}

export default App
