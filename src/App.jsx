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
      { num: '02', title: 'Set Up Your Case', desc: 'Add your case details, children's information, and start logging contacts, communications, and finances.' },
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
            .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
            .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
            .steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
            .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }
            .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
            .trust-badges { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
            .video-btn:hover { opacity: 0.85; transform: translateY(-2px); }
            .service-card:hover { border-color: #B8960C !important; }
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
          <nav style={{ background: 'rgba(13, 21, 38, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e3a5c', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/assets/courtcraft_logo.png"
                  alt="CourtCraft Advocate"
                  style={{ height: '42px', width: 'auto' }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline'; }}
                />
                <span style={{ display: 'none', fontSize: '22px' }}>⚖️</span>
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
                  fontWeight: 700, fontSize: '14px', transition: 'opacity 0.2s'
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
    
          {/* HERO — full background image + video */}
          <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 'clamp(60px,10vw,120px) 24px',
            overflow: 'hidden',
          }}>
            {/* Background image */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 0,
              backgroundImage: 'url(/assets/hero_bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.35)',
            }} />
            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(180deg, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.85) 100%)',
            }} />
    
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', background: 'rgba(184,150,12,0.15)', border: '1px solid rgba(184,150,12,0.4)', color: '#B8960C', padding: '6px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
                Professional McKenzie Friend Services
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-1px' }}>
                YOUR CHILDREN<br />
                <span style={{ color: '#B8960C' }}>DESERVE YOUR BEST</span>
              </h1>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, marginBottom: '16px', maxWidth: '680px', margin: '0 auto 16px' }}>
                Professional McKenzie Friend Support at All Stages of Divorce &amp; Custody Proceedings
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
                <span style={{ background: '#B8960C', color: 'white', padding: '8px 20px', borderRadius: '24px', fontWeight: 800, fontSize: '18px' }}>£20/month</span>
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>7-Day Free Trial · Cancel anytime. No commitment.</span>
              </div>
    
              {/* VIDEO EMBED */}
              <div style={{
                maxWidth: '760px', margin: '0 auto 36px',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
                border: '2px solid rgba(184,150,12,0.5)',
              }}>
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{ width: '100%', display: 'block' }}
                  poster="/assets/endcard.jpeg"
                >
                  <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
    
              <div className="hero-btns">
                <a href="mailto:support@courtcraftadvocate.com" className="video-btn" style={{
                  background: 'transparent', color: '#B8960C', border: '2px solid #B8960C',
                  padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px',
                  transition: 'all 0.2s', display: 'inline-block'
                }}>Contact Us</a>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="video-btn" style={{
                  background: '#B8960C', color: 'white',
                  padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px',
                  transition: 'all 0.2s', display: 'inline-block'
                }}>Start Free Trial — £20/month</a>
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
                  <div key={s.title} className="service-card" style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '28px', transition: 'border-color 0.2s', cursor: 'pointer' }}>
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
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '16px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
                  Get Started Today — £20/month
                </a>
              </div>
            </div>
          </section>
    
          {/* TESTIMONIAL */}
          <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '24px' }}>★★★★★</div>
              <blockquote style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: 1.7, color: '#e2e8f0', fontStyle: 'italic', marginBottom: '32px' }}>
                "CourtCraft Advocate gave me the confidence and tools to represent myself effectively. The AI assistant answered questions my solicitor charged £300/hour for. I couldn't have done it without them."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #B8960C, #1a3a5c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '20px' }}>S</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, color: '#B8960C' }}>Sarah M.</div>
                  <div style={{ color: '#64748b', fontSize: '14px' }}>London · Child Custody Case</div>
                </div>
              </div>
            </div>
          </section>
    
          {/* PRICING */}
          <section style={{ background: '#0d1526', padding: 'clamp(60px, 8vw, 100px) 24px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>Simple, Transparent Pricing</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '56px' }}>No hidden fees. No long-term contracts. Cancel anytime.</p>
              <div className="pricing-grid">
                {/* Free */}
                <div style={{ background: '#131d35', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '40px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Free</h3>
                  <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '8px' }}>£0<span style={{ fontSize: '16px', color: '#64748b', fontWeight: 400 }}>/month</span></div>
                  <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '32px' }}>Get started with essential resources</p>
                  {FREE_FEATURES.map(f => (
                    <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <span style={{ color: f.included ? '#4ade80' : '#374151', fontSize: '16px', flexShrink: 0 }}>{f.included ? '✓' : '✗'}</span>
                      <span style={{ color: f.included ? '#e2e8f0' : '#4b5563', fontSize: '14px' }}>{f.text}</span>
                    </div>
                  ))}
                  <a href="#" style={{ display: 'block', textAlign: 'center', marginTop: '32px', background: 'transparent', color: '#94a3b8', border: '1px solid #1e3a5c', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '15px' }}>
                    Sign Up Free
                  </a>
                </div>
                {/* Pro */}
                <div style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)', border: '2px solid #B8960C', borderRadius: '16px', padding: '40px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#B8960C', color: 'white', padding: '4px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>MOST POPULAR</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Pro Subscriber</h3>
                  <div style={{ fontSize: '42px', fontWeight: 900, color: '#B8960C', marginBottom: '8px' }}>£20<span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 400 }}>/month</span></div>
                  <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '32px' }}>7-day free trial · Cancel anytime</p>
                  {PRO_FEATURES.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <span style={{ color: '#B8960C', fontSize: '16px', flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#e2e8f0', fontSize: '14px' }}>{f}</span>
                    </div>
                  ))}
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '32px', background: '#B8960C', color: 'white', padding: '14px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '15px' }}>
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
    
          {/* LEGAL DISCLAIMER */}
          <section style={{ padding: '48px 24px', background: '#060b16', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '32px' }}>
              <h4 style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Legal Disclaimer & Important Information</h4>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: 1.8 }}>
                CourtCraft Advocate provides McKenzie Friend services and legal support tools. We are not solicitors and do not provide legal advice. Our services are provided for informational and organisational purposes only. Always seek independent legal advice for your specific situation. CourtCraft Advocate is GDPR compliant and all data is encrypted. By using our services you agree to our Terms of Service and Privacy Policy. Registered in England & Wales.
              </p>
            </div>
          </section>
    
          {/* FOOTER */}
          <footer style={{ background: '#060b16', borderTop: '1px solid #1e3a5c', padding: 'clamp(48px, 6vw, 80px) 24px 32px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div className="footer-grid" style={{ marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <img
                      src="/assets/courtcraft_logo.png"
                      alt="CourtCraft Advocate"
                      style={{ height: '36px', width: 'auto' }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '16px' }}>CourtCraft Advocate</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>Professional McKenzie Friend support empowering parents through divorce and custody proceedings with confidence.</p>
                  <a href="mailto:support@courtcraftadvocate.com" style={{ color: '#B8960C', fontSize: '14px' }}>support@courtcraftadvocate.com</a>
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>QUICK LINKS</h4>
                  {['Home', 'Services', 'Pricing', 'Resources', 'Contact Us', 'FAQs'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>LEGAL & POLICIES</h4>
                  {['Terms of Service', 'Privacy Policy', 'GDPR Policy', 'Cookie Policy', 'Complaints Procedure', 'Data Deletion Request'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>SUBSCRIBER TOOLS</h4>
                  {['Dashboard', 'AI Legal Assistant', 'Court Report Generator', 'Child Contact Tracker', 'Document Manager', 'Billing & Subscription'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s' }}
                      onMouseOver={e => e.target.style.color = '#B8960C'} onMouseOut={e => e.target.style.color = '#475569'}>{l}</a>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid #1e3a5c', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 CourtCraft Advocate™. All Rights Reserved. Registered in England & Wales.</p>
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
    
