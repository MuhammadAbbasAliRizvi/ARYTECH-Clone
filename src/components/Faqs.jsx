import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faqs.css';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const faqs = [
    {
      question: "What is ARYtech?",
      answer: "ARYtech is a platform-driven solutions and services provider across multiple industries. Our goal is to leverage emerging AI technologies to help businesses innovate, optimize operations, and drive growth."
    },
    {
      question: "When was ARYtech founded?",
      answer: "ARYtech was founded as part of the ARY Group's digital transformation initiative."
    },
    {
      question: "How does ARYtech connect with ARY Group's legacy?",
      answer: "ARYtech builds upon ARY Group's legacy of innovation and media excellence, extending it into the digital technology space."
    },
    {
      question: "Which industries does ARYtech specialize in?",
      answer: "We specialize in FinTech, HealthTech, PropTech, EdTech, EnterTech, and AdTech industries."
    },
    {
      question: "What services does ARYtech provide?",
      answer: "We provide AI Development, Software Development, Product Engineering, Cloud & DevOps services."
    },
    {
      question: "What makes ARYtech different from other tech companies?",
      answer: "Our unique combination of media heritage, platform-driven approach, and focus on emerging technologies sets us apart in delivering comprehensive digital solutions."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="container">
        <div className="faqs-content">
          {/* Left Column - 40% */}
          <div className="faqs-left" data-aos="fade-up">
            <motion.div 
              className="left-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="faqs-heading">FAQs</h2>
              <div className="faqs-image-container">
                <img 
                  src="https://arytech.com/assets/images/icons/faq-new.svg" 
                  alt="FAQ Illustration" 
                  className="faqs-image"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - 60% */}
          <div className="faqs-right" data-aos="fade-right">
            <motion.div 
              className="faqs-list"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="question-text">{faq.question}</h4>
                    <motion.span 
                      className="toggle-icon"
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              <motion.button 
                className="load-more-btn"
                whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Load More FAQs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs;