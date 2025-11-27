import React from 'react'

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
              <div className="footer-logo">ARY TECH</div>
              <p className="footer-tagline">
                Streaming Culture. Powering Platforms. Engineering the Future.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">facebook</a>
                <a href="#" aria-label="Instagram">instagram</a>
                <a href="#" aria-label="LinkedIn">linkedin</a>
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
              <div className="footer-logo-secondary">ARY Group Logo</div>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer