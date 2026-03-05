import { useState } from 'react'
    
    const NAV_ITEMS = ['Home', 'Services', 'Resources', 'Contact']
    
    const STATS = [
      { value: '5,000+', label: 'Parents Helped' },
      { value: '12,000+', label: 'Court Reports' },
      { value: '94%', label: 'Success Rate' },
    ]
    
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
      { title: 'Case Timeline Builder', badge: 'Subscribers', icon: '🗂️', desc: 'Build a chronological timeline of events for your case with evidence linking and export capabilities.' },
      { title: 'GDPR Compliant', badge: 'All Users', icon: '🛡️', desc: 'Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance.' },
      { title: 'Analytics Dashboard', badge: 'Subscribers', icon: '📊', desc: 'Visual summaries of contact patterns, financial tracking, and communication trends for your case.' },
    ]
    
    const STEPS = [
      { num: '01', title: 'Sign Up & Start Trial', desc: 'Create your account and get 7 days of full access to all features. No payment required upfront.' },
      { num: '02', title: 'Set Up Your Case', desc: 'Add your case details, children's information, and start logging contacts, communications, and finances.' },
      { num: '03', title: 'Get AI Guidance', desc: 'Use our AI Legal Assistant for instant answers about UK family law, court procedures, and your rights.' },
      { num: '04', title: 'Generate Court Reports', desc: 'Create professional, court-ready PDF reports with timelines, evidence, and statements of truth.' },
    ]
    
    const TESTIMONIALS = [
      { text: 'CourtCraft Advocate was a lifeline during my custody battle. The court report generator saved me thousands in solicitor fees, and the AI assistant helped me understand every step of the process.', name: 'Sarah M.', location: 'London · Custody Case', initial: 'S' },
    ]
    
    const FREE_FEATURES = [
      'Legal resources library',
      'Blog articles & guides',
      'Legal glossary access',
      'FAQ section',
    ]
    
    const FREE_LOCKED = [
      'AI Legal Assistant',
      'Court Report Generator',
      'Child Contact Tracker',
      'Finance Tracker',
      'Document Storage',
      'Communication Logger',
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
      Subscribers: { bg: '#1e3a5f', color: '#60a5fa' },
      Free: { bg: '#14532d', color: '#4ade80' },
      'All Users': { bg: '#3b1d6b', color: '#c084fc' },
    }
    
    export default function App() {
      const [activeNav, setActiveNav] = useState('Home')
      const [mobileOpen, setMobileOpen] = useState(false)
      const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
      const TRIAL_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
      return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: '100vh', background: '#0a0e1a', color: 'white' }}>
    
          {/* NAV */}
          <nav style={{
            position: 'sticky', top: 0, zIndex: 1000,
            background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '0 40px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', height: '68px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '22px' }}>⚖️</span>
              <span style={{ fontWeight: 800, fontSize: '18px', color: '#c9a84c' }}>CourtCraft<span style={{ color: 'white' }}>Advocate</span></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {NAV_ITEMS.map(item => (
                <button key={item} onClick={() => setActiveNav(item)} style={{
                  background: 'transparent', border: 'none',
                  color: activeNav === item ? '#c9a84c' : 'rgba(255,255,255,0.7)',
                  fontWeight: 500, fontSize: '14px', padding: '8px 14px',
                  cursor: 'pointer', borderRadius: '6px',
                  transition: 'color 0.2s',
                }}>{item}</button>
              ))}
              <button style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', padding: '8px 18px', borderRadius: '8px',
                fontSize: '14px', fontWeight: 500, cursor: 'pointer', marginLeft: '8px',
              }}>Sign In</button>
              <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
                color: 'white', padding: '9px 20px', borderRadius: '8px',
                fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>Start Free Trial</a>
            </div>
          </nav>
    
          {/* HERO */}
          <section style={{
            background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1f35 50%, #0a0e1a 100%)',
            padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
    
            <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c', padding: '6px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', marginBottom: '28px' }}>
              TRUSTED LEGAL PARTNERS
            </div>
    
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '4px', marginBottom: '12px' }}>EMPOWERING FAMILIES</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Professional McKenzie Friend Services</div>
    
            <h1 style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 900, lineHeight: 1.0, margin: '0 0 32px', letterSpacing: '-2px' }}>
              <span style={{ color: 'white' }}>YOUR</span><br />
              <span style={{ color: '#c9a84c' }}>CHILDREN</span><br />
              <span style={{ color: 'white' }}>DESERVE</span><br />
              <span style={{ color: 'white' }}>YOUR BEST</span>
            </h1>
    
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 16px', lineHeight: 1.6 }}>
              Professional McKenzie Friend Support at All Stages of Divorce &amp; Custody Proceedings
            </p>
    
            <div style={{ margin: '0 0 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '32px', fontWeight: 800, color: '#c9a84c' }}>£20/month</span>
              <div style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>7-Day Free Trial</div>
            </div>
    
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '36px' }}>Cancel anytime. No commitment.</div>
    
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="mailto:support@courtcraftadvocate.com" style={{
                background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)',
                padding: '14px 32px', borderRadius: '10px', fontWeight: 600, fontSize: '16px',
                textDecoration: 'none',
              }}>Contact Us</a>
              <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
                color: 'white', padding: '14px 32px', borderRadius: '10px',
                fontWeight: 700, fontSize: '16px', textDecoration: 'none',
              }}>Start Free Trial</a>
            </div>
    
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '60px' }}>
              Join 5,000+ Parents Fighting Smart
            </div>
    
            {/* Stats */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '42px', fontWeight: 900, color: '#c9a84c' }}>{s.value}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
    
            {/* Trust badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px' }}>
              {['GDPR COMPLIANT', 'MCKENZIE FRIEND CERTIFIED', '24HR RESPONSE TIME', '5,000+ PARENTS HELPED'].map(b => (
                <div key={b} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', padding: '6px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px' }}>{b}</div>
              ))}
            </div>
          </section>
    
          {/* SERVICES */}
          <section style={{ padding: '80px 40px', background: '#0d1117' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: '#c9a84c', marginBottom: '12px' }}>OUR SERVICES</div>
                <h2 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 16px' }}>Everything You Need to Fight Smart</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '560px', margin: '0 auto' }}>
                  Comprehensive tools and support designed specifically for parents navigating family court proceedings.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                {SERVICES.map(s => (
                  <div key={s.title} style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px', padding: '28px', transition: 'all 0.2s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '28px' }}>{s.icon}</span>
                        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>{s.title}</h3>
                      </div>
                      <span style={{
                        background: BADGE_COLORS[s.badge]?.bg || '#1e3a5f',
                        color: BADGE_COLORS[s.badge]?.color || '#60a5fa',
                        padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                      }}>{s.badge}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>
                    <button style={{ background: 'transparent', border: 'none', color: '#c9a84c', fontSize: '14px', fontWeight: 600, cursor: 'pointer', padding: 0 }}>Learn more →</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* HOW IT WORKS */}
          <section style={{ padding: '80px 40px', background: '#0a0e1a' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: '#c9a84c', marginBottom: '12px' }}>HOW IT WORKS</div>
                <h2 style={{ fontSize: '40px', fontWeight: 800, margin: 0 }}>Get started in minutes...</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {STEPS.map(step => (
                  <div key={step.num} style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px', padding: '32px',
                  }}>
                    <div style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(201,168,76,0.2)', marginBottom: '16px', lineHeight: 1 }}>{step.num}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
                  background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
                  color: 'white', padding: '16px 40px', borderRadius: '10px',
                  fontWeight: 700, fontSize: '16px', textDecoration: 'none', display: 'inline-block',
                }}>Get Started Today</a>
              </div>
            </div>
          </section>
    
          {/* CTA BANNER */}
          <section style={{
            background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)',
            padding: '80px 40px', textAlign: 'center',
          }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 12px' }}>Your Children Are Counting On You</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Don't navigate family court alone. Get the professional tools and AI-powered guidance you need to present your case with confidence.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
              <a href="mailto:support@courtcraftadvocate.com" style={{
                background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.4)',
                padding: '14px 32px', borderRadius: '10px', fontWeight: 600, fontSize: '16px', textDecoration: 'none',
              }}>Contact Us Today</a>
              <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
                color: 'white', padding: '14px 32px', borderRadius: '10px',
                fontWeight: 700, fontSize: '16px', textDecoration: 'none',
              }}>Start Free Trial</a>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>7-day free trial. £20/month. Cancel anytime.</div>
          </section>
    
          {/* TESTIMONIALS */}
          <section style={{ padding: '80px 40px', background: '#0d1117' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: '#c9a84c', marginBottom: '12px' }}>TESTIMONIALS</div>
                <h2 style={{ fontSize: '40px', fontWeight: 800, margin: 0 }}>Trusted by 5,000+ Parents</h2>
              </div>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px', padding: '32px', maxWidth: '520px', flex: '1',
                  }}>
                    <div style={{ fontSize: '48px', color: '#c9a84c', lineHeight: 1, marginBottom: '16px' }}>"</div>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px', fontStyle: 'italic' }}>"{t.text}"</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #c9a84c, #a0722a)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>{t.initial}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                  {[['4.9/5', 'Average Rating'], ['500+', '5-Star Reviews'], ['98%', 'Would Recommend']].map(([val, lbl]) => (
                    <div key={lbl} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 32px' }}>
                      <div style={{ fontSize: '32px', fontWeight: 800, color: '#c9a84c' }}>{val}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '4px' }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
    
          {/* PRICING */}
          <section style={{ padding: '80px 40px', background: '#0a0e1a' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: '#c9a84c', marginBottom: '12px' }}>SIMPLE PRICING</div>
              <h2 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 12px' }}>Invest in Your Children's Future</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginBottom: '56px' }}>One simple plan with everything you need. Start with a 7-day free trial.</p>
    
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                {/* Free */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px', textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Free Access</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Educational resources only</div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 900 }}>£0</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>/month</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', margin: '24px 0 16px' }}>INCLUDES</div>
                  {FREE_FEATURES.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                      <span style={{ color: '#4ade80' }}>✓</span> {f}
                    </div>
                  ))}
                  {FREE_LOCKED.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>
                      <span>✗</span> {f}
                    </div>
                  ))}
                  <button style={{ marginTop: '24px', width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Browse Resources</button>
                </div>
    
                {/* Pro */}
                <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)', border: '2px solid #c9a84c', borderRadius: '20px', padding: '40px', textAlign: 'left', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #c9a84c, #a0722a)', color: 'white', padding: '4px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Pro Subscriber</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Full access to all tools</div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 900, color: '#c9a84c' }}>£20</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>/month</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>7-day free trial included</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>INCLUDES</div>
                  {PRO_FEATURES.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                      <span style={{ color: '#c9a84c' }}>✓</span> {f}
                    </div>
                  ))}
                  <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
                    marginTop: '24px', display: 'block', width: '100%', background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
                    color: 'white', padding: '14px', borderRadius: '10px', fontSize: '15px',
                    fontWeight: 700, textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box',
                  }}>Start 7-Day Free Trial</a>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: '12px' }}>Cancel anytime. No hidden fees.</div>
                </div>
              </div>
    
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                Prices shown in GBP. Also available in USD ($25/mo) and EUR (€23/mo).
              </div>
            </div>
          </section>
    
          {/* FINAL CTA */}
          <section style={{ padding: '80px 40px', background: '#0d1117', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 12px' }}>Ready to Fight Smart?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Join thousands of parents who have used CourtCraft Advocate to navigate family court with confidence and achieve the best outcomes for their children.
            </p>
            <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, #c9a84c, #a0722a)',
              color: 'white', padding: '16px 44px', borderRadius: '10px',
              fontWeight: 700, fontSize: '17px', textDecoration: 'none', display: 'inline-block', marginBottom: '12px',
            }}>Start Your 7-Day Free Trial</a>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>No credit card required. Full access to all features.</div>
    
            <div style={{ maxWidth: '700px', margin: '48px auto 0', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '28px', textAlign: 'left' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>IMPORTANT LEGAL DISCLAIMERS</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
                CourtCraft Advocate provides McKenzie Friend services only. We are NOT solicitors or barristers. All advice and guidance should be verified with a legally qualified legal professional. McKenzie Friends have rights of audience in family courts but cannot conduct litigation or provide legal advice in the traditional sense.<br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.6)' }}>GDPR Compliance:</strong> All personal data is processed in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. You may request deletion of your data at any time.
              </p>
            </div>
          </section>
    
          {/* FOOTER */}
          <footer style={{ background: '#060810', padding: '60px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '20px' }}>⚖️</span>
                    <span style={{ fontWeight: 800, fontSize: '16px', color: '#c9a84c' }}>CourtCraft<span style={{ color: 'white' }}>Advocate</span></span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                    Professional McKenzie Friend support empowering parents through divorce and custody proceedings with confidence.
                  </p>
                  <a href="mailto:support@courtcraftadvocate.com" style={{ color: '#c9a84c', fontSize: '14px', textDecoration: 'none' }}>support@courtcraftadvocate.com</a>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>QUICK LINKS</div>
                  {['Home', 'Services', 'Pricing', 'Resources', 'Contact Us', 'FAQs'].map(l => (
                    <div key={l} style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>{l}</a></div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>LEGAL & POLICIES</div>
                  {['Terms of Service', 'Privacy Policy', 'GDPR Policy', 'Cookie Policy', 'Copyright & Legal', 'Complaints Procedure', 'Data Deletion Request'].map(l => (
                    <div key={l} style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>{l}</a></div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>SUBSCRIBER TOOLS</div>
                  {['Dashboard', 'AI Legal Assistant', 'Court Report Generator', 'Child Contact Tracker', 'Document Manager', 'Billing & Subscription'].map(l => (
                    <div key={l} style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>{l}</a></div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                  © 2026 CourtCraft Advocate™. All Rights Reserved. CourtCraft Advocate is a registered trademark.
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {['SSL Encrypted', 'GDPR Compliant'].map(b => (
                    <div key={b} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', padding: '4px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>{b}</div>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      )
    }
    
