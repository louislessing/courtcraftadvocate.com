import React, { useState } from 'react'
    
    var PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
    var NAV_LINKS = [
      { label: 'Services', href: '#services' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
    ]
    
    var STATS = [
      { num: '5,000+', label: 'Parents Helped' },
      { num: '12,000+', label: 'Documents Created' },
      { num: '94%', label: 'Success Rate' },
      { num: '24/7', label: 'Platform Access' },
    ]
    
    var SERVICES = [
      { title: 'AI Case Summary', desc: 'Generate professional case summaries instantly.', badge: 'Subscribers', icon: 'AI' },
      { title: 'Court Bundle Builder', desc: 'Organise and prepare your court bundle with ease.', badge: 'Subscribers', icon: 'CB' },
      { title: 'Letter Generator', desc: 'Create professional letters to courts and solicitors.', badge: 'Subscribers', icon: 'LG' },
      { title: 'Case Timeline', desc: 'Build a clear chronological timeline of your case.', badge: 'Subscribers', icon: 'CT' },
      { title: 'Legal Glossary', desc: 'Understand complex legal terms in plain English.', badge: 'Free', icon: 'GL' },
      { title: 'Document Checker', desc: 'Check your documents for errors before submission.', badge: 'Subscribers', icon: 'DC' },
      { title: 'Hearing Prep Tool', desc: 'Prepare thoroughly for every court hearing.', badge: 'Subscribers', icon: 'HP' },
      { title: 'Contact Log', desc: 'Record all communications professionally.', badge: 'All Users', icon: 'CL' },
      { title: 'Finance Tracker', desc: 'Track costs and finances related to your case.', badge: 'Subscribers', icon: 'FT' },
      { title: 'McKenzie Friend Guide', desc: 'Learn how to get support in court proceedings.', badge: 'Free', icon: 'MF' },
      { title: 'Appeal Assistant', desc: 'Get guidance on how to appeal court decisions.', badge: 'Subscribers', icon: 'AA' },
      { title: 'Progress Tracker', desc: 'Monitor your case progress at every stage.', badge: 'All Users', icon: 'PT' },
    ]
    
    var STEPS = [
      { num: '01', title: 'Create Your Account', desc: 'Sign up in minutes and access your personal dashboard.' },
      { num: '02', title: 'Set Up Your Case', desc: "Add your case details, children's information, and start logging contacts, communications, and finances." },
      { num: '03', title: 'Use Our Tools', desc: 'Generate documents, build timelines, and prepare for hearings with our AI-powered tools.' },
      { num: '04', title: 'Go To Court Prepared', desc: 'Walk into every hearing with professional documents and clear evidence.' },
    ]
    
    var TESTIMONIALS = [
      { name: 'Sarah M.', location: 'London', text: 'CourtCraft Advocate gave me the confidence to represent myself. The document tools are incredible and saved me thousands in legal fees.', rating: 5 },
      { name: 'James T.', location: 'Manchester', text: 'I was overwhelmed before finding this platform. Now I feel in control of my case and my children are back home.', rating: 5 },
      { name: 'Emma R.', location: 'Birmingham', text: 'The AI tools are easy to use and the support is fantastic. I highly recommend this to any parent facing court.', rating: 5 },
    ]
    
    var FREE_FEATURES = [
      'Legal Glossary Access',
      'McKenzie Friend Guide',
      'Contact Log (limited)',
      'Progress Tracker (limited)',
      'Platform Access',
    ]
    
    var PRO_FEATURES = [
      'Everything in Free',
      'AI Case Summary Generator',
      'Court Bundle Builder',
      'Letter Generator',
      'Case Timeline Builder',
      'Document Checker',
      'Hearing Prep Tool',
      'Full Contact Log',
      'Finance Tracker',
      'Appeal Assistant',
      'Priority Support',
      'Unlimited Documents',
    ]
    
    var BADGE_COLORS = {
      'Subscribers': { bg: '#1a3a5c', color: '#c9a84c' },
      'Free': { bg: '#1a4a2a', color: '#4caf7d' },
      'All Users': { bg: '#2a1a5c', color: '#a084c9' },
    }
    
    var CSS_STYLES = [
      '@media (max-width: 900px) {',
      '  .nav-links { display: none !important; }',
      '  .nav-btns-wrap { display: none !important; }',
      '  .hamburger { display: block !important; }',
      '  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }',
      '  .services-grid { grid-template-columns: repeat(2, 1fr) !important; }',
      '  .steps-grid { grid-template-columns: 1fr !important; }',
      '  .testimonials-grid { grid-template-columns: 1fr !important; }',
      '  .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px !important; margin: 0 auto !important; }',
      '  .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }',
      '}',
      '@media (max-width: 600px) {',
      '  .hero-title { font-size: 28px !important; }',
      '  .hero-btns { flex-direction: column !important; align-items: center !important; }',
      '  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }',
      '  .services-grid { grid-template-columns: 1fr !important; }',
      '  .footer-grid { grid-template-columns: 1fr !important; }',
      '  .section-title { font-size: 24px !important; }',
      '}',
    ].join('\n')
    
    export default function App() {
      var menuState = useState(false)
      var menuOpen = menuState[0]
      var setMenuOpen = menuState[1]
    
      var bannerState = useState(true)
      var bannerVisible = bannerState[0]
      var setBannerVisible = bannerState[1]
    
      var s = {
        body: { margin: 0, fontFamily: "'Segoe UI', Arial, sans-serif", background: '#0a1628', color: '#e8e8e8', minHeight: '100vh' },
        banner: { background: '#c9a84c', color: '#0a1628', textAlign: 'center', padding: '10px 20px', fontWeight: 700, fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
        nav: { background: '#0d1f3c', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #1e3a5c' },
        logo: { color: '#c9a84c', fontWeight: 800, fontSize: '20px', textDecoration: 'none' },
        navLinks: { display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 },
        navLink: { color: '#b0c4de', textDecoration: 'none', fontSize: '14px', fontWeight: 500 },
        navBtns: { display: 'flex', gap: '10px', alignItems: 'center' },
        btnOutline: { background: 'transparent', border: '1px solid #c9a84c', color: '#c9a84c', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 },
        btnGold: { background: '#c9a84c', border: 'none', color: '#0a1628', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 700 },
        btnPrimary: { background: '#c9a84c', color: '#0a1628', border: 'none', padding: '14px 32px', borderRadius: '4px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' },
        btnSecondary: { background: 'transparent', color: '#c9a84c', border: '2px solid #c9a84c', padding: '14px 32px', borderRadius: '4px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' },
        hamburger: { display: 'none', background: 'none', border: 'none', color: '#c9a84c', fontSize: '28px', cursor: 'pointer', lineHeight: 1 },
        hero: { background: 'linear-gradient(135deg, #0a1628 0%, #0d2040 50%, #0a1628 100%)', textAlign: 'center', padding: '80px 24px 60px' },
        heroEyebrow: { color: '#c9a84c', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' },
        heroTitle: { fontSize: '48px', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, margin: '0 auto 20px', maxWidth: '800px' },
        heroSub: { fontSize: '18px', color: '#b0c4de', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 },
        heroBtns: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' },
        statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' },
        statCard: { background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '24px 16px', textAlign: 'center' },
        statNum: { fontSize: '36px', fontWeight: 900, color: '#c9a84c' },
        statLabel: { fontSize: '13px', color: '#b0c4de', marginTop: '4px' },
        sectionEyebrow: { color: '#c9a84c', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '12px' },
        sectionTitle: { fontSize: '36px', fontWeight: 800, color: '#ffffff', textAlign: 'center', marginBottom: '16px' },
        sectionSub: { fontSize: '16px', color: '#b0c4de', textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' },
        sectionWrap: { padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' },
        servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
        serviceCard: { background: '#0d1f3c', border: '1px solid #1e3a5c', borderRadius: '8px', padding: '28px 24px' },
        serviceIcon: { width: '44px', height: '44px', background: '#1e3a5c', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', fontWeight: 700, fontSize: '12px', marginBottom: '12px' },
        serviceTitle: { fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' },
        serviceDesc: { fontSize: '14px', color: '#b0c4de', lineHeight: 1.6, marginBottom: '16px' },
        badge: { display: 'inline-block', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 },
        stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' },
        stepCard: { background: '#0d1f3c', border: '1px solid #1e3a5c', borderRadius: '8px', padding: '32px' },
        stepNum: { fontSize: '48px', fontWeight: 900, color: '#1e3a5c', lineHeight: 1, marginBottom: '12px' },
        stepTitle: { fontSize: '20px', fontWeight: 700, color: '#c9a84c', marginBottom: '10px' },
        stepDesc: { fontSize: '15px', color: '#b0c4de', lineHeight: 1.6 },
        testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
        testimonialCard: { background: '#0d1f3c', border: '1px solid #1e3a5c', borderRadius: '8px', padding: '28px' },
        stars: { color: '#c9a84c', fontSize: '18px', marginBottom: '12px' },
        testimonialText: { fontSize: '15px', color: '#b0c4de', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' },
        testimonialName: { fontSize: '14px', fontWeight: 700, color: '#ffffff' },
        testimonialLoc: { fontSize: '13px', color: '#7a9abd' },
        pricingGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '800px', margin: '0 auto' },
        pricingCard: { background: '#0d1f3c', border: '1px solid #1e3a5c', borderRadius: '8px', padding: '40px 32px', textAlign: 'center' },
        pricingCardPro: { background: '#0d1f3c', border: '2px solid #c9a84c', borderRadius: '8px', padding: '40px 32px', textAlign: 'center', position: 'relative' },
        pricingBadge: { position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#c9a84c', color: '#0a1628', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' },
        pricingName: { fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' },
        pricingPrice: { fontSize: '48px', fontWeight: 900, color: '#c9a84c', lineHeight: 1 },
        pricingPer: { fontSize: '14px', color: '#7a9abd', marginBottom: '24px' },
        pricingFeature: { display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #1e3a5c', fontSize: '14px', color: '#b0c4de', textAlign: 'left' },
        featureCheck: { color: '#c9a84c', fontWeight: 700, fontSize: '16px', flexShrink: 0 },
        videoSection: { background: '#060f1e', padding: '80px 24px', textAlign: 'center' },
        videoWrap: { maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '2px solid #1e3a5c' },
        video: { width: '100%', display: 'block' },
        disclaimerWrap: { background: '#060f1e', padding: '40px 24px' },
        disclaimerInner: { maxWidth: '900px', margin: '0 auto', border: '1px solid #1e3a5c', borderRadius: '8px', padding: '28px' },
        disclaimerTitle: { color: '#c9a84c', fontWeight: 700, fontSize: '14px', marginBottom: '12px', letterSpacing: '1px' },
        disclaimerText: { fontSize: '13px', color: '#7a9abd', lineHeight: 1.7 },
        footer: { background: '#060f1e', borderTop: '1px solid #1e3a5c', padding: '60px 24px 32px' },
        footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', maxWidth: '1200px', margin: '0 auto 40px' },
        footerLogo: { color: '#c9a84c', fontWeight: 800, fontSize: '18px', marginBottom: '12px' },
        footerDesc: { fontSize: '13px', color: '#7a9abd', lineHeight: 1.7 },
        footerHeading: { color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' },
        footerLink: { display: 'block', color: '#7a9abd', textDecoration: 'none', fontSize: '13px', marginBottom: '8px' },
        footerBottom: { textAlign: 'center', borderTop: '1px solid #1e3a5c', paddingTop: '24px', maxWidth: '1200px', margin: '0 auto', color: '#7a9abd', fontSize: '13px' },
        mobileMenuWrap: { background: '#0d1f3c', padding: '16px 24px', borderTop: '1px solid #1e3a5c' },
        mobileLink: { display: 'block', color: '#b0c4de', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #1e3a5c', fontSize: '15px' },
        mobileBtns: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' },
      }
    
      return React.createElement('div', { style: s.body },
        React.createElement('style', { dangerouslySetInnerHTML: { __html: CSS_STYLES } }),
    
        bannerVisible && React.createElement('div', { style: s.banner },
          React.createElement('span', null, 'Start your free trial today - Professional Plan from only 20 per month'),
          React.createElement('a', { href: PAYMENT_LINK, style: { color: '#0a1628', fontWeight: 700 } }, 'Get Started'),
          React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 900, fontSize: '18px', color: '#0a1628', marginLeft: '8px' }, onClick: function() { setBannerVisible(false) } }, 'x')
        ),
    
        React.createElement('nav', { style: s.nav },
          React.createElement('a', { href: '/', style: s.logo }, 'CourtCraft Advocate'),
          React.createElement('ul', { className: 'nav-links', style: s.navLinks },
            NAV_LINKS.map(function(l) {
              return React.createElement('li', { key: l.label },
                React.createElement('a', { href: l.href, style: s.navLink }, l.label)
              )
            })
          ),
          React.createElement('div', { className: 'nav-btns-wrap', style: s.navBtns },
            React.createElement('button', { style: s.btnOutline }, 'Sign In'),
            React.createElement('button', { style: s.btnGold, onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial')
          ),
          React.createElement('button', { className: 'hamburger', style: s.hamburger, onClick: function() { setMenuOpen(!menuOpen) } }, menuOpen ? 'X' : '=')
        ),
    
        menuOpen && React.createElement('div', { style: s.mobileMenuWrap },
          NAV_LINKS.map(function(l) {
            return React.createElement('a', { key: l.label, href: l.href, style: s.mobileLink, onClick: function() { setMenuOpen(false) } }, l.label)
          }),
          React.createElement('div', { style: s.mobileBtns },
            React.createElement('button', { style: s.btnOutline }, 'Sign In'),
            React.createElement('button', { style: s.btnGold, onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial')
          )
        ),
    
        React.createElement('section', { style: s.hero },
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
        ),
    
        React.createElement('div', { style: s.videoSection },
          React.createElement('div', { style: s.sectionEyebrow }, 'SEE IT IN ACTION'),
          React.createElement('h2', { className: 'section-title', style: Object.assign({}, s.sectionTitle, { marginBottom: '32px' }) }, 'Watch How CourtCraft Advocate Works'),
          React.createElement('div', { style: s.videoWrap },
            React.createElement('video', { style: s.video, controls: true, poster: '/assets/endcard.jpeg' },
              React.createElement('source', { src: '/assets/CourtCraft_Advocate_FINAL.mp4', type: 'video/mp4' }),
              'Your browser does not support the video tag.'
            )
          )
        ),
    
        React.createElement('div', { id: 'services', style: { background: '#060f1e', padding: '80px 0' } },
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
        ),
    
        React.createElement('div', { id: 'how-it-works', style: { background: '#0a1628', padding: '80px 0' } },
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
        ),
    
        React.createElement('div', { style: { background: '#060f1e', padding: '80px 0' } },
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
        ),
    
        React.createElement('div', { id: 'pricing', style: { background: '#0a1628', padding: '80px 0' } },
          React.createElement('div', { style: s.sectionWrap },
            React.createElement('div', { style: s.sectionEyebrow }, 'SIMPLE PRICING'),
            React.createElement('h2', { className: 'section-title', style: s.sectionTitle }, "Invest in Your Children's Future"),
            React.createElement('p', { style: s.sectionSub }, "One simple plan with everything you need to build a stronger case."),
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
                React.createElement('button', { style: Object.assign({}, s.btnGold, { width: '100%', padding: '12px', fontSize: '15px' }), onClick: function() { window.location.href = PAYMENT_LINK } }, 'Start Free Trial')
              )
            )
          )
        ),
    
        React.createElement('div', { style: s.disclaimerWrap },
          React.createElement('div', { style: s.disclaimerInner },
            React.createElement('div', { style: s.disclaimerTitle }, 'LEGAL DISCLAIMER'),
            React.createElement('p', { style: s.disclaimerText }, 'CourtCraft Advocate is a document assistance platform and does not provide legal advice. Our tools are designed to help litigants in person organise their case materials and prepare documents. We are not a law firm and our services do not constitute legal advice. For legal advice, please consult a qualified solicitor. McKenzie Friend services are provided in accordance with Practice Guidance issued by the Lord Chief Justice. All data is processed in accordance with GDPR and UK Data Protection Act 2018.')
          )
        ),
    
        React.createElement('footer', { style: s.footer },
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
      )
    }
