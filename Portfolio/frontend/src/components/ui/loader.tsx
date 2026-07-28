import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export function LoaderThree() {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "WAKING UP DAEMONS...",
    "REROUTING MAINFRAME...",
    "CRACKING ICE...",
    "INJECTING PAYLOAD...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex(i => Math.min(i + 1, loadingTexts.length - 1));
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F4F0] dark:bg-[#0A0A0A] overflow-hidden font-mono p-4 transition-colors duration-0">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-[#00E5FF] dark:bg-[#0A0A0A] border-4 border-black dark:border-white p-6 w-full max-w-md shadow-[12px_12px_0_0_#000] dark:shadow-[12px_12px_0_0_#fff]"
      >
        {/* Decorative corner blocks */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-black dark:bg-white" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-black dark:bg-white" />
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-black dark:bg-white" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-black dark:bg-white" />

        <div className="border-b-4 border-black dark:border-white pb-4 mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tighter">System.Boot</h2>
          <div className="animate-pulse w-4 h-4 bg-[#FF0055] border-2 border-black dark:border-white" />
        </div>

        <div className="flex flex-col gap-3 min-h-[140px]">
          {loadingTexts.map((text, i) => (
            <div 
              key={i} 
              className={`text-black dark:text-white font-bold text-sm sm:text-base flex items-center gap-2 ${i > textIndex ? 'opacity-0' : 'opacity-100'}`}
            >
              <span className="text-[#FF0055]">{'>'}</span> 
              {text}
              {i === textIndex && i !== loadingTexts.length - 1 && (
                <span className="w-2.5 h-4 bg-black dark:bg-white inline-block animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 w-full h-8 border-4 border-black dark:border-white bg-white dark:bg-[#222] p-1">
          <motion.div 
            className="h-full bg-black dark:bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
