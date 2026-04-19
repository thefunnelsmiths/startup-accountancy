/* global React, Button */

function FinalCTA() {
  const days = [
    { d: 'Mon', n: 22, state: 'off' },
    { d: 'Tue', n: 23, state: 'on' },
    { d: 'Wed', n: 24, state: 'picked' },
    { d: 'Thu', n: 25, state: 'on' },
    { d: 'Fri', n: 26, state: 'on' },
  ];
  const slots = ['09:30', '10:15', '11:00', '14:30', '15:30', '16:15'];

  return (
    <section style={{
      padding: '96px 48px',
      background: 'var(--surface)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        background: 'linear-gradient(135deg, #1c0956 0%, #3a1785 55%, #7d33c3 100%)',
        borderRadius: 32,
        padding: '72px 64px',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 24px 64px -16px rgba(28,9,86,0.35)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -120, right: -80,
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(221,237,46,0.22), transparent 60%)',
          filter: 'blur(40px)',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: -180, left: -100,
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(152,80,222,0.35), transparent 60%)',
          filter: 'blur(40px)',
        }} />

        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center',
        }}>
          {/* Left — pricing + copy */}
          <div>
            <span style={{
              fontFamily: 'Lexend', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--tertiary-container)',
            }}>If you work with us after</span>
            <h2 style={{
              fontFamily: 'Questrial', fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              color: '#fff', margin: '14px 0 18px',
            }}>
              Get your books set up<br/>
              <span style={{ color: 'var(--tertiary-container)' }}>right</span> — in one session.
            </h2>
            <p style={{
              fontFamily: 'Lexend', fontSize: 17, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.82)', margin: '0 0 28px',
              maxWidth: 480,
            }}>
              We review your setup. We tell you what needs fixing.
              We show you how. No charge. No obligation.
            </p>

            <div style={{
              display: 'inline-flex', alignItems: 'baseline', gap: 10,
              padding: '14px 20px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 16,
            }}>
              <span style={{
                fontFamily: 'Questrial', fontSize: 36,
                color: '#fff', letterSpacing: '-0.02em', lineHeight: 1,
              }}>£345</span>
              <span style={{
                fontFamily: 'Lexend', fontSize: 14,
                color: 'rgba(255,255,255,0.7)',
              }}>/mo · everything included · no year-end bills</span>
            </div>
            <div style={{
              marginTop: 18,
              fontFamily: 'Lexend', fontSize: 14,
              color: 'rgba(255,255,255,0.85)',
            }}>
              The setup review itself?{' '}
              <span style={{
                background: 'var(--tertiary-container)',
                color: 'var(--on-tertiary-container)',
                padding: '2px 10px', borderRadius: 4, fontWeight: 600,
              }}>Complimentary.</span>
            </div>
          </div>

          {/* Right — mini booking widget */}
          <div style={{
            background: 'var(--surface-container-lowest)',
            borderRadius: 20, padding: 28,
            boxShadow: '0 20px 60px -12px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 18,
            }}>
              <div>
                <span className="overline" style={{ color: 'var(--primary)' }}>Book your session</span>
                <div style={{
                  fontFamily: 'Questrial', fontSize: 22,
                  color: 'var(--on-background)', letterSpacing: '-0.01em', marginTop: 2,
                }}>This week</div>
              </div>
              <div style={{
                fontFamily: 'Lexend', fontSize: 12, color: 'var(--on-surface-variant)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <i data-lucide="chevron-left" style={{ width: 16, height: 16, color: 'var(--on-surface-variant)' }} />
                Apr 2026
                <i data-lucide="chevron-right" style={{ width: 16, height: 16, color: 'var(--primary)' }} />
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8,
            }}>
              {days.map(day => (
                <button key={day.n} style={{
                  padding: '12px 0', borderRadius: 12, cursor: 'pointer',
                  background:
                    day.state === 'picked' ? 'var(--primary)' :
                    day.state === 'on' ? 'var(--surface-container-low)' :
                    'transparent',
                  color:
                    day.state === 'picked' ? '#fff' :
                    day.state === 'off' ? 'var(--on-surface-variant)' :
                    'var(--on-background)',
                  opacity: day.state === 'off' ? 0.4 : 1,
                  border: 'none',
                  fontFamily: 'Lexend',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
                    textTransform: 'uppercase', opacity: 0.7, marginBottom: 2,
                  }}>{day.d}</div>
                  <div style={{ fontSize: 18, fontWeight: 500, fontFeatureSettings: '"tnum"' }}>{day.n}</div>
                </button>
              ))}
            </div>

            <div style={{
              marginTop: 20, paddingTop: 18,
              borderTop: '1px solid rgba(201,188,218,0.4)',
            }}>
              <div style={{
                fontFamily: 'Lexend', fontSize: 13, fontWeight: 600,
                color: 'var(--on-background)', marginBottom: 10,
              }}>
                Wed 24 April
                <span style={{ color: 'var(--on-surface-variant)', fontWeight: 400, marginLeft: 6 }}>· GMT</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {slots.map((t, i) => (
                  <button key={t} style={{
                    padding: '7px 14px', borderRadius: 999,
                    background: i === 2 ? 'var(--primary)' : 'var(--surface-container-low)',
                    color: i === 2 ? '#fff' : 'var(--on-background)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'Lexend', fontSize: 13, fontWeight: 500,
                    fontFeatureSettings: '"tnum"',
                  }}>{t}</button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <Button variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }}>
                Confirm · Wed 11:00 →
              </Button>
              <div style={{
                marginTop: 10, textAlign: 'center',
                fontFamily: 'Lexend', fontSize: 12,
                color: 'var(--on-surface-variant)',
              }}>
                One thing to prepare: your software login.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.FinalCTA = FinalCTA;
