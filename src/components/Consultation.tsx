import { CallbackForm } from './CallbackForm'
import { SITE } from '../data/content'
import './Consultation.css'

export function Consultation() {
  return (
    <section className="section section--alt consultation" id="consultation">
      <div className="container">
        <span className="section-label">FREE CONSULTATION / मुफ्त परामर्श</span>
        <h2 className="section-title">Ready to Start Your Business Journey?</h2>
        <p className="section-subtitle">
          Fill the form below or call us directly. Our CA will contact you within 2 hours.
        </p>

        <div className="consultation__grid">
          <div className="consultation__info">
            <h3>Contact Information</h3>

            <div className="consultation__item">
              <strong>Call Us (24/7 Support)</strong>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`}>{SITE.phone}</a>
              <a href={`tel:${SITE.phoneAlt.replace(/\s/g, '')}`}>{SITE.phoneAlt}</a>
            </div>

            <div className="consultation__item">
              <strong>Email Address</strong>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>

            <div className="consultation__item">
              <strong>Main Office (Sahibabad)</strong>
              <p>{SITE.address}</p>
            </div>
          </div>

          <CallbackForm id="consultation-callback" />
        </div>
      </div>
    </section>
  )
}
