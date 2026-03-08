import React from 'react'
import { s } from '../data/styles.js'
import { NAV_LINKS, PAYMENT_LINK } from '../data/constants.js'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return React.createElement('nav', { style: s.nav },
    React.createElement('a', { href: '/', style: s.logo }, 'CourtCraft Advocate'),
    React.createElement('ul', { className: 'nav-links', style: s.navLinks },
      NAV_LINKS.map(function(l) {
        return React.createElement('li', { key: l.label },
          React.createElement('a', { href: l.href, style: s.navLink }, l.label)
        )
      })
    ),
    React.createElement('div', { className: 'nav-btns-wrap', style: s.navBtns },
      React.createElement('button', { style: s.btnOutline }, 'Sign In'),
      React.createElement('button', { style: s.btnGold, onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial')
    ),
    React.createElement('button', {
      className: 'hamburger',
      style: s.hamburger,
      onClick: function() { setMenuOpen(!menuOpen) },
    }, menuOpen ? 'X' : '=')
  )
}
