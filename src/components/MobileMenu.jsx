import React from 'react'
import { s } from '../data/styles.js'
import { NAV_LINKS, PAYMENT_LINK } from '../data/constants.js'

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null
  return React.createElement('div', { style: s.mobileMenuWrap },
    NAV_LINKS.map(function(l) {
      return React.createElement('a', {
        key: l.label,
        href: l.href,
        style: s.mobileLink,
        onClick: function() { setMenuOpen(false) },
      }, l.label)
    }),
    React.createElement('div', { style: s.mobileBtns },
      React.createElement('button', { style: s.btnOutline }, 'Sign In'),
      React.createElement('button', { style: s.btnGold, onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial')
    )
  )
}
