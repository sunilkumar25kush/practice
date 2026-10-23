import { useState, useEffect } from 'react';
import ScrollExpand from '../ScrollExpand';
import './Philosophy.css';

export default function Philosophy() {
  const [timeData, setTimeData] = useState({ date: '', time: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const shortDay = now.toLocaleDateString('en-US', { weekday: 'short' });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setTimeData({
        date: dateStr,
        time: `${shortDay} ${timeStr} (Local time)`,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="philosophy" className="philosophy-wrapper">
      <ScrollExpand
        src="/hero.jpg"
        alt="The Philosophy background"
        title="THE PHILOSOPHY"
        scrollHint="Scroll to reveal"
        useWindowScroll
        mediaZoom={1.35}
        startBlur={22}
        endBlur={0}
        smoothing={0.4}
        footer={
          timeData.date ? (
            <div className="philosophy-time-widget">
              <div>{timeData.date}</div>
              <div style={{ color: 'var(--color-text-muted)', marginTop: '2px' }}>{timeData.time}</div>
            </div>
          ) : null
        }
      >
        <div className="philosophy-content">
          <div className="pill-tag red" style={{ marginBottom: '24px', letterSpacing: '0.16em' }}>
            • THE PHILOSOPHY
          </div>
          <p className="philosophy-quote">
            I believe great software is born at the intersection of engineering precision and design intuition. Every pixel, every interaction, every line of code is an opportunity to create something that moves people.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}
