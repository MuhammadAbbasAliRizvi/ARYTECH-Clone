import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { 
  Code as CodeIcon,
  RocketLaunch as RocketIcon,
  Public as GlobalIcon,
  Savings as SavingsIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';
import { useTypewriter } from 'react-simple-typewriter';
import './Stats.css';

const Stats = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { 
      number: "20+", 
      label: "Full Stack AI Developers",
      icon: <CodeIcon className="stat-icon-modern" />,
      suffix: "",
      description: "Expert developers specializing in AI and full-stack solutions"
    },
    { 
      number: "100", 
      label: "Go Live Rate",
      icon: <RocketIcon className="stat-icon-modern" />,
      suffix: "%",
      description: "Successful project deployments with zero failures"
    },
    { 
      number: "24/7", 
      label: "Global Delivery",
      icon: <GlobalIcon className="stat-icon-modern" />,
      suffix: "",
      description: "Round-the-clock development and support services"
    },
    { 
      number: "40", 
      label: "Cost Savings vs. US/EU",
      icon: <SavingsIcon className="stat-icon-modern" />,
      suffix: "%",
      description: "Significant cost reduction without compromising quality"
    },
    { 
      number: "30", 
      label: "Streamlined Delivery Excellence",
      icon: <SpeedIcon className="stat-icon-modern" />,
      suffix: "%",
      description: "Faster delivery times through optimized processes"
    }
  ];

  const [typewriterText] = useTypewriter({
    words: ['AI', 'Digital Innovation', 'Cloud Solutions', 'Enterprise Systems'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats-modern" ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={containerVariants}
        >
          <Typography 
            variant="h2" 
            className="stats-title-modern"
            gutterBottom
          >
            Powering What's Next with{' '}
            <span className="typewriter-text">{typewriterText}</span>
          </Typography>
          
          <Typography 
            variant="h6" 
            className="stats-subtitle-modern"
          >
            ARYtech builds emerging digital platforms across AI, OTT, Enterprise Automation, and Cloud Innovation. 
            We specialise in full-stack development and cloud-native engineering to deliver high-performance, scalable systems.
          </Typography>
        </motion.div>

        <motion.div
          className="stats-grid-modern"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Grid container spacing={3} className="stats-grid-container">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index} className="stats-grid-item">
                <motion.div
                  className="stat-card-modern"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="stat-icon-container"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    className="stat-number-modern"
                    variants={numberVariants}
                  >
                    {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                  </motion.div>
                  
                  <Typography 
                    variant="h6" 
                    className="stat-label-modern"
                  >
                    {stat.label}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="stat-description"
                  >
                    {stat.description}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Background Elements */}
        <div className="stats-background-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;