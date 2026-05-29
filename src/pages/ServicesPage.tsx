import { PageHero } from '../components/PageHero'
import { Services } from '../components/Services'
import { ProfessionalServices } from '../components/ProfessionalServices'
import { TrustBadges } from '../components/TrustBadges'

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="GST, company registration, income tax, MSME, accounting & more — transparent pricing across Delhi NCR."
        breadcrumb="Services"
      />
      <Services />
      <ProfessionalServices />
      <TrustBadges />
    </>
  )
}
