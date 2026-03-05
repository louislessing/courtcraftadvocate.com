App_CLEAN_FINAL.jsx




import { useState } from 'react'
    
    const SERVICES = [
      { title: 'AI Legal Assistant', badge: 'Subscribers', icon: '🤖', desc: "Get instant guidance on UK family law, court procedures, and McKenzie Friend rights." },
      { title: 'Court Report Generator', badge: 'Subscribers', icon: '📄', desc: "Generate professional, court-ready PDF reports with timelines, evidence appendices, and statements of truth." },
      { title: 'Child Contact Tracker', badge: 'Subscribers', icon: '👶', desc: "Log every pickup, dropoff, and interaction. Track custody schedules and document everything for court." },
      { title: 'Finance Tracker', badge: 'Subscribers', icon: '💰', desc: "Track child maintenance payments, additional expenses, and upload receipts. Generate financial summaries." },
      { title: 'Communication Logger', badge: 'Subscribers', icon: '💬', desc: "Record all communications with your ex-partner. Tag as positive, neutral, or concerning for court evidence." },
      { title: 'Custody Calendar', badge: 'Subscribers', icon: '📅', desc: "Visual calendar view of custody schedules, upcoming court dates, and important deadlines." },
      { title: 'Secure Document Storage', badge: 'Subscribers', icon: '🔒', desc: "Upload and organise court orders, correspondence, evidence, and financial documents securely." },
      { title: 'McKenzie Friend Support', badge: 'Free', icon: '⚖️', desc: "Professional guidance on your rights as a litigant in person with McKenzie Friend assistance in court." },
      { title: 'Legal Resources Library', badge: 'Free', icon: '📚', desc: "Access articles, guides, FAQs, and video tutorials on UK family law and court procedures." },
      { title: 'Case Timeline Builder', badge: 'Subscribers', icon: '🕐', desc: "Build a chronological timeline of events for your case with evidence linking and export capabilities." },
      { title: 'GDPR Compliant', badge: 'All Users', icon: '🛡️', desc: "Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance." },
      { title: 'Analytics Dashboard', badge: 'Subscribers', icon: '📊', desc: "Visual summaries of contact patterns, financial tracking, and communication trends for your case." },
    ]
    
    const STEPS = [
      { num: '01', title: 'Sign Up and Start Trial', desc: "Create your account and get 7 days of full access to all features. No payment required upfront." },
      { num: '02', title: 'Set Up Your Case', desc: "Add your case details, your children's information, and start logging contacts, communications, and finances." },
      { num: '03', title: 'Get AI Guidance', desc: "Use our AI Legal Assistant for instant answers about UK family law, court procedures, and your rights." },
      { num: '04', title: 'Generate Court Reports', desc: "Create professional, court-ready PDF reports with timelines, evidence, and statements of truth." },
    ]
    
    const FREE_FEATURES = [
      { text: 'Legal resources library', included: true },
      { text: 'Blog articles and guides', included: true },
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
      'Finance Tracker and Analytics',
      'Secure Document Storage',
      'Communication Logger',
      'Case Timeline Builder',
      'PDF Export for Court',
      'Priority Email Support',
    ]
    
    const BADGE_COLORS = {
      Subscribers: { bg: '#1e3a5c', text: '#60a5fa' },
      Free: { bg: '#14532d', text: '#4ade80' },
      'All Users': { bg: '#581c87', text: '#c084fc' },
    }
    
    const NAV_LINKS = ['Features', 'How It Works', 'Pricing', 'Resources', 'Contact']
    
    const css = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      a { text-decoration: none; }
      .nav-links { display: flex; gap: 32px; align-items: center; }
      .hamburger { display: none; background: none; border: none; color: white; font-size: 26px; cursor: pointer; }
      .mobile-menu { display: none; flex-direction: column; gap: 16px; padding: 24px; background: #0d1526; border-top: 1px solid #1e3a5c; }
      .mobile-menu.open { display: flex; }
      .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
      .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
      .trust-badges { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
      .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
      .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
      .service-card { transition: all 0.2s; }
      .service-card:hover { border-color: #B8960C !important; transform: translateY(-3px); }
      @media (max-width: 900px) {
        .nav-links { display: none; }
        .hamburger { display: block; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .services-grid { grid-template-columns: repeat(2, 1fr); }
        .footer-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 600px) {
        .stats-grid { grid-template-columns: 1fr; }
        .services-grid { grid-template-columns: 1fr; }
        .steps-grid { grid-template-columns: 1fr; }
        .pricing-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr; }
        .hero-btns { flex-direction: column; align-items: center; }
        .trust-badges { flex-direction: column; align-items: center; }
      }
    `
    
    export default function App() {
      const [menuOpen, setMenuOpen] = useState(false)
      const [bannerVisible, setBannerVisible] = useState(true)
      const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
      return (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0a0f1e', color: 'white', minHeight: '100vh' }}>
          <style>{css}</style>
    
          {/* Banner */}
          {bannerVisible && (
            <div style={{ background: 'linear-gradient(90deg, #1a3a5c, #B8960C)', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative', zIndex: 1000 }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>
                ⚖️ Get full access for just <strong>£20/month</strong> — No solicitor needed!
              </span>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: 'white', color: '#1a3a5c', fontWeight: 700, padding: '6px 18px', borderRadius: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>
                Get Started
              </a>
              <button onClick={() => setBannerVisible(false)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer', lineHeight: 1 }}>
                x
              </button>
            </div>
          )}
    
          {/* Nav */}
          <nav style={{ background: '#0d1526', borderBottom: '1px solid #1e3a5c', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 999 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/assets/courtcraft_logo.png" alt="CourtCraft" style={{ height: '36px' }} onError={e => { e.target.style.display = 'none' }} />
              <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '18px' }}>CourtCraft Advocate</span>
            </div>
            <div className="nav-links">
              {NAV_LINKS.map(link => (
                <a key={link} href={'#' + link.toLowerCase().replace(' ', '-')} style={{ color: '#a0b4c8', fontSize: '14px', fontWeight: 500 }}>{link}</a>
              ))}
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#B8960C', border: '1px solid #B8960C', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '14px' }}>Sign In</a>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '8px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '14px' }}>Start Free Trial</a>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </nav>
    
          {/* Mobile Menu */}
          <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
            {NAV_LINKS.map(link => (
              <a key={link} href={'#' + link.toLowerCase().replace(' ', '-')} style={{ color: '#a0b4c8', fontSize: '16px' }} onClick={() => setMenuOpen(false)}>{link}</a>
            ))}
            <a href={PAYMENT_LINK} style={{ background: '#B8960C', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, textAlign: 'center' }}>Start Free Trial — £20/month</a>
          </div>
    
          {/* Hero */}
          <section style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1f35 50%, #0a0f1e 100%)', padding: 'clamp(48px, 8vw, 96px) 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/hero_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', background: 'rgba(184,150,12,0.15)', border: '1px solid #B8960C', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', color: '#B8960C', fontWeight: 600, marginBottom: '24px' }}>
                McKenzie Friend Support Platform — £20/month
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}>
                YOUR CHILDREN<br />
                <span style={{ color: '#B8960C' }}>DESERVE YOUR BEST</span>
              </h1>
              <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#a0b4c8', marginBottom: '36px', lineHeight: 1.6 }}>
                Professional McKenzie Friend support, AI-powered legal guidance, and court-ready document generation — all for just £20/month.
              </p>
              <div className="hero-btns">
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
                  Start Free Trial — £20/month
                </a>
                <a href="mailto:support@courtcraftadvocate.com" style={{ background: 'transparent', color: '#B8960C', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: '2px solid #B8960C', display: 'inline-block' }}>
                  Contact Us
                </a>
              </div>
              <div className="stats-grid" style={{ marginTop: '64px' }}>
                {[['5,000+', 'Parents Supported'], ['12,000+', 'Reports Generated'], ['94%', 'Success Rate']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#B8960C' }}>{val}</div>
                    <div style={{ fontSize: '14px', color: '#607d9a', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Trust Badges */}
          <section style={{ background: '#0d1526', padding: '28px 32px', borderTop: '1px solid #1e3a5c', borderBottom: '1px solid #1e3a5c' }}>
            <div className="trust-badges">
              {[['🛡️', 'GDPR Compliant'], ['⚖️', 'McKenzie Friend Certified'], ['⚡', '24hr Response Time'], ['👨‍👩‍👧', '5,000+ Parents Helped']].map(([icon, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a0b4c8', fontSize: '14px', fontWeight: 500 }}>
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </section>
    
          {/* Video Section */}
          <section style={{ background: '#0a0f1e', padding: 'clamp(48px, 6vw, 80px) 32px', textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
                See How <span style={{ color: '#B8960C' }}>CourtCraft</span> Works
              </h2>
              <p style={{ color: '#a0b4c8', fontSize: '16px', marginBottom: '36px' }}>Watch how we help families navigate the court system with confidence</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid #B8960C', boxShadow: '0 20px 60px rgba(184,150,12,0.2)' }}>
                <video controls autoPlay muted style={{ width: '100%', display: 'block' }} poster="/assets/endcard.jpeg">
                  <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
    
          {/* Services */}
          <section id="features" style={{ padding: 'clamp(48px, 6vw, 80px) 32px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
              Everything You Need to <span style={{ color: '#B8960C' }}>Win Your Case</span>
            </h2>
            <p style={{ textAlign: 'center', color: '#a0b4c8', fontSize: '16px', marginBottom: '48px' }}>
              Professional tools designed specifically for litigants in person and McKenzie Friends
            </p>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div key={s.title} className="service-card" style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{s.icon}</span>
                    <span style={{ background: BADGE_COLORS[s.badge].bg, color: BADGE_COLORS[s.badge].text, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{s.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#607d9a', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* How It Works */}
          <section id="how-it-works" style={{ background: '#0d1526', padding: 'clamp(48px, 6vw, 80px) 32px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
                How It <span style={{ color: '#B8960C' }}>Works</span>
              </h2>
              <p style={{ textAlign: 'center', color: '#a0b4c8', fontSize: '16px', marginBottom: '48px' }}>Get started in minutes, not days</p>
              <div className="steps-grid">
                {STEPS.map(s => (
                  <div key={s.num} style={{ background: '#0a0f1e', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '32px' }}>
                    <div style={{ fontSize: '40px', fontWeight: 900, color: '#B8960C', opacity: 0.4, marginBottom: '12px' }}>{s.num}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
                    <p style={{ color: '#607d9a', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Testimonial */}
          <section style={{ padding: 'clamp(48px, 6vw, 80px) 32px', textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '48px 32px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>★★★★★</div>
              <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#e2e8f0', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                "CourtCraft Advocate completely changed my experience in family court. The AI assistant helped me understand my rights, and the report generator saved me hours of work. Worth every penny."
              </p>
              <div style={{ fontWeight: 700, color: '#B8960C' }}>Sarah M. — London</div>
              <div style={{ fontSize: '13px', color: '#607d9a', marginTop: '4px' }}>Child custody case, 2024</div>
            </div>
          </section>
    
          {/* Pricing */}
          <section id="pricing" style={{ background: '#0d1526', padding: 'clamp(48px, 6vw, 80px) 32px' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
              Simple, <span style={{ color: '#B8960C' }}>Transparent Pricing</span>
            </h2>
            <p style={{ textAlign: 'center', color: '#a0b4c8', fontSize: '16px', marginBottom: '48px' }}>No hidden fees. Cancel anytime.</p>
            <div className="pricing-grid">
              {/* Free Plan */}
              <div style={{ background: '#0a0f1e', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '36px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Free Plan</h3>
                <div style={{ fontSize: '40px', fontWeight: 900, color: 'white', marginBottom: '4px' }}>£0</div>
                <div style={{ color: '#607d9a', fontSize: '14px', marginBottom: '28px' }}>Forever free</div>
                {FREE_FEATURES.map(f => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ color: f.included ? '#4ade80' : '#374151', fontSize: '16px' }}>{f.included ? '✓' : '✕'}</span>
                    <span style={{ color: f.included ? '#e2e8f0' : '#4b5563', fontSize: '14px' }}>{f.text}</span>
                  </div>
                ))}
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '28px', background: 'transparent', color: '#B8960C', border: '2px solid #B8960C', padding: '12px', borderRadius: '8px', fontWeight: 700, textAlign: 'center', fontSize: '15px' }}>
                  Get Started Free
                </a>
              </div>
              {/* Pro Plan */}
              <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)', border: '2px solid #B8960C', borderRadius: '16px', padding: '36px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#B8960C', color: 'white', fontSize: '12px', fontWeight: 700, padding: '4px 16px', borderRadius: '20px' }}>MOST POPULAR</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Pro Plan</h3>
                <div style={{ fontSize: '40px', fontWeight: 900, color: '#B8960C', marginBottom: '4px' }}>£20</div>
                <div style={{ color: '#607d9a', fontSize: '14px', marginBottom: '28px' }}>per month</div>
                {PRO_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ color: '#4ade80', fontSize: '16px' }}>✓</span>
                    <span style={{ color: '#e2e8f0', fontSize: '14px' }}>{f}</span>
                  </div>
                ))}
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '28px', background: '#B8960C', color: 'white', padding: '14px', borderRadius: '8px', fontWeight: 700, textAlign: 'center', fontSize: '15px' }}>
                  Start Free Trial — £20/month
                </a>
              </div>
            </div>
          </section>
    
          {/* Legal Disclaimer */}
          <section style={{ padding: '32px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '24px' }}>
              <h4 style={{ color: '#B8960C', fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>⚖️ Legal Disclaimer</h4>
              <p style={{ color: '#607d9a', fontSize: '13px', lineHeight: 1.7 }}>
                CourtCraft Advocate provides McKenzie Friend support and AI-powered legal guidance tools. We are not a law firm and do not provide legal advice. Our platform is designed to assist litigants in person in understanding court procedures and organising their cases. All information provided is for educational purposes only. Always consult a qualified solicitor for legal advice specific to your situation. CourtCraft Advocate operates in full compliance with GDPR and UK data protection laws.
              </p>
            </div>
          </section>
    
          {/* Footer CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)', padding: 'clamp(48px, 6vw, 80px) 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
              Ready to Take Control of <span style={{ color: '#B8960C' }}>Your Case?</span>
            </h2>
            <p style={{ color: '#a0b4c8', fontSize: '16px', marginBottom: '32px' }}>
              Join 5,000+ parents who trust CourtCraft Advocate — just £20/month.
            </p>
            <div className="hero-btns">
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
                Start Free Trial — £20/month
              </a>
              <a href="mailto:support@courtcraftadvocate.com" style={{ background: 'transparent', color: '#B8960C', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: '2px solid #B8960C', display: 'inline-block' }}>
                Contact Us
              </a>
            </div>
            <p style={{ color: '#607d9a', fontSize: '14px', marginTop: '20px' }}>support@courtcraftadvocate.com</p>
          </section>
    
          {/* Footer */}
          <footer style={{ background: '#060c18', padding: 'clamp(40px, 5vw, 64px) 32px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div className="footer-grid" style={{ marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '24px' }}>⚖️</span>
                    <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '16px' }}>CourtCraft Advocate</span>
                  </div>
                  <p style={{ color: '#607d9a', fontSize: '13px', lineHeight: 1.7 }}>
                    Empowering families through expert McKenzie Friend support and AI-powered legal tools.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>Quick Links</h4>
                  {['Features', 'How It Works', 'Pricing', 'Resources'].map(l => (
                    <a key={l} href={'#' + l.toLowerCase().replace(' ', '-')} style={{ display: 'block', color: '#607d9a', fontSize: '13px', marginBottom: '10px' }}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>Legal</h4>
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#607d9a', fontSize: '13px', marginBottom: '10px' }}>{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>Subscriber Tools</h4>
                  {['AI Legal Assistant', 'Report Generator', 'Contact Tracker', 'Document Storage'].map(l => (
                    <a key={l} href={PAYMENT_LINK} style={{ display: 'block', color: '#607d9a', fontSize: '13px', marginBottom: '10px' }}>{l}</a>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid #1e3a5c', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <p style={{ color: '#374151', fontSize: '13px' }}>2024 CourtCraft Advocate. All rights reserved.</p>
                <p style={{ color: '#374151', fontSize: '13px' }}>support@courtcraftadvocate.com</p>
              </div>
            </div>
          </footer>
        </div>
      )
    }

