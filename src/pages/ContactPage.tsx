import { PageHero } from '../components/PageHero'
import { Consultation } from '../components/Consultation'

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Call, WhatsApp, or submit the form — our CA team responds within 2 hours."
        breadcrumb="Contact"
      />
      <Consultation />
    </>
  )
}
