/* global React */

function ProblemMechanism() {
  return (
    <section style={{
      padding: '96px 48px',
      background: 'var(--surface)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'stretch',
      }}>
        {/* LEFT — problem */}
        <div>
          <span className="overline">The problem</span>
          <h2 style={{
            fontFamily: 'Questrial',
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            margin: '14px 0 20px',
            color: 'var(--on-background)',
          }}>
            Chart of accounts.<br/>
            VAT scheme.<br/>
            Bank feed rules.
          </h2>
          <p style={{
            fontFamily: 'Lexend', fontSize: 17, lineHeight: 1.65,
            color: 'var(--on-surface-variant)', margin: '0 0 18px',
          }}>
            Nobody told you any of it. Not when you incorporated,
            not when you signed up for Xero, not when HMRC first came knocking.
          </p>
          <p style={{
            fontFamily: 'Lexend', fontSize: 17, lineHeight: 1.65,
            color: 'var(--on-background)', margin: 0, fontWeight: 500,
          }}>
            By the time they do, it costs{' '}
            <span style={{
              background: 'var(--tertiary-container)',
              padding: '2px 8px', borderRadius: 4,
              color: 'var(--on-tertiary-container)',
              fontWeight: 600,
            }}>more to fix than to do right</span>{' '}
            the first time.
          </p>

          <div style={{
            marginTop: 36,
            background: 'var(--surface-container-lowest)',
            borderRadius: 16, padding: 24,
            boxShadow: 'var(--shadow-lift)',
          }}>
            <span className="overline" style={{ color: 'var(--on-surface-variant)' }}>
              What we usually find
            </span>
            <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
              {[
                ['Chart of accounts misaligned with UK GAAP', '73% of new setups'],
                ['VAT scheme wrong for the business model', '41%'],
                ['Bank feed rules creating phantom duplicates', '58%'],
                ['Director loan account untracked', '62%'],
              ].map(([label, stat]) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  gap: 16,
                  fontFamily: 'Lexend', fontSize: 14,
                }}>
                  <span style={{ color: 'var(--on-background)' }}>{label}</span>
                  <span style={{
                    color: 'var(--primary)', fontWeight: 600, fontSize: 13,
                    fontFeatureSettings: '"tnum"',
                  }}>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — mechanism */}
        <div style={{
          background: 'linear-gradient(135deg, #7d33c3 0%, #9850de 100%)',
          borderRadius: 24, padding: 40,
          color: '#fff',
          boxShadow: 'var(--shadow-float)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: -80, right: -80,
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(221,237,46,0.25), transparent 60%)',
            filter: 'blur(40px)',
          }} />
          <div style={{ position: 'relative' }}>
            <span style={{
              fontFamily: 'Lexend', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--tertiary-container)',
            }}>The mechanism</span>
            <h3 style={{
              fontFamily: 'Questrial', fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              margin: '10px 0 6px',
            }}>
              The Accounting Software<br/>Setup Review.
            </h3>
            <p style={{
              fontFamily: 'Lexend', fontSize: 15, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.82)', margin: '0 0 26px',
            }}>
              One call. No charge. A specific, deliverable-led session — not "a consultation."
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {[
                'Review how your Xero, QuickBooks, or Sage is currently configured.',
                'Tell you exactly what is set up incorrectly — and why it matters.',
                'Show you what the correct configuration looks like.',
                'Walk you through the changes, live on the call, if you want.',
              ].map((t, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  fontFamily: 'Lexend', fontSize: 15, lineHeight: 1.5,
                }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'var(--tertiary-container)',
                    color: 'var(--on-tertiary-container)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1,
                    fontFamily: 'Lexend',
                  }}>{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: 28, paddingTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.18)',
              fontFamily: 'Lexend', fontSize: 14, lineHeight: 1.55,
              color: 'rgba(255,255,255,0.85)',
            }}>
              At the end, you'll know exactly where your setup stands.{' '}
              <span style={{ color: '#fff', fontWeight: 500 }}>
                Act on it yourself, or ask us to take it from there. Either is fine.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProblemMechanism = ProblemMechanism;
