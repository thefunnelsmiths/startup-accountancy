/* global React */

function SocialProof() {
  return (
    <section style={{
      padding: '72px 48px 88px',
      background: 'var(--surface-container-low)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="overline">What founders said after</span>
          <h2 style={{
            fontFamily: 'Questrial', fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)',
            lineHeight: 1.2, letterSpacing: '-0.02em',
            margin: '12px auto 0', maxWidth: 640,
            color: 'var(--on-background)',
          }}>
            Most founders leave the session with a list of fixes — and no pitch to decline.
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          {[
            {
              q: "Found three VAT config errors in 20 minutes. Fixed them on the call.",
              a: 'Priya N.', r: 'SaaS founder · £1.8M raised',
              stat: { l: 'Errors caught', v: '3' },
            },
            {
              q: "Best 45 minutes I've spent on admin since incorporating.",
              a: 'Tom H.', r: 'D2C founder · London',
              stat: { l: 'Time to clarity', v: '45 min' },
            },
            {
              q: "Told us exactly what was wrong. Didn't try to sell us anything. Unusual.",
              a: 'Alex & Sam', r: 'Fintech co-founders · 8 months in',
              stat: { l: 'Sales pressure', v: 'Zero' },
            },
          ].map((t, i) => (
            <div key={i} style={{
              background: 'var(--surface-container-lowest)',
              borderRadius: 20, padding: 28,
              boxShadow: 'var(--shadow-lift)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: 'Questrial', fontSize: 42,
                color: 'var(--primary)', lineHeight: 0.8, marginBottom: 4,
              }}>&ldquo;</div>
              <p style={{
                fontFamily: 'Lexend', fontSize: 16, lineHeight: 1.55,
                color: 'var(--on-background)', margin: '0 0 20px', flex: 1,
              }}>{t.q}</p>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                borderTop: '1px solid rgba(201,188,218,0.35)',
                paddingTop: 14,
              }}>
                <div style={{ fontFamily: 'Lexend', fontSize: 13 }}>
                  <div style={{ fontWeight: 600, color: 'var(--on-background)' }}>{t.a}</div>
                  <div style={{ color: 'var(--on-surface-variant)', fontSize: 12 }}>{t.r}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'Lexend', fontSize: 9, fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--on-surface-variant)',
                  }}>{t.stat.l}</div>
                  <div style={{
                    fontFamily: 'Questrial', fontSize: 22,
                    color: 'var(--primary)', letterSpacing: '-0.01em',
                    lineHeight: 1,
                  }}>{t.stat.v}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SocialProof = SocialProof;
