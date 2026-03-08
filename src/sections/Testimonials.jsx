import React from 'react'
import { s } from '../data/styles.js'
import { TESTIMONIALS } from '../data/constants.js'

export default function Testimonials() {
  return React.createElement('div', { style: { background: '#060f1e', padding: '80px 0' } },
    React.createElement('div', { style: s.sectionWrap },
      React.createElement('div', { style: s.sectionEyebrow }, 'TESTIMONIALS'),
      React.createElement('h2', { className: 'section-title', style: s.sectionTitle }, 'Parents Who Found Their Voice'),
      React.createElement('div', { className: 'testimonials-grid', style: s.testimonialsGrid },
        TESTIMONIALS.map(function(t) {
          return React.createElement('div', { key: t.name, style: s.testimonialCard },
            React.createElement('div', { style: s.stars }, '*****'),
            React.createElement('p', { style: s.testimonialText }, t.text),
            React.createElement('div', { style: s.testimonialName }, t.name),
            React.createElement('div', { style: s.testimonialLoc }, t.location)
          )
        })
      )
    )
  )
}
