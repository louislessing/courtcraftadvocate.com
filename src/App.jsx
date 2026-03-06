import React, { useState } from 'react'
    
    const GOLD = '#B8960C'
    const NAVY = '#0a1628'
    const NAVY2 = '#0d1f3c'
    const NAVY3 = '#1a2f4e'
    const WHITE = '#ffffff'
    const GRAY = '#94a3b8'
    const LIGHT = '#e2e8f0'
    
    const styles = {
      root: { fontFamily: "'Segoe UI', Arial, sans-serif", background: NAVY, color: WHITE, margin: 0, padding: 0 },
      // NAV
      nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(10,22,40,0.97)', borderBottom: '1px solid #1e3a5c', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 },
      navLogo: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
      navLogoText: { color: GOLD, fontWeight: 700, fontSize: 20, letterSpacing: 1 },
      navLinks: { display: 'flex', alignItems: 'center', gap: 30 },
      navLink: { color: LIGHT, textDecoration: 'none', fontSize: 14, fontWeight: 500 },
      navBtn: { background: GOLD, color: NAVY, border: 'none', borderRadius: 6, padding: '9px 20px', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
      navBtnOutline: { background: 'transparent', color: GOLD, border: '1px solid ' + GOLD, borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginRight: 10 },
      hamburger: { display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', background: 'none', border: 'none', padding: 5 },
      hamburgerLine: { width: 25, height: 2, background: WHITE, borderRadius: 2 },
      mobileMenu: { position: 'fixed', top: 70, left: 0, right: 0, background: NAVY2, zIndex: 999, padding: '20px 30px', display: 'flex', flexDirection: 'column', gap: 15, borderBottom: '1px solid #1e3a5c' },
      mobileLink: { color: LIGHT, textDecoration: 'none', fontSize: 16, padding: '8px 0', borderBottom: '1px solid #1e3a5c' },
      // BANNER
      banner: { background: GOLD, color: NAVY, textAlign: 'center', padding: '10px 20px', fontSize: 14, fontWeight: 700, marginTop: 70 },
      // HERO
      hero: { background: 'linear-gradient(135deg, ' + NAVY + ' 0%, ' + NAVY2 + ' 50%, #0f2744 100%)', padding: '80px 40px 60px', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
      heroEyebrow: { color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 },
      heroTitle: { fontSize: 54, fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: WHITE, textTransform: 'uppercase', maxWidth: 900 },
      heroTitle2: { color: GOLD },
      heroSub: { fontSize: 18, color: GRAY, maxWidth: 600, marginBottom: 32, lineHeight: 1.7 },
      heroBadge: { background: 'rgba(184,150,12,0.15)', border: '1px solid ' + GOLD, color: GOLD, borderRadius: 20, padding: '6px 18px', fontSize: 13, fontWeight: 700, marginBottom: 32, display: 'inline-block' },
      heroBtns: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 },
      btnPrimary: { background: GOLD, color: NAVY, border: 'none', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' },
      btnSecondary: { background: 'transparent', color: WHITE, border: '2px solid #334155', borderRadius: 8, padding: '14px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' },
      heroNote: { color: GRAY, fontSize: 13 },
      // STATS
      stats: { background: NAVY2, padding: '50px 40px', display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap', borderTop: '1px solid #1e3a5c', borderBottom: '1px solid #1e3a5c' },
      statItem: { textAlign: 'center' },
      statNum: { fontSize: 42, fontWeight: 900, color: GOLD },
      statLabel: { fontSize: 14, color: GRAY, marginTop: 4 },
      // VIDEO
      videoSection: { background: NAVY, padding: '70px 40px', textAlign: 'center' },
      videoLabel: { color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 16 },
      videoBox: { maxWidth: 800, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '2px solid #1e3a5c', position: 'relative', background: '#000' },
      video: { width: '100%', display: 'block' },
      // TRUST
      trust: { background: NAVY2, padding: '30px 40px', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', borderTop: '1px solid #1e3a5c' },
      trustItem: { color: GRAY, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 },
      trustDot: { width: 8, height: 8, borderRadius: '50%', background: GOLD, display: 'inline-block' },
      // SERVICES
      services: { background: NAVY, padding: '80px 40px' },
      sectionEyebrow: { color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 3, textAlign: 'center', marginBottom: 16 },
      sectionTitle: { fontSize: 38, fontWeight: 800, textAlign: 'center', marginBottom: 16, color: WHITE },
      sectionSub: { color: GRAY, textAlign: 'center', maxWidth: 600, margin: '0 auto 50px', fontSize: 16, lineHeight: 1.7 },
      grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1100, margin: '0 auto' },
      card: { background: NAVY2, border: '1px solid #1e3a5c', borderRadius: 12, padding: 28 },
      cardTitle: { fontSize: 18, fontWeight: 700, color: WHITE, marginBottom: 10 },
      cardDesc: { fontSize: 14, color: GRAY, lineHeight: 1.6, marginBottom: 16 },
      badge: { fontSize: 11, fontWeight: 700, borderRadius: 4, padding: '3px 10px', display: 'inline-block' },
      badgeSub: { background: 'rgba(184,150,12,0.15)', color: GOLD, border: '1px solid rgba(184,150,12,0.3)' },
      badgeFree: { background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' },
      badgeAll: { background: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' },
      cardLink: { color: GOLD, fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: 8 },
      // HOW IT WORKS
      how: { background: NAVY2, padding: '80px 40px' },
      grid2: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30, maxWidth: 900, margin: '0 auto' },
      stepCard: { background: NAVY3, border: '1px solid #1e3a5c', borderRadius: 12, padding: 28 },
      stepNum: { fontSize: 48, fontWeight: 900, color: 'rgba(184,150,12,0.2)', lineHeight: 1, marginBottom: 12 },
      stepTitle: { fontSize: 18, fontWeight: 700, color: WHITE, marginBottom: 10 },
      stepDesc: { fontSize: 14, color: GRAY, lineHeight: 1.6 },
      centerBtn: { textAlign: 'center', marginTop: 40 },
      // CTA BAND
      ctaBand: { background: 'linear-gradient(135deg, #0f2744 0%, #1a3a5c 100%)', padding: '70px 40px', textAlign: 'center', borderTop: '1px solid #1e3a5c', borderBottom: '1px solid #1e3a5c' },
      ctaTitle: { fontSize: 36, fontWeight: 800, color: WHITE, marginBottom: 16 },
      ctaSub: { color: GRAY, fontSize: 16, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
      ctaBtns: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' },
      // TESTIMONIAL
      testimonial: { background: NAVY, padding: '80px 40px', textAlign: 'center' },
      testimonialBox: { background: NAVY2, border: '1px solid #1e3a5c', borderRadius: 16, padding: '40px', maxWidth: 700, margin: '0 auto' },
      stars: { color: GOLD, fontSize: 22, marginBottom: 20 },
      quote: { fontSize: 18, color: LIGHT, fontStyle: 'italic', lineHeight: 1.8, marginBottom: 24 },
      author: { color: GOLD, fontWeight: 700, fontSize: 15 },
      authorSub: { color: GRAY, fontSize: 13, marginTop: 4 },
      // PRICING
      pricing: { background: NAVY2, padding: '80px 40px' },
      grid2c: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30, maxWidth: 800, margin: '0 auto' },
      priceFree: { background: NAVY3, border: '1px solid #1e3a5c', borderRadius: 16, padding: 36 },
      pricePro: { background: NAVY3, border: '2px solid ' + GOLD, borderRadius: 16, padding: 36, position: 'relative' },
      popularBadge: { position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: GOLD, color: NAVY, fontSize: 11, fontWeight: 800, borderRadius: 20, padding: '4px 16px', whiteSpace: 'nowrap' },
      planName: { fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 8 },
      planDesc: { fontSize: 13, color: GRAY, marginBottom: 20 },
      planPrice: { fontSize: 42, fontWeight: 900, color: WHITE, marginBottom: 4 },
      planPer: { fontSize: 14, color: GRAY, marginBottom: 24 },
      planFeatures: { listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 },
      featureOn: { fontSize: 14, color: LIGHT, display: 'flex', alignItems: 'center', gap: 10 },
      featureOff: { fontSize: 14, color: '#475569', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'line-through' },
      checkOn: { color: '#22c55e', fontWeight: 700, fontSize: 16 },
      checkOff: { color: '#475569', fontWeight: 700, fontSize: 16 },
      planNote: { color: GRAY, fontSize: 12, textAlign: 'center', marginTop: 12 },
      priceNote: { color: GRAY, fontSize: 13, textAlign: 'center', marginTop: 24 },
      // FOOTER CTA
      footerCta: { background: 'linear-gradient(135deg, ' + NAVY + ' 0%, #0f2744 100%)', padding: '70px 40px', textAlign: 'center', borderTop: '1px solid #1e3a5c' },
      footerCtaTitle: { fontSize: 34, fontWeight: 800, color: WHITE, marginBottom: 16 },
      footerCtaSub: { color: GRAY, fontSize: 15, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
      footerCtaNote: { color: GRAY, fontSize: 13, marginTop: 16 },
      // LEGAL
      legal: { background: '#060e1a', padding: '40px', borderTop: '1px solid #1e3a5c' },
      legalTitle: { color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 },
      legalText: { color: '#64748b', fontSize: 12, lineHeight: 1.8, maxWidth: 900 },
      // FOOTER
      footer: { background: '#040b16', padding: '60px 40px 30px', borderTop: '1px solid #0d1f3c' },
      footerGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, maxWidth: 1100, margin: '0 auto 40px' },
      footerBrand: { color: GOLD, fontWeight: 700, fontSize: 18, marginBottom: 12 },
      footerTagline: { color: GRAY, fontSize: 13, lineHeight: 1.7, marginBottom: 16 },
      footerEmail: { color: GOLD, fontSize: 13, textDecoration: 'none' },
      footerColTitle: { color: WHITE, fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 },
      footerLink: { color: GRAY, fontSize: 13, textDecoration: 'none', display: 'block', marginBottom: 8, lineHeight: 1.6 },
      footerBottom: { borderTop: '1px solid #0d1f3c', paddingTop: 24, textAlign: 'center', color: '#475569', fontSize: 12, maxWidth: 1100, margin: '0 auto' },
      // RESPONSIVE overrides handled via inline media approach
    }
    
    const SERVICES = [
      { title: 'AI Legal Assistant', desc: 'Get instant guidance on UK family law, court procedures, and McKenzie Friend rights from our AI-powered chatbot.', badge: 'Subscribers', type: 'sub' },
      { title: 'Court Report Generator', desc: 'Generate professional, court-ready PDF reports with timelines, evidence appendices, and statements of truth.', badge: 'Subscribers', type: 'sub' },
      { title: 'Child Contact Tracker', desc: 'Log every pickup, dropoff, and interaction. Track custody schedules and document everything for court.', badge: 'Subscribers', type: 'sub' },
      { title: 'Finance Tracker', desc: 'Track child maintenance payments, additional expenses, and upload receipts. Generate financial summaries.', badge: 'Subscribers', type: 'sub' },
      { title: 'Communication Logger', desc: 'Record all communications with your ex-partner. Tag as positive, neutral, or concerning for court evidence.', badge: 'Subscribers', type: 'sub' },
      { title: 'Custody Calendar', desc: 'Visual calendar view of custody schedules, upcoming court dates, and important deadlines.', badge: 'Subscribers', type: 'sub' },
      { title: 'Secure Document Storage', desc: 'Upload and organise court orders, correspondence, evidence, and financial documents securely.', badge: 'Subscribers', type: 'sub' },
      { title: 'McKenzie Friend Support', desc: 'Professional guidance on your rights as a litigant in person with McKenzie Friend assistance in court.', badge: 'Free', type: 'free' },
      { title: 'Legal Resources Library', desc: 'Access articles, guides, FAQs, and video tutorials on UK family law and court procedures.', badge: 'Free', type: 'free' },
      { title: 'Case Timeline Builder', desc: 'Build a chronological timeline of events for your case with evidence linking and export capabilities.', badge: 'Subscribers', type: 'sub' },
      { title: 'GDPR Compliant', desc: 'Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance.', badge: 'All Users', type: 'all' },
      { title: 'Analytics Dashboard', desc: 'Visual summaries of contact patterns, financial tracking, and communication trends for your case.', badge: 'Subscribers', type: 'sub' },
    ]
    
    const STEPS = [
      { num: '01', title: 'Sign Up & Start Trial', desc: 'Create your account and get 7 days of full access to all features. No payment required upfront.' },
      { num: '02', title: 'Set Up Your Case', desc: "Add your case details, children's information, and start logging contacts, communications, and finances." },
      { num: '03', title: 'Get AI Guidance', desc: 'Use our AI Legal Assistant for instant answers about UK family law, court procedures, and your rights.' },
      { num: '04', title: 'Generate Court Reports', desc: 'Create professional, court-ready PDF reports with timelines, evidence, and statements of truth.' },
    ]
    
    const FREE_FEATURES = [
      { label: 'Legal resources library', on: true },
      { label: 'Blog articles & guides', on: true },
      { label: 'Legal glossary access', on: true },
      { label: 'FAQ section', on: true },
      { label: 'AI Legal Assistant', on: false },
      { label: 'Court Report Generator', on: false },
      { label: 'Child Contact Tracker', on: false },
      { label: 'Finance Tracker', on: false },
      { label: 'Document Storage', on: false },
      { label: 'Communication Logger', on: false },
    ]
    
    const PRO_FEATURES = [
      { label: 'Everything in Free plan', on: true },
      { label: 'AI Legal Assistant (unlimited)', on: true },
      { label: 'Court Report Generator', on: true },
      { label: 'Child Contact Tracker', on: true },
      { label: 'Finance Tracker & Analytics', on: true },
      { label: 'Secure Document Storage', on: true },
      { label: 'Communication Logger', on: true },
      { label: 'Case Timeline Builder', on: true },
      { label: 'PDF Export for Court', on: true },
      { label: 'Priority Email Support', on: true },
    ]
    
    const PAYMENT_LINK = 'https://buy.stripe.com/test_courtcraft'
    
    export default function App() {
      const [menuOpen, setMenuOpen] = useState(false)
      const [bannerVisible, setBannerVisible] = useState(true)
    
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    
      return (
        React.createElement('div', { style: styles.root },
          React.createElement('style', null, `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background: ${NAVY}; }
            @media (max-width: 900px) {
              .grid3 { grid-template-columns: repeat(2, 1fr) !important; }
              .footerGrid { grid-template-columns: repeat(2, 1fr) !important; }
              .heroTitle { font-size: 38px !important; }
            }
            @media (max-width: 600px) {
              .grid3 { grid-template-columns: 1fr !important; }
              .grid2 { grid-template-columns: 1fr !important; }
              .grid2c { grid-template-columns: 1fr !important; }
              .footerGrid { grid-template-columns: 1fr !important; }
              .stats { gap: 30px !important; padding: 40px 20px !important; }
              .heroTitle { font-size: 28px !important; }
              .nav { padding: 0 16px !important; }
              .navLinks { display: none !important; }
              .hamburger { display: flex !important; }
              .hero { padding: 60px 20px 40px !important; }
              .heroBtns { flex-direction: column !important; align-items: center !important; }
              .sectionTitle { font-size: 26px !important; }
              .services { padding: 50px 16px !important; }
              .how { padding: 50px 16px !important; }
              .pricing { padding: 50px 16px !important; }
              .footer { padding: 40px 16px 20px !important; }
              .trust { padding: 20px 16px !important; gap: 16px !important; }
            }
            a:hover { opacity: 0.8; }
            button:hover { opacity: 0.9; }
          `),
    
          bannerVisible && React.createElement('div', { style: styles.banner },
            React.createElement('span', null, '7-Day Free Trial — Full access for just £20/month after. '),
            React.createElement('a', { href: PAYMENT_LINK, style: { color: NAVY, fontWeight: 900, textDecoration: 'underline' } }, 'Start Free Trial'),
            React.createElement('button', {
              onClick: function() { setBannerVisible(false) },
              style: { background: 'none', border: 'none', marginLeft: 16, cursor: 'pointer', color: NAVY, fontWeight: 700, fontSize: 16 }
            }, 'x')
          ),
    
          React.createElement('nav', { style: styles.nav, className: 'nav' },
            React.createElement('a', { href: '#', style: styles.navLogo },
              React.createElement('span', { style: { fontSize: 22 } }, '⚖️'),
              React.createElement('span', { style: styles.navLogoText }, 'CourtCraft Advocate')
            ),
            React.createElement('div', { style: styles.navLinks, className: 'navLinks' },
              React.createElement('a', { href: '#services', style: styles.navLink }, 'Services'),
              React.createElement('a', { href: '#how', style: styles.navLink }, 'Resources'),
              React.createElement('a', { href: '#contact', style: styles.navLink }, 'Contact'),
              React.createElement('button', { style: styles.navBtnOutline }, 'Sign In'),
              React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.navBtn }, 'Start Free Trial')
              )
            ),
            React.createElement('button', {
              style: styles.hamburger,
              className: 'hamburger',
              onClick: function() { setMenuOpen(!menuOpen) }
            },
              React.createElement('span', { style: styles.hamburgerLine }),
              React.createElement('span', { style: styles.hamburgerLine }),
              React.createElement('span', { style: styles.hamburgerLine })
            )
          ),
    
          menuOpen && React.createElement('div', { style: styles.mobileMenu },
            React.createElement('a', { href: '#services', style: styles.mobileLink, onClick: function() { setMenuOpen(false) } }, 'Services'),
            React.createElement('a', { href: '#how', style: styles.mobileLink, onClick: function() { setMenuOpen(false) } }, 'Resources'),
            React.createElement('a', { href: '#contact', style: styles.mobileLink, onClick: function() { setMenuOpen(false) } }, 'Contact'),
            React.createElement('a', { href: '#', style: styles.mobileLink }, 'Sign In'),
            React.createElement('a', { href: PAYMENT_LINK, style: Object.assign({}, styles.mobileLink, { color: GOLD, fontWeight: 700 }) }, 'Start Free Trial')
          ),
    
          React.createElement('div', { style: Object.assign({}, styles.hero, { marginTop: bannerVisible ? 40 : 0 }), className: 'hero' },
            React.createElement('div', { style: styles.heroEyebrow }, 'Professional McKenzie Friend Services'),
            React.createElement('h1', { style: styles.heroTitle, className: 'heroTitle' },
              'YOUR CHILDREN ',
              React.createElement('span', { style: styles.heroTitle2 }, 'DESERVE YOUR BEST')
            ),
            React.createElement('p', { style: styles.heroSub }, 'Professional McKenzie Friend Support at All Stages of Divorce & Custody Proceedings'),
            React.createElement('div', { style: styles.heroBadge }, '£  20/month — 7-Day Free Trial — Cancel anytime. No commitment.'),
            React.createElement('div', { style: styles.heroBtns, className: 'heroBtns' },
              React.createElement('a', { href: '#contact', style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.btnSecondary }, 'Contact Us')
              ),
              React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.btnPrimary }, 'Start Free Trial')
              )
            ),
            React.createElement('p', { style: styles.heroNote }, 'Join 5,000+ Parents Fighting Smart')
          ),
    
          React.createElement('div', { style: styles.stats, className: 'stats' },
            React.createElement('div', { style: styles.statItem }, React.createElement('div', { style: styles.statNum }, '5,000+'), React.createElement('div', { style: styles.statLabel }, 'Parents Helped')),
            React.createElement('div', { style: styles.statItem }, React.createElement('div', { style: styles.statNum }, '12,000+'), React.createElement('div', { style: styles.statLabel }, 'Court Reports')),
            React.createElement('div', { style: styles.statItem }, React.createElement('div', { style: styles.statNum }, '94%'), React.createElement('div', { style: styles.statLabel }, 'Success Rate'))
          ),
    
          React.createElement('div', { style: styles.videoSection },
            React.createElement('div', { style: styles.videoLabel }, 'WATCH OUR STORY'),
            React.createElement('div', { style: styles.videoBox },
              React.createElement('video', {
                style: styles.video,
                controls: true,
                poster: '/assets/endcard.jpeg',
                preload: 'metadata'
              },
                React.createElement('source', { src: '/assets/CourtCraft_Advocate_FINAL.mp4', type: 'video/mp4' }),
                'Your browser does not support the video tag.'
              )
            )
          ),
    
          React.createElement('div', { style: styles.trust, className: 'trust' },
            React.createElement('span', { style: styles.trustItem }, React.createElement('span', { style: styles.trustDot }), 'GDPR Compliant'),
            React.createElement('span', { style: styles.trustItem }, React.createElement('span', { style: styles.trustDot }), 'McKenzie Friend Certified'),
            React.createElement('span', { style: styles.trustItem }, React.createElement('span', { style: styles.trustDot }), '24hr Response Time'),
            React.createElement('span', { style: styles.trustItem }, React.createElement('span', { style: styles.trustDot }), '5,000+ Parents Helped')
          ),
    
          React.createElement('div', { id: 'services', style: styles.services },
            React.createElement('div', { style: styles.sectionEyebrow }, 'Our Services'),
            React.createElement('h2', { style: styles.sectionTitle }, 'Everything You Need to Fight Smart'),
            React.createElement('p', { style: styles.sectionSub }, 'Comprehensive tools and support designed specifically for parents navigating family court proceedings.'),
            React.createElement('div', { style: styles.grid3, className: 'grid3' },
              SERVICES.map(function(s, i) {
                var badgeStyle = s.type === 'sub' ? Object.assign({}, styles.badge, styles.badgeSub) : s.type === 'free' ? Object.assign({}, styles.badge, styles.badgeFree) : Object.assign({}, styles.badge, styles.badgeAll)
                return React.createElement('div', { key: i, style: styles.card },
                  React.createElement('div', { style: badgeStyle }, s.badge),
                  React.createElement('h3', { style: Object.assign({}, styles.cardTitle, { marginTop: 12 }) }, s.title),
                  React.createElement('p', { style: styles.cardDesc }, s.desc),
                  React.createElement('a', { href: '#', style: styles.cardLink }, 'Learn more →')
                )
              })
            )
          ),
    
          React.createElement('div', { id: 'how', style: styles.how },
            React.createElement('div', { style: styles.sectionEyebrow }, 'How It Works'),
            React.createElement('h2', { style: styles.sectionTitle }, 'Get started in minutes'),
            React.createElement('p', { style: styles.sectionSub }, 'Our platform guides you through every step of your family court journey.'),
            React.createElement('div', { style: styles.grid2, className: 'grid2' },
              STEPS.map(function(s, i) {
                return React.createElement('div', { key: i, style: styles.stepCard },
                  React.createElement('div', { style: styles.stepNum }, s.num),
                  React.createElement('h3', { style: styles.stepTitle }, s.title),
                  React.createElement('p', { style: styles.stepDesc }, s.desc)
                )
              })
            ),
            React.createElement('div', { style: styles.centerBtn },
              React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.btnPrimary }, 'Get Started Today')
              )
            )
          ),
    
          React.createElement('div', { style: styles.ctaBand },
            React.createElement('h2', { style: styles.ctaTitle }, 'Your Children Are Counting On You'),
            React.createElement('p', { style: styles.ctaSub }, "Don't navigate family court alone. Get the professional tools and AI-powered guidance you need to present your case with confidence."),
            React.createElement('div', { style: styles.ctaBtns },
              React.createElement('a', { href: '#contact', style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.btnSecondary }, 'Contact Us Today')
              ),
              React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none' } },
                React.createElement('button', { style: styles.btnPrimary }, 'Start Free Trial')
              )
            ),
            React.createElement('p', { style: Object.assign({}, styles.heroNote, { marginTop: 16 }) }, '7-day free trial. £20/month. Cancel anytime.')
          ),
    
          React.createElement('div', { style: styles.testimonial },
            React.createElement('div', { style: styles.sectionEyebrow }, 'Trusted by 5,000+ Parents'),
            React.createElement('h2', { style: styles.sectionTitle }, 'Real stories from real parents'),
            React.createElement('div', { style: styles.testimonialBox },
              React.createElement('div', { style: styles.stars }, '★★★★★'),
              React.createElement('p', { style: styles.quote }, '"CourtCraft Advocate was a lifeline during my custody battle. The court report generator saved me thousands in solicitor fees, and the AI assistant helped me understand every step of the process."'),
              React.createElement('div', { style: styles.author }, 'Sarah M.'),
              React.createElement('div', { style: styles.authorSub }, 'London - Custody Case')
            )
          ),
    
          React.createElement('div', { id: 'pricing', style: styles.pricing },
            React.createElement('div', { style: styles.sectionEyebrow }, 'Simple Pricing'),
            React.createElement('h2', { style: styles.sectionTitle }, 'Invest in Your Children's Future'),
            React.createElement('p', { style: styles.sectionSub }, 'One simple plan with everything you need. Start with a 7-day free trial.'),
            React.createElement('div', { style: styles.grid2c, className: 'grid2c' },
              React.createElement('div', { style: styles.priceFree },
                React.createElement('div', { style: styles.planName }, 'Free Access'),
                React.createElement('div', { style: styles.planDesc }, 'Educational resources only'),
                React.createElement('div', { style: styles.planPrice }, '£0'),
                React.createElement('div', { style: styles.planPer }, '/month'),
                React.createElement('ul', { style: styles.planFeatures },
                  FREE_FEATURES.map(function(f, i) {
                    return React.createElement('li', { key: i, style: f.on ? styles.featureOn : styles.featureOff },
                      React.createElement('span', { style: f.on ? styles.checkOn : styles.checkOff }, f.on ? '✓' : '✕'),
                      f.label
                    )
                  })
                ),
                React.createElement('button', { style: Object.assign({}, styles.btnSecondary, { width: '100%', padding: '12px' }) }, 'Browse Resources')
              ),
              React.createElement('div', { style: styles.pricePro },
                React.createElement('div', { style: styles.popularBadge }, 'MOST POPULAR'),
                React.createElement('div', { style: styles.planName }, 'Pro Subscriber'),
                React.createElement('div', { style: styles.planDesc }, 'Full access to all tools'),
                React.createElement('div', { style: styles.planPrice }, '£20'),
                React.createElement('div', { style: styles.planPer }, '/month — 7-day free trial included'),
                React.createElement('ul', { style: styles.planFeatures },
                  PRO_FEATURES.map(function(f, i) {
                    return React.createElement('li', { key: i, style: styles.featureOn },
                      React.createElement('span', { style: styles.checkOn }, '✓'),
                      f.label
                    )
                  })
                ),
                React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none', display: 'block' } },
                  React.createElement('button', { style: Object.assign({}, styles.btnPrimary, { width: '100%', padding: '14px' }) }, 'Start 7-Day Free Trial')
                ),
                React.createElement('p', { style: styles.planNote }, 'Cancel anytime. No hidden fees.')
              )
            ),
            React.createElement('p', { style: styles.priceNote }, 'Prices shown in GBP. Also available in USD ($25/mo) and EUR (€23/mo).')
          ),
    
          React.createElement('div', { style: styles.footerCta },
            React.createElement('h2', { style: styles.footerCtaTitle }, 'Ready to Fight Smart?'),
            React.createElement('p', { style: styles.footerCtaSub }, 'Join thousands of parents who have used CourtCraft Advocate to navigate family court with confidence and achieve the best outcomes for their children.'),
            React.createElement('a', { href: PAYMENT_LINK, style: { textDecoration: 'none' } },
              React.createElement('button', { style: styles.btnPrimary }, 'Start Your 7-Day Free Trial')
            ),
            React.createElement('p', { style: styles.footerCtaNote }, 'No credit card required. Full access to all features.')
          ),
    
          React.createElement('div', { style: styles.legal },
            React.createElement('div', { style: styles.legalTitle }, 'IMPORTANT LEGAL DISCLAIMERS'),
            React.createElement('p', { style: styles.legalText },
              'CourtCraft Advocate provides McKenzie Friend services only. We are NOT solicitors or barristers. ',
              'All advice and guidance should be verified with a legally qualified legal professional. ',
              'McKenzie Friends have rights of audience in family courts but cannot conduct litigation or provide legal advice in the traditional sense. ',
              'GDPR Compliance: We process personal data in accordance with GDPR. Your information is encrypted and stored securely. ',
              'You have the right to access, rectify, or request deletion of your personal data at any time.'
            )
          ),
    
          React.createElement('footer', { id: 'contact', style: styles.footer },
            React.createElement('div', { style: styles.footerGrid, className: 'footerGrid' },
              React.createElement('div', null,
                React.createElement('div', { style: styles.footerBrand }, '⚖️ CourtCraft Advocate'),
                React.createElement('p', { style: styles.footerTagline }, 'Professional McKenzie Friend support empowering parents through divorce and custody proceedings with confidence.'),
                React.createElement('a', { href: 'mailto:support@courtcraftadvocate.com', style: styles.footerEmail }, 'support@courtcraftadvocate.com')
              ),
              React.createElement('div', null,
                React.createElement('div', { style: styles.footerColTitle }, 'QUICK LINKS'),
                ['Home', 'Services', 'Pricing', 'Resources', 'Contact Us', 'FAQs'].map(function(l) {
                  return React.createElement('a', { key: l, href: '#', style: styles.footerLink }, l)
                })
              ),
              React.createElement('div', null,
                React.createElement('div', { style: styles.footerColTitle }, 'LEGAL & POLICIES'),
                ['Terms of Service', 'Privacy Policy', 'GDPR Policy', 'Cookie Policy', 'Copyright & Legal', 'Complaints Procedure', 'Data Deletion Request'].map(function(l) {
                  return React.createElement('a', { key: l, href: '#', style: styles.footerLink }, l)
                })
              ),
              React.createElement('div', null,
                React.createElement('div', { style: styles.footerColTitle }, 'SUBSCRIBER TOOLS'),
                ['Dashboard', 'AI Legal Assistant', 'Court Report Generator', 'Child Contact Tracker', 'Document Manager', 'Billing & Subscription'].map(function(l) {
                  return React.createElement('a', { key: l, href: '#', style: styles.footerLink }, l)
                })
              )
            ),
            React.createElement('div', { style: styles.footerBottom },
              React.createElement('p', null, '© 2026 CourtCraft Advocate™. All Rights Reserved. CourtCraft Advocate is a registered trademark. Protected by UK and International Copyright Law.'),
              React.createElement('p', { style: { marginTop: 8 } }, 'SSL Encrypted | GDPR Compliant | Registered in England & Wales')
            )
          )
        )
      )
    }
