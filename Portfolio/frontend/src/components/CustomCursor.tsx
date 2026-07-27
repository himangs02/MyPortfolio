import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor({ color, shape = 'square' }: { color: string, shape?: 'square' | 'circle' | 'cross' }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName?.toLowerCase() === 'a' || target.tagName?.toLowerCase() === 'button' || target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center hidden md:flex"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : (shape === 'cross' ? 16 : 12)),
        y: mousePosition.y - (isHovering ? 20 : (shape === 'cross' ? 16 : 12)),
        width: isHovering ? 40 : (shape === 'cross' ? 32 : 24),
        height: isHovering ? 40 : (shape === 'cross' ? 32 : 24),
      }}
      transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.5 }}
    >
      {shape === 'cross' ? (
        <svg viewBox="0 0 100 100" className={`w-full h-full transition-all duration-300 ${isHovering ? 'scale-125' : ''}`}>
          <line x1="50" y1="0" x2="50" y2="100" stroke={color} strokeWidth="8" />
          <line x1="0" y1="50" x2="100" y2="50" stroke={color} strokeWidth="8" />
          <circle cx="50" cy="50" r="10" fill={color} />
        </svg>
      ) : (
        <div 
          className={`w-full h-full border-[3px] transition-all duration-300 flex items-center justify-center ${isHovering ? '' : 'border-black dark:border-white'}`}
          style={{ 
            backgroundColor: isHovering ? 'transparent' : color, 
            borderColor: isHovering ? color : undefined,
            boxShadow: isHovering ? 'none' : '4px 4px 0px 0px rgba(0,0,0,1)',
            borderRadius: shape === 'circle' ? '50%' : '0%'
          }}
        >
          {/* Inner dot */}
          <div className={`w-2 h-2 bg-black dark:bg-white transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} style={{ borderRadius: shape === 'circle' ? '50%' : '0%' }} />
        </div>
      )}
    </motion.div>
  );
}
