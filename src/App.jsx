import { useState } from 'react'
import './App.css'

const NAV_ITEMS = ['Dashboard', 'Cases', 'Documents', 'Calendar', 'Clients', 'Settings']

const STATS = [
  { label: 'Active Cases', value: '24', color: '#4f46e5' },
  { label: 'Pending Documents', value: '8', color: '#0891b2' },
  { label: 'Upcoming Hearings', value: '5', color: '#059669' },
  { label: 'Total Clients', value: '61', color: '#d97706' },
]

const RECENT_CASES = [
  { id: 'CC-2024-001', title: 'Smith v. Jones', status: 'Active', date: '2024-03-15', type: 'Civil' },
  { id: 'CC-2024-002', title: 'State v. Williams', status: 'Pending', date: '2024-03-18', type: 'Criminal' },
  { id: 'CC-2024-003', title: 'Brown Estate', status: 'Active', date: '2024-03-20', type: 'Probate' },
  { id: 'CC-2024-004', title: 'Taylor Divorce', status: 'Review', date: '2024-03-22', type: 'Family' },
  { id: 'CC-2024-005', title: 'Corp v. Startup', status: 'Active', date: '2024-03-25', type: 'Commercial' },
]

const STATUS_COLORS = {
  Active: '#059669',
  Pending: '#d97706',
  Review: '#4f46e5',
  Closed: '#6b7280',
}

function App() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', background: '#f8fafc' }}>

      {/* £20/month Sticky Banner */}
      {bannerVisible && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          background: 'linear-gradient(90deg, #1e1b4b 0%, #4f46e5 50%, #1e1b4b 100%)',
          color: 'white', padding: '12px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}>
          <span style={{ fontSize: '20px' }}>⚖️</span>
          <span style={{ fontSize: '15px', fontWeight: 500 }}>
            Get full access to CourtCraft Advocate for just
          </span>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#fbbf24' }}>£20/month</span>
          <a
            href="https://buy.stripe.com/courtcraftadvocate"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fbbf24', color: '#1e1b4b', padding: '8px 20px',
              borderRadius: '20px', fontWeight: 700, fontSize: '14px',
              textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(251,191,36,0.4)',
            }}
            onMouseOver={e => e.target.style.background = '#f59e0b'}
            onMouseOut={e => e.target.style.background = '#fbbf24'}
          >
            Get Started Now →
          </a>
          <button
            onClick={() => setBannerVisible(false)}
            style={{
              position: 'absolute', right: '16px', background: 'transparent',
              border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
              fontSize: '18px', fontWeight: 700, lineHeight: 1,
            }}
          >✕</button>
        </div>
      )}

      <div style={{ display: 'flex', flex: 1, marginTop: bannerVisible ? '52px' : '0', transition: 'margin-top 0.2s' }}>

        {/* Sidebar */}
        <aside style={{
          width: sidebarOpen ? '240px' : '64px',
          background: '#1e1b4b',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.2s ease',
          position: 'fixed',
          height: `calc(100vh - ${bannerVisible ? '52px' : '0px'})`,
          top: bannerVisible ? '52px' : '0',
          zIndex: 100,
        }}>
          {/* Logo */}
          <div style={{ padding: '24px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: '#4f46e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>⚖️</div>
            {sidebarOpen && <span style={{ fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap' }}>CourtCraft</span>}
          </div>

          {/* Nav Items */}
          <nav style={{ flex: 1, padding: '16px 8px' }}>
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => setActiveNav(item)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: activeNav === item ? 'rgba(79,70,229,0.3)' : 'transparent',
                color: activeNav === item ? '#a5b4fc' : 'rgba(255,255,255,0.7)',
                fontWeight: activeNav === item ? 600 : 400,
                fontSize: '14px', marginBottom: '4px', textAlign: 'left',
                transition: 'all 0.15s',
              }}>
                <span style={{ fontSize: '16px', flexShrink: 0 }}>
                  {item === 'Dashboard' ? '📊' : item === 'Cases' ? '📁' : item === 'Documents' ? '📄' :
                   item === 'Calendar' ? '📅' : item === 'Clients' ? '👥' : '⚙️'}
                </span>
                {sidebarOpen && <span style={{ whiteSpace: 'nowrap' }}>{item}</span>}
              </button>
            ))}
          </nav>

          {/* Toggle */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
            margin: '16px 8px', padding: '10px', background: 'rgba(255,255,255,0.1)',
            border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer', fontSize: '14px'
          }}>
            {sidebarOpen ? '◀ Collapse' : '▶'}
          </button>
        </aside>

        {/* Main Content */}
        <main style={{ marginLeft: sidebarOpen ? '240px' : '64px', flex: 1, transition: 'margin-left 0.2s ease' }}>

          {/* Top Bar */}
          <header style={{
            background: 'white', padding: '16px 32px', borderBottom: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'sticky', top: 0, zIndex: 50,
          }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#1e1b4b' }}>{activeNav}</h1>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>CourtCraft Advocate Platform</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#f1f5f9', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#64748b' }}>
                🔍 Search cases...
              </div>
              <div style={{ width: '36px', height: '36px', background: '#4f46e5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, cursor: 'pointer' }}>
                L
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div style={{ padding: '32px' }}>

            {/* VIDEO SECTION */}
            <div style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)', marginBottom: '32px',
            }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>🎬</span>
                <div>
                  <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#1e1b4b' }}>Welcome to CourtCraft Advocate</h2>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Empowering Families. Securing Futures.</p>
                </div>
              </div>
              <div style={{ position: 'relative', background: '#0f0f1a', display: 'flex', justifyContent: 'center' }}>
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  poster="/assets/endcard.jpeg"
                >
                  <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
              {STATS.map(stat => (
                <div key={stat.label} style={{
                  background: 'white', borderRadius: '12px', padding: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: `4px solid ${stat.color}`
                }}>
                  <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{stat.label}</p>
                  <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: stat.color }}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Cases Table */}
            <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '32px' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#1e293b' }}>Recent Cases</h2>
                <button style={{ background: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  + New Case
                </button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    {['Case ID', 'Title', 'Type', 'Status', 'Date'].map(h => (
                      <th key={h} style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECENT_CASES.map((c, i) => (
                    <tr key={c.id} style={{ borderTop: '1px solid #e2e8f0', background: i % 2 === 0 ? 'white' : '#fafafa', cursor: 'pointer' }}>
                      <td style={{ padding: '14px 24px', fontSize: '13px', color: '#4f46e5', fontWeight: 600 }}>{c.id}</td>
                      <td style={{ padding: '14px 24px', fontSize: '14px', color: '#1e293b', fontWeight: 500 }}>{c.title}</td>
                      <td style={{ padding: '14px 24px', fontSize: '13px', color: '#64748b' }}>{c.type}</td>
                      <td style={{ padding: '14px 24px' }}>
                        <span style={{ background: `${STATUS_COLORS[c.status]}20`, color: STATUS_COLORS[c.status], padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                          {c.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 24px', fontSize: '13px', color: '#64748b' }}>{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact Us CTA */}
            <div style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)',
              borderRadius: '16px', padding: '40px', textAlign: 'center',
              boxShadow: '0 4px 24px rgba(79,70,229,0.3)',
            }}>
              <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 800, color: 'white' }}>
                Need Help With Your Case?
              </h2>
              <p style={{ margin: '0 0 24px', fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>
                Our team is here to guide you through every step of the process.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="mailto:support@courtcraftadvocate.com?subject=Enquiry from CourtCraft Platform"
                  style={{
                    background: '#fbbf24', color: '#1e1b4b', padding: '14px 32px',
                    borderRadius: '8px', fontWeight: 700, fontSize: '15px',
                    textDecoration: 'none', display: 'inline-block',
                    boxShadow: '0 4px 12px rgba(251,191,36,0.4)',
                  }}
                >
                  ✉️ Contact Us
                </a>
                <a
                  href="https://buy.stripe.com/courtcraftadvocate"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.15)', color: 'white', padding: '14px 32px',
                    borderRadius: '8px', fontWeight: 700, fontSize: '15px',
                    textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  ⚖️ Get Started — £20/month
                </a>
              </div>
              <p style={{ margin: '16px 0 0', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                support@courtcraftadvocate.com
              </p>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
