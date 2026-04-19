/* global React */

function Button({ variant = 'primary', children, onClick, size = 'md', style = {}, ...rest }) {
  const base = {
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 600,
    fontSize: size === 'lg' ? 15 : 14,
    padding: size === 'lg' ? '16px 28px' : '13px 22px',
    borderRadius: 9999,
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    transition: 'all 150ms cubic-bezier(0.2,0.8,0.2,1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
  };
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #7d33c3 0%, #9850de 100%)',
      color: '#fff',
      boxShadow: '0 6px 20px -6px rgba(125,51,195,0.45)',
    },
    secondary: {
      background: 'var(--surface-container-highest)',
      color: 'var(--primary)',
    },
    tertiary: {
      background: 'var(--tertiary)',
      color: '#fff',
    },
    lime: {
      background: 'var(--tertiary-container)',
      color: 'var(--on-tertiary-container)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)',
      padding: '13px 4px',
    },
    outlineLight: {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)',
    },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.06)')}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      {...rest}
    >
      {children}
    </button>
  );
}

window.Button = Button;
