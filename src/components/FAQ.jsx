import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

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
    }
  ]

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-content">
          <div className="faq-header">
            <h2>FAQs</h2>
            <div className="faq-illustration">FAQ Illustration</div>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            <button className="load-more">Load More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ