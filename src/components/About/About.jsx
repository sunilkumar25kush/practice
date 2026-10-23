import SpotlightCard from '../SpotlightCard/SpotlightCard';
import DecryptedText from '../DecryptedText/DecryptedText';
import { MapPin, GraduationCap, Code2, Globe, Cpu, Check, Terminal } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Full Stack MERN Mastery',
      desc: 'Architecting end-to-end architectures from scalable MongoDB schemas and Express REST APIs to fluid React frontends.',
      icon: <Code2 size={20} style={{ color: 'var(--color-primary)' }} />,
    },
    {
      title: 'Generative AI Pipelines',
      desc: 'Expertise integrating Google Gemini API & OpenAI API for structured prompt engineering, voice-enabled interview bots, and document generation.',
      icon: <Cpu size={20} style={{ color: 'var(--color-accent)' }} />,
    },
    {
      title: 'Real-Time WebSockets',
      desc: 'Building responsive bidirectional events with Socket.IO, session preservation, and JWT-authenticated channels.',
      icon: <Terminal size={20} style={{ color: '#10B981' }} />,
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(17, 17, 20, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <DecryptedText text="ABOUT SUNIL KUMAR" speed={35} animateOn="view" />
          </div>
          <h2 className="section-title">
            Architecting Scalable Systems & AI-Driven Experiences
          </h2>
          <p className="section-subtitle">
            A developer who bridges the gap between deep full-stack engineering and cutting-edge generative AI capabilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'stretch' }}>
          {/* Main Story Card */}
          <SpotlightCard
            style={{
              padding: '36px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: 'span 1',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span className="pill-tag red">Full Stack Developer</span>
                <span className="pill-tag">Sarita Vihar, Delhi</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '16px',
                  lineHeight: 1.35,
                }}
              >
                Passionate about turning complex real-world challenges into frictionless software.
              </h3>

              <p style={{ color: 'var(--color-text-silver)', fontSize: '14px', lineHeight: 1.7, marginBottom: '18px' }}>
                Specializing in the <strong style={{ color: '#ffffff' }}>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) with hands-on experience building production web applications and AI-powered systems. Proficient in crafting robust REST APIs, architecting reactive user interfaces, and integrating modern AI services like the <strong style={{ color: 'var(--color-accent)' }}>Google Gemini API</strong>.
              </p>

              <p style={{ color: 'var(--color-text-light)', fontSize: '14px', lineHeight: 1.7 }}>
                Having built and deployed 5+ production-ready projects—ranging from automated AI Interview platforms to real-time chat engines—I pride myself on writing clean, maintainable code, solving real-world problems, and optimizing performance down to the millisecond.
              </p>
            </div>

            <div
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-silver)', fontSize: '13px' }}>
                <MapPin size={15} style={{ color: 'var(--color-primary)' }} />
                <span>Delhi, India · Remote Ready</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-silver)', fontSize: '13px' }}>
                <Globe size={15} style={{ color: 'var(--color-accent)' }} />
                <span>Hindi (Native) · English (Tech)</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Right Column: Focus & Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Core Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {highlights.map((h, i) => (
                <SpotlightCard
                  key={i}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '14px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        marginTop: '2px',
                      }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '6px',
                        }}
                      >
                        {h.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Education Card */}
            <SpotlightCard
              style={{
                padding: '24px',
                borderRadius: '14px',
                backgroundColor: 'rgba(160, 42, 34, 0.05)',
                border: '1px solid rgba(160, 42, 34, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <GraduationCap size={18} style={{ color: 'var(--color-primary)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                  }}
                >
                  Education & Training
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '15px' }}>
                      NavGurukul
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                      July 2025 – Present
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-light)', marginTop: '2px' }}>
                    Full Stack Web Development Program (Pursuing)
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.08)', paddingTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, color: '#ffffff', fontSize: '14px' }}>
                      RK Sarvodaya Boys Senior Secondary School
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                      May 2023 – March 2025
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Higher Secondary Certificate (HSC)
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
