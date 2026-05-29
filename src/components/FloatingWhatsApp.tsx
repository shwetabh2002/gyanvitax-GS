import { SITE } from '../data/content'
import './FloatingWhatsApp.css'

export function FloatingWhatsApp() {
  const url = `https://wa.me/${SITE.whatsapp}?text=Hi%20Gyanvi%20Tax%2C%20I%20need%20help`

  return (
    <a
      href={url}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="floating-whatsapp__icon">💬</span>
      <span className="floating-whatsapp__text">Chat Now</span>
    </a>
  )
}
