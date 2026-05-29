import { HERO_STATS } from '../data/content'
import './StatsBar.css'

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Company statistics">
      <div className="container stats-bar__grid">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            {stat.sub && <span className="stats-bar__sub">{stat.sub}</span>}
            <strong className="stats-bar__value">{stat.value}</strong>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
