import { Link } from 'react-router-dom'
import { COMMITMENT, ROUTES } from '../data/content'
import './Commitment.css'

export function Commitment() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">Our Unwavering Commitment to Your Success</h2>
        <p className="section-subtitle">
          At GYANVI, we believe in building long-term partnerships. These core strengths
          underscore our dedication to providing you with unparalleled service and peace of mind.
        </p>

        <div className="commitment__grid">
          {COMMITMENT.map((item) => (
            <article key={item.title} className="commitment__card">
              <div className="commitment__icon" aria-hidden="true">★</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="commitment__cta">
          <div className="commitment__text">
            <h3>Maximizing Efficiency, Minimizing Liability</h3>
            <p>
              Achieving compliance is just the start. Our Chartered Accountants go beyond
              basic requirements, leveraging deep knowledge of Indian tax laws to strategically
              optimize your financial position. We meticulously manage every detail—from complex
              ITR filings and GST computations to maintaining perfect bookkeeping records—to
              reduce your liability and maximize financial efficiency. Partner with GYANVI to
              ensure every transaction contributes to your long-term fiscal success, freeing you
              up to focus purely on business growth.
            </p>
            <Link to={ROUTES.contact} className="btn btn--primary">
              Book Your Initial Call
            </Link>
          </div>
          <div className="commitment__visual" aria-hidden="true">
            <div className="commitment__visual-box">
              <span>CA</span>
              <span>CS</span>
              <span>CMA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
