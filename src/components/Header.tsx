import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOCATIONS, NAV_LINKS, ROUTES, SITE } from '../data/content'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const closeMenu = () => {
    setMenuOpen(false)
    setLocationsOpen(false)
  }

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="header__phone">
            {SITE.phone}
          </a>
          <Link to={ROUTES.contact} className="btn btn--primary btn--sm" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>

      <div className="container header__main">
        <Link to={ROUTES.home} className="header__brand" onClick={closeMenu}>
          <span className="header__brand-main">{SITE.name}</span>
          <span className="header__brand-sub">{SITE.tagline}</span>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
              onClick={closeMenu}
              end={link.to === ROUTES.home}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="header__dropdown">
            <button
              type="button"
              className="header__link header__link--dropdown"
              aria-expanded={locationsOpen}
              onClick={() => setLocationsOpen(!locationsOpen)}
            >
              LOCATIONS ▾
            </button>
            {locationsOpen && (
              <div className="header__dropdown-menu">
                <Link to={ROUTES.locations} onClick={closeMenu}>
                  All Locations
                </Link>
                {LOCATIONS.map((loc) => (
                  <Link key={loc.label} to={loc.to} onClick={closeMenu}>
                    {loc.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
