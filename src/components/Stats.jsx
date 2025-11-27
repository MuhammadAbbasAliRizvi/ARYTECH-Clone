import React from 'react'

const Stats = () => {
  const stats = [
    { number: "20+", label: "Full Stack AI Developers" },
    { number: "100%", label: "Go Live Rate" },
    { number: "24/7", label: "Global Delivery" },
    { number: "40-50%", label: "Cost Savings vs. US/EU" },
    { number: "30-40%", label: "Streamlined Delivery Excellence" }
  ]

  return (
    <section className="stats">
      <div className="container">
        <h2>Powering What's Next with AI</h2>
        <p className="stats-description">
          ARYtech builds emerging digital platforms across AI, OTT, Enterprise Automation, and Cloud Innovation. 
          We specialise in full-stack development and cloud-native engineering to deliver high-performance, scalable systems.
        </p>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats