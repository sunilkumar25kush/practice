import { useEffect } from 'react';
import { X } from 'lucide-react';
import './MenuDrawer.css';

export default function MenuDrawer({ isOpen, onClose, onOpenResume }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navItems = [
    { num: '01', label: 'PROJECTS', href: '#projects' },
    { num: '02', label: 'EXPERIENCE', href: '#experience' },
    { num: '03', label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      {/* Dark backdrop overlay that blurs the background */}
      <div
        className={`menu-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sliding Left-to-Right Drawer Panel */}
      <aside
        className={`menu-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Navigation drawer"
        aria-hidden={!isOpen}
      >
        {/* Top header row inside drawer */}
        <div className="menu-drawer-header">
          <a href="#" onClick={e => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="menu-logo">
            <span>S</span>
            <span className="menu-logo-accent">M.</span>
          </a>
        </div>

        {/* Central Nav Links (Animate Down to Up) */}
        <nav className="menu-nav-list">
          {navItems.map((item, idx) => (
            <div key={item.label} className="menu-nav-item-wrap">
              <a
                href={item.href}
                onClick={e => handleLinkClick(e, item.href)}
                className={`menu-nav-link delay-${idx + 1}`}
              >
                <span>{item.label}</span>
                <span className="menu-nav-num">{item.num}</span>
              </a>
            </div>
          ))}
        </nav>

        {/* Footer with Divider and Socials (Animate Down to Up) */}
        <div className="menu-drawer-footer">
          <div className="menu-divider" />
          <div className="menu-social-label">SOCIALS</div>
          <div className="menu-social-links">
            <a
              href="https://github.com/sunilkumar25kush"
              target="_blank"
              rel="noreferrer"
              className="menu-social-item"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sunil-kumar"
              target="_blank"
              rel="noreferrer"
              className="menu-social-item"
            >
              LinkedIn
            </a>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => onOpenResume(), 300);
              }}
              className="menu-social-item"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Resume
            </button>
          </div>
        </div>
      </aside>

      {/* Floating Close Button in Top Right with Crimson Glow (matching screenshot) */}
      {isOpen && (
        <button
          onClick={onClose}
          className="btn-close-glow"
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 100,
            animation: 'fadeIn 0.3s ease',
          }}
          aria-label="Close menu"
        >
          <span>Close</span>
          <X size={15} style={{ color: 'var(--color-primary)' }} />
        </button>
      )}
    </>
  );
}
