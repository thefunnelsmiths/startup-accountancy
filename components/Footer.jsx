/* global React */

function Footer() {
  const cols = [
    { h: 'Services', links: ['Setup review','Bookkeeping','VAT & Corp Tax','Fractional CFO'] },
    { h: 'Company',  links: ['About','Clients','Careers','Press'] },
    { h: 'Resources',links: ['Pricing','Blog','Guides','Help'] },
    { h: 'Legal',    links: ['Terms','Privacy','Security','ICO reg.'] },
  ];
  return (
    <footer style={{
      background: 'var(--on-background)',
      color: 'rgba(255,255,255,0.85)',
      padding: '72px 48px 36px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48,
      }}>
        <div>
          <div style={{
            fontFamily: 'Questrial', fontSize: 22, color: '#fff',
            letterSpacing: '-0.01em', marginBottom: 14,
          }}>Startup Accountancy</div>
          <p style={{
            fontFamily: 'Lexend', fontSize: 13, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 280,
          }}>
            Accounting for UK founders — built by founders who've been where you are.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{
              fontFamily: 'Lexend', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--tertiary-container)', marginBottom: 14,
            }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {c.links.map(l => (
                <li key={l} style={{ fontFamily: 'Lexend', fontSize: 13, padding: '5px 0' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.75)' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1200, margin: '48px auto 0',
        paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'Lexend', fontSize: 12,
        color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2026 Startup Accountancy Ltd · Registered in England & Wales</span>
        <span>Built by founders, not career accountants.</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
