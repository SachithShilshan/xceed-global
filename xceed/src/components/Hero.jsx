import React from 'react'

export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <h1>Xceed — Apply Technology to Business</h1>
        <p className="lead">AI, Data, BI, Automation, Research & Project delivery — solutions for organizations of any size.</p>
        <p className="cta-row">
          <a className="btn primary" href="#sections">Explore solutions</a>
          <a className="btn outline" href="https://sachithshilshan.github.io/xceed/#/" target="_blank" rel="noopener noreferrer">View BI demo</a>
        </p>
      </div>
      <img src="/src/assets/hero-illustration.svg" alt="Illustration" className="hero-img" />
    </section>
  )
}
