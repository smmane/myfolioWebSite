import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Portefolio from './components/portefolio/Portefolio'
import Resumes from './components/resumes/Resumes'
import Services from './components/services/Services'
import Sidebar from './components/sidebar/Sidebar'
import Contact from './components/contact/Contact'
import Pricing from './components/pricing/Pricing'
import Blog from './components/blog/Blog'
import Testimonial from './components/testimonial/Testimonial'




function App() {

  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resumes />
        <Portefolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
