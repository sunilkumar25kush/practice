import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      period: '2026 — Present',
      category: 'Freelance / Independent',
      role: 'Full Stack Developer',
      description:
        'Building premium web experiences for clients worldwide. Specializing in interactive frontends, scalable backends, and AI-powered applications.',
      bullets: [
        'Delivered 20+ projects across diverse industries',
        'Implemented CI/CD pipelines and cloud architecture',
        'Created custom animation systems with GSAP and Three.js',
      ],
    },
    {
      period: '2026 — Present',
      category: 'Open Source',
      role: 'Contributor & Maintainer',
      description:
        'Contributing to the developer ecosystem through open-source projects, libraries, and educational content.',
      bullets: [
        'Maintained React component libraries',
        'Published npm packages with 1000+ weekly downloads',
        'Wrote technical documentation and tutorials',
      ],
    },
    {
      period: 'August 2026 – September 2026',
      category: 'TRIVOTOURS / PRODUCTION SDE (REMOTE)',
      role: 'Software Development Engineer (SDE)',
      description:
        'Engineered responsive web applications, payment systems, and scalable APIs in a fast-paced production environment.',
      bullets: [
        'Developed and deployed 4+ responsive landing pages, improving mobile usability across devices',
        'Designed and launched company blog section, enabling marketing to publish independently',
        'Integrated Cloudinary image uploads and delivery, optimizing assets and slashing load times by 75%',
        'Integrated Razorpay payment gateway to support secure end-to-end online transactions',
        'Identified, debugged, and resolved 17+ issues, improving platform reliability and cutting recurring errors by 50%',
        'Optimized frontend performance, boosting Lighthouse from 45 to 94 and crushing LCP from 1900ms to 200ms',
      ],
    },
    {
      period: '2023 — 2024',
      category: 'Self-Directed Learning',
      role: 'Creative Technologist',
      description:
        'Intensive self-education period exploring web technologies, creative coding, and modern development practices.',
      bullets: [
        'Completed 500+ hours of hands-on development across modern web stacks',
        'Mastered React, Node.js, Express, MongoDB, and TypeScript ecosystem',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vh, 140px) 0',
        backgroundColor: '#111114',
        overflow: 'hidden',
        fontFamily: 'var(--font-poppins), sans-serif',
      }}
    >
      {/* Top Border Divider */}
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

      {/* Top 1/3 Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none blur-[150px]"
        style={{
          position: 'absolute',
          top: '33%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90vw, 600px)',
          height: '300px',
          borderRadius: '50%',
          opacity: 0.15,
          pointerEvents: 'none',
          filter: 'blur(150px)',
          backgroundColor: 'var(--ember)',
        }}
        aria-hidden="true"
      />

      <div
        className="section-container relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 36px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(48px, 8vh, 72px)' }}>
          <div
            className="flex items-center gap-2 mb-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}
          >
            <span
              className="w-8 h-[2px] bg-ember inline-block rounded-full"
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: 'var(--ember)',
                display: 'inline-block',
                borderRadius: '9999px',
              }}
            />
            <span
              className="text-ember text-xs font-bold tracking-[0.25em] uppercase"
              style={{
                color: 'var(--ember)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              Experience
            </span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{
              fontSize: 'clamp(28px, 5.5vw, 56px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0',
            }}
          >
            Where I've Been
          </h2>

          <p
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal"
            style={{
              color: '#B5B5B5',
              fontSize: 'clamp(14px, 1.2vw, 17px)',
              maxWidth: '580px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            My professional journey through different roles and environments.
          </p>
        </div>

        {/* Experience Items List */}
        <div
          className="space-y-8 sm:space-y-12 max-w-4xl mx-auto"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(32px, 5vh, 48px)',
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-item group pb-8 sm:pb-12 border-b border-white/10 last:border-b-0 flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6 md:gap-12 transition-colors duration-300"
              style={{
                borderBottom: index === experiences.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: index === experiences.length - 1 ? 0 : 'clamp(28px, 4vh, 40px)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 'clamp(24px, 4vw, 48px)',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Column: Period & Tag */}
              <div
                className="md:w-1/3 flex-shrink-0"
                style={{
                  width: 'min(100%, 260px)',
                  flexShrink: 0,
                }}
              >
                <span
                  className="text-xs font-mono font-medium text-ash tracking-wider block mb-1"
                  style={{
                    color: '#B5B5B5',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {exp.period}
                </span>
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wider uppercase block font-mono text-ember"
                  style={{
                    color: 'var(--ember)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {exp.category}
                </span>
              </div>

              {/* Right Column: Title, Quote Description & Bullets */}
              <div
                className="md:w-2/3"
                style={{
                  flex: 1,
                  minWidth: 'min(100%, 360px)',
                }}
              >
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-cloud transition-colors"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    margin: '0 0 10px 0',
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-ash leading-relaxed mb-4 sm:mb-6 font-normal"
                  style={{
                    color: '#B5B5B5',
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    margin: '0 0 16px 0',
                  }}
                >
                  "{exp.description}"
                </p>
                <ul
                  className="space-y-2.5"
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm text-silver font-normal"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        color: '#EDF0F3',
                        fontSize: '14px',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        className="text-ember font-bold mt-0.5 text-xs"
                        style={{
                          color: 'var(--ember)',
                          fontWeight: 700,
                          fontSize: '12px',
                          marginTop: '2px',
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
