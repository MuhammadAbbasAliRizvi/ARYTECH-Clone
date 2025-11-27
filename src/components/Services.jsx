import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions for your business growth",
      image: "https://arytech.com/assets/images/services/home/softDevelopmentService.webp"
    },
    {
      title: "Product Engineering", 
      description: "End-to-end product development from concept to launch",
      image: "https://arytech.com/assets/images/services/home/newProductInnovation.webp"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automated deployment pipelines",
      image: "https://arytech.com/assets/images/services/home/devOps.webp"
    },
    {
      title: "AI Development",
      description: "Intelligent solutions powered by cutting-edge artificial intelligence",
      image: "https://arytech.com/assets/images/services/home/aiDevelopmentService.webp"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.h2 
          className="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services Designed for Your Next Step
        </motion.h2>
        
        <motion.p 
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help you build scalable products, driving revenue growth and competitive advantage.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${hoveredCard === index ? 'hovered' : ''} ${hoveredCard !== null && hoveredCard !== index ? 'shrinked' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-image-container">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="card-image"
                  animate={{
                    filter: hoveredCard === index ? 'grayscale(0%)' : 'grayscale(100%)'
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      className="card-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="overlay-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        className="overlay-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {service.description}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;