import React from 'react'
import { s } from '../data/styles.js'
import { STATS, PAYMENT_LINK } from '../data/constants.js'

export default function Hero() {
  return React.createElement('section', { style: s.hero },
    React.createElement('div', { style: s.heroEyebrow }, 'FAMILY COURT SUPPORT PLATFORM'),
    React.createElement('h1', { className: 'hero-title', style: s.heroTitle }, 'YOUR CHILDREN DESERVE YOUR BEST'),
    React.createElement('p', { style: s.heroSub }, 'Professional AI-powered tools to help you navigate family court with confidence. Build stronger cases, create professional documents, and fight for your children.'),
    React.createElement('div', { className: 'hero-btns', style: s.heroBtns },
      React.createElement('button', { style: s.btnPrimary, onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial - From 20 per month'),
      React.createElement('button', { style: s.btnSecondary, onClick: function() { document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) } }, 'Explore Features')
    ),
    React.createElement('div', { className: 'stats-grid', style: s.statsGrid },
      STATS.map(function(st) {
        return React.createElement('div', { key: st.label, style: s.statCard },
          React.createElement('div', { style: s.statNum }, st.num),
          React.createElement('div', { style: s.statLabel }, st.label)
        )
      })
    )
  )
}
