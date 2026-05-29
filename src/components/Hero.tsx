import { Link } from 'react-router-dom'
import { CallbackForm } from './CallbackForm'
import { ROUTES, SITE } from '../data/content'
import './Hero.css'

export function Hero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=Hi%20Gyanvi%20Tax%2C%20I%20need%20consultation`

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__badge">Premium Legal &amp; Compliance Hub</p>
          <h1 className="hero__title">Start Your Business Legally in 3 Days.</h1>
          <h2 className="hero__subtitle">
            100% Online Process. Expert CA, CS, CMA Support.
          </h2>

          <p className="hero__desc">
            We handle GST Registration, Company Formation, Tax Returns &amp;
            Part-Time Accounting so you can focus on growing your business.
            Trusted by startups &amp; traders in Delhi NCR.
          </p>

          <div className="hero__actions">
            <Link to={ROUTES.contact} className="btn btn--primary">
              Get Free Consultation
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--whatsapp"
            >
              Chat With Expert
            </a>
          </div>

          <div className="hero__rating">
            <span className="hero__stars">★★★★★</span>
            <span>{SITE.rating} Rating</span>
          </div>
        </div>

        <div className="hero__form-wrap">
          <CallbackForm id="hero-callback" compact />
        </div>
      </div>
    </section>
  )
}
