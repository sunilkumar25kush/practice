import TextPressure from '../TextPressure';
import GhostCursor from '../GhostCursor';
import CosmicEmbers from '../CosmicEmbers/CosmicEmbers';

export default function Hero({ onOpenContact }) {
  return (
    <section
      id="hero"
      className="relative h-screen h-[100svh] min-h-[100svh] overflow-hidden select-none touch-pan-y"
      style={{ background: 'rgb(17, 17, 17)', opacity: 1, position: 'relative' }}
    >
      {/* 1. Grain / Noise Overlay (z-[5]) */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          opacity: 0.035,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
        }}
        aria-hidden="true"
      />

      {/* 2. Radial Vignette (z-[4]) */}
      <div
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 4,
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, #111111 100%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Ambient Orange / Ember Glow (z-[6]) */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-[6]"
        style={{
          position: 'absolute',
          left: '50%',
          top: '45%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(360px, 60vw, 800px)',
          height: 'clamp(360px, 60vw, 800px)',
          pointerEvents: 'none',
          zIndex: 6,
          background:
            'radial-gradient(circle, rgba(252, 107, 47, 0.18) 0%, rgba(252, 107, 47, 0.05) 40%, transparent 70%)',
          filter: 'blur(35px)',
        }}
        aria-hidden="true"
      />

      {/* 4. Ghost Cursor Interactive Trail (z-[7]) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 7 }}>
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

      {/* 5. Dust / Cosmic Embers (z-[8]) */}
      <div
        className="absolute inset-0 pointer-events-none z-[8]"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 8 }}
        aria-hidden="true"
      >
        <CosmicEmbers count={28} color="#FC6B2F" />
      </div>

      {/* 6. Top Tagline (z-[40]) */}
      <div
        className="absolute top-12 sm:top-20 md:top-24 left-4 sm:left-6 md:left-14 lg:left-20 z-[40] flex items-center gap-2 sm:gap-2.5 max-w-[calc(100vw-5rem)]"
        style={{
          position: 'absolute',
          top: 'clamp(64px, 10vh, 96px)',
          left: 'clamp(16px, 4.5vw, 64px)',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          className="w-[7px] h-[7px] shrink-0 rounded-full bg-ember animate-pulse"
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'var(--ember)',
            boxShadow: '0 0 10px var(--ember)',
            flexShrink: 0,
            display: 'inline-block',
          }}
        />
        <span
          className="text-[10px] sm:text-[11px] text-[#B5B5B5] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium truncate"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#B5B5B5',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Shipping Ideas Into Reality.
        </span>
      </div>

      {/* 7. Giant Letters Block (z-[15]) */}
      <div
        className="absolute top-[25%] sm:top-[28%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15] pointer-events-none select-none w-full flex flex-col items-center justify-center px-4"
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 15,
          pointerEvents: 'none',
          userSelect: 'none',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
          boxSizing: 'border-box',
        }}
        aria-hidden="true"
      >
        <div
          className="w-full max-w-[700px] md:max-w-[850px] h-[52px] sm:h-[80px] md:h-[135px] relative flex items-center justify-center scale-y-[1.15] transform-gpu drop-shadow-[0_0_35px_rgba(252,107,47,0.3)]"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 'min(850px, 88vw)',
            height: 'clamp(60px, 14vw, 135px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 0 35px rgba(252,107,47,0.3))',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'transparent' }}>
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
          </div>
        </div>

        {/* Center Tagline Under Letters */}
        <div
          className="mt-12 sm:mt-2.5 md:mt-4 text-center z-[20] px-2"
          style={{
            marginTop: '16px',
            textAlign: 'center',
            zIndex: 20,
            padding: '0 8px',
          }}
        >
          <p
            className="hero-line text-[clamp(0.55rem,2.2vw,0.88rem)] md:text-[clamp(0.72rem,1.08vw,0.88rem)] font-extrabold tracking-[0.12em] sm:tracking-[0.25em] uppercase text-ember drop-shadow-[0_0_20px_rgba(252,107,47,0.7)]"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              color: 'var(--ember)',
              fontSize: 'clamp(10px, 1.25vw, 13px)',
              fontWeight: 800,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              filter: 'drop-shadow(0 0 20px rgba(252,107,47,0.7))',
              margin: 0,
            }}
          >
            Crafting Interfaces That People Remember.
          </p>
        </div>
      </div>

      {/* 8. Bottom Left Subtitle (z-[40]) */}
      <div
        className="absolute bottom-[20%] sm:bottom-[18%] md:top-[72%] md:bottom-auto left-4 sm:left-6 md:left-14 lg:left-20 z-[40] max-w-[calc(100vw-2rem)] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
        style={{
          position: 'absolute',
          top: '72%',
          left: 'clamp(16px, 4.5vw, 64px)',
          zIndex: 40,
          maxWidth: 'clamp(280px, 32vw, 440px)',
        }}
      >
        <p
          className="text-[11.5px] sm:text-[13px] md:text-[14px] text-[#B5B5B5] leading-[1.6] sm:leading-[1.8] font-normal tracking-wide"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            color: '#B5B5B5',
            fontSize: 'clamp(12px, 1.05vw, 14px)',
            lineHeight: 1.65,
            letterSpacing: '0.02em',
            margin: 0,
          }}
        >
          <strong
            style={{
              color: '#ffffff',
              display: 'block',
              fontWeight: 600,
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              marginBottom: '4px',
            }}
          >
            Full-Stack Developer &amp; Creative Technologist
          </strong>
          engineering fast, immersive, and motion-driven digital products.
        </p>
      </div>

      {/* 9. Bottom Right Buttons CTA (z-[40]) */}
      <div
        className="absolute bottom-6 sm:bottom-[8%] md:bottom-[12%] left-4 right-4 sm:left-auto sm:right-6 md:right-14 lg:right-20 z-[40] flex flex-row sm:flex-col justify-between sm:justify-end items-center sm:items-end gap-2.5 sm:gap-3.5"
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 8vh, 48px)',
          right: 'clamp(16px, 4.5vw, 64px)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
        }}
      >
        {/* Button 1: Explore Work */}
        <a
          href="#projects"
          className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 overflow-hidden cursor-pointer bg-ember text-white hover:bg-ember-bright border border-transparent shadow-[0_0_25px_rgba(160,42,34,0.4)] !rounded-full !px-4 sm:!px-7 !py-2.5 sm:!py-3.5 !text-[11px] sm:!text-[13px] !tracking-wide group touch-manipulation"
          data-magnetic="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 24px 10px 12px',
            borderRadius: '9999px',
            backgroundColor: 'var(--ember)',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '13.5px',
            fontWeight: 600,
            boxShadow: '0 0 25px rgba(160, 42, 34, 0.45)',
            border: '1px solid transparent',
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'var(--ember-bright)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 0 32px rgba(160, 42, 34, 0.7)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--ember)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(160, 42, 34, 0.45)';
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ↗
          </span>
          <span>Explore Work</span>
          <span style={{ fontSize: '14px' }}>→</span>
        </a>

        {/* Button 2: Let's Talk */}
        <a
          href="#contact"
          onClick={e => {
            if (onOpenContact) {
              e.preventDefault();
              onOpenContact();
            }
          }}
          className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 overflow-hidden cursor-pointer bg-transparent text-white border border-white/20 hover:border-ember/50 hover:text-ember !rounded-full !px-4 sm:!px-6 !py-2.5 sm:!py-3 !text-[11px] sm:!text-[12px] !border-white/15 touch-manipulation"
          data-magnetic="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 22px',
            borderRadius: '9999px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(160, 42, 34, 0.6)';
            e.currentTarget.style.color = 'var(--ember)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Let's Talk</span>
          <span style={{ fontSize: '13px' }}>→</span>
        </a>
      </div>

      {/* 10. Scroll Indicator (z-[45]) */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[45] hidden md:flex flex-col items-center gap-2"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          className="text-[9px] text-[#B5B5B5]/60 tracking-[0.35em] uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '9px',
            color: 'rgba(181, 181, 181, 0.6)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-6 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden"
          style={{
            width: '1px',
            height: '24px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="absolute w-full h-3 bg-ember/60 animate-scroll-line"
            style={{
              position: 'absolute',
              width: '100%',
              height: '12px',
              backgroundColor: 'rgba(160, 42, 34, 0.7)',
            }}
          />
        </div>
      </div>

      {/* 11. Bottom Gradient Fade to Void (z-[50]) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-[50]"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '112px',
          pointerEvents: 'none',
          zIndex: 50,
          background: 'linear-gradient(to top, var(--void, #111114) 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
