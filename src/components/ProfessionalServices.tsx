import { Link } from 'react-router-dom'
import { PROFESSIONAL_SERVICES, ROUTES } from '../data/content'
import './ProfessionalServices.css'

export function ProfessionalServices() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Our Professional Services</h2>
        <p className="section-subtitle">
          From registrations to returns, we simplify your compliance needs with fast,
          reliable, and affordable services — trusted by 1000+ clients across India.
        </p>

        <div className="pro-services__grid">
          {PROFESSIONAL_SERVICES.map((service) => (
            <article key={service.title} className="pro-service-card">
              <div className="pro-service-card__icon" aria-hidden="true">📄</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={ROUTES.contact} className="pro-service-card__link">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
