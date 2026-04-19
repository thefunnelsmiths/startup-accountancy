/* global React */

function HowItWorks() {
  const steps = [
    { n: '01', t: 'Pick a slot', d: 'Grab a 45-minute window on the calendar below.', icon: 'calendar' },
    { n: '02', t: 'Share your login', d: 'Xero, QuickBooks, or Sage. That\'s the only thing to prepare.', icon: 'key-round' },
    { n: '03', t: 'We meet', d: 'Review your setup. No fluff. No pitch.', icon: 'video' },
    { n: '04', t: 'You leave with clarity', d: 'Clear picture of where things stand — and what to do next.', icon: 'check-check' },
  ];
  return (
    <section style={{
      padding: '96px 48px',
      background: 'var(--surface-container-low)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="overline">How it works</span>
          <h2 style={{
            fontFamily: 'Questrial', fontSize: 'clamp(2rem, 3vw, 2.75rem)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            margin: '12px auto 0', maxWidth: 640, color: 'var(--on-background)',
          }}>
            Four steps. That's all.
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
          position: 'relative',
        }}>
          {steps.map((s) => (
            <div key={s.n} style={{
              background: 'var(--surface-container-lowest)',
              borderRadius: 20, padding: 28,
              boxShadow: 'var(--shadow-lift)',
              position: 'relative',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--primary-container)',
                  opacity: 0.12, position: 'absolute',
                }} />
                <i data-lucide={s.icon} style={{
                  width: 22, height: 22, strokeWidth: 1.5,
                  color: 'var(--primary)', position: 'relative',
                  marginLeft: 11,
                }} />
                <span style={{
                  marginLeft: 'auto',
                  fontFamily: 'Questrial', fontSize: 24,
                  color: 'var(--on-surface-variant)', opacity: 0.35,
                  letterSpacing: '-0.02em', lineHeight: 1,
                }}>{s.n}</span>
              </div>
              <h4 style={{
                fontFamily: 'Questrial', fontSize: 20,
                letterSpacing: '-0.01em',
                margin: '0 0 6px', color: 'var(--on-background)',
              }}>{s.t}</h4>
              <p style={{
                fontFamily: 'Lexend', fontSize: 14, lineHeight: 1.55,
                color: 'var(--on-surface-variant)', margin: 0,
              }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
