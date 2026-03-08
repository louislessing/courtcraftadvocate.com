import React from 'react'
import { s } from '../data/styles.js'

export default function Disclaimer() {
  return React.createElement('div', { style: s.disclaimerWrap },
    React.createElement('div', { style: s.disclaimerInner },
      React.createElement('div', { style: s.disclaimerTitle }, 'LEGAL DISCLAIMER'),
      React.createElement('p', { style: s.disclaimerText }, 'CourtCraft Advocate is a document assistance platform and does not provide legal advice. Our tools are designed to help litigants in person organise their case materials and prepare documents. We are not a law firm and our services do not constitute legal advice. For legal advice, please consult a qualified solicitor. McKenzie Friend services are provided in accordance with Practice Guidance issued by the Lord Chief Justice. All data is processed in accordance with GDPR and UK Data Protection Act 2018.')
    )
  )
}
