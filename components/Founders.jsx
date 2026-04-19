/* global React */

function Founders() {
  return (
    <section style={{
      padding: '96px 48px',
      background: 'var(--surface-container-low)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56,
        alignItems: 'center',
      }}>
        {/* Portraits */}
        <div style={{ display: 'flex', gap: 18 }}>
          {[
            { n: 'Marc', role: 'Co-founder', gradient: 'linear-gradient(140deg, #3a1785 0%, #7d33c3 100%)' },
            { n: 'James', role: 'Co-founder', gradient: 'linear-gradient(140deg, #7d33c3 0%, #c48ef0 100%)' },
          ].map((p, i) => (
            <div key={p.n} style={{
              flex: 1,
              aspectRatio: '3/4',
              borderRadius: 20,
              background: p.gradient,
              boxShadow: 'var(--shadow-float)',
              position: 'relative',
              overflow: 'hidden',
              transform: i === 0 ? 'translateY(-12px)' : 'translateY(12px)',
            }}>
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }} />
              <div style={{
                position: 'absolute', bottom: 20, left: 22, right: 22,
                color: '#fff',
              }}>
                <div style={{
                  fontFamily: 'Lexend', fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--tertiary-container)',
                }}>{p.role}</div>
                <div style={{
                  fontFamily: 'Questrial', fontSize: 26,
                  letterSpacing: '-0.01em', marginTop: 2,
                }}>{p.n}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <span className="overline">Marc & James · founders</span>
          <h2 style={{
            fontFamily: 'Questrial', fontSize: 'clamp(2rem, 3vw, 2.75rem)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            margin: '12px 0 20px', color: 'var(--on-background)',
          }}>
            We're not career accountants<br/>
            who advise founders.{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>We're founders<br/>who do accounting.</span>
          </h2>
          <p style={{
            fontFamily: 'Lexend', fontSize: 17, lineHeight: 1.65,
            color: 'var(--on-surface-variant)', margin: '0 0 16px',
          }}>
            Marc and James have raised money, hired teams, missed burn targets,
            and sat in boardrooms the night before investor meetings. They've been on
            your side of the table.
          </p>
          <p style={{
            fontFamily: 'Lexend', fontSize: 17, lineHeight: 1.65,
            color: 'var(--on-surface-variant)', margin: 0,
          }}>
            They built Startup Accountancy because they know what founders actually need
            from an accountant — and how far most traditional firms fall short.
          </p>

          <div style={{
            marginTop: 32,
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
            paddingTop: 24, borderTop: '1px solid rgba(201,188,218,0.4)',
          }}>
            {[
              { v: '£12M+', l: 'raised by founders we\'ve worked with' },
              { v: '1,200+', l: 'founders served across the UK' },
              { v: '24h', l: 'typical turnaround on setup' },
            ].map(s => (
              <div key={s.l}>
                <div style={{
                  fontFamily: 'Questrial', fontSize: 30,
                  color: 'var(--on-background)', letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>{s.v}</div>
                <div style={{
                  fontFamily: 'Lexend', fontSize: 12, lineHeight: 1.4,
                  color: 'var(--on-surface-variant)', marginTop: 6,
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Founders = Founders;
