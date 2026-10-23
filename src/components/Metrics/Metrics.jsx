import SpotlightCard from '../SpotlightCard/SpotlightCard';
import { Zap, Flame, ShieldCheck, Gauge, CheckCircle } from 'lucide-react';

export default function Metrics() {
  const stats = [
    {
      value: '5+',
      label: 'Production Apps',
      sub: 'AI & MERN systems built & shipped',
      icon: <Flame size={18} style={{ color: 'var(--color-primary)' }} />,
    },
    {
      value: '94',
      label: 'Lighthouse Score',
      sub: 'Boosted from 45 on mobile at Trivotours',
      icon: <Gauge size={18} style={{ color: 'var(--color-accent)' }} />,
    },
    {
      value: '75%',
      label: 'Load Time Reduced',
      sub: 'Via Cloudinary dynamic delivery',
      icon: <Zap size={18} style={{ color: '#10B981' }} />,
    },
    {
      value: '<2s',
      label: 'AI Speech Latency',
      sub: 'Voice STT & Gemini API inference',
      icon: <ShieldCheck size={18} style={{ color: '#818CF8' }} />,
    },
    {
      value: '50%',
      label: 'Bug Frequency Cut',
      sub: '17+ critical production fixes',
      icon: <CheckCircle size={18} style={{ color: '#F59E0B' }} />,
    },
  ];

  return (
    <section id="metrics" style={{ padding: '60px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map((item, index) => (
            <SpotlightCard
              key={index}
              style={{
                padding: '24px 20px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backgroundColor: 'rgba(21, 21, 26, 0.55)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(32px, 3.2vw, 40px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </span>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-text-white)',
                  marginBottom: '4px',
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4,
                }}
              >
                {item.sub}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
