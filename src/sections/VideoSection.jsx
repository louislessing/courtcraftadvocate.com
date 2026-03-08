import React from 'react'
import { s } from '../data/styles.js'

export default function VideoSection() {
  return React.createElement('div', { style: s.videoSection },
    React.createElement('div', { style: s.sectionEyebrow }, 'SEE IT IN ACTION'),
    React.createElement('h2', { className: 'section-title', style: Object.assign({}, s.sectionTitle, { marginBottom: '32px' }) }, 'Watch How CourtCraft Advocate Works'),
    React.createElement('div', { style: s.videoWrap },
      React.createElement('video', { style: s.video, controls: true, poster: '/assets/endcard.jpeg' },
        React.createElement('source', { src: '/assets/CourtCraft_Advocate_FINAL.mp4', type: 'video/mp4' }),
        'Your browser does not support the video tag.'
      )
    )
  )
}
