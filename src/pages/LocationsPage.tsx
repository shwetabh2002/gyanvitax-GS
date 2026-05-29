import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { LOCATION_PAGES, ROUTES, SITE } from '../data/content'
import './LocationsPage.css'

export function LocationsPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20need%20consultation`

  return (
    <>
      <PageHero
        title="Service Locations"
        subtitle="We serve Delhi NCR and beyond — expert tax & compliance support in your city."
        breadcrumb="Locations"
      />
      <section className="section">
        <div className="container locations__grid">
          {LOCATION_PAGES.map((loc) => (
            <article key={loc.id} id={loc.id} className="location-card">
              <h2>{loc.name}</h2>
              <h3>{loc.headline}</h3>
              <p>{loc.description}</p>
              <ul>
                {loc.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="location-card__actions">
                <Link to={ROUTES.contact} className="btn btn--primary btn--sm">
                  Get Started
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--whatsapp btn--sm">
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
