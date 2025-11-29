import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import FAQ from './components/Faqs'
import Contact from './components/Contact'  
import Footer from './components/Footer'
import './styles/App.css'
import Faqs from './components/Faqs'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <Insights />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App