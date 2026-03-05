import { useState } from 'react'
    
    const SERVICES = [
      { title: 'AI Legal Assistant', badge: 'Subscribers', icon: '🤖', desc: "Get instant guidance on UK family law, court procedures, and McKenzie Friend rights from our AI-powered chatbot." },
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
      { num: '01', title: 'Sign Up & Start Trial', desc: "Create your account and get 7 days of full access to all features. No payment required upfront." },
      { num: '02', title: 'Set Up Your Case', desc: "Add your case details, your children's information, and start logging contacts, communications, and finances." },
      { num: '03', title: 'Get AI Guidance', desc: "Use our AI Legal Assistant for instant answers about UK family law, court procedures, and your rights." },
      { num: '04', title: 'Generate Court Reports', desc: "Create professional, court-ready PDF reports with timelines, evidence, and statements of truth." },
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
    
    const NAV_LINKS = ['Features', 'How It Works', 'Pricing', 'Resources', 'Contact']
    
    export default function App() {
      const [menuOpen, setMenuOpen] = useState(false)
      const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
      return (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0a0f1e', color: 'white', minHeight: '100vh' }}>
          <style>{[
            '* { box-sizing: border-box; margin: 0; padding: 0; }',
            'a { text-decoration: none; }',
            '.nav-links { display: flex; gap: 32px; align-items: center; }',
            '.hamburger { display: none; background: none; border: none; color: white; font-size: 26px; cursor: pointer; }',
            '.mobile-menu { display: none; }',
            '.mobile-menu.open { display: flex; flex-direction: column; gap: 16px; padding: 24px; background: #0d1526; border-top: 1px solid #1e3a5c; }',
            '.hero-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }',
            '.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }',
            '.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }',
            '.steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }',
            '.pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }',
            '.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }',
            '.trust-badges { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }',
            '.service-card:hover { border-color: #B8960C !important; transform: translateY(-3px); transition: all 0.2s; }',
            '@media (max-width: 900px) {',
            '  .nav-links { display: none; }',
            '  .hamburger { display: block; }',
            '  .services-grid { grid-template-columns: repeat(2, 1fr); }',
            '  .footer-grid { grid-template-columns: repeat(2, 1fr); }',
            '  .stats-grid { grid-template-columns: repeat(2, 1fr); }',
            '  .steps-grid { grid-template-columns: 1fr; }',
            '  .pricing-grid { grid-template-columns: 1fr; }',
            '}',
            '@media (max-width: 600px) {',
            '  .services-grid { grid-template-columns: 1fr; }',
            '  .footer-grid { grid-template-columns: 1fr; }',
            '  .stats-grid { grid-template-columns: 1fr; }',
            '  .trust-badges { flex-direction: column; align-items: center; }',
            '  .hero-btns { flex-direction: column; align-items: center; }',
            '}',
          ].join(' ')}</style>
    
          {/* Sticky Nav */}
          <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(10,15,30,0.97)', borderBottom: '1px solid #1e3a5c', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/assets/courtcraft_logo.png" alt="CourtCraft" style={{ height: '38px' }} onError={e => { e.target.style.display = 'none' }} />
              <span style={{ color: '#B8960C', fontWeight: 800, fontSize: '20px', letterSpacing: '0.3px' }}>CourtCraft Advocate</span>
            </div>
            <div className="nav-links">
              {NAV_LINKS.map(link => (
                <a key={link} href={"#" + link.toLowerCase().replace(' ', '-')} style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#B8960C'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}
                >{link}</a>
              ))}
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#B8960C', border: '1px solid #B8960C', padding: '8px 18px', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>Sign In</a>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '8px 18px', borderRadius: '6px', fontSize: '14px', fontWeight: 700 }}>Start Free Trial</a>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
          </nav>
    
          {/* Mobile Menu */}
          <div className={"mobile-menu" + (menuOpen ? " open" : "")}>
            {NAV_LINKS.map(link => (
              <a key={link} href={"#" + link.toLowerCase().replace(' ', '-')} style={{ color: '#94a3b8', fontSize: '16px', fontWeight: 500 }} onClick={() => setMenuOpen(false)}>{link}</a>
            ))}
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textAlign: 'center' }}>Start Free Trial — £20/month</a>
          </div>
    
          {/* Hero Section */}
          <section style={{
            minHeight: '90vh',
            background: 'linear-gradient(rgba(10,15,30,0.82), rgba(10,15,30,0.92)), url("/assets/hero_bg.jpg") center/cover no-repeat',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '80px 24px'
          }}>
            <div style={{ background: 'rgba(184,150,12,0.15)', border: '1px solid #B8960C', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', color: '#B8960C', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
              Trusted by 5,000+ UK Parents
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', maxWidth: '800px' }}>
              YOUR CHILDREN DESERVE<br />
              <span style={{ color: '#B8960C' }}>YOUR BEST</span>
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: '#94a3b8', maxWidth: '600px', lineHeight: 1.6, marginBottom: '16px' }}>
              Professional McKenzie Friend support and AI-powered tools to help you navigate UK family court with confidence.
            </p>
            <div style={{ background: 'rgba(184,150,12,0.2)', border: '1px solid #B8960C', borderRadius: '8px', padding: '10px 24px', marginBottom: '32px', display: 'inline-block' }}>
              <span style={{ color: '#B8960C', fontWeight: 800, fontSize: '18px' }}>£20/month</span>
              <span style={{ color: '#94a3b8', fontSize: '14px', marginLeft: '8px' }}>— Cancel anytime</span>
            </div>
    
            {/* Video Player */}
            <div style={{ width: '100%', maxWidth: '760px', borderRadius: '16px', overflow: 'hidden', border: '2px solid #B8960C', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', marginBottom: '36px' }}>
              <video controls autoPlay muted style={{ width: '100%', display: 'block', background: '#000' }}
                poster="/assets/endcard.jpeg">
                <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
    
            <div className="hero-btns">
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer"
                style={{ background: '#B8960C', color: 'white', fontWeight: 700, padding: '16px 36px', borderRadius: '8px', fontSize: '16px', minWidth: '220px', textAlign: 'center' }}>
                Start Free Trial — £20/month
              </a>
              <a href="mailto:support@courtcraftadvocate.com"
                style={{ background: 'transparent', color: '#B8960C', border: '2px solid #B8960C', fontWeight: 700, padding: '16px 36px', borderRadius: '8px', fontSize: '16px', minWidth: '160px', textAlign: 'center' }}>
                Contact Us
              </a>
            </div>
          </section>
    
          {/* Stats */}
          <section style={{ background: '#0d1526', padding: '60px 32px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="stats-grid">
                {[
                  { value: '5,000+', label: 'Parents Supported' },
                  { value: '12,000+', label: 'Court Reports Generated' },
                  { value: '94%', label: 'Success Rate' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '32px 20px', background: '#111827', borderRadius: '12px', border: '1px solid #1e3a5c' }}>
                    <div style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#B8960C' }}>{s.value}</div>
                    <div style={{ color: '#94a3b8', fontSize: '15px', marginTop: '8px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Trust Badges */}
          <section style={{ background: '#080c18', padding: '40px 32px', borderBottom: '1px solid #1e3a5c' }}>
            <div className="trust-badges" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {['GDPR Compliant', 'McKenzie Friend Approved', '24hr Email Support', '5,000+ Parents Helped'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
                  <span style={{ color: '#B8960C', fontSize: '18px' }}>&#10003;</span> {b}
                </div>
              ))}
            </div>
          </section>
    
          {/* Services */}
          <section id="features" style={{ padding: '80px 32px', background: '#0a0f1e' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '12px' }}>Everything You Need to Win Your Case</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '48px' }}>Powerful tools designed specifically for UK family court proceedings</p>
              <div className="services-grid">
                {SERVICES.map(s => (
                  <div key={s.title} className="service-card" style={{ background: '#111827', borderRadius: '12px', padding: '24px', border: '1px solid #1e3a5c', transition: 'all 0.2s', cursor: 'default' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{ fontSize: '28px' }}>{s.icon}</span>
                      <span style={{ background: BADGE_COLORS[s.badge].bg, color: BADGE_COLORS[s.badge].text, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{s.badge}</span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>{s.title}</h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* How It Works */}
          <section id="how-it-works" style={{ padding: '80px 32px', background: '#0d1526' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '12px' }}>How It Works</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '48px' }}>Get started in minutes and take control of your case today</p>
              <div className="steps-grid">
                {STEPS.map(step => (
                  <div key={step.num} style={{ background: '#111827', borderRadius: '12px', padding: '32px', border: '1px solid #1e3a5c' }}>
                    <div style={{ fontSize: '40px', fontWeight: 900, color: '#B8960C', opacity: 0.4, marginBottom: '12px' }}>{step.num}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Testimonial */}
          <section style={{ padding: '80px 32px', background: '#080c18', textAlign: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ fontSize: '48px', color: '#B8960C', marginBottom: '16px' }}>"</div>
              <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', lineHeight: 1.7, color: '#e2e8f0', fontStyle: 'italic', marginBottom: '24px' }}>
                CourtCraft Advocate gave me the confidence and tools to represent myself in family court. The AI assistant answered questions my solicitor would have charged hundreds for. I secured the contact arrangement I needed for my children.
              </p>
              <div style={{ color: '#B8960C', fontSize: '20px', marginBottom: '8px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 600 }}>Sarah M. — London</div>
            </div>
          </section>
    
          {/* Pricing */}
          <section id="pricing" style={{ padding: '80px 32px', background: '#0a0f1e' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '12px' }}>Simple, Transparent Pricing</h2>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '48px' }}>No hidden fees. Cancel anytime.</p>
              <div className="pricing-grid">
                {/* Free */}
                <div style={{ background: '#111827', borderRadius: '16px', padding: '36px', border: '1px solid #1e3a5c' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Free</h3>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#B8960C', marginBottom: '4px' }}>£0</div>
                  <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '28px' }}>Forever free</div>
                  {FREE_FEATURES.map(f => (
                    <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: f.included ? '#e2e8f0' : '#475569', fontSize: '14px' }}>
                      <span style={{ color: f.included ? '#4ade80' : '#475569', fontSize: '16px', fontWeight: 700 }}>{f.included ? '✓' : '✗'}</span>
                      {f.text}
                    </div>
                  ))}
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '24px', background: 'transparent', color: '#B8960C', border: '2px solid #B8960C', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: 700, fontSize: '15px' }}>
                    Get Started Free
                  </a>
                </div>
                {/* Pro */}
                <div style={{ background: 'linear-gradient(135deg, #1a2744, #0d1f35)', borderRadius: '16px', padding: '36px', border: '2px solid #B8960C', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#B8960C', color: 'white', fontSize: '12px', fontWeight: 800, padding: '4px 16px', borderRadius: '20px' }}>MOST POPULAR</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Pro Subscriber</h3>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#B8960C', marginBottom: '4px' }}>£20</div>
                  <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '28px' }}>per month — cancel anytime</div>
                  {PRO_FEATURES.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#e2e8f0', fontSize: '14px' }}>
                      <span style={{ color: '#4ade80', fontSize: '16px', fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '24px', background: '#B8960C', color: 'white', padding: '14px', borderRadius: '8px', textAlign: 'center', fontWeight: 700, fontSize: '15px' }}>
                    Start Free Trial — £20/month
                  </a>
                </div>
              </div>
            </div>
          </section>
    
          {/* Legal Disclaimer */}
          <section style={{ padding: '48px 32px', background: '#080c18', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#111827', borderRadius: '12px', padding: '32px', border: '1px solid #1e3a5c' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#B8960C', marginBottom: '16px' }}>&#9432; Legal Disclaimer & McKenzie Friend Notice</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.8 }}>
                CourtCraft Advocate provides informational resources and tools to assist litigants in person. We are not a law firm and do not provide legal advice. Our McKenzie Friend service is provided in accordance with the Practice Guidance issued by the Lord Chief Justice. All information is provided for general guidance only. You should always seek independent legal advice for your specific circumstances. CourtCraft Advocate is fully GDPR compliant. Your data is encrypted and never shared with third parties without your consent.
              </p>
            </div>
          </section>
    
          {/* Footer CTA */}
          <section style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #0d1526, #1a2744)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginBottom: '12px' }}>Ready to Take Control of Your Case?</h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '32px' }}>Join 5,000+ parents who trust CourtCraft Advocate — just £20/month.</p>
            <div className="hero-btns">
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{ background: '#B8960C', color: 'white', fontWeight: 700, padding: '16px 36px', borderRadius: '8px', fontSize: '16px', minWidth: '220px', textAlign: 'center' }}>
                Start Free Trial — £20/month
              </a>
              <a href="mailto:support@courtcraftadvocate.com" style={{ background: 'transparent', color: '#B8960C', border: '2px solid #B8960C', fontWeight: 700, padding: '16px 36px', borderRadius: '8px', fontSize: '16px', minWidth: '160px', textAlign: 'center' }}>
                Contact Us
              </a>
            </div>
            <p style={{ color: '#475569', fontSize: '13px', marginTop: '20px' }}>support@courtcraftadvocate.com</p>
          </section>
    
          {/* Footer */}
          <footer style={{ background: '#050810', padding: '60px 32px 32px', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div className="footer-grid" style={{ marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <img src="/assets/courtcraft_logo.png" alt="CourtCraft" style={{ height: '32px' }} onError={e => { e.target.style.display = 'none' }} />
                    <span style={{ color: '#B8960C', fontWeight: 800, fontSize: '16px' }}>CourtCraft Advocate</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '13px', lineHeight: 1.7, maxWidth: '260px' }}>
                    Empowering families through UK family court with AI tools, McKenzie Friend support, and expert guidance.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Quick Links</h4>
                  {['Features', 'How It Works', 'Pricing', 'Resources', 'Contact'].map(l => (
                    <a key={l} href={"#" + l.toLowerCase().replace(' ', '-')} style={{ display: 'block', color: '#475569', fontSize: '13px', marginBottom: '10px' }}
                      onMouseEnter={e => e.target.style.color = '#B8960C'}
                      onMouseLeave={e => e.target.style.color = '#475569'}
                    >{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Legal</h4>
                  {['Privacy Policy', 'Terms of Service', 'GDPR Policy', 'Cookie Policy', 'Disclaimer'].map(l => (
                    <a key={l} href="#" style={{ display: 'block', color: '#475569', fontSize: '13px', marginBottom: '10px' }}
                      onMouseEnter={e => e.target.style.color = '#B8960C'}
                      onMouseLeave={e => e.target.style.color = '#475569'}
                    >{l}</a>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Subscriber Tools</h4>
                  {['AI Legal Assistant', 'Court Report Generator', 'Child Contact Tracker', 'Finance Tracker', 'Document Storage'].map(l => (
                    <a key={l} href={PAYMENT_LINK} style={{ display: 'block', color: '#475569', fontSize: '13px', marginBottom: '10px' }}
                      onMouseEnter={e => e.target.style.color = '#B8960C'}
                      onMouseLeave={e => e.target.style.color = '#475569'}
                    >{l}</a>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid #1e3a5c', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <p style={{ color: '#475569', fontSize: '13px' }}>2024 CourtCraft Advocate. All rights reserved.</p>
                <p style={{ color: '#475569', fontSize: '13px' }}>support@courtcraftadvocate.com</p>
              </div>
            </div>
          </footer>
    
        </div>
      )
    }
    
