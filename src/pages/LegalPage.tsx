import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { LEGAL_PAGES, ROUTES } from '../data/content'
import './LegalPage.css'

type LegalKey = keyof typeof LEGAL_PAGES

interface LegalPageProps {
  type: LegalKey
}

export function LegalPage({ type }: LegalPageProps) {
  const page = LEGAL_PAGES[type]
  const breadcrumb =
    type === 'privacy' ? 'Privacy Policy' : type === 'terms' ? 'Terms of Service' : 'Refund Policy'

  return (
    <>
      <PageHero title={page.title} breadcrumb={breadcrumb} />
      <section className="section legal-page">
        <div className="container legal-page__content">
          {page.sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
          <p className="legal-page__back">
            <Link to={ROUTES.contact}>Contact us</Link> if you have questions about this policy.
          </p>
        </div>
      </section>
    </>
  )
}
