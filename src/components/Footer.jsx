import React from 'react'
import './Footer.css'

const Footer = () => {
  const industries = [
    "FinTech",
    "HealthTech", 
    "PropTech",
    "EdTech",
    "EnterTech",
    "AdTech"
  ]

  const services = [
    "AI Development",
    "Software Development",
    "Product Engineering",
    "Cloud & DevOps"
  ]

  const resources = [
    "Blogs",
    "About",
    "Careers",
    "Contact Us"
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img 
                  src="https://arytech.com/assets/images/logo2.svg" 
                  alt="ARY TECH Logo" 
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-tagline">
                Streaming Culture. Powering Platforms. Engineering the Future.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-icon">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                    alt="Facebook"
                    className="social-icon-img"
                  />
                </a>
                <a href="#" aria-label="Instagram" className="social-icon">
                  <img 
                    src="https://arytech.com/assets/images/icons/Instagram.svg" 
                    alt="Instagram"
                    className="social-icon-img"
                  />
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                    alt="LinkedIn"
                    className="social-icon-img"
                  />
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/124/124021.png" 
                    alt="Twitter"
                    className="social-icon-img"
                  />
                </a>
                <a href="#" aria-label="YouTube" className="social-icon">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/174/174883.png" 
                    alt="YouTube"
                    className="social-icon-img"
                  />
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Industries</h4>
              <ul>
                {industries.map((industry, index) => (
                  <li key={index}><a href="#">{industry}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}><a href="#">{service}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                {resources.map((resource, index) => (
                  <li key={index}><a href="#">{resource}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Locations</h4>
              <p>Under the umbrella of ARY group</p>
              <div className="footer-group-logo">
                <img 
                  src="https://arytech.com/assets/images/ARY-Group-Logo2.svg" 
                  alt="ARY Group"
                  className="group-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 ARY TECH. All rights Reserved.
            </div>
            <div className="contact-info">
              info@arytech.com
            </div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer