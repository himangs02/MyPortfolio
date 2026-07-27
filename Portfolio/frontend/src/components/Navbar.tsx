import React, { useState, useEffect } from 'react';
import OptionWheel from './ui/OptionWheel';

const navItems = ['Home', 'About', 'TechStack', 'Work', 'Contact'];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleNavChange = (index: number, item: string) => {
    const el = document.getElementById(item);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Theme Toggle & Logo fixed at the top-left */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <button onClick={toggleTheme} className="text-xs md:text-sm font-medium tracking-wide border border-slate-300 dark:border-white/10 rounded-full px-4 py-2 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all cursor-pointer text-slate-800 dark:text-slate-200 bg-white/40 dark:bg-black/20 backdrop-blur-xl pointer-events-auto shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Vertical OptionWheel on the right side */}
      <div className="fixed right-0 top-0 h-full w-[160px] md:w-[250px] lg:w-[350px] z-40 pointer-events-none">
        <div className="pointer-events-auto h-full w-full">
          <OptionWheel
            items={navItems}
            defaultSelected={0}
            selectedIndex={selectedIndex}
            textColor="#64748b"
            activeColor={isDark ? "#06b6d4" : "#0284c7"}
            side="right"
            fontSize={1.4}
            spacing={2}
            curve={1}
            tilt={8}
            blur={2}
            fade={0.3}
            smoothing={200}
            inset={30}
            draggable
            onChange={handleNavChange}
          />
        </div>
      </div>
    </>
  );
}
