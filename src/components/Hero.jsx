function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
        <div style={{
          width: '340px',
          background: '#F5E6C8',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '6px solid #002D62',
          boxShadow: '6px 6px 0 #001A3A',
          position: 'relative',
          fontFamily: 'sans-serif'
        }}>

          {/* Texture overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
            opacity: 0.04,
            backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 4px)'
          }}/>

          {/* Inner border */}
          <div style={{
            position: 'absolute', inset: '6px', border: '1px solid rgba(0,45,98,0.3)',
            zIndex: 2, pointerEvents: 'none', borderRadius: '1px'
          }}/>

          {/* Header */}
          <div style={{
            background: '#002D62', padding: '6px 12px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', letterSpacing: '0.15em', color: '#F5E6C8' }}>
              ★ Software Engineer ★
            </span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', color: '#EF3B24', letterSpacing: '0.1em' }}>
              2026
            </span>
          </div>

          {/* Photo + Name */}
          <div style={{ background: '#E8D5A3', padding: '1.25rem 1.25rem 0', display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
            <div style={{
              width: '120px', height: '150px', border: '3px solid #002D62',
              background: '#C4A882', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0, position: 'relative', overflow: 'hidden'
            }}>
              <img
                src="/pfp.png"
                alt="Liam Cassidy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div style={{ flex: 1, paddingBottom: '8px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#002D62', letterSpacing: '0.08em', lineHeight: 1 }}>
                Liam
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#EF3B24', letterSpacing: '0.04em', lineHeight: 1 }}>
                Cassidy
              </div>
              <div style={{ fontFamily: "'Special Elite', serif", fontSize: '10px', color: '#002D62', marginTop: '4px' }}>
                University at Buffalo · CS
              </div>
              <div style={{
                background: '#002D62', color: '#EF3B24',
                fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px',
                width: '44px', height: '44px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                border: '2px solid #EF3B24', marginTop: '6px'
              }}>
                11
              </div>
            </div>
          </div>

          {/* Red divider */}
          <div style={{ height: '3px', background: '#EF3B24' }} />

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#E8D5A3', borderBottom: '2px solid #002D62' }}>
            {[
              { val: '3.5', label: 'GPA' },
              { val: '1', label: 'Degree' },
              { val: '4+', label: 'Projects' },
              { val: '∞', label: 'Work Ethic' },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{
                textAlign: 'center', padding: '8px 4px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(0,45,98,0.2)' : 'none'
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#EF3B24', lineHeight: 1 }}>
                  {stat.val}
                </div>
                <div style={{ fontFamily: "'Special Elite', serif", fontSize: '8px', color: '#002D62', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '1px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ padding: '0.75rem 1rem', background: '#F5E6C8' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', letterSpacing: '0.12em', color: '#EF3B24', borderBottom: '1px solid rgba(0,45,98,0.2)', paddingBottom: '2px', marginBottom: '6px' }}>
              Skills
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {['Java', 'Python', 'C/C++', 'React', 'Rust', 'SQL', 'Git', 'Agile'].map(skill => (
                <span key={skill} style={{
                  fontFamily: "'Special Elite', serif", fontSize: '10px',
                  background: '#002D62', color: '#F5E6C8',
                  padding: '2px 8px', borderRadius: '2px'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ background: '#002D62', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Special Elite', serif", fontSize: '9px', color: 'rgba(245,230,200,0.7)', letterSpacing: '0.06em' }}>
              Wappingers Falls, NY
            </span>
            <span style={{ fontFamily: "'Special Elite', serif", fontSize: '9px', color: '#EF3B24' }}>
              Class of '26
            </span>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px', padding: '10px 12px', background: '#E8D5A3', borderTop: '2px solid #002D62' }}>
            <a href="/LiamCassidyResume-12.pdf" target="_blank" rel="noopener noreferrer" 
            onMouseEnter={e => e.target.style.color = '#EF3B24'}
            onMouseLeave={e => e.target.style.color = '#F5E6C8'}
            style={{
              flex: 1, padding: '8px', fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '14px', letterSpacing: '0.1em', textAlign: 'center',
              background: '#002D62', color: '#F5E6C8', borderRadius: '2px',
              textDecoration: 'none', cursor: 'pointer'
            }}>
              Resume
            </a>
            <a href="#projects"
            onMouseEnter={e => { e.target.style.background = '#EF3B24'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent';  }}
            style={{
              flex: 1, padding: '8px', fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '14px', letterSpacing: '0.1em', textAlign: 'center',
              background: 'transparent', color: '#002D62',
              border: '2px solid #002D62', borderRadius: '2px',
              textDecoration: 'none', cursor: 'pointer'
            }}>
              View My Work
            </a>
          </div>

        </div>    
      {/*<h1 className="text-4xl font-bold py-4">Liam Cassidy</h1>
      <p className="text-lg leading-relaxed mt-4">Computer Science grad passionate about solving problems by building software</p>
      <p className="text-lg leading-relaxed">Looking to pursue job opportunities in tech related fields</p>
      <div className="flex gap-8 py-4">
        <a href="/LiamCassidyResume-12.pdf" target="_blank" rel="noopener noreferrer" 
        className="text-gray-900 border border-gray-500 hover:bg-blue-200 hover:text-black px-6 py-3 rounded-lg font-medium transition-colors"
        >Resume</a>
        <a href="#projects" className="text-gray-900 border border-gray-500 hover:bg-blue-200 hover:text-black px-6 py-3 rounded-lg font-medium transition-colors">View My Work</a>
      </div>*/}
    </section>
  )
}

export default Hero