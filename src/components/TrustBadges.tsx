import { TRUST_BADGES } from '../data/content'
import './TrustBadges.css'

export function TrustBadges() {
  return (
    <section className="section section--alt trust">
      <div className="container">
        <span className="section-label">Recognized &amp; Trusted Authority</span>
        <h2 className="section-title">Certified professionals delivering guaranteed compliance.</h2>

        <div className="trust__grid">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.title} className="trust__badge">
              <img
                className="trust__logo"
                src={badge.image}
                alt={badge.title}
                loading="lazy"
              />
              <h3>{badge.title}</h3>
              <p>{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
