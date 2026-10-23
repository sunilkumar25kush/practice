import { useState } from 'react';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import DecryptedText from '../DecryptedText/DecryptedText';
import { Code2, Server, Cpu, Wrench, Terminal, Layers } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend & UI',
      icon: <Code2 size={20} style={{ color: 'var(--color-primary)' }} />,
      color: 'var(--color-primary)',
      skills: [
        { name: 'React.js', level: 'Advanced', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
        { name: 'HTML5 & Semantic Web', level: 'Expert' },
        { name: 'CSS3 / Modern CSS', level: 'Expert' },
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'DOM Manipulation', level: 'Advanced' },
        { name: 'Async / Await & Promises', level: 'Advanced' },
        { name: 'CSS Flexbox & CSS Grid', level: 'Expert' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend & DB',
      icon: <Server size={20} style={{ color: 'var(--color-accent)' }} />,
      color: 'var(--color-accent)',
      skills: [
        { name: 'Node.js', level: 'Advanced', highlight: true },
        { name: 'Express.js', level: 'Advanced', highlight: true },
        { name: 'REST API Development', level: 'Advanced', highlight: true },
        { name: 'MongoDB', level: 'Advanced', highlight: true },
        { name: 'Mongoose ODM', level: 'Advanced' },
        { name: 'Socket.IO (WebSockets)', level: 'Proficient' },
        { name: 'JWT Authentication', level: 'Advanced' },
      ],
    },
    {
      id: 'ai',
      name: 'AI & API Integration',
      icon: <Cpu size={20} style={{ color: '#818CF8' }} />,
      color: '#818CF8',
      skills: [
        { name: 'Google Gemini API', level: 'Advanced', highlight: true },
        { name: 'OpenAI API', level: 'Proficient' },
        { name: 'Prompt Engineering', level: 'Advanced', highlight: true },
        { name: 'Speech Recognition (STT)', level: 'Proficient' },
        { name: 'Text-to-Speech (TTS)', level: 'Proficient' },
        { name: 'OpenWeatherMap API', level: 'Proficient' },
        { name: 'External API Pipelines', level: 'Advanced' },
      ],
    },
    {
      id: 'tools',
      name: 'Dev Tools & Cloud',
      icon: <Wrench size={20} style={{ color: '#10B981' }} />,
      color: '#10B981',
      skills: [
        { name: 'Git & GitHub Version Control', level: 'Advanced', highlight: true },
        { name: 'VS Code & Tooling', level: 'Expert' },
        { name: 'Vercel Deployment', level: 'Advanced' },
        { name: 'Netlify Cloud', level: 'Advanced' },
        { name: 'Cloudinary Image CDN', level: 'Advanced' },
        { name: 'Razorpay Payment Gateway', level: 'Proficient' },
      ],
    },
    {
      id: 'systems',
      name: 'IT & Infrastructure',
      icon: <Terminal size={20} style={{ color: '#F59E0B' }} />,
      color: '#F59E0B',
      skills: [
        { name: 'Linux (Ubuntu)', level: 'Proficient', highlight: true },
        { name: 'Windows Server Administration', level: 'Proficient' },
        { name: 'Network Troubleshooting', level: 'Proficient' },
        { name: 'Hardware Configuration', level: 'Proficient' },
      ],
    },
  ];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-label">
              <DecryptedText text="TECHNICAL SKILLS & STACK" speed={35} animateOn="view" />
            </div>
            <h2 className="section-title">
              Engineered Capabilities
            </h2>
            <p className="section-subtitle">
              Comprehensive technical skills spanning full-stack web engineering, scalable backends, and AI model orchestration.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: selectedCategory === 'All' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: selectedCategory === 'All' ? 'rgba(160, 42, 34, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === 'All' ? '#ffffff' : 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: selectedCategory === cat.id ? 'rgba(160, 42, 34, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {displayedCategories.map(cat => (
            <SpotlightCard
              key={cat.id}
              style={{
                borderRadius: '16px',
                padding: '28px',
                backgroundColor: 'rgba(21, 21, 26, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
                    {cat.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                    {cat.skills.length} core technologies
                  </span>
                </div>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map(s => (
                  <div
                    key={s.name}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: s.highlight ? 'rgba(160, 42, 34, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid',
                      borderColor: s.highlight ? 'rgba(160, 42, 34, 0.35)' : 'rgba(255, 255, 255, 0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = s.highlight ? 'rgba(160, 42, 34, 0.35)' : 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: s.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: s.highlight ? 600 : 500,
                        color: s.highlight ? '#ffffff' : 'var(--color-text-silver)',
                      }}
                    >
                      {s.name}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-text-muted)',
                        marginLeft: 'auto',
                      }}
                    >
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
