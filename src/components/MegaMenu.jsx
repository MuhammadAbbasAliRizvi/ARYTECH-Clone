import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuData = {
    development: {
      title: 'Development',
      items: [
        { name: 'AI Development', description: 'Advanced AI and machine learning solutions' },
        { name: 'Product Engineering', description: 'End-to-end product development' },
        { name: 'Software Development', description: 'Custom software solutions' },
        { name: 'Cloud & DevOps', description: 'Scalable cloud infrastructure' }
      ]
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'Web Applications', description: 'Responsive and scalable web apps' },
        { name: 'Mobile Applications', description: 'iOS and Android mobile solutions' },
        { name: 'Enterprise Software', description: 'Business process automation' },
        { name: 'Data Analytics', description: 'Data-driven insights and analytics' }
      ]
    },
    consulting: {
      title: 'Consulting',
      items: [
        { name: 'Technology Strategy', description: 'Digital transformation roadmap' },
        { name: 'Architecture Design', description: 'Scalable system architecture' },
        { name: 'Performance Optimization', description: 'Application performance tuning' },
        { name: 'Security Audit', description: 'Comprehensive security assessment' }
      ]
    }
  }

  return (
    <div 
      className="mega-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-link-with-dropdown-modern">
        Services
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mega-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mega-menu-grid">
              {Object.entries(menuData).map(([key, column]) => (
                <div key={key} className="mega-menu-column">
                  <h4 className="column-title">{column.title}</h4>
                  <ul className="column-list">
                    {column.items.map((item, index) => (
                      <li key={index} className="column-item">
                        <a href="#" className="column-link">
                          <div className="column-text-content">
                            <span className="column-item-title">{item.name}</span>
                            <span className="column-item-description">{item.description}</span>
                          </div>
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