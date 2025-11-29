import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  Box, 
  Container, 
  Button, 
  useTheme, 
  useMediaQuery,
  IconButton 
} from '@mui/material';
import { 
  ArrowForward, 
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import logo from '../assets/img/Arylogo.png';
import MegaMenu from './MegaMenu';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudiesMenu = {
    title: "Case Studies",
    items: [
      { name: "AI Development Projects", description: "Cutting-edge artificial intelligence solutions" },
      { name: "Product Engineering", description: "End-to-end product development" },
      { name: "Software Development", description: "Custom software solutions" },
      { name: "Cloud & DevOps", description: "Scalable cloud infrastructure" }
    ]
  };

  const insightsMenu = {
    title: "Insights",
    items: [
      { name: "Blog Articles", description: "Latest industry insights and trends" },
      { name: "White Papers", description: "In-depth research and analysis" },
      { name: "Case Studies", description: "Success stories and solutions" },
      { name: "Webinars", description: "Expert discussions and workshops" }
    ]
  };

  const DropdownMenu = ({ items, title }) => (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="dropdown-header">
        <h4>{title}</h4>
      </div>
      <div className="dropdown-grid">
        {items.map((item, index) => (
          <a key={index} href="#" className="dropdown-item">
            <div className="dropdown-content">
              <span className="dropdown-title">{item.name}</span>
              <span className="dropdown-description">{item.description}</span>
            </div>
            <ArrowForward className="dropdown-arrow" />
          </a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.header 
      className={`header-modern ${isSticky ? 'sticky' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="xl">
        <Box className="nav-container">
          {/* Logo - Left Aligned */}
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={logo}
              alt="ARY TECH"
              className="logo-img-modern"
            />
          </motion.div>

          {/* Desktop Navigation - Center Aligned */}
          <nav className="nav-links-modern">
            {/* Services Dropdown */}
            <MegaMenu />
            
            {/* Industries Link - Without Dropdown */}
            <a href="#" className="nav-link-modern industries-link">
              Industries
            </a>

            {/* Case Studies Dropdown */}
            <div 
              className="nav-item-with-dropdown"
              onMouseEnter={() => setActiveDropdown('caseStudies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link-with-dropdown-modern">
                Case Studies
              </button>
              <AnimatePresence>
                {activeDropdown === 'caseStudies' && (
                  <DropdownMenu {...caseStudiesMenu} />
                )}
              </AnimatePresence>
            </div>

            {/* Insights Dropdown */}
            <div 
              className="nav-item-with-dropdown"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link-with-dropdown-modern">
                Insights
              </button>
              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <DropdownMenu {...insightsMenu} />
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button - Right Aligned */}
          <motion.div
            className="cta-container"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              className="cta-button-modern"
              endIcon={<ArrowForward />}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <IconButton
            className="mobile-menu-toggle-modern"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size="large"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu-modern"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu-content">
                <div className="mobile-menu-section">
                  <h4>Services</h4>
                  <a href="#">AI Development</a>
                  <a href="#">Product Engineering</a>
                  <a href="#">Software Development</a>
                  <a href="#">Cloud & DevOps</a>
                </div>
                
                <div className="mobile-menu-section">
                  <h4>Industries</h4>
                  <a href="#">FinTech</a>
                  <a href="#">HealthTech</a>
                  <a href="#">EdTech</a>
                  <a href="#">PropTech</a>
                </div>
                
                <div className="mobile-menu-section">
                  <h4>Case Studies</h4>
                  <a href="#">AI Development Projects</a>
                  <a href="#">Product Engineering</a>
                  <a href="#">Software Development</a>
                  <a href="#">Cloud & DevOps</a>
                </div>

                <div className="mobile-menu-section">
                  <h4>Insights</h4>
                  <a href="#">Blog Articles</a>
                  <a href="#">White Papers</a>
                  <a href="#">Case Studies</a>
                  <a href="#">Webinars</a>
                </div>

                <div className="mobile-cta-section">
                  <Button
                    variant="contained"
                    className="cta-button-mobile"
                    fullWidth
                    endIcon={<ArrowForward />}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Header;