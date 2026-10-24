import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
      style={{
        position: 'relative',
        padding: 'clamp(72px, 10vh, 120px) 0 0 0',
        backgroundColor: '#111114',
        overflow: 'hidden',
        fontFamily: 'var(--font-poppins), sans-serif',
      }}
    >
      {/* 1. Top Border Divider Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)',
        }}
        aria-hidden="true"
      />

      {/* 2. Ambient Bottom Orange / Ember Radial Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[350px] sm:h-[400px] pointer-events-none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90vw, 800px)',
          height: 'clamp(350px, 40vh, 400px)',
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(252, 107, 47, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* 3. Section Container */}
      <div
        className="section-container relative z-10 px-4 sm:px-6 md:px-8"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 36px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <div
          className="mb-10 sm:mb-16 md:mb-20 text-center"
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vh, 64px)',
          }}
        >
          <span
            className="text-ember text-xs font-semibold tracking-[0.25em] uppercase block mb-3"
            style={{
              color: 'var(--ember)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
              fontFamily: 'var(--font-poppins), sans-serif',
            }}
          >
            Get In Touch
          </span>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '780px',
              margin: '0 auto 16px auto',
            }}
          >
            Let's Create Something Extraordinary
          </h2>

          <p
            className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-ash max-w-xl mx-auto leading-relaxed font-normal"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(14px, 1.15vw, 17px)',
              color: '#B5B5B5',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Have a project in mind or want to collaborate? Send a message and let's talk.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 3vw, 36px)',
          }}
        >
          {/* Left Card: Contact Details (lg:col-span-5) */}
          <div
            className="contact-animate glass-card p-5 sm:p-8 md:p-10 flex flex-col justify-between lg:col-span-5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-poppins), sans-serif',
            }}
          >
            <div>
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-6"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontFamily: 'var(--font-poppins), sans-serif',
                }}
              >
                Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    className="w-8 h-8 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center text-ember mt-0.5 shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(160, 42, 34, 0.1)',
                      border: '1px solid rgba(160, 42, 34, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ember)',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p
                      className="text-[11px] text-ash uppercase tracking-wider mb-0.5 font-semibold"
                      style={{
                        fontSize: '11px',
                        color: '#B5B5B5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                        margin: '0 0 2px 0',
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:sunilkumar25@navgurukul.org"
                      className="text-sm text-white hover:text-ember transition-colors font-medium break-all"
                      style={{
                        fontSize: '14px',
                        color: '#ffffff',
                        fontWeight: 500,
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                        transition: 'color 0.2s ease',
                        fontFamily: 'var(--font-poppins), sans-serif',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ember)')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                    >
                      sunilkumar25@navgurukul.org
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    className="w-8 h-8 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center text-ember mt-0.5 shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(160, 42, 34, 0.1)',
                      border: '1px solid rgba(160, 42, 34, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ember)',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p
                      className="text-[11px] text-ash uppercase tracking-wider mb-0.5 font-semibold"
                      style={{
                        fontSize: '11px',
                        color: '#B5B5B5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                        margin: '0 0 2px 0',
                      }}
                    >
                      Location
                    </p>
                    <p
                      className="text-sm text-white font-medium"
                      style={{
                        fontSize: '14px',
                        color: '#ffffff',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Sarita Vihar, Delhi, India
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0 relative"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#34d399',
                      marginTop: '2px',
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#34d399',
                        boxShadow: '0 0 8px #34d399',
                      }}
                    />
                  </span>
                  <div>
                    <p
                      className="text-[11px] text-ash uppercase tracking-wider mb-0.5 font-semibold"
                      style={{
                        fontSize: '11px',
                        color: '#B5B5B5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                        margin: '0 0 2px 0',
                      }}
                    >
                      Availability
                    </p>
                    <p
                      className="text-sm text-green-400 font-medium"
                      style={{
                        fontSize: '14px',
                        color: '#4ade80',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect (Social Links) */}
            <div
              className="mt-8 pt-6 border-t border-white/5"
              style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <p
                className="text-[11px] text-ash uppercase tracking-wider mb-3.5 font-semibold"
                style={{
                  fontSize: '11px',
                  color: '#B5B5B5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  marginBottom: '14px',
                }}
              >
                Connect
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/sunilkumar25kush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-ember/40 hover:bg-white/10 transition-all duration-300 group touch-manipulation"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  title="GitHub"
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img
                    src="https://cdn.simpleicons.org/github/ffffff"
                    alt="GitHub"
                    style={{ width: '16px', height: '16px', objectFit: 'contain', opacity: 0.85 }}
                  />
                </a>

                <a
                  href="https://linkedin.com/in/sunil-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-ember/40 hover:bg-white/10 transition-all duration-300 group touch-manipulation"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  title="LinkedIn"
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img
                    src="https://api.iconify.design/simple-icons:linkedin.svg?color=%23ffffff"
                    alt="LinkedIn"
                    style={{ width: '16px', height: '16px', objectFit: 'contain', opacity: 0.85 }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Message Form (lg:col-span-7) */}
          <div
            className="contact-animate glass-card p-5 sm:p-8 md:p-10 lg:col-span-7"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(24px, 3vw, 36px)',
              fontFamily: 'var(--font-poppins), sans-serif',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" className="hidden" tabIndex="-1" autoComplete="off" name="honeypot" style={{ display: 'none' }} />

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs text-ash uppercase tracking-wider block mb-1.5 font-semibold"
                  style={{
                    fontSize: '12px',
                    color: '#B5B5B5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--font-poppins), sans-serif',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs text-ash uppercase tracking-wider block mb-1.5 font-semibold"
                  style={{
                    fontSize: '12px',
                    color: '#B5B5B5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--font-poppins), sans-serif',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs text-ash uppercase tracking-wider block mb-1.5 font-semibold"
                  style={{
                    fontSize: '12px',
                    color: '#B5B5B5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'var(--font-poppins), sans-serif',
                    resize: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.6)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full font-semibold text-sm tracking-wide text-white bg-ember hover:bg-ember-bright transition-all duration-300 shadow-[0_0_25px_rgba(160,42,34,0.4)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--ember)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 0 25px rgba(160, 42, 34, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'var(--ember-bright)';
                    e.currentTarget.style.boxShadow = '0 0 35px rgba(160, 42, 34, 0.7)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'var(--ember)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(160, 42, 34, 0.45)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span>{isSubmitted ? 'Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ transition: 'transform 0.3s ease' }}>
                  <path d="M14 2L7 9M14 2L10 14L7 9M14 2L2 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 4. Footer Bar Inside Section (Matching Screenshot 5) */}
      <div
        className="section-container relative z-10 px-4 sm:px-6 md:px-8"
        style={{
          marginTop: 'clamp(48px, 8vw, 84px)',
          paddingTop: '24px',
          paddingBottom: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          maxWidth: '1240px',
          margin: 'clamp(48px, 8vw, 84px) auto 0 auto',
          paddingLeft: 'clamp(16px, 4vw, 36px)',
          paddingRight: 'clamp(16px, 4vw, 36px)',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-poppins), sans-serif',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="text-xs text-ash"
            style={{
              fontSize: '12px',
              color: '#B5B5B5',
              margin: 0,
            }}
          >
            © 2026 Sunil Kumar. Crafted with passion.
          </p>

          <button
            onClick={scrollToTop}
            className="text-xs text-ash hover:text-white transition-colors flex items-center gap-1.5 font-medium group cursor-pointer py-1"
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '12px',
              color: '#B5B5B5',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              padding: '4px 0',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#B5B5B5')}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span style={{ color: 'var(--ember)', fontWeight: 700, fontSize: '13px' }}>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
