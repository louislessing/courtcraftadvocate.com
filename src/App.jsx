import { useState } from 'react'
    
    const SERVICES = [
      { title: 'AI Legal Assistant', badge: 'Subscribers', icon: '🤖', desc: 'Get instant guidance on UK family law, court procedures, and McKenzie Friend rights from our AI-powered chatbot.' },
      { title: 'Court Report Generator', badge: 'Subscribers', icon: '📄', desc: 'Generate professional, court-ready PDF reports with timelines, evidence appendices, and statements of truth.' },
      { title: 'Child Contact Tracker', badge: 'Subscribers', icon: '👶', desc: 'Log every pickup, dropoff, and interaction. Track custody schedules and document everything for court.' },
      { title: 'Finance Tracker', badge: 'Subscribers', icon: '💰', desc: 'Track child maintenance payments, additional expenses, and upload receipts. Generate financial summaries.' },
      { title: 'Communication Logger', badge: 'Subscribers', icon: '💬', desc: 'Record all communications with your ex-partner. Tag as positive, neutral, or concerning for court evidence.' },
      { title: 'Custody Calendar', badge: 'Subscribers', icon: '📅', desc: 'Visual calendar view of custody schedules, upcoming court dates, and important deadlines.' },
      { title: 'Secure Document Storage', badge: 'Subscribers', icon: '🔒', desc: 'Upload and organise court orders, correspondence, evidence, and financial documents securely.' },
      { title: 'McKenzie Friend Support', badge: 'Free', icon: '⚖️', desc: 'Professional guidance on your rights as a litigant in person with McKenzie Friend assistance in court.' },
      { title: 'Legal Resources Library', badge: 'Free', icon: '📚', desc: 'Access articles, guides, FAQs, and video tutorials on UK family law and court procedures.' },
      { title: 'Case Timeline Builder', badge: 'Subscribers', icon: '🕐', desc: 'Build a chronological timeline of events for your case with evidence linking and export capabilities.' },
      { title: 'GDPR Compliant', badge: 'All Users', icon: '🛡️', desc: 'Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance.' },
      { title: 'Analytics Dashboard', badge: 'Subscribers', icon: '📊', desc: 'Visual summaries of contact patterns, financial tracking, and communication trends for your case.' },
    ]
    
    const STEPS = [
      { num: '01', title: 'Sign Up & Start Trial', desc: 'Create your account and get 7 days of full access to all features. No payment required upfront.' },
      { num: '02', title: 'Set Up Your Case', desc: 'Add your case details, children\'s information, and start logging contacts, communications, and finances.' },
      { num: '03', title: 'Get AI Guidance', desc: 'Use our AI Legal Assistant for instant answers about UK family law, court procedures, and your rights.' },
      { num: '04', title: 'Generate Court Reports', desc: 'Create professional, court-ready PDF reports with timelines, evidence, and statements of truth.' },
    ]
    
    const FREE_FEATURES = [
      { text: 'Legal resources library', included: true },
      { text: 'Blog articles & guides', included: true },
      { text: 'Legal glossary access', included: true },
      { text: 'FAQ section', included: true },
      { text: 'AI Legal Assistant', included: false },
      { text: 'Court Report Generator', included: false },
      { text: 'Child Contact Tracker', included: false },
      { text: 'Finance Tracker', included: false },
      { text: 'Document Storage', included: false },
      { text: 'Communication Logger', included: false },
    ]
    
    const PRO_FEATURES = [
      'Everything in Free plan',
      'AI Legal Assistant (unlimited)',
      'Court Report Generator',
      'Child Contact Tracker',
      'Finance Tracker & Analytics',
      'Secure Document Storage',
      'Communication Logger',
      'Case Timeline Builder',
      'PDF Export for Court',
      'Priority Email Support',
    ]
    
    const BADGE_COLORS = {
      'Subscribers': { bg: '#1e3a5c', text: '#60a5fa' },
      'Free': { bg: '#14532d', text: '#4ade80' },
      'All Users': { bg: '#581c87', text: '#c084fc' },
    }
    
    export default function App() {
      const [menuOpen, setMenuOpen] = useState(false)
      const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
      return (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0a0f1e', color: 'white', minHeight: '100vh' }}>
    
          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0; }
            a { text-decoration: none; }
            .nav-links { display: flex; gap: 32px; align-items: center; }
            .hamburger { display: none; }
            .mobile-menu { display: none; }
            .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
            .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
            .steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
            .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }
            .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
            .trust-badges { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
            @media (max-width: 900px) {
              .nav-links { display: none; }
              .hamburger { display: block; }
              .mobile-menu.open { display: flex; flex-direction: column; gap: 16px; padding: 24px; background: #0d1526; border-top: 1px solid #1e3a5c; }
              .services-grid { grid-template-columns: repeat(2, 1fr); }
              .footer-grid { grid-template-columns: repeat(2, 1fr); }
              .stats-grid { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 600px) {
              .services-grid { grid-template-columns: 1fr; }
              .steps-grid { grid-template-columns: 1fr; }
              .pricing-grid { grid-template-columns: 1fr; }
              .footer-grid { grid-template-columns: 1fr; }
              .stats-grid { grid-template-columns: 1fr; gap: 16px; }
              .hero-btns { flex-direction: column; align-items: stretch; }
              .hero-btns a { text-align: center; }
              .trust-badges { flex-direction: column; align-items: center; }
            }
          `}</style>
    
          {/* NAV */}
          <nav style={{ background: '#0d1526', borderBottom: '1px solid #1e3a5c', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>⚖️</span>
                <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '18px' }}>CourtCraft Advocate</span>
              </div>
              <div className="nav-links">
                {['Home', 'Services', 'Resources', 'Contact'].map(item => (
                  <a key={item} href="#" style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
                    {item}
                  </a>
                ))}
                <a href="#" style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>Sign In</a>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                  background: '#B8960C', color: 'white', padding: '10px 22px', borderRadius: '8px',
                  fontWeight: 700, fontSize: '14px'
                }}>Start Free Trial</a>
              </div>
              <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
                background: 'none', border: 'none', color: 'white', fontSize: '26px', cursor: 'pointer'
              }}>{menuOpen ? '✕' : '☰'}</button>
            </div>
            <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
              {['Home', 'Services', 'Resources', 'Contact', 'Sign In'].map(item => (
                <a key={item} href="#" style={{ color: '#94a3b8', fontSize: '16px', fontWeight: 500 }}>{item}</a>
              ))}
              <a href={PAYMENT_LINK} style={{ background: '#B8960C', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textAlign: 'center' }}>Start Free Trial</a>
            </div>
          </nav>
    
          {/* HERO */}
          <section style={{ background: 'linear-gradient(180deg, #0d1526 0%, #0a0f1e 100%)', padding: 'clamp(60px,10vw,120px) 24px', textAlign: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', background: 'rgba(184,150,12,0.15)', border: '1px solid rgba(184,150,12,0.4)', color: '#B8960C', padding: '6px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
                Professional McKenzie Friend Services
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
                YOUR CHILDREN<br />
                <span style={{ color: '#B8960C' }}>DESERVE YOUR BEST</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, marginBottom: '16px' }}>
                Professional McKenzie Friend Support at All Stages of Divorce &amp; Custody Proceedings
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                <span style={{ background: '#B8960C', color: 'white', padding: '8px 20px', borderRadius: '24px', fontWeight: 800, fontSize: '18px' }}>£20/month</span>
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>7-Day Free Trial · Cancel anytime. No commitment.</span>
              </div>
              <div className="hero-btns" style={{ justifyContent: 'center' }}>
                <a href="mailto:support@courtcraftadvocate.com" style={{
                  background: 'transparent', color: '#B8960C', border: '2px solid #B8960C',
                  padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px'
                }}>Contact Us</a>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                  background: '#B8960C', color: 'white',
                  padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px'
                }}>Start Free Trial</a>
              </div>
            </div>
          </section>
    
          {/* STATS */}
          <section style={{ background: '#0d1526', padding: '60px 24px', borderTop: '1px solid #1e3a5c', borderBottom: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>Join 5,000+ Parents Fighting Smart</p>
              <div className="stats-grid" style={{ textAlign: 'center', marginBottom: '48px' }}>
                {[{ val: '5,000+', label: 'Parents Helped' }, { val: '12,000+', label: 'Court Reports' }, { val: '94%', label: 'Success Rate' }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, color: '#B8960C' }}>{s.val}</div>
                    <div style={{ color: '#94a3b8', fontSize: '15px', marginTop: '8px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="trust-badges">
                {['🔒 GDPR Compliant', '⚖️ McKenzie Friend Certified', '⏱️ 24hr Response Time', '👥 5,000+ Parents Helped'].map(b => (
                  <div key={b} style={{ background: '#131d35', border: '1px solid #1e3a5c', color: '#94a3b8', padding: '8px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>{b}</div>
                ))}
              </div>
            </div>
          </section>
    
          {/* SERVICES */}
          <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>Our Services</h2>
                <p style={{ color: '#B8960C', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Everything You Need to Fight Smart</p>
                <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>Comprehensive tools and support designed specifically for parents navigating family court proceedings.</p>
              </div>
              <div className="services-grid">
                {SERVICES.map(s => (
                  <div key={s.title} style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '28px', transition: 'border-color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.borderColor = '#B8960C'} onMouseOut={e => e.currentTarget.style.borderColor = '#1e3a5c'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <span style={{ fontSize: '28px' }}>{s.icon}</span>
                      <span style={{ background: BADGE_COLORS[s.badge].bg, color: BADGE_COLORS[s.badge].text, padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>{s.badge}</span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>{s.desc}</p>
                    <a href="#" style={{ color: '#B8960C', fontSize: '13px', fontWeight: 600 }}>Learn more →</a>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* HOW IT WORKS */}
          <section style={{ background: '#0d1526', padding: 'clamp(60px, 8vw, 100px) 24px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>How It Works</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '56px' }}>Get started in minutes. Our platform guides you through every step of your family court journey.</p>
              <div className="steps-grid">
                {STEPS.map(step => (
                  <div key={step.num} style={{ background: '#131d35', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '32px' }}>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#B8960C', marginBottom: '16px', opacity: 0.7 }}>{step.num}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{step.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '16px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>Get Started Today</a>
              </div>
            </div>
          </section>
    
          {/* CTA BANNER */}
          <section style={{ background: 'linear-gradient(135deg, #0d1526 0%, #1a1035 100%)', padding: 'clamp(60px, 8vw, 100px) 24px', textAlign: 'center', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>Your Children Are Counting On You</h2>
              <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>Don't navigate family court alone. Get the professional tools and AI-powered guidance you need to present your case with confidence.</p>
              <div className="hero-btns" style={{ justifyContent: 'center' }}>
                <a href="mailto:support@courtcraftadvocate.com" style={{ background: 'transparent', color: '#B8960C', border: '2px solid #B8960C', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px' }}>Contact Us Today</a>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px' }}>Start Free Trial</a>
              </div>
              <p style={{ color: '#475569', fontSize: '13px', marginTop: '16px' }}>7-day free trial. £20/month. Cancel anytime.</p>
            </div>
          </section>
    
          {/* TESTIMONIAL */}
          <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, marginBottom: '8px' }}>Trusted by 5,000+ Parents</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '48px' }}>Real stories from parents who used CourtCraft Advocate to navigate family court successfully.</p>
              <div style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '16px', padding: 'clamp(28px, 4vw, 48px)', borderLeft: '4px solid #B8960C' }}>
                <div style={{ color: '#B8960C', fontSize: '48px', lineHeight: 1, marginBottom: '16px' }}>"</div>
                <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, color: '#e2e8f0', marginBottom: '24px' }}>
                  CourtCraft Advocate was a lifeline during my custody battle. The court report generator saved me thousands in solicitor fees, and the AI assistant helped me understand every step of the process.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#B8960C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>S</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Sarah M.</div>
                    <div style={{ color: '#64748b', fontSize: '14px' }}>London · Custody Case</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#B8960C', fontSize: '20px' }}>★★★★★</div>
                </div>
              </div>
            </div>
          </section>
    
          {/* PRICING */}
          <section style={{ background: '#0d1526', padding: 'clamp(60px, 8vw, 100px) 24px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '12px' }}>Simple Pricing</h2>
                <p style={{ color: '#B8960C', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Invest in Your Children's Future</p>
                <p style={{ color: '#94a3b8', fontSize: '15px' }}>One simple plan with everything you need. Start with a 7-day free trial.</p>
              </div>
              <div className="pricing-grid">
                {/* Free */}
                <div style={{ background: '#131d35', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '36px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Free Access</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Educational resources only</p>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: 'white', marginBottom: '32px' }}>£0<span style={{ fontSize: '16px', color: '#64748b', fontWeight: 400 }}>/month</span></div>
                  <div style={{ marginBottom: '32px' }}>
                    {FREE_FEATURES.map(f => (
                      <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid #1e3a5c' }}>
                        <span style={{ color: f.included ? '#4ade80' : '#374151', fontSize: '16px' }}>{f.included ? '✓' : '✕'}</span>
                        <span style={{ color: f.included ? '#e2e8f0' : '#374151', fontSize: '14px' }}>{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" style={{ display: 'block', textAlign: 'center', background: 'transparent', border: '2px solid #1e3a5c', color: '#94a3b8', padding: '14px', borderRadius: '8px', fontWeight: 600, fontSize: '15px' }}>Browse Resources</a>
                </div>
                {/* Pro */}
                <div style={{ background: 'linear-gradient(135deg, #1a2a4a 0%, #0d1f3a 100%)', border: '2px solid #B8960C', borderRadius: '16px', padding: '36px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#B8960C', color: 'white', padding: '4px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Pro Subscriber</h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>Full access to all tools</p>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#B8960C', marginBottom: '4px' }}>£20<span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 400 }}>/month</span></div>
                  <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '32px' }}>7-day free trial included</p>
                  <div style={{ marginBottom: '32px' }}>
                    {PRO_FEATURES.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid rgba(30,58,92,0.5)' }}>
                        <span style={{ color: '#4ade80', fontSize: '16px' }}>✓</span>
                        <span style={{ color: '#e2e8f0', fontSize: '14px' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#B8960C', color: 'white', padding: '14px', borderRadius: '8px', fontWeight: 700, fontSize: '15px' }}>Start 7-Day Free Trial</a>
                  <p style={{ textAlign: 'center', color: '#475569', fontSize: '12px', marginTop: '12px' }}>Cancel anytime. No hidden fees.</p>
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#475569', fontSize: '13px', marginTop: '24px' }}>Prices shown in GBP. Also available in USD ($25/mo) and EUR (€23/mo).</p>
            </div>
          </section>
    
          {/* FINAL CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #0a0f1e 100%)', padding: 'clamp(60px, 8vw, 100px) 24px', textAlign: 'center', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>Ready to Fight Smart?</h2>
              <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>Join thousands of parents who have used CourtCraft Advocate to navigate family court with confidence and achieve the best outcomes for their children.</p>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#B8960C', color: 'white', padding: '18px 48px', borderRadius: '8px', fontWeight: 700, fontSize: '18px', marginBottom: '16px' }}>Start Your 7-Day Free Trial</a>
              <p style={{ color: '#475569', fontSize: '14px' }}>No credit card required. Full access to all features.</p>
            </div>
          </section>
    
          {/* DISCLAIMER */}
          <section style={{ background: '#080c18', padding: '48px 24px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>IMPORTANT LEGAL DISCLAIMERS</h3>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: 1.8, marginBottom: '12px' }}>CourtCraft Advocate provides McKenzie Friend services only. We are NOT solicitors or barristers. All advice and guidance should be verified with a legally qualified legal professional.</p>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: 1.8, marginBottom: '12px' }}>McKenzie Friends have rights of audience in family courts but cannot conduct litigation or provide legal advice in the traditional sense.</p>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: 1.8 }}>GDPR Compliance: We process personal data in accordance with GDPR. Your information is encrypted and stored securely. You have the right to access, rectify, or request deletion of your personal data at any time.</p>
            </div>
          </section>
    
          {/* FOOTER */}
          <footer style={{ background: '#0d1526', borderTop: '1px solid #1e3a5c', padding: 'clamp(40px, 6vw, 80px) 24px 40px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div className="footer-grid" style={{ marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '24px' }}>⚖️</span>
                    <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '16px' }}>CourtCraft Advocate</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>Professional McKenzie Friend support empowering parents through divorce and custody proceedings with confidence.</p>
                  <a href="mailto:support@courtcraftadvocate.com" style={{ color: '#B8960C', fontSize: '14px' }}>support@courtcraftadvocate.com</a>
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>QUICK LINKS</h4>
                  {['Home', 'Services', 'Pricing', 'Resources', 'Contact Us', 'FAQs'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>LEGAL & POLICIES</h4>
                  {['Terms of Service', 'Privacy Policy', 'GDPR Policy', 'Cookie Policy', 'Copyright & Legal', 'Complaints Procedure', 'Data Deletion Request'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>SUBSCRIBER TOOLS</h4>
                  {['Dashboard', 'AI Legal Assistant', 'Court Report Generator', 'Child Contact Tracker', 'Document Manager', 'Billing & Subscription'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid #1e3a5c', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 CourtCraft Advocate™. All Rights Reserved. Registered in England &amp; Wales.</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: '#475569', fontSize: '13px' }}>🔒 SSL Encrypted</span>
                  <span style={{ color: '#475569', fontSize: '13px' }}>🛡️ GDPR Compliant</span>
                </div>
              </div>
            </div>
          </footer>
    
        </div>
      )
    }
    
