import { useState } from 'react';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/Icons';
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

  return (
    <section id="contact" className="section contact-section" style={{ backgroundColor: '#111114', paddingTop: '110px', paddingBottom: '120px' }}>
      <div className="container">
        {/* Header Matching Screenshot 9 */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              color: 'var(--color-primary)',
              fontSize: '12px',
              fontFamily: 'var(--font-label)',
              fontWeight: 800,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            GET IN TOUCH
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '18px',
            }}
          >
            Let's Create Something Extraordinary
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(14px, 1.25vw, 16px)',
              color: 'var(--color-text-light)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Have a project in mind or want to collaborate? Send a message and let's talk.
          </p>
        </div>

        {/* 2-Card Grid Matching Screenshot 10 */}
        <div className="contact-cards-grid">
          {/* Left Card: Contact Details */}
          <div className="contact-card details-card">
            <h3 className="contact-card-title">Contact Details</h3>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-detail-row">
                <div className="contact-icon-badge red-border">
                  <Mail size={18} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="contact-detail-label">EMAIL</div>
                  <a href="mailto:sunilkumar25@navgurukul.org" className="contact-detail-val">
                    sunilkumar25@navgurukul.org
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-row">
                <div className="contact-icon-badge red-border">
                  <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="contact-detail-label">LOCATION</div>
                  <div className="contact-detail-val">Sarita Vihar, Delhi, India</div>
                </div>
              </div>

              {/* Availability */}
              <div className="contact-detail-row">
                <div className="contact-icon-badge green-border">
                  <span className="availability-dot" />
                </div>
                <div>
                  <div className="contact-detail-label">AVAILABILITY</div>
                  <div className="contact-detail-val green">Open to opportunities</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="contact-divider" />

            {/* Socials */}
            <div>
              <div className="contact-connect-label">CONNECT</div>
              <div className="contact-social-icons">
                <a
                  href="https://github.com/sunilkumar25kush"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="GitHub"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href="https://linkedin.com/in/sunil-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Contact Form */}
          <div className="contact-card form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">
                  MESSAGE
                </label>
                <textarea
                  id="contact-msg"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-send-message"
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
