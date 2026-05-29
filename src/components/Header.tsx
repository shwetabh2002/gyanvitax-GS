import './Header.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="header">
      <a href="/" className="header__brand">
        <span className="header__logo">GV</span>
        <span className="header__name">GyanVitax</span>
      </a>
      <nav className="header__nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="header__link">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header__actions">
        <button type="button" className="btn btn--ghost">
          Sign in
        </button>
        <button type="button" className="btn btn--primary">
          Get started
        </button>
      </div>
    </header>
  )
}
