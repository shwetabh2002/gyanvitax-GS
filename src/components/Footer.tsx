import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">GV</span>
          <p>GyanVitax — education &amp; tax, simplified.</p>
        </div>
        <div className="footer__links">
          <a href="mailto:hello@gyanvitax.com">hello@gyanvitax.com</a>
          <a href="https://github.com/shwetabh2002/gyanvitax-GS" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <p className="footer__copy">&copy; {year} GyanVitax. All rights reserved.</p>
    </footer>
  )
}
