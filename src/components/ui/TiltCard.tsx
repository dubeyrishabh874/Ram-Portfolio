import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'amber';
  id?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  scaleOnHover = 1.02,
  glowColor = 'cyan',
  id,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const getGlowStyles = () => {
    switch (glowColor) {
      case 'violet':
        return 'hover:border-violet-500/40 hover:shadow-[0_12px_35px_rgba(124,77,255,0.2)]';
      case 'emerald':
        return 'hover:border-emerald-500/40 hover:shadow-[0_12px_35px_rgba(16,185,129,0.2)]';
      case 'amber':
        return 'hover:border-amber-500/40 hover:shadow-[0_12px_35px_rgba(245,158,11,0.2)]';
      case 'cyan':
      default:
        return 'hover:border-cyan-400/40 hover:shadow-[0_12px_35px_rgba(0,229,255,0.2)]';
    }
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d'
      }}
      className={`relative rounded-2xl bg-[#0d1430]/80 backdrop-blur-xl border border-cyan-500/15 transition-colors duration-300 ${getGlowStyles()} ${className}`}
    >
      {/* Dynamic light reflection glare */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};
