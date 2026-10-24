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

          {/* Right: CTA buttons stacked (matches reference Screenshot 2) */}
          <div
            className="absolute bottom-6 sm:bottom-[8%] md:bottom-[12%] left-4 right-4 sm:left-auto sm:right-6 md:right-14 lg:right-20 z-[40] flex flex-row sm:flex-col justify-between sm:justify-end items-center sm:items-end gap-2.5 sm:gap-3.5 hero-actions-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '12px',
            }}
          >
            {/* Explore Work button */}
            <a
              href="#projects"
              data-magnetic="true"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 overflow-hidden cursor-pointer bg-ember text-white hover:bg-ember-bright border border-transparent shadow-[0_0_25px_rgba(160,42,34,0.4)] !rounded-full !px-4 sm:!px-7 !py-2.5 sm:!py-3.5 !text-[11px] sm:!text-[13px] !tracking-wide group touch-manipulation"
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--ember)',
                color: '#ffffff',
                boxShadow: '0 0 25px rgba(160, 42, 34, 0.4)',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--ember-bright)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(160, 42, 34, 0.7)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--ember)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(160, 42, 34, 0.4)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="flex items-center gap-2 sm:gap-3">
                  <span
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/25 flex items-center justify-center text-xs sm:text-sm"
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 0, 0, 0.25)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                    }}
                  >
                    ↗
                  </span>
                  <span>Explore Work</span>
                  <span>→</span>
                </span>
              </span>
            </a>

            {/* Let's Talk button */}
            <a
              href="#contact"
              data-magnetic="true"
              onClick={e => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 overflow-hidden cursor-pointer bg-transparent text-white border border-white/20 hover:border-ember/50 hover:text-ember !rounded-full !px-4 sm:!px-6 !py-2.5 sm:!py-3 !text-[11px] sm:!text-[12px] !border-white/15 touch-manipulation"
              style={{
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                padding: '11px 24px',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.5)';
                e.currentTarget.style.color = 'var(--ember)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Let's Talk</span>
                <span>→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
