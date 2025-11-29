import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Testimonials.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: "ARYtech has been instrumental in driving our digital evolution. Their technical depth, agility, and strategic insight make them a trusted partner in our ongoing transformation journey.",
      author: "Jerjees Seja",
      position: "Chief Executive Officer - ARY Digital",
      logo: "https://arytech.com/assets/images/ARY_Laguna.svg",
      avatars: [
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2FJJ.png&w=96&q=75",
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2Fhans.png&w=96&q=76",
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2Fhans.png&w=96&q=75",
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2Fkhaild-rasheed.png&w=96&q=75"
      ]
    },
    {
      quote: "ARYtech's team understands how to align technology with real business outcomes. Their commitment and execution excellence have added great value to our digital initiatives.",
      author: "Khalid Rashid",
      position: "Business Unit Head - Qtv Tutor",
      logo: "https://arytech.com/assets/images/QTV-TUTOR-LOGO.svg",
      avatars: [
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2Fkhaild-rasheed.png&w=96&q=75",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      ]
    },
    {
      quote: "ARYtech brings rare clarity and precision to digital transformation. Their ability to turn complex strategic goals into actionable, high-impact solutions is impressive.",
      author: "Hans Rosendahl",
      position: "Managing Director - Rosendahl & Co. Growth Partners",
      logo: "https://arytech.com/assets/images/ary-zap-logo.svg",
      avatars: [
        "https://arytech.com/_next/image/?url=%2Fassets%2Fimages%2Fclients%2Fhans.png&w=96&q=75",
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      ]
    }
  ];

  const buttons = [
    { id: 1, label: "Socialproof" },
    { id: 2, label: "Whatpeoplethink" },
    { id: 3, label: "Get in Touch", hasIcon: true }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Left Section - 30% */}
        <div className="testimonials-left">
          <motion.div 
            className="left-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="left-heading">Testimonials</h2>
            <p className="left-subtitle">
              Industry leaders are recognising the inherent potential of our approach
            </p>
            <p className="left-description">
              Our deep dive into product discovery and development is clearly on a strong growth trajectory.
            </p>
            
            <div className="buttons-container">
              {buttons.map((button, index) => (
                <motion.button
                  key={button.id}
                  className="testimonial-btn"
                  whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {button.label}
                  {button.hasIcon && (
                    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Section - 70% */}
        <div className="testimonials-right">
          <div className="gradient-bg"></div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              el: '.testimonials-pagination'
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Company Logo - Now in full color */}
                  <div className="logo-container">
                    <img 
                      src={testimonial.logo} 
                      alt="Company Logo" 
                      className="company-logo"
                    />
                  </div>

                  {/* Avatar Group - One avatar per testimonial as requested */}
                  <div className="avatar-single">
                    <img
                      src={testimonial.avatars[0]}
                      alt={`Avatar of ${testimonial.author}`}
                      className="main-avatar"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <div className="testimonial-content">
                    <blockquote className="testimonial-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="author-info">
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-position">{testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonials-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;