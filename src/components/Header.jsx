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
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const caseStudiesMenu = {
    title: "Case Studies",
    items: [
      { name: "E-commerce Platform", icon: "🛒", description: "AI-powered shopping experience" },
      { name: "Healthcare Solution", icon: "🏥", description: "Patient management system" },
      { name: "FinTech Application", icon: "💳", description: "Digital banking platform" },
      { name: "Education Portal", icon: "🎓", description: "Online learning management" }
    ]
  };

  const insightsMenu = {
    title: "Insights",
    items: [
      { name: "Blog Articles", icon: "📝", description: "Latest industry insights" },
      { name: "White Papers", icon: "📄", description: "In-depth research papers" },
      { name: "Case Studies", icon: "🔍", description: "Success stories" },
      { name: "Webinars", icon: "🎥", description: "Expert discussions" }
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
            <span className="dropdown-icon">{item.icon}</span>
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
      <Container maxWidth="lg">
        <Box className="nav-container">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="nav-links-modern">
            <MegaMenu />
            
            {/* Case Studies Dropdown */}
            <div 
              className="nav-item-with-dropdown"
              onMouseEnter={() => setActiveDropdown('caseStudies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link-with-dropdown-modern">
                Case Studies <ArrowForward className="dropdown-chevron" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'caseStudies' && (
                  <DropdownMenu {...caseStudiesMenu} />
                )}
              </AnimatePresence>
            </div>

            <a href="#industries" className="nav-link-modern">
              Industries
            </a>

            {/* Insights Dropdown */}
            <div 
              className="nav-item-with-dropdown"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link-with-dropdown-modern">
                Insights <ArrowForward className="dropdown-chevron" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <DropdownMenu {...insightsMenu} />
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button */}
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
                  <a href="#">Web Development</a>
                  <a href="#">Mobile Apps</a>
                  <a href="#">AI Solutions</a>
                  <a href="#">Cloud Services</a>
                </div>
                
                <div className="mobile-menu-section">
                  <h4>Case Studies</h4>
                  <a href="#">E-commerce Platform</a>
                  <a href="#">Healthcare Solution</a>
                  <a href="#">FinTech Application</a>
                  <a href="#">Education Portal</a>
                </div>

                <div className="mobile-menu-section">
                  <h4>Insights</h4>
                  <a href="#">Blog Articles</a>
                  <a href="#">White Papers</a>
                  <a href="#">Case Studies</a>
                  <a href="#">Webinars</a>
                </div>

                <div className="mobile-menu-section">
                  <h4>Industries</h4>
                  <a href="#">Healthcare</a>
                  <a href="#">Finance</a>
                  <a href="#">Education</a>
                  <a href="#">Retail</a>
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