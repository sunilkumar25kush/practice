import { useState, useEffect, useRef } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?/';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  animateOn = 'hover', // 'hover' | 'view'
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    let iteration = 0;

    const startAnimation = () => {
      iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / maxIterations;
      }, speed);
    };

    if (animateOn === 'view' && !hasAnimated) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            startAnimation();
            setHasAnimated(true);
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }

    if (animateOn === 'hover' && isHovering) {
      startAnimation();
    } else if (animateOn === 'hover' && !isHovering) {
      setDisplayText(text);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, isHovering, animateOn, hasAnimated]);

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
