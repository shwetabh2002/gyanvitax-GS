import { Link } from 'react-router-dom'
import { MAIN_SERVICES, ROUTES, SITE } from '../data/content'
import './Services.css'

export function Services() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20need%20urgent%20consultation`

  return (
    <section className="section" id="services">
      <div className="container">
        <span className="section-label">OUR SERVICES / हमारी सेवाएं</span>
        <h2 className="section-title">Professional Legal &amp; Compliance Solutions</h2>
        <p className="section-subtitle">
          Trusted by 500+ businesses across Ghaziabad &amp; Delhi NCR. Transparent
          pricing, no hidden fees.
        </p>

        <div className="services__grid">
          {MAIN_SERVICES.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__header">
                <div>
                  <h3>{service.title}</h3>
                  <p className="service-card__hi">{service.titleHi}</p>
                </div>
                <div className="service-card__price">
                  <span>STARTING FROM</span>
                  <strong>{service.price}/only</strong>
                </div>
              </div>

              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="service-card__bonus">{service.bonus}</p>

              <Link to={ROUTES.contact} className="btn btn--primary btn--block">
                Get Started Now
              </Link>

              <div className="service-card__side">
                {service.sideCards.map((card) => (
                  <div key={card.title} className="service-card__side-item">
                    <strong>{card.title}</strong>
                    <span>{card.desc}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="services__urgent">
          <div>
            <h3>Need Urgent Consultation?</h3>
            <p>Talk to our experts in Ghaziabad immediately.</p>
          </div>
          <div className="services__urgent-actions">
            <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="btn btn--outline">
              {SITE.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
              Chat on Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
