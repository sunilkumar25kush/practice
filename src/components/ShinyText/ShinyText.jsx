export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = ''
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        display: 'inline-block',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`
      }}
    >
      <style>{`
        @keyframes shine {
          0% { background-position: 100% }
          100% { background-position: -100% }
        }
      `}</style>
      {text}
    </span>
  );
}
