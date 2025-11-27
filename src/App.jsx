import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

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
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App