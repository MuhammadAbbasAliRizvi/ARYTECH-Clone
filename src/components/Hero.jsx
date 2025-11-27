import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImg from '/src/assets/img/hero-img.webp';



const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const spans = textRef.current?.querySelectorAll('span');
    
    spans?.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="background-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            ref={textRef}
            className="animated-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Shaping</span>
            <span>the</span>
            <span>Future</span>
            <span>of</span>
            <span>Digital</span>
            <span>Innovation</span>
            <span>with</span>
            <span className="ai-text">AI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering industries with scalable, AI-driven platforms.
          </motion.p>
          
          <motion.button 
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(115, 158, 228, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.div 
            className="floating-element element-1"
            variants={floatingAnimation}
            animate="animate"
          >
            <div className="tech-dot"></div>
          </motion.div>
          
          <motion.div 
            className="floating-element element-2"
            variants={floatingAnimation}
            animate="animate"
          >
            <div className="tech-circle"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;