import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 95,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '14px clamp(24px, 4.5vw, 60px)' : '26px clamp(24px, 4.5vw, 60px)',
          backgroundColor: isScrolled ? 'rgba(17, 17, 20, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo SM. */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'baseline',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '26px',
              letterSpacing: '-0.04em',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span style={{ color: '#A02A22' }}>S</span>
            <span style={{ color: '#ffffff' }}>M</span>
            <span style={{ color: '#A02A22' }}>.</span>
          </a>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={isMenuOpen ? 'btn-close-glow' : 'navbar-menu-btn'}
            style={{
              padding: '10px 24px',
              height:'36px',
              width:'104px',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-primary)',
              backgroundColor: isMenuOpen ? 'rgba(160, 42, 34, 0.2)' : 'rgba(255, 255, 255, 0.06)',
              border: isMenuOpen ? '1px solid #A02A22' : '1px solid rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              boxShadow: isMenuOpen ? '0 0 20px rgba(160, 42, 34, 0.4)' : 'none',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            aria-label="Toggle navigation menu"
            onMouseEnter={e => {
              if (!isMenuOpen) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={e => {
              if (!isMenuOpen) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isMenuOpen ? (
              <>
                <span>Close</span>
                <X size={15} style={{ color: 'var(--color-primary)' }} />
              </>
            ) : (
              <>
                <span>Menu</span>
                <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '25px', lineHeight: 1 }}>+</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Sliding Left-to-Right Drawer with Down-to-Up links */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenResume={onOpenResume}
      />
    </>
  );
}
