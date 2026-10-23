import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      period: '2026 — Present',
      category: 'FREELANCE / INDEPENDENT',
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
      category: 'OPEN SOURCE',
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
      category: 'SELF-DIRECTED LEARNING',
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
    <section id="experience" className="section experience-section" style={{ backgroundColor: '#111114', paddingTop: '110px', paddingBottom: '120px' }}>
      <div className="container">
        {/* Section Header Matching Screenshot 7 */}
        <div style={{ marginBottom: '64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--color-primary)',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '22px', height: '2px', backgroundColor: 'var(--color-primary)', display: 'inline-block' }} />
            <span>EXPERIENCE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Where I've Been
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(14px, 1.25vw, 16px)',
              color: 'var(--color-text-light)',
              maxWidth: '620px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            My professional journey through different roles and environments.
          </p>
        </div>

        {/* Experience List Matching Screenshot 7 & 8 */}
        <div className="experience-list">
          {experiences.map((item, index) => (
            <div key={index} className="experience-row">
              {/* Left Column: Period & Tag */}
              <div className="experience-left-col">
                <span className="experience-period">{item.period}</span>
                <span className="experience-category">{item.category}</span>
              </div>

              {/* Right Column: Title, Description & Bullets */}
              <div className="experience-right-col">
                <h3 className="experience-role-title">{item.role}</h3>
                <p className="experience-role-desc">{item.description}</p>

                <ul className="experience-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="experience-bullet-item">
                      <span className="experience-bullet-caret">▸</span>
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
