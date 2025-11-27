import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import '../styles/Industries.css';

const Industries = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const industries = [
    {
      name: "EnterTech",
      description: "AI-powered OTT streaming and interactive content to boost engagement.",
      icon: "🎬"
    },
    {
      name: "HealthTech", 
      description: "Secure data management and telemedicine to improve patient care.",
      icon: "🏥"
    },
    {
      name: "FinTech",
      description: "Secure solutions for fraud detection, mobile banking, and compliance automation.",
      icon: "💳"
    },
    {
      name: "PropTech",
      description: "Innovative solutions transforming global property markets.",
      icon: "🏠"
    },
    {
      name: "EdTech",
      description: "Scalable e-learning platforms for accessible, personalized global learning.",
      icon: "🎓"
    },
    {
      name: "AdTech",
      description: "Get the best progressive solutions built for the advertising world.",
      icon: "📊"
    }
  ];

  const clientLogos = [
    "https://arytech.com/assets/images/ary-zap-logo.svg",
    "https://arytech.com/assets/images/ARY_Laguna.svg", 
    "https://arytech.com/assets/images/clients/ARY_News.svg",
    "https://arytech.com/assets/images/learnege.svg"
  ];

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

  return (
    <section id="industries" className="industries-modern">
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          className="industries-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            className="industries-title"
            gutterBottom
          >
            Core Industries We Serve
          </Typography>
          <Typography 
            variant="h6" 
            className="industries-subtitle"
          >
            Transforming industries with cutting-edge technology solutions and innovative digital platforms
          </Typography>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          className="client-logos-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h5" 
            className="client-logos-title"
            gutterBottom
          >
            Trusted by Industry Leaders
          </Typography>
          <div className="client-logos-grid">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="logo-container"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="client-logo"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="industries-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {industries.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  className="industry-card-modern"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="industry-icon">
                    {industry.icon}
                  </div>
                  <Typography 
                    variant="h5" 
                    className="industry-name"
                    gutterBottom
                  >
                    {industry.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    className="industry-description"
                  >
                    {industry.description}
                  </Typography>
                  
                  {/* Hover Effect Line */}
                  <div className="hover-line"></div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Background Elements */}
        <div className="industries-background-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default Industries;