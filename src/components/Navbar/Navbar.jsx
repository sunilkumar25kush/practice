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
        className="staggered-menu-header"
        aria-label="Main navigation header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 95,
          padding: 'clamp(20px, 3.5vh, 28px) clamp(24px, 4.5vw, 60px)',
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          borderBottom: 'none',
          boxSizing: 'border-box',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo SM. */}
          <a
            href="#"
            style={{
              pointerEvents: 'auto',
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

          {/* Menu Toggle Button (matches reference Screenshot 1) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="staggered-menu-panel"
            type="button"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            <span className="sm-toggle-textWrap" aria-hidden="true">
              <span
                className="sm-toggle-textInner"
                style={{
                  transform: isMenuOpen ? 'translate(0%, 0%)' : 'translate(0%, -20%)',
                }}
              >
                <span className="sm-toggle-line">Close</span>
                <span className="sm-toggle-line">Menu</span>
                <span className="sm-toggle-line">Close</span>
                <span className="sm-toggle-line">Menu</span>
                <span className="sm-toggle-line">Menu</span>
              </span>
            </span>
            <span className="sm-icon" aria-hidden="true">
              <span className="sm-icon-line"></span>
              <span className="sm-icon-line sm-icon-line-v"></span>
            </span>
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
