import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Terminal from './terminal/Terminal';
import { LayoutTextFlip } from './ui/layout-text-flip';

export default function Hero({ cursorColor = '#00FF66' }: { cursorColor?: string }) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="Home" className="min-h-[100svh] w-full flex items-center justify-center px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 md:pt-0 snap-start relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 text-center md:text-left z-10 w-full">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4 sm:mb-6 transform -rotate-2">
              <LayoutTextFlip 
                text="Welcome to my"
                words={["Portfolio", "Universe", "Playground", "Digital Space"]}
                duration={2500}
              />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-black leading-[1] tracking-tighter pb-1 sm:pb-2 text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,4px_4px_0_#FF0055] sm:[text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_#FF0055]">
              Himangshu
            </h1>
            <h2 className="text-black dark:text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mt-1 sm:mt-2 uppercase border-b-2 sm:border-b-4 border-black dark:border-white inline-block pb-1">
              FullStack Developer
            </h2>
          </div>

          <p className="text-black dark:text-white text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 mt-2 sm:mt-4 font-medium leading-relaxed border-l-4 border-[var(--cursor-color)] pl-3 sm:pl-4 text-left sm:text-center md:text-left">
            I help turn ideas into fully functional, responsive web apps using the latest technologies. With expertise in both frontend and backend, I build scalable and maintainable digital products that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-8 w-full">
            <a 
              href="#About"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 font-bold text-black bg-[#FF0055] border-3 sm:border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide cursor-none text-xs sm:text-sm w-full sm:w-auto"
            >
              Get Started
            </a>
            <a 
              href="#Contact"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 font-bold text-black bg-[var(--cursor-color)] border-3 sm:border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide cursor-none text-xs sm:text-sm w-full sm:w-auto"
            >
              Contact me
            </a>
            <a 
              href="#Work"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 font-bold text-black bg-[#FFEB3B] border-3 sm:border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide cursor-none text-xs sm:text-sm w-full sm:w-auto"
            >
              My Work
            </a>
          </div>
        </div>

        {/* Right Content - Brutalist Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9, rotate: mounted ? 0 : 2 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="flex-1 hidden md:flex justify-center relative mt-10 md:mt-0 z-10"
        >
          <Terminal cursorColor={cursorColor} />
        </motion.div>
      </motion.div>
    </div>
  );
}
