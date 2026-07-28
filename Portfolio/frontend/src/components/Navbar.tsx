import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const navItems = ['Home', 'About', 'TechStack', 'Work', 'Contact'];

export default function Navbar({ 
  cursorColor = '#00FF66', 
  setCursorColor,
  cursorShape = 'square',
  setCursorShape
}: { 
  cursorColor?: string, 
  setCursorColor?: (c: string) => void,
  cursorShape?: 'square' | 'circle' | 'cross',
  setCursorShape?: (s: 'square' | 'circle' | 'cross') => void
}) {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  const colors = ['#00E5FF', '#FF0055', '#B497CF'];
  const shapes = ['square', 'circle', 'cross'] as const;

  useEffect(() => {
    // Check initial theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }

    // Set up Intersection Observer to sync OptionWheel with page scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = navItems.indexOf(entry.target.id);
          if (index !== -1) {
            setSelectedIndex(index);
          }
        }
      });
    }, { 
      // Trigger when a section occupies at least 50% of the viewport
      threshold: 0.5 
    });

    navItems.forEach(item => {
      const el = document.getElementById(item);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Track mouse movement to reveal navbar when near top
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 120) {
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const isNavbarVisible = selectedIndex === 0 || isHoveringTop;

  return (
    <>
      {/* Theme Toggle & Logo fixed at the top-left (Desktop Only) */}
      <motion.div 
        className="hidden md:flex fixed top-3 sm:top-6 left-3 sm:left-6 z-50 items-center gap-2 pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100, opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button 
          onClick={toggleTheme} 
          className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 hover:bg-slate-100 dark:hover:bg-[#222] transition-all cursor-none bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] h-8 sm:h-10 border-2"
          style={{ borderColor: cursorColor, color: cursorColor }}
        >
          {isDark ? 'Light' : 'Dark'}
        </button>
      </motion.div>

      {/* Cursor Customization fixed at the top-right */}
      <motion.div 
        className="fixed top-3 sm:top-6 right-3 sm:right-6 z-50 flex items-center gap-2 pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100, opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Cursor Color & Shape Selector */}
        {setCursorColor && (
          <div 
            className="hidden lg:flex items-center gap-2 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full px-3 h-10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-2"
            style={{ borderColor: cursorColor }}
          >
            {colors.map(c => (
              <button
                key={c}
                onClick={() => setCursorColor(c)}
                className={`w-5 h-5 rounded-full border-2 transition-all cursor-none ${cursorColor === c ? 'scale-125 shadow-[0_0_8px_rgba(0,0,0,0.2)]' : 'border-transparent hover:scale-110'}`}
                style={{ backgroundColor: c, borderColor: cursorColor === c ? (document.documentElement.classList.contains('dark') ? 'white' : 'black') : 'transparent' }}
                aria-label={`Set cursor color to ${c}`}
              />
            ))}
            
            {/* Custom Color Picker */}
            <div 
              className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all cursor-none overflow-hidden ${!colors.includes(cursorColor) ? 'scale-125 shadow-[0_0_8px_rgba(0,0,0,0.2)]' : 'border-transparent hover:scale-110'}`}
              style={{ 
                background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                borderColor: !colors.includes(cursorColor) ? (document.documentElement.classList.contains('dark') ? 'white' : 'black') : 'transparent'
              }}
              title="Custom Color"
            >
              <input
                type="color"
                value={colors.includes(cursorColor) ? '#ffffff' : cursorColor}
                onChange={(e) => setCursorColor(e.target.value)}
                className="absolute inset-[-10px] w-[50px] h-[50px] opacity-0 cursor-none"
                aria-label="Pick custom color"
              />
            </div>
            
            {/* Shape Divider */}
            {setCursorShape && (
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />
            )}
            
            {/* Shape Selector */}
            {setCursorShape && shapes.map(s => (
              <button
                key={s}
                onClick={() => setCursorShape(s)}
                className={`w-6 h-6 flex items-center justify-center transition-all cursor-none ${cursorShape === s ? 'scale-110' : 'text-slate-400 hover:scale-105'}`}
                style={{ color: cursorShape === s ? cursorColor : undefined }}
                aria-label={`Set cursor shape to ${s}`}
              >
                {s === 'square' && <div className="w-3.5 h-3.5 border-2 border-current" />}
                {s === 'circle' && <div className="w-4 h-4 border-2 border-current rounded-full" />}
                {s === 'cross' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Floating Pill Navbar at the top */}
      <motion.div 
        className="fixed top-4 sm:top-6 left-0 right-0 mx-auto z-50 pointer-events-auto w-[calc(100%-32px)] md:w-max"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100, opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="w-full flex flex-col md:flex-row items-center gap-0.5 sm:gap-1 p-1 sm:p-2 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-slate-200 dark:border-[#222] rounded-3xl md:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all">
          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden items-center justify-between w-full px-2 py-1 relative min-h-[44px]">
            {/* Theme Toggle (Mobile) */}
            <button 
              onClick={toggleTheme} 
              className="z-10 text-[10px] sm:text-xs font-medium tracking-wide rounded-full px-3 py-1 hover:bg-slate-100 dark:hover:bg-[#222] transition-all cursor-none border-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
              style={{ borderColor: cursorColor, color: cursorColor }}
              aria-label="Toggle Theme"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>

            {/* Centered Active Item */}
            <span className="absolute left-1/2 -translate-x-1/2 font-bold text-[10px] sm:text-xs tracking-widest uppercase pointer-events-none" style={{ color: cursorColor }}>
              {navItems[selectedIndex]}
            </span>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-10 p-2 cursor-none hover:opacity-70 transition-opacity flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Toggle Mobile Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

          <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-0.5 sm:gap-1 w-full md:w-auto px-2 pb-2 md:p-0`}>
            {navItems.map((item, index) => {
              const isActive = selectedIndex === index;
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`relative w-full md:w-auto text-center px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide transition-colors cursor-none ${
                    isActive 
                      ? 'text-black' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10 shadow-lg"
                      style={{ backgroundColor: cursorColor }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </a>
              );
            })}
          </div>
        </nav>
      </motion.div>

      {/* Side Scroll Indicator (Dots Only) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 pointer-events-auto">
        {navItems.map((item, index) => {
          const isActive = selectedIndex === index;
          return (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setSelectedIndex(index)}
              className="group relative flex items-center justify-center p-2 outline-none block"
              aria-label={`Scroll to ${item}`}
            >
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'scale-150' 
                    : 'opacity-40 hover:opacity-100 hover:scale-125'
                }`}
                style={{ 
                  backgroundColor: isActive ? cursorColor : (document.documentElement.classList.contains('dark') ? '#888' : '#666'),
                  boxShadow: isActive ? `0 0 10px ${cursorColor}` : 'none'
                }} 
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
