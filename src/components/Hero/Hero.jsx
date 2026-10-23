import { ChevronDown } from 'lucide-react';
import TextPressure from '../TextPressure';
import GhostCursor from '../GhostCursor';
import CosmicEmbers from '../CosmicEmbers/CosmicEmbers';

export default function Hero({ onOpenContact }) {
  return (
    <section
      id="hero"
      className="hero-wrapper"
      style={{
        position: 'relative',
        height: '100vh',
        height: '100svh',
        minHeight: '640px',
        maxHeight: '1080px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(82px, 11vh, 102px) 0 clamp(24px, 3.8vh, 38px) 0',
        backgroundColor: '#111114',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {/* Ghost Cursor */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
        <GhostCursor
          color="#A02A22"
          size={80}
          trailLength={5}
          inertia={0.5}
          turbulence={0.5}
          drift={0.3}
          bloomStrength={0}
          grainIntensity={0}
          bloomRadius={0}
          fadeDelayMs={300}
          fadeDurationMs={100}
        />
      </div>

      {/* Floating Embers & Glow */}
      <CosmicEmbers count={28} color="#A02A22" />
      <div className="crimson-glow" />

      {/* ── Row 1: Top Tagline ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          padding: '0 clamp(24px, 4.5vw, 60px)',
          boxSizing: 'border-box',
          marginBottom: 'clamp(6px, 1.2vh, 14px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#A02A22',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#A02A22',
              boxShadow: '0 0 10px #A02A22',
              flexShrink: 0,
            }}
          />
          SHIPPING IDEAS INTO REALITY.
        </div>
      </div>

      {/* ── Row 2: Giant Outline Letters + Red Middle Tagline ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          flex: 1,
          minHeight: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 clamp(24px, 4.5vw, 60px)',
          boxSizing: 'border-box',
          overflow: 'hidden',
          margin: 'auto 0',
        }}
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
            maxHeight: 'clamp(230px, 42vh, 420px)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <TextPressure
            text="SUNIL"
            flex={true}
            scale={true}
            stroke={false}
            alpha={false}
            width={true}
            weight={true}
            italic={true}
            radius={0.5}
            smoothing={0.5}
            idle="none"
            idleSpeed={1}
            clickRipple={true}
            textColor="#F5F5F7"
            strokeColor="#ff0000"
            strokeWidth={3}
            minFontSize={36}
            fontFamily="Roboto Flex"
            fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap"
          />

          {/* Red tagline — pinned to vertical center of the letters block */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max-content',
              maxWidth: '92vw',
              textAlign: 'center',
              pointerEvents: 'none',
              zIndex: 20,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: 'clamp(10px, 1.25vw, 13px)',
                fontWeight: 800,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#A02A22',
                textShadow:
                  '0 0 24px rgba(160,42,34,0.8), 0 2px 10px rgba(0,0,0,0.95)',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              CRAFTING INTERFACES THAT PEOPLE REMEMBER.
            </span>
          </div>
        </div>
      </div>

      {/* ── Row 3: Bottom Bar ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          padding: '0 clamp(24px, 4.5vw, 60px)',
          boxSizing: 'border-box',
          marginTop: 'clamp(12px, 2.5vh, 26px)',
        }}
      >
        <div
          className="hero-bottom-inner"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            position: 'relative',
            width: '100%',
          }}
        >
          {/* Left: Subtitle */}
          <div style={{ maxWidth: '520px' }}>
            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(16px, 1.3vw, 19px)',
                lineHeight: 1.4,
                color: '#ffffff',
                fontWeight: 600,
                margin: '0 0 6px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Full-Stack Developer &amp; Creative Technologist
            </p>
            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.55,
                color: '#B5B5B5',
                fontWeight: 400,
                margin: 0,
              }}
            >
              engineering fast, immersive, and motion-driven digital products.
            </p>
          </div>

          {/* Center: Scroll indicator */}
          <div
            className="hero-scroll-indicator"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 6,
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <a
              href="#philosophy"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                color: '#71717A',
                fontSize: '9.5px',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#71717A')}
            >
              <span>SCROLL</span>
              <ChevronDown
                size={13}
                style={{ color: '#A02A22' }}
              />
            </a>
          </div>

          {/* Right: CTA buttons stacked */}
          <div
            className="hero-actions-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '12px',
            }}
          >
            {/* Button 1: Explore Work */}
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 28px 10px 12px',
                borderRadius: '9999px',
                backgroundColor: '#A02A22',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15.5px',
                boxShadow: '0 6px 26px rgba(160, 42, 34, 0.5)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(160, 42, 34, 0.7)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 26px rgba(160, 42, 34, 0.5)';
              }}
            >
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.28)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ↗
              </span>
              <span>Explore Work</span>
              <span style={{ fontSize: '15px' }}>→</span>
            </a>

            {/* Button 2: Let's Talk */}
            <button
              onClick={onOpenContact}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 26px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                fontSize: '14.5px',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.32)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Let's Talk</span>
              <span style={{ fontSize: '14px' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
