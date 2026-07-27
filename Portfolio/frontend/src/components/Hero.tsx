import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Terminal from './terminal/Terminal';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="Home" className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 pt-20 md:pt-0 snap-start relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10"
      >
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
          <div>
            <div className="inline-block bg-[#00FF66] text-black font-bold uppercase tracking-widest text-xs md:text-sm px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
              Welcome to my portfolio
            </div>
            <h1 className="text-[56px] md:text-[72px] lg:text-[96px] font-black leading-[1] tracking-tighter pb-2 text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_#FF0055]">
              Himangshu
            </h1>
            <h2 className="text-black dark:text-white text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-tight tracking-tight mt-2 uppercase border-b-4 border-black dark:border-white inline-block pb-1">
              FullStack Developer
            </h2>
          </div>

          <p className="text-black dark:text-white text-base md:text-lg max-w-xl mx-auto md:mx-0 mt-4 font-medium leading-relaxed border-l-4 border-[#00E5FF] pl-4">
            I help turn ideas into fully functional, responsive web apps using the latest technologies. With expertise in both frontend and backend, I build scalable and maintainable digital products that drive real results.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
            <a href="#About" className="inline-block">
              <button className="h-14 px-8 font-bold text-black bg-[#FF0055] border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide">
                Get Started
              </button>
            </a>
            <a href="#Contact" className="inline-block">
              <button className="h-14 px-8 font-bold text-black bg-[#00E5FF] border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide">
                Contact me
              </button>
            </a>
            <a href="#Work" className="inline-block">
              <button className="h-14 px-8 font-bold text-black bg-[#FFEB3B] border-4 border-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wide">
                My Work
              </button>
            </a>
          </div>
        </div>

        {/* Right Content - Brutalist Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9, rotate: mounted ? 0 : 2 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="flex-1 hidden md:flex justify-center relative mt-10 md:mt-0"
        >
          {/* Decorative floating elements behind terminal */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-10 -right-4 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-[#FFEB3B] border-4 md:border-8 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center z-0"
            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          >
            <span className="font-black text-black text-lg md:text-xl -rotate-12">CODE</span>
          </motion.div>

          <Terminal />
        </motion.div>
      </motion.div>
    </div>
  );
}
