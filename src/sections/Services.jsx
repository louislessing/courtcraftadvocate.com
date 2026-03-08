import React from 'react'
import { s } from '../data/styles.js'
import { SERVICES, BADGE_COLORS } from '../data/constants.js'

export default function Services() {
  return React.createElement('div', { id: 'services', style: { background: '#060f1e', padding: '80px 0' } },
    React.createElement('div', { style: s.sectionWrap },
      React.createElement('div', { style: s.sectionEyebrow }, 'PLATFORM FEATURES'),
      React.createElement('h2', { className: 'section-title', style: s.sectionTitle }, 'Everything You Need to Fight for Your Children'),
      React.createElement('div', { className: 'services-grid', style: s.servicesGrid },
        SERVICES.map(function(sv) {
          var bc = BADGE_COLORS[sv.badge] || { bg: '#1a3a5c', color: '#c9a84c' }
          return React.createElement('div', { key: sv.title, style: s.serviceCard },
            React.createElement('div', { style: s.serviceIcon }, sv.icon),
            React.createElement('div', { style: s.serviceTitle }, sv.title),
            React.createElement('div', { style: s.serviceDesc }, sv.desc),
            React.createElement('span', { style: Object.assign({}, s.badge, { background: bc.bg, color: bc.color }) }, sv.badge)
          )
        })
      )
    )
  )
}
