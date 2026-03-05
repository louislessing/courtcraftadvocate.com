$ python
# Python code:

app_jsx = '''import { useState } from 'react'

const NAV_ITEMS = ['Dashboard', 'Cases', 'Documents', 'Calendar', 'Clients', 'Settings']

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

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [bannerVisible, setBannerVisible] = useState(true)
  const PAYMENT_LINK = 'https://buy.stripe.com/courtcraftadvocate'

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', background: '#f0f4f8' }}>

      {/* £20/month Banner */}
      {bannerVisible && (
        <div style={{
          background: 'linear-gradient(90deg, #1a3a5c 0%, #B8960C 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '12px 20px',
          position: 'relative',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '15px', fontWeight: 600 }}>
            ⚖️ Get full access to CourtCraft Advocate for just <strong>£20/month</strong> — No solicitor needed!
          </span>
          <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
            background: 'white',
            color: '#1a3a5c',
            fontWeight: 700,
            padding: '6px 18px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            Get Started — £20/month
          </a>
          <button onClick={() => setBannerVisible(false)} style={{
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', color: 'white', fontSize: '20px',
            cursor: 'pointer', lineHeight: 1
          }}>×</button>
        </div>
      )}

      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/assets/courtcraft_logo.png" alt="CourtCraft Advocate" style={{ height: '40px' }} />
          <span style={{ color: '#B8960C', fontWeight: 700, fontSize: '18px', letterSpacing: '0.5px' }}>
            CourtCraft Advocate
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '4px' }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => setActiveNav(item)} style={{
              background: activeNav === item ? 'rgba(184,150,12,0.2)' : 'transparent',
              color: activeNav === item ? '#B8960C' : '#a0b4c8',
              border: 'none', padding: '8px 14px', borderRadius: '6px',
              cursor: 'pointer', fontWeight: 500, fontSize: '14px',
              transition: 'all 0.2s'
            }}>{item}</button>
          ))}
        </nav>
      </header>

      {/* Hero Video Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
        padding: '40px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#B8960C', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
          Empowering Families. Securing Futures.
        </h1>
        <p style={{ color: '#a0b4c8', fontSize: '16px', marginBottom: '28px' }}>
          Professional McKenzie Friend support at every stage of your family court journey
        </p>
        <div style={{
          maxWidth: '720px', margin: '0 auto',
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          border: '2px solid #B8960C'
        }}>
          <video
            controls
            autoPlay
            muted
            loop={false}
            style={{ width: '100%', display: 'block' }}
            poster="/assets/endcard.jpeg"
          >
            <source src="/assets/CourtCraft_Advocate_FINAL.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Stats */}
      <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{
              background: 'white', borderRadius: '12px', padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              borderLeft: `4px solid ${stat.color}`
            }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cases Table */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ color: '#1a3a5c', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Recent Cases</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                {['Case ID', 'Client', 'Type', 'Status', 'Date'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#666', fontWeight: 600, borderBottom: '1px solid #e8ecf0' }}>{h}</th>
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
                      background: c.status === 'Active' ? '#dcfce7' : c.status === 'Pending' ? '#fef9c3' : '#e0f2fe',
                      color: c.status === 'Active' ? '#166534' : c.status === 'Pending' ? '#854d0e' : '#075985'
                    }}>{c.status}</span>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555' }}>{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: '32px', background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)',
          borderRadius: '16px', padding: '40px', textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
        }}>
          <h2 style={{ color: '#B8960C', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
            Ready to Take Control of Your Case?
          </h2>
          <p style={{ color: '#a0b4c8', fontSize: '16px', marginBottom: '24px' }}>
            Get expert McKenzie Friend support for just £20/month
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" style={{
              background: '#B8960C', color: 'white', fontWeight: 700,
              padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px'
            }}>Get Started — £20/month</a>
            <a href="mailto:support@courtcraftadvocate.com" style={{
              background: 'transparent', color: '#B8960C', fontWeight: 700,
              padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px',
              border: '2px solid #B8960C'
            }}>Contact Us</a>
          </div>
          <p style={{ color: '#607d9a', fontSize: '14px', marginTop: '16px' }}>
            support@courtcraftadvocate.com
          </p>
        </div>
      </main>
    </div>
  )
}'''

with open('App_UPDATED.jsx', 'w') as f:
    f.write(app_jsx)

print('✅ App_UPDATED.jsx ready!')
print(f'Characters: {len(app_jsx)}')

# Output:
