import React from 'react'
import { s } from '../data/styles.js'
import { PAYMENT_LINK } from '../data/constants.js'

export default function Banner({ visible, onClose }) {
  if (!visible) return null
  return React.createElement('div', { style: s.banner },
    React.createElement('span', null, 'Start your free trial today - Professional Plan from only 20 per month'),
    React.createElement('a', { href: PAYMENT_LINK, style: { color: '#0a1628', fontWeight: 700 } }, 'Get Started'),
    React.createElement('button', {
      style: { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 900, fontSize: '18px', color: '#0a1628', marginLeft: '8px' },
      onClick: onClose,
    }, 'x')
  )
}
