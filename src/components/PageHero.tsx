import { Link } from 'react-router-dom'
import { ROUTES } from '../data/content'
import './PageHero.css'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to={ROUTES.home}>Home</Link>
          {breadcrumb && (
            <>
              <span aria-hidden="true">/</span>
              <span>{breadcrumb}</span>
            </>
          )}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
