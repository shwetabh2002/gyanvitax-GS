import { Link } from 'react-router-dom'
import { FOOTER_AREAS, FOOTER_SERVICES, ROUTES, SITE } from '../data/content'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}`

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3>{SITE.name}</h3>
          <p className="footer__tagline">{SITE.tagline}</p>
          <p className="footer__desc">
            Your trusted CA, CS, CMA team for comprehensive legal, tax, accounting &amp;
            compliance services in India. Empowering businesses to grow legally.
          </p>
          <div className="footer__social">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <Link to={ROUTES.services}>→ {s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Service Areas</h4>
          <ul>
            {FOOTER_AREAS.map((a) => (
              <li key={a}>
                <Link to={ROUTES.locations}>{a}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get In Touch</h4>
          <p>{SITE.address}</p>
          <a href={`tel:${SITE.phone.replace(/-/g, '')}`}>{SITE.phone}</a>
          <a href={`tel:${SITE.phoneAlt.replace(/\s/g, '')}`}>{SITE.phoneAlt}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} Gyanvi Accounting &amp; Tax Consultant. All Rights Reserved.</p>
          <div className="footer__legal">
            <Link to={ROUTES.privacy}>Privacy Policy</Link>
            <Link to={ROUTES.terms}>Terms of Service</Link>
            <Link to={ROUTES.refund}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
