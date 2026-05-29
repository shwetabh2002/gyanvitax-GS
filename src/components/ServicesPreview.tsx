import { Link } from 'react-router-dom'
import { MAIN_SERVICES, ROUTES } from '../data/content'
import './ServicesPreview.css'

export function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">
        <span className="section-label">OUR SERVICES / हमारी सेवाएं</span>
        <h2 className="section-title">Professional Legal &amp; Compliance Solutions</h2>
        <p className="section-subtitle">
          Trusted by 500+ businesses across Ghaziabad &amp; Delhi NCR. Transparent
          pricing, no hidden fees.
        </p>

        <div className="services-preview__grid">
          {MAIN_SERVICES.map((service) => (
            <article key={service.id} className="services-preview__card">
              <h3>{service.title}</h3>
              <p className="services-preview__hi">{service.titleHi}</p>
              <p className="services-preview__price">
                From <strong>{service.price}</strong>/only
              </p>
              <ul>
                {service.items.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services-preview__cta">
          <Link to={ROUTES.services} className="btn btn--primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
