import React from 'react'
import { s } from '../data/styles.js'
import { STEPS } from '../data/constants.js'

export default function HowItWorks() {
  return React.createElement('div', { id: 'how-it-works', style: { background: '#0a1628', padding: '80px 0' } },
    React.createElement('div', { style: s.sectionWrap },
      React.createElement('div', { style: s.sectionEyebrow }, 'GETTING STARTED'),
      React.createElement('h2', { className: 'section-title', style: s.sectionTitle }, 'How It Works'),
      React.createElement('div', { className: 'steps-grid', style: s.stepsGrid },
        STEPS.map(function(st) {
          return React.createElement('div', { key: st.num, style: s.stepCard },
            React.createElement('div', { style: s.stepNum }, st.num),
            React.createElement('div', { style: s.stepTitle }, st.title),
            React.createElement('div', { style: s.stepDesc }, st.desc)
          )
        })
      )
    )
  )
}
