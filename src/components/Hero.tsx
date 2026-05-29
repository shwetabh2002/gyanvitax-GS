import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero__content">
        <p className="hero__eyebrow">Education meets compliance</p>
        <h1 className="hero__title">
          Smart tax &amp; learning management for modern institutions
        </h1>
        <p className="hero__subtitle">
          GyanVitax helps schools and training centers manage academics,
          filings, and financial workflows in one secure platform.
        </p>
        <div className="hero__cta">
          <button type="button" className="btn btn--primary btn--lg">
            Start free trial
          </button>
          <button type="button" className="btn btn--outline btn--lg">
            Book a demo
          </button>
        </div>
        <ul className="hero__stats" aria-label="Platform highlights">
          <li>
            <strong>500+</strong>
            <span>Institutions</span>
          </li>
          <li>
            <strong>99.9%</strong>
            <span>Uptime</span>
          </li>
          <li>
            <strong>24/7</strong>
            <span>Support</span>
          </li>
        </ul>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__card hero__card--primary">
          <span className="hero__card-label">Tax filing</span>
          <span className="hero__card-value">On track</span>
        </div>
        <div className="hero__card hero__card--secondary">
          <span className="hero__card-label">Active learners</span>
          <span className="hero__card-value">12,480</span>
        </div>
        <div className="hero__card hero__card--accent">
          <span className="hero__card-label">Compliance score</span>
          <span className="hero__card-value">98%</span>
        </div>
      </div>
    </section>
  )
}
