import { TESTIMONIALS } from '../data/content'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <span className="section-label">CLIENT SUCCESS STORIES</span>
        <h2 className="section-title">Don&apos;t Just Take Our Word For It.</h2>
        <p className="section-subtitle">
          See what business owners in Ghaziabad and Delhi NCR have to say about our services.
        </p>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">{t.initial}</span>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                  <span>{t.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
