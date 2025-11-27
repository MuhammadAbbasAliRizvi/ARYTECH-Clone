import React from 'react'

const Industries = () => {
  const industries = [
    {
      name: "EnterTech",
      description: "AI-powered OTT streaming and interactive content to boost engagement."
    },
    {
      name: "HealthTech", 
      description: "Secure data management and telemedicine to improve patient care."
    },
    {
      name: "FinTech",
      description: "Secure solutions for fraud detection, mobile banking, and compliance automation."
    },
    {
      name: "PropTech",
      description: "Innovative solutions transforming global property markets."
    },
    {
      name: "EdTech",
      description: "Scalable e-learning platforms for accessible, personalized global learning."
    },
    {
      name: "AdTech",
      description: "Get the best progressive solutions built for the advertising world."
    }
  ]

  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2>Core Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries