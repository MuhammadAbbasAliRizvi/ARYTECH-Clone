import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/img/Arylogo.png'
import MegaMenu from './MegaMenu'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <motion.img
              src={logo}
              alt="ARY TECH"
              className="logo-img"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-links">
            <MegaMenu />
            <a href="#case-studies">Case Studies <span>›</span></a>
            <a href="#industries">Industries</a>
            <a href="#insights">Insights <span>›</span></a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch <span>→</span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-mega-menu">
                <div className="mobile-menu-section">
                  <h4>Development</h4>
                  <a href="#">Web Development</a>
                  <a href="#">Mobile Apps</a>
                  <a href="#">AI Solutions</a>
                </div>
                <div className="mobile-menu-section">
                  <h4>Design</h4>
                  <a href="#">UI/UX</a>
                  <a href="#">Branding</a>
                  <a href="#">Graphics</a>
                </div>
                <div className="mobile-menu-section">
                  <h4>Marketing</h4>
                  <a href="#">SEO</a>
                  <a href="#">Social Media</a>
                  <a href="#">Content Strategy</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header