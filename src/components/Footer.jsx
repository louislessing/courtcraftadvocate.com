import React from 'react'
import { s } from '../data/styles.js'

export default function Footer() {
  return React.createElement('footer', { style: s.footer },
    React.createElement('div', { className: 'footer-grid', style: s.footerGrid },
      React.createElement('div', null,
        React.createElement('div', { style: s.footerLogo }, 'CourtCraft Advocate'),
        React.createElement('p', { style: s.footerDesc }, 'Professional AI-powered tools for parents navigating family court. Fight for your children with confidence.')
      ),
      React.createElement('div', null,
        React.createElement('div', { style: s.footerHeading }, 'Quick Links'),
        React.createElement('a', { href: '#services', style: s.footerLink }, 'Services'),
        React.createElement('a', { href: '#how-it-works', style: s.footerLink }, 'How It Works'),
        React.createElement('a', { href: '#pricing', style: s.footerLink }, 'Pricing'),
        React.createElement('a', { href: '#about', style: s.footerLink }, 'About')
      ),
      React.createElement('div', null,
        React.createElement('div', { style: s.footerHeading }, 'Legal'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Privacy Policy'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Terms of Service'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Cookie Policy'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Disclaimer')
      ),
      React.createElement('div', null,
        React.createElement('div', { style: s.footerHeading }, 'Subscriber Tools'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Dashboard'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Document Builder'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Case Timeline'),
        React.createElement('a', { href: '#', style: s.footerLink }, 'Support')
      )
    ),
    React.createElement('div', { style: s.footerBottom },
      '2025 CourtCraft Advocate. All rights reserved. | support@courtcraftadvocate.com'
    )
  )
}
