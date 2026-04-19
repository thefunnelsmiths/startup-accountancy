/* global React, Button */

function FinalCTA() {
  const [form, setForm] = React.useState({ firstName: '', email: '', phone: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const webhookUrl = window.GHL_WEBHOOK_URL || '';
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: form.firstName, email: form.email, phone: form.phone }),
      })
        .catch(() => {})
        .finally(() => { setLoading(false); setSubmitted(true); });
    } else {
      setLoading(false);
      setSubmitted(true);
    }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '13px 16px',
    fontFamily: 'Lexend', fontSize: 15,
    color: 'var(--on-background)',
    background: 'var(--surface-container-low)',
    border: '1.5px solid rgba(201,188,218,0.4)',
    borderRadius: 12, outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Lexend', fontSize: 12, fontWeight: 600,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    color: 'var(--on-surface-variant)',
    marginBottom: 6,
  };

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
          {/* Left — copy */}
          <div>
            <span style={{
              fontFamily: 'Lexend', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--tertiary-container)',
            }}>Free software setup call</span>
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
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {[
                { icon: 'check-circle', text: 'We review your accounting software together' },
                { icon: 'check-circle', text: 'Fix any issues in the session, live' },
                { icon: 'check-circle', text: 'Walk away with everything set up correctly' },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <i data-lucide={item.icon} style={{
                    width: 18, height: 18, flexShrink: 0, marginTop: 2,
                    color: 'var(--tertiary-container)',
                  }} />
                  <span style={{
                    fontFamily: 'Lexend', fontSize: 15, lineHeight: 1.5,
                    color: 'rgba(255,255,255,0.88)',
                  }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — lead form */}
          <div style={{
            background: 'var(--surface-container-lowest)',
            borderRadius: 20, padding: 32,
            boxShadow: '0 20px 60px -12px rgba(0,0,0,0.3)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <i data-lucide="check-circle" style={{
                  width: 48, height: 48, color: 'var(--primary)', margin: '0 auto 16px',
                  display: 'block',
                }} />
                <div style={{
                  fontFamily: 'Questrial', fontSize: 24,
                  color: 'var(--on-background)', letterSpacing: '-0.01em', marginBottom: 10,
                }}>You're booked in!</div>
                <p style={{
                  fontFamily: 'Lexend', fontSize: 15, lineHeight: 1.6,
                  color: 'var(--on-surface-variant)',
                }}>
                  We'll be in touch shortly to confirm your session time.
                </p>
              </div>
            ) : (
              React.createElement('form', { onSubmit: handleSubmit },
                React.createElement('div', { style: { marginBottom: 8 } },
                  React.createElement('span', { className: 'overline', style: { color: 'var(--primary)' } }, 'Book your session'),
                  React.createElement('div', {
                    style: {
                      fontFamily: 'Questrial', fontSize: 22,
                      color: 'var(--on-background)', letterSpacing: '-0.01em', marginTop: 2, marginBottom: 20,
                    }
                  }, 'Claim your free call')
                ),
                React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 16 } },
                  React.createElement('div', null,
                    React.createElement('label', { htmlFor: 'cta-firstName', style: labelStyle }, 'First name'),
                    React.createElement('input', {
                      id: 'cta-firstName',
                      name: 'firstName',
                      type: 'text',
                      required: true,
                      autoComplete: 'given-name',
                      placeholder: 'Alex',
                      value: form.firstName,
                      onChange: handleChange,
                      style: inputStyle,
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { htmlFor: 'cta-email', style: labelStyle }, 'Email'),
                    React.createElement('input', {
                      id: 'cta-email',
                      name: 'email',
                      type: 'email',
                      required: true,
                      autoComplete: 'email',
                      placeholder: 'you@yourstartup.com',
                      value: form.email,
                      onChange: handleChange,
                      style: inputStyle,
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { htmlFor: 'cta-phone', style: labelStyle }, 'Mobile number'),
                    React.createElement('input', {
                      id: 'cta-phone',
                      name: 'phone',
                      type: 'tel',
                      required: true,
                      autoComplete: 'tel',
                      inputMode: 'tel',
                      placeholder: '07700 900000',
                      pattern: '[0-9\\s\\+\\-\\(\\)]{7,20}',
                      value: form.phone,
                      onChange: handleChange,
                      style: inputStyle,
                    })
                  )
                ),
                React.createElement('div', { style: { marginTop: 24 } },
                  React.createElement(Button, {
                    variant: 'primary',
                    size: 'lg',
                    type: 'submit',
                    disabled: loading,
                    style: { width: '100%', justifyContent: 'center' },
                  }, loading ? 'Sending…' : 'Book my free setup call →'),
                  React.createElement('div', {
                    style: {
                      marginTop: 10, textAlign: 'center',
                      fontFamily: 'Lexend', fontSize: 12,
                      color: 'var(--on-surface-variant)',
                    }
                  }, 'No obligation · We\'ll confirm a time that works for you')
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

window.FinalCTA = FinalCTA;
