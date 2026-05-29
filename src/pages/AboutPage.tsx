import { PageHero } from '../components/PageHero'
import { Commitment } from '../components/Commitment'
import { Team } from '../components/Team'
import { TrustBadges } from '../components/TrustBadges'
import { Testimonials } from '../components/Testimonials'

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Gyanvi Accounting & Tax Consultant"
        subtitle="10+ years of tax advisory, compliance, and consulting — trusted by 500+ businesses across India."
        breadcrumb="About Us"
      />
      <Commitment />
      <TrustBadges />
      <Team />
      <Testimonials />
    </>
  )
}
