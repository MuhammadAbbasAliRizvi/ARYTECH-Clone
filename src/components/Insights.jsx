import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Button,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import '../styles/Insights.css';

const Insights = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const insights = [
    {
      type: "Events",
      title: "Gitex Global",
      date: "13-17 Oct '25",
      location: "Dubai World Trade Centre",
      action: "Explore",
      image: "https://arytech.com/assets/images/gitex-global.svg",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      type: "Product",
      title: "Zap 2.0 Launch",
      date: "Zap 2.0 Launch",
      notice: "Key Features Update",
      action: "Download Now",
      image: "https://arytech.com/assets/images/ary-zap2.svg",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      type: "Culture",
      title: "Independence Day",
      date: "14 Aug '25",
      notice: "Independence Day Celebrations",
      action: "Learn More",
      image: "https://arytech.com/assets/images/services/home/softDevelopmentService.webp",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const resources = [
    {
      title: "Web App vs Mobile App: Choice for Startups, Mid-Size & Enterprises",
      category: "Web App vs Mobile App",
      date: "20-Nov-2025",
      readTime: "5 min read"
    },
    {
      title: "What Is Custom Software Development and Why Your Business Needs It",
      category: "custom software development",
      date: "07-Nov-2025",
      readTime: "7 min read"
    },
    {
      title: "DevOps vs DataOps: Which Is Right for Your Organization?",
      category: "DevOps vs DataOps",
      date: "27-Oct-2025",
      readTime: "6 min read"
    }
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
    <section id="insights" className="insights-modern">
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          className="insights-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            className="insights-title"
            gutterBottom
          >
            Insights
          </Typography>
          <Typography 
            variant="h6" 
            className="insights-subtitle"
          >
            What's New
          </Typography>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          className="insights-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {insights.map((insight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  className="insight-card-modern"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Image Section */}
                  <div className="insight-image-container">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="insight-image"
                    />
                    <div 
                      className="image-overlay"
                      style={{ background: insight.gradient }}
                    ></div>
                    <div className="insight-type-badge">
                      {insight.type}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="insight-content">
                    <Typography 
                      variant="h5" 
                      className="insight-card-title"
                      gutterBottom
                    >
                      {insight.title}
                    </Typography>
                    
                    <div className="insight-meta">
                      <Typography 
                        variant="body2" 
                        className="insight-date"
                      >
                        {insight.date}
                      </Typography>
                      {insight.location && (
                        <Typography 
                          variant="body2" 
                          className="insight-location"
                        >
                          {insight.location}
                        </Typography>
                      )}
                      {insight.notice && (
                        <Typography 
                          variant="body2" 
                          className="insight-notice"
                        >
                          {insight.notice}
                        </Typography>
                      )}
                    </div>

                    <Button
                      variant="contained"
                      className="insight-action-button"
                      endIcon={<ArrowForward />}
                    >
                      {insight.action}
                    </Button>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          className="resources-section-modern"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            className="resources-title"
            gutterBottom
          >
            Helpful Resources
          </Typography>

          <Grid container spacing={3} className="resources-grid-modern">
            {resources.map((resource, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  className="resource-card-modern"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    className="resource-title"
                    gutterBottom
                  >
                    {resource.title}
                  </Typography>
                  
                  <div className="resource-meta">
                    <span className="resource-category">{resource.category}</span>
                    <div className="resource-details">
                      <span className="resource-date">{resource.date}</span>
                      <span className="resource-read-time">{resource.readTime}</span>
                    </div>
                  </div>

                  <div className="resource-hover-line"></div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Background Elements */}
        <div className="insights-background-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default Insights;