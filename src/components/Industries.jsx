  import React, { useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { 
    Box, 
    Container, 
    Typography, 
    Grid,
    useTheme,
    useMediaQuery 
  } from '@mui/material';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import '../styles/Industries.css';

  // Import React Icons
  import { 
    FaFilm, 
    FaHeartbeat, 
    FaDollarSign, 
    FaBuilding, 
    FaGraduationCap,
    FaChartLine 
  } from 'react-icons/fa';

  const Industries = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }, []);

    const industries = [
      {
        name: "EnterTech",
        description: "AI-powered OTT streaming and interactive content to boost engagement.",
        icon: <FaFilm className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
      },
      {
        name: "HealthTech", 
        description: "Secure data management and telemedicine to improve patient care.",
        icon: <FaHeartbeat className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        background: "linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)"
      },
      {
        name: "FinTech",
        description: "Secure solutions for fraud detection, mobile banking, and compliance automation.",
        icon: <FaDollarSign className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        background: "linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%)"
      },
      {
        name: "PropTech",
        description: "Innovative solutions transforming global property markets.",
        icon: <FaBuilding className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        background: "linear-gradient(135deg, rgba(67, 233, 123, 0.05) 0%, rgba(56, 249, 215, 0.05) 100%)"
      },
      {
        name: "EdTech",
        description: "Scalable e-learning platforms for accessible, personalized global learning.",
        icon: <FaGraduationCap className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        background: "linear-gradient(135deg, rgba(250, 112, 154, 0.05) 0%, rgba(254, 225, 64, 0.05) 100%)"
      },
      {
        name: "AdTech",
        description: "Get the best progressive solutions built for the advertising world.",
        icon: <FaChartLine className="industry-svg-icon" />,
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        background: "linear-gradient(135deg, rgba(168, 237, 234, 0.05) 0%, rgba(254, 214, 227, 0.05) 100%)"
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

    return (
      <section id="industries" className="industries-enhanced">
        {/* Header Section */}
        <motion.div
          className="industries-header-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg">
            <div className="industries-header-content">
              <Typography 
                variant="h2" 
                className="industries-main-title"
                gutterBottom
              >
                Core Industries We Serve
              </Typography>
              <Typography 
                variant="h6" 
                className="industries-main-subtitle"
              >
                Transforming industries with cutting-edge technology solutions and innovative digital platforms
              </Typography>
            </div>
          </Container>
        </motion.div>

        {/* Individual Industry Sections - 100vh Each */}
        {industries.map((industry, index) => (
          <motion.section
            key={index}
            className={`industry-full-section ${industry.name.toLowerCase()}`}
            style={{ background: industry.background }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Container maxWidth="lg">
              <Grid 
                container 
                alignItems="center" 
                className="industry-section-content"
                direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <Grid item xs={12} md={6}>
                  <motion.div
                    className="industry-text-content"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="industry-icon-container"
                      style={{ background: industry.gradient }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {industry.icon}
                    </motion.div>
                    
                    <Typography 
                      variant="h3" 
                      className="industry-section-title"
                      gutterBottom
                    >
                      {industry.name}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      className="industry-section-description"
                    >
                      {industry.description}
                    </Typography>

                    <motion.button
                      className="industry-cta-button"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0, 86, 179, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore {industry.name}
                    </motion.button>
                  </motion.div>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <motion.div
                    className="industry-visual-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="industry-visual-placeholder"
                      style={{ background: industry.gradient }}
                    >
                      <div className="visual-overlay">
                        <Typography variant="h5" className="visual-text">
                          {industry.name} Solutions
                        </Typography>
                      </div>
                    </div>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </motion.section>
        ))}

        {/* Trusted by Industry Leaders Section - Moved Below */}
        <motion.section
          className="trusted-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <Container maxWidth="lg">
            <div className="trusted-content">
              <Typography 
                variant="h3" 
                className="trusted-title"
                gutterBottom
              >
                Trusted by Industry Leaders
              </Typography>
              
              <Typography 
                variant="h6" 
                className="trusted-subtitle"
                gutterBottom
              >
                Partnering with leading companies across various sectors to deliver exceptional results
              </Typography>

              <motion.div
                className="client-logos-enhanced"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {clientLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="logo-container-enhanced"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.15,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="client-logo-enhanced"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </motion.section>

        {/* Background Elements */}
        <div className="industries-background-enhanced">
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
          <div className="floating-particle particle-4"></div>
        </div>
      </section>
    );
  };

  export default Industries;