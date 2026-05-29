import { Hero } from '../components/Hero'
import { StatsBar } from '../components/StatsBar'
import { Services } from '../components/Services'
import { TrustBadges } from '../components/TrustBadges'
import { Testimonials } from '../components/Testimonials'
import { Consultation } from '../components/Consultation'
import { Commitment } from '../components/Commitment'
import { ProfessionalServices } from '../components/ProfessionalServices'
import { Team } from '../components/Team'

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <TrustBadges />
      <Testimonials />
      <Consultation />
      <Commitment />
      <ProfessionalServices />
      <Team />
    </>
  )
}
