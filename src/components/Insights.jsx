import React from 'react'

const Insights = () => {
  const insights = [
    {
      type: "Events",
      title: "Gitex Global",
      date: "13-17 Oct '25",
      location: "Dubai World Trade Centre",
      action: "Explore"
    },
    {
      type: "Product",
      title: "Zap 2.0 Launch",
      date: "Zap 2.0 Launch",
      notice: "Key Features Update",
      action: "Download Now"
    },
    {
      type: "Culture",
      title: "Independence Day",
      date: "14 Aug '25",
      notice: "Independence Day Celebrations",
      action: "Learn More"
    }
  ]

  const resources = [
    {
      title: "Web App vs Mobile App: Choice for Startups, Mid-Size & Enterprises",
      category: "Web App vs Mobile App",
      date: "20-Nov-2025"
    },
    {
      title: "What Is Custom Software Development and Why Your Business Needs It",
      category: "custom software development",
      date: "07-Nov-2025"
    },
    {
      title: "DevOps vs DataOps: Which Is Right for Your Organization?",
      category: "DevOps vs DataOps",
      date: "27-Oct-2025"
    }
  ]

  return (
    <section id="insights" className="insights">
      <div className="container">
        <h2>Insights</h2>
        <p className="section-subtitle">What's New</p>
        
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-type">{insight.type}</div>
              <h3>{insight.title}</h3>
              <div className="insight-date">{insight.date}</div>
              {insight.location && <div className="insight-location">{insight.location}</div>}
              {insight.notice && <div className="insight-notice">{insight.notice}</div>}
              <button className="insight-action">{insight.action}</button>
            </div>
          ))}
        </div>

        <div className="resources-section">
          <h3>Helpful resources</h3>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <h4>{resource.title}</h4>
                <div className="resource-meta">
                  <span className="resource-category">{resource.category}</span>
                  <span className="resource-date">{resource.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights