export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '36px 0',
        backgroundColor: '#111114',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.01em',
          }}
        >
          © 2026 Sunil Kumar. Crafted with passion.
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
            padding: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          <span>Back to top</span>
          <span style={{ color: 'var(--color-primary)', fontSize: '15px' }}>↑</span>
        </button>
      </div>
    </footer>
  );
}
