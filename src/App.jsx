import { useState } from 'react'
    
    const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
    const SERVICES = [
      { title: 'AI Legal Assistant', badge: 'Subscribers', desc: 'Get instant guidance on UK family law, court procedures, and McKenzie Friend rights from our AI-powered chatbot.' },
      { title: 'Court Report Generator', badge: 'Subscribers', desc: 'Generate professional, court-ready PDF reports with timelines, evidence appendices, and statements of truth.' },
      { title: 'Child Contact Tracker', badge: 'Subscribers', desc: 'Log every pickup, dropoff, and interaction. Track custody schedules and document everything for court.' },
      { title: 'Finance Tracker', badge: 'Subscribers', desc: 'Track child maintenance payments, additional expenses, and upload receipts. Generate financial summaries.' },
      { title: 'Communication Logger', badge: 'Subscribers', desc: 'Record all communications with your ex-partner. Tag as positive, neutral, or concerning for court evidence.' },
      { title: 'Custody Calendar', badge: 'Subscribers', desc: 'Visual calendar view of custody schedules, upcoming court dates, and important deadlines.' },
      { title: 'Secure Document Storage', badge: 'Subscribers', desc: 'Upload and organise court orders, correspondence, evidence, and financial documents securely.' },
      { title: 'McKenzie Friend Support', badge: 'Free', desc: 'Professional guidance on your rights as a litigant in person with McKenzie Friend assistance in court.' },
      { title: 'Legal Resources Library', badge: 'Free', desc: 'Access articles, guides, FAQs, and video tutorials on UK family law and court procedures.' },
      { title: 'Case Timeline Builder', badge: 'Subscribers', desc: 'Build a chronological timeline of events for your case with evidence linking and export capabilities.' },
      { title: 'GDPR Compliant', badge: 'All Users', desc: 'Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance.' },
      { title: 'Analytics Dashboard', badge: 'Subscribers', desc: 'Visual summaries of contact patterns, financial tracking, and communication trends for your case.' },
    ]
    
    const STEPS = [
      { num: '01', title: 'Sign Up & Start Trial', desc: 'Create your account and get 7 days of full access to all features. No payment required upfront.' },
      { num: '02', title: 'Set Up Your Case', desc: "Add your case details, children's information, and start logging contacts, communications, and finances." },
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
      'Subscribers': { bg: '#1a3a5c', color: '#4a9eff' },
      'Free': { bg: '#1a3a2c', color: '#4aff9e' },
      'All Users': { bg: '#3a2a1a', color: '#ffaa4a' },
    }
    
    export default function App() {
      const [menuOpen, setMenuOpen] = useState(false)
      const [bannerVisible, setBannerVisible] = useState(true)
    
      return (
        <div style={{ fontFamily: 'Georgia, serif', background: '#0a0f1a', color: '#e8e0d0', minHeight: '100vh' }}>
    
          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0; }
            a { text-decoration: none; color: inherit; }
            .btn-gold {
              background: linear-gradient(135deg, #b8960c, #d4af37);
              color: #0a0f1a;
              border: none;
              padding: 14px 28px;
              border-radius: 6px;
              font-size: 15px;
              font-weight: bold;
              cursor: pointer;
              display: inline-block;
              transition: opacity 0.2s;
            }
            .btn-gold:hover { opacity: 0.85; }
            .btn-outline {
              background: transparent;
              color: #d4af37;
              border: 2px solid #d4af37;
              padding: 12px 26px;
              border-radius: 6px;
              font-size: 15px;
              font-weight: bold;
              cursor: pointer;
              display: inline-block;
              transition: all 0.2s;
            }
            .btn-outline:hover { background: #d4af37; color: #0a0f1a; }
            @media (max-width: 768px) {
              .nav-links { display: none !important; }
              .nav-actions { display: none !important; }
              .hamburger { display: flex !important; }
              .hero-btns { flex-direction: column !important; align-items: stretch !important; }
              .hero-btns a, .hero-btns button { width: 100% !important; text-align: center !important; }
              .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .services-grid { grid-template-columns: 1fr !important; }
              .steps-grid { grid-template-columns: 1fr !important; }
              .pricing-grid { grid-template-columns: 1fr !important; }
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              .hero-title { font-size: clamp(28px, 8vw, 56px) !important; }
              .section-title { font-size: clamp(24px, 6vw, 40px) !important; }
            }
            @media (max-width: 480px) {
              .stats-grid { grid-template-columns: 1fr 1fr !important; }
              .footer-grid { grid-template-columns: 1fr !important; }
              .trust-badges { flex-wrap: wrap !important; gap: 8px !important; }
            }
          `}</style>
    
          {/* BANNER */}
          {bannerVisible && (
            <div style={{ background: 'linear-gradient(135deg, #b8960c, #8a6f09)', color: '#fff', textAlign: 'center', padding: '10px 40px', position: 'relative', fontSize: '14px' }}>
              Professional McKenzie Friend Support — Start your 7-day free trial for just <strong>£20/month</strong>
              <a href={PAYMENT_LINK} style={{ marginLeft: '16px', background: '#0a0f1a', color: '#d4af37', padding: '4px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>Get Started</a>
              <button onClick={() => setBannerVisible(false)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', fontSize: '18px', cursor: 'pointer', lineHeight: 1 }}>x</button>
            </div>
          )}
    
          {/* NAV */}
          <nav style={{ background: '#0d1526', borderBottom: '1px solid #1e3a5c', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '22px' }}>&#9878;</span>
              <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '18px' }}>CourtCraft Advocate</span>
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
              {['Home','Services','Resources','Contact'].map(l => (
                <a key={l} href="#" style={{ color: '#c8c0b0', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#d4af37'}
                  onMouseLeave={e => e.target.style.color = '#c8c0b0'}>{l}</a>
              ))}
            </div>
            <div className="nav-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a href="#" style={{ color: '#c8c0b0', fontSize: '14px' }}>Sign In</a>
              <a href={PAYMENT_LINK} className="btn-gold" style={{ padding: '8px 20px', fontSize: '13px' }}>Start Free Trial</a>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#d4af37' }}></span>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#d4af37' }}></span>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#d4af37' }}></span>
            </button>
          </nav>
    
          {/* MOBILE MENU */}
          {menuOpen && (
            <div style={{ background: '#0d1526', borderBottom: '1px solid #1e3a5c', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Home','Services','Resources','Contact'].map(l => (
                <a key={l} href="#" style={{ color: '#c8c0b0', fontSize: '16px' }} onClick={() => setMenuOpen(false)}>{l}</a>
              ))}
              <a href="#" style={{ color: '#c8c0b0', fontSize: '16px' }}>Sign In</a>
              <a href={PAYMENT_LINK} className="btn-gold" style={{ textAlign: 'center' }}>Start Free Trial</a>
            </div>
          )}
    
          {/* HERO */}
          <section style={{ background: 'linear-gradient(180deg, #0d1526 0%, #0a0f1a 100%)', padding: '80px 40px 60px', textAlign: 'center', borderBottom: '1px solid #1e3a5c' }}>
            <div style={{ display: 'inline-block', background: 'rgba(184,150,12,0.15)', border: '1px solid #b8960c', color: '#d4af37', padding: '6px 18px', borderRadius: '20px', fontSize: '13px', marginBottom: '24px' }}>
              Professional McKenzie Friend Services
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 'bold', color: '#ffffff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}>
              YOUR CHILDREN<br />DESERVE YOUR BEST
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: '#a89880', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              Professional McKenzie Friend Support at All Stages of Divorce & Custody Proceedings
            </p>
            <div style={{ display: 'inline-block', background: 'rgba(184,150,12,0.1)', border: '1px solid #b8960c', borderRadius: '8px', padding: '12px 24px', marginBottom: '32px' }}>
              <div style={{ color: '#d4af37', fontSize: '24px', fontWeight: 'bold' }}>£20/month</div>
              <div style={{ color: '#888', fontSize: '13px' }}>7-Day Free Trial — Cancel anytime. No commitment.</div>
            </div>
            <div className="hero-btns" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
              <a href="mailto:support@courtcraftadvocate.com" className="btn-outline">Contact Us</a>
              <a href={PAYMENT_LINK} className="btn-gold">Start Free Trial</a>
            </div>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '40px' }}>Join 5,000+ Parents Fighting Smart</p>
    
            {/* VIDEO */}
            <div style={{ maxWidth: '700px', margin: '0 auto 40px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #1e3a5c', position: 'relative', background: '#050a12' }}>
              <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: '#d4af37', padding: '4px 16px', borderRadius: '12px', fontSize: '12px', zIndex: 2, whiteSpace: 'nowrap' }}>
                WATCH OUR STORY
              </div>
              <video
                controls
                poster="/assets/endcard.jpeg"
                style={{ width: '100%', display: 'block' }}
              >
                <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
    
            {/* STATS */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '600px', margin: '0 auto 40px' }}>
              {[['5,000+','Parents Helped'],['12,000+','Court Reports'],['94%','Success Rate']].map(([n,l]) => (
                <div key={l} style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '10px', padding: '20px 12px', textAlign: 'center' }}>
                  <div style={{ color: '#d4af37', fontSize: '28px', fontWeight: 'bold' }}>{n}</div>
                  <div style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
    
            {/* TRUST BADGES */}
            <div className="trust-badges" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {['GDPR Compliant','McKenzie Friend Certified','24hr Response Time','5,000+ Parents Helped'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '13px' }}>
                  <span style={{ color: '#d4af37', fontSize: '16px' }}>&#10003;</span> {b}
                </div>
              ))}
            </div>
          </section>
    
          {/* SERVICES */}
          <section style={{ padding: '80px 40px', background: '#0a0f1a' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px, 5vw, 42px)', color: '#ffffff', marginBottom: '16px' }}>Our Services</h2>
              <p style={{ color: '#d4af37', fontSize: '18px', marginBottom: '12px' }}>Everything You Need to Fight Smart</p>
              <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                Comprehensive tools and support designed specifically for parents navigating family court proceedings.
              </p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
              {SERVICES.map(s => (
                <div key={s.title} style={{ background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '28px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 'bold', flex: 1, marginRight: '10px' }}>{s.title}</h3>
                    <span style={{ background: BADGE_COLORS[s.badge].bg, color: BADGE_COLORS[s.badge].color, padding: '3px 10px', borderRadius: '12px', fontSize: '11px', whiteSpace: 'nowrap' }}>{s.badge}</span>
                  </div>
                  <p style={{ color: '#8899aa', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>{s.desc}</p>
                  <a href={PAYMENT_LINK} style={{ color: '#d4af37', fontSize: '13px', fontWeight: 'bold' }}>Learn more &rarr;</a>
                </div>
              ))}
            </div>
          </section>
    
          {/* HOW IT WORKS */}
          <section style={{ padding: '80px 40px', background: '#0d1526', borderTop: '1px solid #1e3a5c', borderBottom: '1px solid #1e3a5c' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px, 5vw, 42px)', color: '#ffffff', marginBottom: '12px' }}>How It Works</h2>
              <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
                Get started in minutes. Our platform guides you through every step of your family court journey.
              </p>
            </div>
            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto 48px' }}>
              {STEPS.map(s => (
                <div key={s.num} style={{ background: '#0a0f1a', border: '1px solid #1e3a5c', borderRadius: '12px', padding: '32px 28px' }}>
                  <div style={{ color: '#d4af37', fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', opacity: 0.8 }}>{s.num}</div>
                  <h3 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ color: '#8899aa', fontSize: '14px', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href={PAYMENT_LINK} className="btn-gold">Get Started Today</a>
            </div>
          </section>
    
          {/* CTA BAND */}
          <section style={{ padding: '70px 40px', background: 'linear-gradient(135deg, #0d1a2e, #0a0f1a)', textAlign: 'center', borderBottom: '1px solid #1e3a5c' }}>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 38px)', color: '#ffffff', marginBottom: '16px' }}>Your Children Are Counting On You</h2>
            <p style={{ color: '#8899aa', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              Don't navigate family court alone. Get the professional tools and AI-powered guidance you need to present your case with confidence.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:support@courtcraftadvocate.com" className="btn-outline">Contact Us Today</a>
              <a href={PAYMENT_LINK} className="btn-gold">Start Free Trial</a>
            </div>
            <p style={{ color: '#666', fontSize: '13px', marginTop: '16px' }}>7-day free trial. £20/month. Cancel anytime.</p>
          </section>
    
          {/* TESTIMONIAL */}
          <section style={{ padding: '80px 40px', background: '#0a0f1a', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px, 5vw, 38px)', color: '#ffffff', marginBottom: '8px' }}>Trusted by 5,000+ Parents</h2>
            <p style={{ color: '#888', marginBottom: '48px' }}>Real stories from parents who used CourtCraft Advocate to navigate family court successfully.</p>
            <div style={{ maxWidth: '680px', margin: '0 auto', background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '40px 36px' }}>
              <div style={{ color: '#d4af37', fontSize: '28px', marginBottom: '20px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p style={{ color: '#c8c0b0', fontSize: '18px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '28px' }}>
                "CourtCraft Advocate was a lifeline during my custody battle. The court report generator saved me thousands in solicitor fees, and the AI assistant helped me understand every step of the process."
              </p>
              <div style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '16px' }}>Sarah M.</div>
              <div style={{ color: '#666', fontSize: '13px', marginTop: '4px' }}>London · Custody Case</div>
            </div>
          </section>
    
          {/* PRICING */}
          <section style={{ padding: '80px 40px', background: '#0d1526', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px, 5vw, 42px)', color: '#ffffff', marginBottom: '8px' }}>Simple Pricing</h2>
              <p style={{ color: '#d4af37', fontSize: '18px', marginBottom: '12px' }}>Invest in Your Children's Future</p>
              <p style={{ color: '#888' }}>One simple plan with everything you need. Start with a 7-day free trial.</p>
            </div>
            <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', maxWidth: '800px', margin: '0 auto 28px' }}>
              {/* FREE */}
              <div style={{ background: '#0a0f1a', border: '1px solid #1e3a5c', borderRadius: '16px', padding: '36px 28px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '20px', marginBottom: '4px' }}>Free Access</h3>
                <p style={{ color: '#666', fontSize: '13px', marginBottom: '20px' }}>Educational resources only</p>
                <div style={{ color: '#ffffff', fontSize: '36px', fontWeight: 'bold', marginBottom: '28px' }}>£0<span style={{ fontSize: '16px', color: '#666', fontWeight: 'normal' }}>/month</span></div>
                {FREE_FEATURES.map(f => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: f.included ? '#c8c0b0' : '#445', fontSize: '14px' }}>
                    <span style={{ color: f.included ? '#d4af37' : '#334', fontSize: '16px' }}>{f.included ? '✓' : '✗'}</span>
                    {f.text}
                  </div>
                ))}
                <a href="#" className="btn-outline" style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}>Browse Resources</a>
              </div>
              {/* PRO */}
              <div style={{ background: 'linear-gradient(180deg, #0d1e38 0%, #0a1628 100%)', border: '2px solid #b8960c', borderRadius: '16px', padding: '36px 28px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#b8960c', color: '#0a0f1a', padding: '4px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                <h3 style={{ color: '#ffffff', fontSize: '20px', marginBottom: '4px' }}>Pro Subscriber</h3>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>Full access to all tools</p>
                <div style={{ color: '#d4af37', fontSize: '36px', fontWeight: 'bold', marginBottom: '4px' }}>£20<span style={{ fontSize: '16px', color: '#888', fontWeight: 'normal' }}>/month</span></div>
                <div style={{ color: '#888', fontSize: '13px', marginBottom: '28px' }}>7-day free trial included</div>
                {PRO_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#c8c0b0', fontSize: '14px' }}>
                    <span style={{ color: '#d4af37', fontSize: '16px' }}>&#10003;</span> {f}
                  </div>
                ))}
                <a href={PAYMENT_LINK} className="btn-gold" style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}>Start 7-Day Free Trial</a>
                <p style={{ color: '#555', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>Cancel anytime. No hidden fees.</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', color: '#555', fontSize: '13px' }}>Prices shown in GBP. Also available in USD ($25/mo) and EUR (23/mo).</p>
          </section>
    
          {/* FINAL CTA */}
          <section style={{ padding: '80px 40px', background: 'linear-gradient(180deg, #0d1a2e, #060b14)', textAlign: 'center', borderTop: '1px solid #1e3a5c' }}>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', color: '#ffffff', marginBottom: '16px' }}>Ready to Fight Smart?</h2>
            <p style={{ color: '#8899aa', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Join thousands of parents who have used CourtCraft Advocate to navigate family court with confidence and achieve the best outcomes for their children.
            </p>
            <a href={PAYMENT_LINK} className="btn-gold" style={{ fontSize: '17px', padding: '16px 40px' }}>Start Your 7-Day Free Trial</a>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '14px' }}>No credit card required. Full access to all features.</p>
          </section>
    
          {/* LEGAL DISCLAIMER */}
          <section style={{ padding: '40px', background: '#060b14', borderTop: '1px solid #1e3a5c' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#0d1526', border: '1px solid #1e3a5c', borderRadius: '10px', padding: '28px 32px' }}>
              <h4 style={{ color: '#d4af37', marginBottom: '14px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Important Legal Disclaimers</h4>
              <p style={{ color: '#7788aa', fontSize: '13px', lineHeight: 1.8, marginBottom: '10px' }}>
                CourtCraft Advocate provides McKenzie Friend services only. We are NOT solicitors or barristers.
              </p>
              <p style={{ color: '#7788aa', fontSize: '13px', lineHeight: 1.8, marginBottom: '10px' }}>
                All advice and guidance should be verified with a legally qualified legal professional.
              </p>
              <p style={{ color: '#7788aa', fontSize: '13px', lineHeight: 1.8, marginBottom: '10px' }}>
                McKenzie Friends have rights of audience in family courts but cannot conduct litigation or provide legal advice in the traditional sense.
              </p>
              <p style={{ color: '#7788aa', fontSize: '13px', lineHeight: 1.8 }}>
                <strong style={{ color: '#8899bb' }}>GDPR Compliance:</strong> We process personal data in accordance with GDPR. Your information is encrypted and stored securely. You have the right to access, rectify, or request deletion of your personal data at any time.
              </p>
            </div>
          </section>
    
          {/* FOOTER */}
          <footer style={{ background: '#060b14', borderTop: '1px solid #1e3a5c', padding: '60px 40px 30px' }}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '1100px', margin: '0 auto 40px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#d4af37', fontSize: '20px' }}>&#9878;</span>
                  <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '16px' }}>CourtCraft Advocate</span>
                </div>
                <p style={{ color: '#667788', fontSize: '13px', lineHeight: 1.7, marginBottom: '12px' }}>
                  Professional McKenzie Friend support empowering parents through divorce and custody proceedings with confidence.
                </p>
                <a href="mailto:support@courtcraftadvocate.com" style={{ color: '#d4af37', fontSize: '13px' }}>support@courtcraftadvocate.com</a>
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</h4>
                {['Home','Services','Pricing','Resources','Contact Us','FAQs'].map(l => (
                  <a key={l} href="#" style={{ display: 'block', color: '#667788', fontSize: '13px', marginBottom: '10px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#d4af37'}
                    onMouseLeave={e => e.target.style.color = '#667788'}>{l}</a>
                ))}
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Legal & Policies</h4>
                {['Terms of Service','Privacy Policy','GDPR Policy','Cookie Policy','Copyright & Legal','Complaints Procedure','Data Deletion Request'].map(l => (
                  <a key={l} href="#" style={{ display: 'block', color: '#667788', fontSize: '13px', marginBottom: '10px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#d4af37'}
                    onMouseLeave={e => e.target.style.color = '#667788'}>{l}</a>
                ))}
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Subscriber Tools</h4>
                {['Dashboard','AI Legal Assistant','Court Report Generator','Child Contact Tracker','Document Manager','Billing & Subscription'].map(l => (
                  <a key={l} href="#" style={{ display: 'block', color: '#667788', fontSize: '13px', marginBottom: '10px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#d4af37'}
                    onMouseLeave={e => e.target.style.color = '#667788'}>{l}</a>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1e3a5c', paddingTop: '24px', textAlign: 'center' }}>
              <p style={{ color: '#445566', fontSize: '12px', marginBottom: '8px' }}>
                © 2026 CourtCraft Advocate™. All Rights Reserved. Registered in England & Wales.
              </p>
              <p style={{ color: '#445566', fontSize: '12px' }}>
                CourtCraft Advocate is a registered trademark. Protected by UK and International Copyright Law.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '16px' }}>
                <span style={{ color: '#445566', fontSize: '12px' }}>&#128274; SSL Encrypted</span>
                <span style={{ color: '#445566', fontSize: '12px' }}>&#10003; GDPR Compliant</span>
              </div>
            </div>
          </footer>
    
        </div>
      )
    }
    
