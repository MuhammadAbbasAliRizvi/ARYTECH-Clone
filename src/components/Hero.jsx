import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Background images
  const desktopBg = "https://arytech.com/assets/images/hero-img.webp";
  const mobileBg = "https://arytech.com/assets/images/hero-img-mobile.webp";

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
    <section className="hero-arytech">
      {/* Background with responsive images */}
      <div 
        className="hero-background-arytech"
        style={{ 
          backgroundImage: `url(${isMobile ? mobileBg : desktopBg})`
        }}
      >
        <div className="background-overlay-arytech"></div>
        <div className="floating-particles-arytech">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle-arytech" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <Container maxWidth="lg" className="hero-container-arytech">
        <Box className="hero-content-arytech">
          <motion.div
            className="text-content-arytech"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              ref={textRef}
              className="animated-heading-arytech"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Shaping</span>
              <span>the</span>
              <span>Future</span>
              <span>of</span>
              <span>Digital</span>
              <span>Innovation</span>
              <span>with</span>
              <span className="ai-text-arytech">AI</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle-arytech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering industries with scalable, AI-driven platforms and cutting-edge digital solutions that transform businesses and drive growth.
            </motion.p>
            
            <motion.div
              className="button-container-arytech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                variant="contained"
                className="cta-button-arytech"
                endIcon={<ArrowForward />}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 86, 179, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </Button>
            </motion.div>
          </motion.div>
        </Box>

        {/* Floating elements */}
        <motion.div 
          className="floating-element-arytech element-1-arytech"
          variants={floatingAnimation}
          animate="animate"
        >
          <div className="tech-dot-arytech"></div>
        </motion.div>
        
        <motion.div 
          className="floating-element-arytech element-2-arytech"
          variants={floatingAnimation}
          animate="animate"
        >
          <div className="tech-circle-arytech"></div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;