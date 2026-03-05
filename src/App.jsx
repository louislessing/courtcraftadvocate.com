import { useState } from 'react'
    
    const NAV_ITEMS = ['Dashboard', 'Cases', 'Documents', 'Calendar', 'Clients', 'Settings']
    
    const STEPS = [
      { num: '01', title: 'Create Your Account', desc: 'Sign up in minutes and access your secure dashboard immediately.' },
      { num: '02', title: 'Set Up Your Case', desc: 'Add your case details, children information, and start logging contacts, communications, and finances.' },
      { num: '03', title: 'Build Your Evidence', desc: 'Upload documents, record incidents, and generate professional reports with a single click.' },
      { num: '04', title: 'Present with Confidence', desc: 'Walk into court with organised, professional documentation that speaks for itself.' },
    ]
    
    const STATS = [
      { label: 'Active Cases', value: 24, color: '#B8960C' },
      { label: 'Pending Documents', value: 8, color: '#1a3a5c' },
      { label: 'Upcoming Hearings', value: 5, color: '#B8960C' },
      { label: 'Total Clients', value: 61, color: '#1a3a5c' },
    ]
    
    const CASES = [
      { id: 'CC-001', client: 'Sarah Johnson', type: 'Child Custody', status: 'Active', date: '2024-03-15' },
      { id: 'CC-002', client: 'Michael Brown', type: 'Divorce Proceedings', status: 'Pending', date: '2024-03-18' },
      { id: 'CC-003', client: 'Emma Wilson', type: 'Visitation Rights', status: 'Active', date: '2024-03-20' },
      { id: 'CC-004', client: 'James Taylor', type: 'Financial Settlement', status: 'Review', date: '2024-03-22' },
      { id: 'CC-005', client: 'Lisa Anderson', type: 'Child Custody', status: 'Active', date: '2024-03-25' },
    ]
    
    const STATUS_COLORS = {
      Active: { bg: '#dcfce7', text: '#166534' },
      Pending: { bg: '#fef9c3', text: '#854d0e' },
      Review: { bg: '#e0f2fe', text: '#075985' },
    }
    
    const SERVICES = [
      { title: 'Case Timeline Builder', badge: 'Subscribers', desc: 'Create chronological case timelines automatically.' },
      { title: 'Communication Logger', badge: 'Free', desc: 'Log every call, text, and email with timestamps.' },
      { title: 'Evidence Organiser', badge: 'Subscribers', desc: 'Upload and categorise all your evidence securely.' },
      { title: 'Court Report Generator', badge: 'Subscribers', desc: 'Professional court-ready reports in minutes.' },
      { title: 'Financial Tracker', badge: 'Free', desc: 'Track maintenance payments and financial records.' },
      { title: 'Hearing Prep Assistant', badge: 'Subscribers', desc: 'Step-by-step hearing preparation checklists.' },
      { title: 'Document Templates', badge: 'All Users', desc: 'Access 50+ legal document templates.' },
      { title: 'McKenzie Friend Guide', badge: 'Free', desc: 'Know your rights and how to use a McKenzie Friend.' },
      { title: 'Safeguarding Reports', badge: 'Subscribers', desc: 'Generate safeguarding concern reports instantly.' },
      { title: 'Contact Order Tracker', badge: 'Subscribers', desc: 'Monitor compliance with contact orders.' },
      { title: 'Legal Glossary', badge: 'All Users', desc: 'Understand every legal term you encounter.' },
      { title: 'Emergency Checklist', badge: 'Free', desc: 'What to do in urgent family court situations.' },
    ]
    
    const BADGE_COLORS = {
      Subscribers: { bg: '#B8960C', text: 'white' },
      Free: { bg: '#166534', text: 'white' },
      'All Users': { bg: '#1a3a5c', text: 'white' },
    }
    
    const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'
    
    export default function App() {
      const [activeNav, setActiveNav] = useState('Dashboard')
      const [bannerVisible, setBannerVisible] = useState(true)
      const [menuOpen, setMenuOpen] = useState(false)
    
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600
    
      return (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', background: '#f0f4f8', margin: 0, padding: 0 }}>
    
          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { margin: 0; padding: 0; }
    
            .nav-links { display: flex; gap: 4px; }
            .hamburger { display: none; }
            .mobile-menu { display: none; }
    
            .hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
            .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
            .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
            .hero-title { font-size: 42px; font-weight: 900; color: white; line-height: 1.1; margin-bottom: 16px; text-transform: uppercase; letter-spacing: -0.5px; }
            .hero-sub { font-size: 18px; color: #a0b4c8; margin-bottom: 32px; }
            .section-pad { padding: 64px 32px; max-width: 1200px; margin: 0 auto; }
    
            @media (max-width: 900px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr); }
              .services-grid { grid-template-columns: repeat(2, 1fr); }
              .footer-grid { grid-template-columns: repeat(2, 1fr); }
              .hero-title { font-size: 32px; }
              .section-pad { padding: 40px 24px; }
            }
    
            @media (max-width: 600px) {
              .nav-links { display: none; }
              .hamburger { display: block; background: none; border: none; color: #B8960C; font-size: 26px; cursor: pointer; }
              .mobile-menu { display: flex; flex-direction: column; background: #0d1f35; padding: 16px; gap: 8px; }
              .mobile-menu button { background: none; border: none; color: #a0b4c8; font-size: 15px; text-align: left; padding: 10px 0; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.08); }
              .stats-grid { grid-template-columns: repeat(2, 1fr); }
              .services-grid { grid-template-columns: 1fr; }
              .steps-grid { grid-template-columns: 1fr; }
              .pricing-grid { grid-template-columns: 1fr; }
              .footer-grid { grid-template-columns: 1fr; }
              .hero-title { font-size: 26px; }
              .hero-sub { font-size: 15px; }
              .hero-btns a { width: 100%; text-align: center; }
              .section-pad { padding: 32px 16px; }
              .banner-text { font-size: 13px !important; }
            }
          `}</style>
    
          {/* £20/month Banner */}
          {bannerVisible && (
            <div style={{
              background: 'linear-gradient(90deg, #1a3a5c 0%, #B8960C 100%)',
              color: 'white', padding: '12px 20px', position: 'relative',
              zIndex: 1000, display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '16px', flexWrap: 'wrap'
            }}>
              <span className="banner-text" style={{ fontSize: '15px', fontWeight: 600, textAlign: 'center' }}>
                ⚖️ Get full access to CourtCraft Advocate for just <strong>£20/month</strong> — No solicitor needed!
              </span>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: 'white', color: '#1a3a5c', fontWeight: 700,
                padding: '6px 18px', borderRadius: '20px', textDecoration: 'none',
                fontSize: '14px', whiteSpace: 'nowrap'
              }}>Get Started — £20/month</a>
              <button onClick={() => setBannerVisible(false)} style={{
                position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', color: 'white',
                fontSize: '22px', cursor: 'pointer', lineHeight: 1
              }}>×</button>
            </div>
          )}
    
          {/* Header / Nav */}
          <header style={{
            background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
            padding: '0 32px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', height: '64px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 999
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '26px' }}>⚖️</span>
              <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '18px' }}>CourtCraft Advocate</span>
            </div>
            <nav className="nav-links">
              {NAV_ITEMS.map(item => (
                <button key={item} onClick={() => setActiveNav(item)} style={{
                  background: activeNav === item ? 'rgba(184,150,12,0.2)' : 'transparent',
                  color: activeNav === item ? '#B8960C' : '#a0b4c8',
                  border: 'none', padding: '8px 14px', borderRadius: '6px',
                  cursor: 'pointer', fontWeight: 500, fontSize: '14px'
                }}>{item}</button>
              ))}
            </nav>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: '#B8960C', color: 'white', fontWeight: 700,
                padding: '8px 18px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'
              }}>Start Free Trial</a>
              <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            </div>
          </header>
    
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu">
              {NAV_ITEMS.map(item => (
                <button key={item} onClick={() => { setActiveNav(item); setMenuOpen(false); }}>{item}</button>
              ))}
            </div>
          )}
    
          {/* Hero */}
          <section style={{
            background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
            padding: '80px 32px', textAlign: 'center'
          }}>
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{
                display: 'inline-block', background: 'rgba(184,150,12,0.15)',
                border: '1px solid #B8960C', borderRadius: '20px',
                padding: '6px 18px', marginBottom: '24px'
              }}>
                <span style={{ color: '#B8960C', fontSize: '14px', fontWeight: 600 }}>
                  ⚖️ McKenzie Friend Support Platform — £20/month
                </span>
              </div>
              <h1 className="hero-title">YOUR CHILDREN DESERVE YOUR BEST</h1>
              <p className="hero-sub">
                Professional family court support — document everything, present with confidence,
                protect what matters most. No solicitor needed.
              </p>
              <div style={{
                display: 'flex', gap: '16px', justifyContent: 'center',
                flexWrap: 'wrap', marginBottom: '48px'
              }}>
                <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                  background: '#B8960C', color: 'white', fontWeight: 700,
                  padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px'
                }}>Get Started — £20/month</a>
                <a href="mailto:support@courtcraftadvocate.com" style={{
                  background: 'transparent', color: '#B8960C', fontWeight: 700,
                  padding: '16px 36px', borderRadius: '8px', textDecoration: 'none',
                  fontSize: '16px', border: '2px solid #B8960C'
                }}>Contact Us</a>
              </div>
              <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[['5,000+', 'Parents Supported'], ['12,000+', 'Reports Generated'], ['94%', 'Success Rate']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#B8960C' }}>{val}</div>
                    <div style={{ fontSize: '13px', color: '#607d9a' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Video Section */}
          <section style={{ background: '#0d1f35', padding: '48px 32px', textAlign: 'center' }}>
            <h2 style={{ color: '#B8960C', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
              See How CourtCraft Works
            </h2>
            <p style={{ color: '#607d9a', marginBottom: '28px', fontSize: '15px' }}>
              Watch our 20-second overview
            </p>
            <div style={{
              maxWidth: '760px', margin: '0 auto', borderRadius: '16px',
              overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              border: '2px solid #B8960C'
            }}>
              <video controls autoPlay muted style={{ width: '100%', display: 'block' }}>
                <source src="/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
    
          {/* Stats */}
          <div style={{ background: '#f0f4f8', padding: '40px 32px' }}>
            <div className="stats-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {STATS.map(stat => (
                <div key={stat.label} style={{
                  background: 'white', borderRadius: '12px', padding: '28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: ('4px solid ' + stat.color)
                }}>
                  <div style={{ fontSize: '40px', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Services */}
          <section style={{ background: 'white', padding: '64px 32px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '8px' }}>
                Everything You Need to Win Your Case
              </h2>
              <p style={{ color: '#607d9a', textAlign: 'center', marginBottom: '40px', fontSize: '15px' }}>
                Professional tools built specifically for family court proceedings
              </p>
              <div className="services-grid">
                {SERVICES.map(s => (
                  <div key={s.title} style={{
                    background: '#f8fafc', borderRadius: '12px', padding: '24px',
                    border: '1px solid #e2e8f0', transition: 'all 0.2s'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a3a5c' }}>{s.title}</h3>
                      <span style={{
                        padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                        background: BADGE_COLORS[s.badge].bg, color: BADGE_COLORS[s.badge].text,
                        whiteSpace: 'nowrap', marginLeft: '8px'
                      }}>{s.badge}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#607d9a', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* How It Works */}
          <section style={{ background: '#f0f4f8', padding: '64px 32px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '40px' }}>
                How It Works
              </h2>
              <div className="steps-grid">
                {STEPS.map(step => (
                  <div key={step.num} style={{
                    background: 'white', borderRadius: '12px', padding: '32px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                  }}>
                    <div style={{
                      width: '48px', height: '48px', background: '#B8960C', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 800, fontSize: '16px', marginBottom: '16px'
                    }}>{step.num}</div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1a3a5c', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ fontSize: '14px', color: '#607d9a', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Cases Table */}
          <section style={{ background: 'white', padding: '64px 32px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <h2 style={{ color: '#1a3a5c', fontSize: '22px', fontWeight: 700 }}>Recent Cases</h2>
                <button style={{
                  background: '#1a3a5c', color: 'white', border: 'none',
                  borderRadius: '8px', padding: '10px 20px', fontSize: '14px',
                  fontWeight: 600, cursor: 'pointer'
                }}>+ New Case</button>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      {['Case ID', 'Client', 'Type', 'Status', 'Date'].map(h => (
                        <th key={h} style={{
                          padding: '12px 16px', textAlign: 'left', fontSize: '13px',
                          color: '#666', fontWeight: 600, borderBottom: '1px solid #e8ecf0'
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CASES.map((c, i) => (
                      <tr key={c.id} style={{ background: i % 2 === 0 ? 'white' : '#fafbfc' }}>
                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#B8960C', fontWeight: 600 }}>{c.id}</td>
                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#1a3a5c', fontWeight: 500 }}>{c.client}</td>
                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555' }}>{c.type}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{
                            padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                            background: STATUS_COLORS[c.status] ? STATUS_COLORS[c.status].bg : '#f1f5f9',
                            color: STATUS_COLORS[c.status] ? STATUS_COLORS[c.status].text : '#475569'
                          }}>{c.status}</span>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555' }}>{c.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
    
          {/* Pricing */}
          <section style={{ background: '#f0f4f8', padding: '64px 32px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Simple, Honest Pricing</h2>
              <p style={{ color: '#607d9a', marginBottom: '40px', fontSize: '15px' }}>No hidden fees. Cancel anytime.</p>
              <div className="pricing-grid">
                <div style={{
                  background: 'white', borderRadius: '16px', padding: '36px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a3a5c', marginBottom: '8px' }}>Free</h3>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#1a3a5c', marginBottom: '20px' }}>£0<span style={{ fontSize: '16px', fontWeight: 400, color: '#607d9a' }}>/month</span></div>
                  {['Communication Logger', 'Financial Tracker', 'McKenzie Friend Guide', 'Legal Glossary', 'Emergency Checklist'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#555' }}>
                      <span style={{ color: '#166534', fontWeight: 700 }}>✓</span>{f}
                    </div>
                  ))}
                  <a href="/register" style={{
                    display: 'block', textAlign: 'center', marginTop: '24px',
                    background: '#f0f4f8', color: '#1a3a5c', fontWeight: 700,
                    padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'
                  }}>Get Started Free</a>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #1a3a5c 0%, #0d1f35 100%)',
                  borderRadius: '16px', padding: '36px', textAlign: 'left',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: '#B8960C', color: 'white', fontSize: '11px',
                    fontWeight: 700, padding: '4px 12px', borderRadius: '20px'
                  }}>MOST POPULAR</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Pro</h3>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#B8960C', marginBottom: '20px' }}>£20<span style={{ fontSize: '16px', fontWeight: 400, color: '#a0b4c8' }}>/month</span></div>
                  {['Everything in Free', 'Case Timeline Builder', 'Court Report Generator', 'Evidence Organiser', 'Hearing Prep Assistant', 'Safeguarding Reports', 'Contact Order Tracker'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#a0b4c8' }}>
                      <span style={{ color: '#B8960C', fontWeight: 700 }}>✓</span>{f}
                    </div>
                  ))}
                  <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', textAlign: 'center', marginTop: '24px',
                    background: '#B8960C', color: 'white', fontWeight: 700,
                    padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px'
                  }}>Get Started — £20/month</a>
                </div>
              </div>
            </div>
          </section>
    
          {/* Footer CTA */}
          <section style={{
            background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
            padding: '64px 32px', textAlign: 'center'
          }}>
            <h2 style={{ color: '#B8960C', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
              Ready to Take Control of Your Case?
            </h2>
            <p style={{ color: '#a0b4c8', fontSize: '16px', marginBottom: '32px' }}>
              Join thousands of families who trust CourtCraft Advocate — just £20/month.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
                background: '#B8960C', color: 'white', fontWeight: 700,
                padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px'
              }}>Get Started — £20/month</a>
              <a href="mailto:support@courtcraftadvocate.com" style={{
                background: 'transparent', color: '#B8960C', fontWeight: 700,
                padding: '16px 36px', borderRadius: '8px', textDecoration: 'none',
                fontSize: '16px', border: '2px solid #B8960C'
              }}>Contact Us</a>
            </div>
            <p style={{ color: '#607d9a', fontSize: '14px', marginTop: '24px' }}>support@courtcraftadvocate.com</p>
          </section>
    
          {/* Footer */}
          <footer style={{ background: '#080f1a', padding: '48px 32px 24px' }}>
            <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto 32px' }}>
              <div>
                <div style={{ color: '#B8960C', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>⚖️ CourtCraft Advocate</div>
                <p style={{ color: '#607d9a', fontSize: '13px', lineHeight: 1.7 }}>
                  Empowering families to navigate the family court system with confidence and professionalism.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Quick Links</h4>
                {['Dashboard', 'Cases', 'Documents', 'Calendar'].map(l => (
                  <div key={l} style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#607d9a', textDecoration: 'none', fontSize: '13px' }}>{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Legal</h4>
                {['Privacy Policy', 'Terms of Service', 'GDPR Compliance', 'Cookie Policy'].map(l => (
                  <div key={l} style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#607d9a', textDecoration: 'none', fontSize: '13px' }}>{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Contact</h4>
                <p style={{ color: '#607d9a', fontSize: '13px', marginBottom: '8px' }}>support@courtcraftadvocate.com</p>
                <p style={{ color: '#607d9a', fontSize: '12px', lineHeight: 1.6 }}>
                  CourtCraft Advocate is a McKenzie Friend support platform. We are not solicitors and do not provide legal advice.
                </p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', textAlign: 'center' }}>
              <p style={{ color: '#3a4a5c', fontSize: '12px' }}>
                © 2024 CourtCraft Advocate. All rights reserved. McKenzie Friend services are not regulated legal advice.
              </p>
            </div>
          </footer>
    
        </div>
      )
    }
    
