import React from 'react'
import { s } from '../data/styles.js'
import { FREE_FEATURES, PRO_FEATURES, PAYMENT_LINK } from '../data/constants.js'

export default function Pricing() {
  return React.createElement('div', { id: 'pricing', style: { background: '#0a1628', padding: '80px 0' } },
    React.createElement('div', { style: s.sectionWrap },
      React.createElement('div', { style: s.sectionEyebrow }, 'SIMPLE PRICING'),
      React.createElement('h2', { className: 'section-title', style: s.sectionTitle }, "Invest in Your Children's Future"),
      React.createElement('p', { style: s.sectionSub }, 'One simple plan with everything you need to build a stronger case.'),
      React.createElement('div', { className: 'pricing-grid', style: s.pricingGrid },
        React.createElement('div', { style: s.pricingCard },
          React.createElement('div', { style: s.pricingName }, 'Free'),
          React.createElement('div', { style: s.pricingPrice }, '0'),
          React.createElement('div', { style: s.pricingPer }, 'forever'),
          React.createElement('div', { style: { margin: '24px 0' } },
            FREE_FEATURES.map(function(f) {
              return React.createElement('div', { key: f, style: s.pricingFeature },
                React.createElement('span', { style: s.featureCheck }, 'v'),
                f
              )
            })
          ),
          React.createElement('button', { style: Object.assign({}, s.btnOutline, { width: '100%', padding: '12px' }) }, 'Get Started Free')
        ),
        React.createElement('div', { style: s.pricingCardPro },
          React.createElement('div', { style: s.pricingBadge }, 'MOST POPULAR'),
          React.createElement('div', { style: s.pricingName }, 'Professional'),
          React.createElement('div', { style: s.pricingPrice }, '20'),
          React.createElement('div', { style: s.pricingPer }, 'per month'),
          React.createElement('div', { style: { margin: '24px 0' } },
            PRO_FEATURES.map(function(f) {
              return React.createElement('div', { key: f, style: s.pricingFeature },
                React.createElement('span', { style: s.featureCheck }, 'v'),
                f
              )
            })
          ),
          React.createElement('button', {
            style: Object.assign({}, s.btnGold, { width: '100%', padding: '12px', fontSize: '15px' }),
            onClick: function() { window.location.href = PAYMENT_LINK },
          }, 'Start Free Trial')
        )
      )
    )
  )
}
