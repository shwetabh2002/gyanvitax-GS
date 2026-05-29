import { TEAM } from '../data/content'
import './Team.css'

export function Team() {
  return (
    <section className="section team">
      <div className="container">
        <h2 className="section-title">Our Expert Specialists</h2>
        <p className="section-subtitle">
          At GyanviTax, we believe great financial outcomes are built by people—not just
          policies. Our expert team of tax consultants, accountants, and compliance
          professionals brings together decades of experience, deep technical expertise,
          and an unwavering focus on results.
        </p>

        <blockquote className="team__quote">
          <p>We don&apos;t just solve problems—we build confidence.</p>
        </blockquote>

        <div className="team__grid">
          {TEAM.map((member) => (
            <article key={member.name} className="team-card">
              <img
                className="team-card__photo"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
