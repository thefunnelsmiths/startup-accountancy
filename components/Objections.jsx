/* global React */
const { useState: useObjState } = React;

function Objections() {
  const [open, setOpen] = useObjState(0);
  const items = [
    {
      q: 'Is this a sales call?',
      a: "No. It's a working session, not a pitch. We look at your actual setup, tell you what's wrong, and show you what right looks like. If at the end you want us to manage your accounting going forward, we'll tell you how that works. If you just want the session and nothing else, that's completely fine.",
    },
    {
      q: 'I already have an accountant.',
      a: "Then let us make sure your setup is right before they inherit it. Most accountants find configuration problems at year-end. We'll tell you now, for nothing, so it doesn't become a problem later.",
    },
    {
      q: 'My books are a mess — is it too late?',
      a: "That's exactly the situation this session is designed for. We've reviewed setups in every state imaginable. We'll tell you honestly what it would take to sort it out and what your options are. No judgement.",
    },
  ];

  return (
    <section style={{
      padding: '96px 48px',
      background: 'var(--surface)',
    }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="overline">Three things you're probably thinking</span>
          <h2 style={{
            fontFamily: 'Questrial', fontSize: 'clamp(2rem, 3vw, 2.75rem)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            margin: '12px auto 0', color: 'var(--on-background)',
          }}>
            The honest answers, up front.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: isOpen ? 'var(--surface-container-lowest)' : 'var(--surface-container-low)',
                borderRadius: 16, padding: '4px 26px',
                boxShadow: isOpen ? 'var(--shadow-lift)' : 'none',
                transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
              }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: 'transparent', border: 'none',
                    padding: '22px 0', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontFamily: 'Questrial', fontSize: 20,
                    color: 'var(--on-background)', letterSpacing: '-0.01em',
                  }}
                >
                  {it.q}
                  <i data-lucide={isOpen ? 'minus' : 'plus'} style={{
                    width: 22, height: 22, color: 'var(--primary)', strokeWidth: 1.5,
                  }} />
                </button>
                {isOpen && (
                  <p style={{
                    fontFamily: 'Lexend', fontSize: 16, lineHeight: 1.65,
                    color: 'var(--on-surface-variant)',
                    margin: '0 0 22px', maxWidth: 680,
                  }}>{it.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Objections = Objections;
