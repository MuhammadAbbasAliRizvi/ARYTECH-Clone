import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Grid,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import './CaseStudies.css';

const CaseStudies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredCaseStudy, setHoveredCaseStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      category: "OTT",
      industry: "EnterTech",
      title: "The OTT revolution is reshaping entertainment",
      description: "ARY ZAP leads Pakistan's market with unmatched dramas, live sports, and AI-powered streaming.",
      logo: "ARY ZAP Logo",
      image: "https://arytech.com/assets/images/ary-zap2.svg",
      overlayTitle: "ARY ZAP - OTT Platform",
      overlayDescription: "Leading Pakistan's digital entertainment revolution with AI-powered streaming",
      features: ["AI Streaming", "Live Sports", "Drama Content", "User Personalization"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      category: "EdTech",
      industry: "App",
      title: "QTV Tutor combines traditional Islamic learning with modern AI",
      description: "Offering personalized, accessible, and engaging learning experiences for every student.",
      logo: "QTV Tutor Logo",
      image: "https://arytech.com/assets/images/gitex-global.svg",
      overlayTitle: "QTV Tutor - EdTech Solution",
      overlayDescription: "Revolutionizing Islamic education with AI-powered personalized learning",
      features: ["AI Learning", "Personalized Content", "Islamic Education", "Mobile Platform"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    normal: {
      scale: 1,
      filter: "grayscale(100%)",
      opacity: 0.8
    },
    hover: {
      scale: 1.05,
      filter: "grayscale(0%)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="case-studies" className="case-studies-modern">
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          className="case-studies-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            className="case-studies-title"
            gutterBottom
          >
            Case Studies
          </Typography>
          <Typography 
            variant="h6" 
            className="case-studies-subtitle"
          >
            Success Stories
          </Typography>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="case-studies-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {caseStudies.map((study) => (
              <Grid item xs={12} md={6} key={study.id} className="case-study-grid-item">
                <motion.div
                  className="case-study-card-modern"
                  variants={itemVariants}
                  whileHover="hover"
                  initial="normal"
                  onHoverStart={() => setHoveredCaseStudy(study.id)}
                  onHoverEnd={() => setHoveredCaseStudy(null)}
                >
                  {/* Image Container - Only Image Shown by Default */}
                  <motion.div 
                    className="case-study-image-container"
                    variants={imageVariants}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="case-study-image"
                    />
                    
                    {/* Overlay on Hover - All Content Appears */}
                    <AnimatePresence>
                      {hoveredCaseStudy === study.id && (
                        <motion.div 
                          className="case-study-overlay"
                          variants={overlayVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {/* Category and Industry Badges */}
                          <div className="case-study-badges">
                            <span className="category-badge">{study.category}</span>
                            <span className="industry-badge">{study.industry}</span>
                          </div>

                          {/* Main Title */}
                          <Typography 
                            variant="h4" 
                            className="case-study-overlay-title"
                            gutterBottom
                          >
                            {study.overlayTitle}
                          </Typography>
                          
                          {/* Description */}
                          <Typography 
                            variant="body1" 
                            className="case-study-overlay-description"
                            gutterBottom
                          >
                            {study.overlayDescription}
                          </Typography>

                          {/* Features List */}
                          <div className="case-study-features">
                            {study.features.map((feature, index) => (
                              <span key={index} className="case-study-feature-tag">
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Footer with Logo and Button */}
                          <div className="case-study-overlay-footer">
                            <span className="case-study-logo">{study.logo}</span>
                            <motion.button
                              className="case-study-overlay-button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Case Study
                              <ArrowForward className="button-icon" />
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Fallback Title (Visible only on mobile) */}
                  <div className="case-study-title-fallback">
                    <Typography 
                      variant="h6" 
                      className="case-study-title-text"
                    >
                      {study.title}
                    </Typography>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Background Elements */}
        <div className="case-studies-background">
          <div className="floating-element elem-1"></div>
          <div className="floating-element elem-2"></div>
          <div className="floating-element elem-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;