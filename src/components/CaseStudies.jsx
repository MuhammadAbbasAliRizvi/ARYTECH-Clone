import React from 'react'

const CaseStudies = () => {
  const caseStudies = [
    {
      category: "OTT",
      industry: "EnterTech",
      title: "The OTT revolution is reshaping entertainment",
      description: "ARY ZAP leads Pakistan's market with unmatched dramas, live sports, and AI-powered streaming.",
      logo: "ARY ZAP Logo"
    },
    {
      category: "EdTech",
      industry: "App",
      title: "QTV Tutor combines traditional Islamic learning with modern AI",
      description: "Offering personalized, accessible, and engaging learning experiences for every student.",
      logo: "QTV Tutor Logo"
    }
  ]

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <p className="section-subtitle">Success Stories</p>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-header">
                <span className="category">{study.category}</span>
                <span className="industry">{study.industry}</span>
              </div>
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="case-study-footer">
                  <div className="logo">{study.logo}</div>
                  <button className="view-button">View →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies