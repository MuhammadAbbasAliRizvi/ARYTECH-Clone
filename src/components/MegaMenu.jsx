import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuData = {
    development: {
      title: 'Development',
      items: [
        { name: 'Web Development', icon: <FaChevronRight size={12} /> },
        { name: 'Mobile Apps', icon: <FaChevronRight size={12} /> },
        { name: 'AI Solutions', icon: <FaChevronRight size={12} /> }
      ]
    },
    design: {
      title: 'Design',
      items: [
        { name: 'UI/UX', icon: <FaChevronRight size={12} /> },
        { name: 'Branding', icon: <FaChevronRight size={12} /> },
        { name: 'Graphics', icon: <FaChevronRight size={12} /> }
      ]
    },
    marketing: {
      title: 'Marketing',
      items: [
        { name: 'SEO', icon: <FaChevronRight size={12} /> },
        { name: 'Social Media', icon: <FaChevronRight size={12} /> },
        { name: 'Content Strategy', icon: <FaChevronRight size={12} /> }
      ]
    }
  }

  return (
    <div 
      className="mega-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-link-with-dropdown">
        Services <span>›</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mega-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mega-menu-grid">
              {Object.entries(menuData).map(([key, column]) => (
                <div key={key} className="mega-menu-column">
                  <h4 className="column-title">{column.title}</h4>
                  <ul className="column-list">
                    {column.items.map((item, index) => (
                      <li key={index} className="column-item">
                        <a href="#" className="column-link">
                          <span className="icon">{item.icon}</span>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MegaMenu