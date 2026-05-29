import { Link } from 'react-router-dom'
import { ROUTES } from '../data/content'

export function NotFoundPage() {
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <div className="container">
        <h1>404 — Page Not Found</h1>
        <p style={{ marginBottom: '1.5rem' }}>The page you are looking for does not exist.</p>
        <Link to={ROUTES.home} className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
