import React from 'react'
import Navbar from './components/Navbar'
import Hero  from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Porject from './components/Porject'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='' >
      <Navbar/>
      <Hero className ="mt-20"/>
      <About />
      <Skill/>
      <Porject/>
      <Service/>
      <Contact/>
      <Footer/>
 


    </div>
  )
}

export default App