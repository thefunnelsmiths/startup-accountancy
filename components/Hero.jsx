/* global React, Button */

function Hero() {
  return (
    <section style={{
      position: 'relative',
      padding: '140px 48px 60px',
      overflow: 'hidden',
      background: 'var(--surface)',
    }}>
      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: -200, right: -180, width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(152,80,222,0.22), transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: -180, left: -160, width: 540, height: 540,
        background: 'radial-gradient(circle, rgba(221,237,46,0.16), transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 56,
        alignItems: 'start', position: 'relative',
      }}>
        {/* LEFT — VIDEO */}
        <VideoCard />

        {/* RIGHT — HEADLINE + CTA + CREDIBILITY */}
        <div>
          <span className="overline" style={{ display: 'inline-block', marginBottom: 18 }}>
            Watch first · 90 seconds
          </span>
          <h1 style={{
            fontFamily: 'Questrial',
            fontSize: 'clamp(2.5rem, 4.2vw, 3.9rem)',
            lineHeight: 1.02, letterSpacing: '-0.02em',
            margin: '0 0 22px', color: 'var(--on-background)',
          }}>
            Your accounting software<br/>
            is probably <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>set up wrong.</span>
          </h1>
          <p style={{
            fontFamily: 'Lexend', fontSize: 18, lineHeight: 1.6,
            color: 'var(--on-surface-variant)',
            maxWidth: 480, margin: '0 0 26px',
          }}>
            We'll show you exactly how — in one free session.
            No pitch. No obligation. No sales script disguised as advice.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="lg">Book your complimentary setup review →</Button>
          </div>
          <div style={{
            marginTop: 12, fontFamily: 'Lexend', fontSize: 13,
            color: 'var(--on-surface-variant)',
          }}>
            Available this week · 45 minutes · no charge
          </div>

          <div style={{
            marginTop: 26, paddingTop: 20,
            borderTop: '1px solid rgba(201,188,218,0.35)',
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
              {[
                ['Built by founders', 'Marc & James have raised, hired, missed burn.'],
                ['Xero · QuickBooks · Sage', 'We work with whatever you\'re already on.'],
                ['Fixed fees from £345/mo', 'If you want us after. Everything included.'],
              ].map(([t, s]) => (
                <li key={t} style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  fontFamily: 'Lexend', fontSize: 13.5,
                }}>
                  <i data-lucide="check" style={{
                    width: 16, height: 16, strokeWidth: 2,
                    color: 'var(--tertiary)', flexShrink: 0, marginTop: 3,
                  }} />
                  <span>
                    <strong style={{ color: 'var(--on-background)', fontWeight: 600 }}>{t}.</strong>
                    <span style={{ color: 'var(--on-surface-variant)' }}> {s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ABOVE-THE-FOLD SOCIAL PROOF STRIP */}
      <div style={{
        maxWidth: 1280, margin: '44px auto 0',
        position: 'relative',
        background: 'var(--surface-container-lowest)',
        borderRadius: 20,
        padding: '22px 28px',
        boxShadow: 'var(--shadow-lift)',
        display: 'grid', gridTemplateColumns: 'auto 1fr auto auto auto', gap: 28, alignItems: 'center',
      }}>
        {/* Rating cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[0,1,2,3,4].map(i => (
              <i key={i} data-lucide="star" style={{
                width: 16, height: 16, color: '#f6b800', fill: '#f6b800', strokeWidth: 1.5,
              }} />
            ))}
          </div>
          <div style={{ fontFamily: 'Lexend', fontSize: 13 }}>
            <div style={{ fontWeight: 600, color: 'var(--on-background)', lineHeight: 1.1 }}>
              4.9 · Google reviews
            </div>
            <div style={{ color: 'var(--on-surface-variant)', fontSize: 11 }}>
              from 180+ UK founders
            </div>
          </div>
        </div>

        {/* Inline testimonial */}
        <div style={{
          fontFamily: 'Lexend', fontSize: 13.5, lineHeight: 1.5,
          color: 'var(--on-background)', fontStyle: 'italic',
          borderLeft: '2px solid var(--primary)', paddingLeft: 14,
        }}>
          "Found three VAT config errors in 20 minutes. Fixed them on the call."
          <span style={{ color: 'var(--on-surface-variant)', fontStyle: 'normal', marginLeft: 6 }}>
            — Priya N., seed SaaS founder
          </span>
        </div>

        {/* Metric pills */}
        {[
          { v: '1,200+', l: 'founders served' },
          { v: '24h', l: 'avg. setup fix' },
          { v: '£345', l: 'fixed /mo if after' },
        ].map(m => (
          <div key={m.l} style={{ textAlign: 'center', paddingLeft: 8,
            borderLeft: '1px solid rgba(201,188,218,0.4)',
          }}>
            <div style={{
              fontFamily: 'Questrial', fontSize: 22, color: 'var(--on-background)',
              letterSpacing: '-0.01em', lineHeight: 1,
            }}>{m.v}</div>
            <div style={{
              fontFamily: 'Lexend', fontSize: 10.5, fontWeight: 500,
              color: 'var(--on-surface-variant)', marginTop: 4,
              letterSpacing: '0.02em', whiteSpace: 'nowrap',
            }}>{m.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoCard() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-float)',
        background: 'linear-gradient(135deg, #1c0956 0%, #3a1785 45%, #7d33c3 100%)',
        aspectRatio: '16/10',
        cursor: 'pointer',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(221,237,46,0.25), transparent 60%)',
          filter: 'blur(60px)',
        }} />

        <div style={{
          position: 'absolute', top: 24, left: 28, right: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Lexend', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#ff5a5a', display: 'inline-block',
            }} />
            Marc · Co-founder
          </span>
          <span style={{ fontFeatureSettings: '"tnum"' }}>1:42</span>
        </div>

        <div style={{
          position: 'absolute', bottom: 24, left: 28, right: 28,
          color: '#fff',
        }}>
          <div style={{
            fontFamily: 'Lexend', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--tertiary-container)', marginBottom: 6,
          }}>90-second walk-through</div>
          <div style={{
            fontFamily: 'Questrial', fontSize: 26, letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>What's wrong with most founder setups — and how we fix it.</div>
        </div>

        <button aria-label="Play video" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 88, height: 88, borderRadius: '50%',
          background: 'rgba(255,255,255,0.95)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 20px 60px -12px rgba(0,0,0,0.4)',
          transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
        >
          <div style={{
            width: 0, height: 0,
            borderLeft: '22px solid var(--primary)',
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            marginLeft: 6,
          }} />
        </button>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 3, background: 'rgba(255,255,255,0.15)',
        }}>
          <div style={{
            width: '12%', height: '100%',
            background: 'var(--tertiary-container)',
          }} />
        </div>
      </div>
    </div>
  );
}

window.Hero = Hero;
