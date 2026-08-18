import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);
      setTrail((prev) => [newPos, ...prev.slice(0, 5)]);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trailing dots */}
      {trail.map((p, idx) => (
        <div
          key={idx}
          className="absolute rounded-full pointer-events-none transition-all duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${Math.max(2, 6 - idx)}px`,
            height: `${Math.max(2, 6 - idx)}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: idx % 2 === 0 ? '#00e5ff' : '#7c4dff',
            opacity: (1 - idx / 6) * 0.45
          }}
        />
      ))}

      {/* Main Cursor Dot */}
      <div
        className="absolute rounded-full pointer-events-none transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '32px' : isClicking ? '8px' : '10px',
          height: isHovered ? '32px' : isClicking ? '8px' : '10px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovered ? 'transparent' : '#00e5ff',
          border: isHovered ? '1.5px solid #00e5ff' : 'none',
          boxShadow: isHovered ? '0 0 15px rgba(0, 229, 255, 0.6)' : '0 0 10px #00e5ff',
          backdropFilter: isHovered ? 'invert(20%)' : 'none'
        }}
      />
    </div>
  );
};
