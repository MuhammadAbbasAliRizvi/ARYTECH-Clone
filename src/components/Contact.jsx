import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import './Contact.css';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    reset();
    alert('Thank you for your message! We will get back to you soon.');
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Section - 40% */}
          <motion.div className="contact-left" variants={itemVariants}>
            <div className="left-content">
              <h2 className="contact-heading">Contact Us</h2>
              <p className="contact-subtitle">
                Your next big solution starts here.
              </p>
              <p className="contact-description">
                Complete the form to receive a personalised response from our experts within minutes.
              </p>
              
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05, backgroundColor: "#004494" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get in Touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              {/* Illustrations Container */}
              <motion.div 
                className="illustrations-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="illustration-grid">
                  <motion.div 
                    className="illustration-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="https://arytech.com/assets/images/icons/edtech.svg" 
                      alt="EdTech Illustration" 
                      className="illustration-img"
                    />
                  </motion.div>
                  <motion.div 
                    className="illustration-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <img 
                      src="https://arytech.com/assets/images/icons/fintech2.svg" 
                      alt="FinTech Illustration" 
                      className="illustration-img"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - 60% */}
          <motion.div className="contact-right" variants={itemVariants}>
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Name Field */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  {...register('name')}
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </motion.div>

              {/* Email and Phone Row */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter your phone number"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone.message}</span>
                  )}
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  {...register('message')}
                />
                {errors.message && (
                  <span className="error-message">{errors.message.message}</span>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;