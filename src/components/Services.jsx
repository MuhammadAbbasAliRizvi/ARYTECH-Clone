import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Real ARYtech service images
const serviceImages = [
  "https://arytech.com/assets/images/services/home/aiDevelopmentService.webp",
  "https://arytech.com/assets/images/services/home/devOps.webp",
  "https://arytech.com/assets/images/services/home/newProductInnovation.webp",
  "https://arytech.com/assets/images/services/home/softDevelopmentService.webp"
]

const Services = () => {
  const [hoveredService, setHoveredService] = useState(0)

  const services = [
    {
      title: "AI Development Services",
      description: "Data-driven intelligent solutions",
      services: [
        "AI Consulting & Assessment",
        "Generative AI",
        "Computer Vision",
        "Agentic AI Development"
      ],
      image: serviceImages[0]
    },
    {
      title: "Cloud & DevOps Services",
      description: "Scalable secure automated solutions",
      services: [
        "AWS",
        "Azure", 
        "GCP",
        "DevOps Services",
        "Cloud Migration"
      ],
      image: serviceImages[1]
    },
    {
      title: "Software Development Services",
      description: "Custom software for growth",
      services: [
        "Mobile App Development",
        "Web Application Development"
      ],
      image: serviceImages[3]
    },
    {
      title: "Product Engineering Services",
      description: "Ideas to market-fit launch ready",
      services: [
        "Product Strategy",
        "Design Thinking",
        "MVP Development"
      ],
      image: serviceImages[2]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services Designed for Your Next Step</h2>
        <p className="section-description">
          We help you build scalable products, driving revenue growth and competitive advantage.
        </p>
        
        <div className="services-row-layout">
          {/* Left Panel - Services List */}
          <div className="services-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${hoveredService === index ? 'active' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
              >
                <div className="service-content">
                  <motion.h3
                    className="service-title"
                    initial={false}
                    animate={{ 
                      color: hoveredService === index ? '#0056b3' : '#333',
                      fontWeight: hoveredService === index ? '600' : '500'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    className="service-description"
                    initial={false}
                    animate={{ 
                      color: hoveredService === index ? '#0056b3' : '#666'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        className="service-subitems"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul>
                          {service.services.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel - Image Preview */}
          <div className="services-preview">
            <motion.div
              className="preview-container"
              initial={false}
              animate={{ 
                scale: hoveredService !== null ? 1.05 : 1
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img 
                src={services[hoveredService].image} 
                alt={services[hoveredService].title}
                className="preview-image"
              />
              <div className="preview-overlay">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="preview-title"
                >
                  {services[hoveredService].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="preview-description"
                >
                  {services[hoveredService].description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
