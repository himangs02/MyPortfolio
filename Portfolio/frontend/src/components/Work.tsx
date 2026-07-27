import React from 'react';

export default function Work() {
  return (
    <div id="Work" className="min-h-screen snap-start py-[10vh] flex flex-col justify-center items-center w-full bg-transparent relative">
      
      {/* Professional Header */}
      <div className="flex flex-col items-center justify-center text-center gap-3 mb-16 px-4 z-10">
        <div className="inline-block bg-[#00E5FF] text-black font-bold uppercase tracking-widest text-xs md:text-sm px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
          Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_#FFEB3B]">
          Featured Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90vw] md:w-[85vw] mx-auto relative group z-10">
        
        {/* Project 1 */}
        <div className="relative flex flex-col justify-between items-start rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 group/card bg-[#FF0055] p-6 border-4 border-black h-full">
          
          <div className="w-full aspect-video border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 overflow-hidden bg-white">
            <img src="/exam-proctor.png" alt="Exam Proctor" className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" />
          </div>

          <div className="w-full flex justify-between items-start">
             <span className="bg-white text-black text-xs font-black uppercase px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">JavaScript</span>
          </div>

          <div className="mt-6 w-full flex-grow">
             <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-2 [text-shadow:3px_3px_0_#000]">
               Exam Proctor
             </h2>
             <p className="text-black dark:text-white font-bold text-xs md:text-sm uppercase bg-white dark:bg-[#111111] inline-block px-2 py-1 border-2 border-black dark:border-white">Online Exam Proctoring</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
            <a href="https://exam-proctar.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-black text-white text-center py-2 font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative flex flex-col justify-between items-start rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 group/card bg-[#FFEB3B] p-6 border-4 border-black h-full">
          
          <div className="w-full aspect-video border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 overflow-hidden bg-white">
            <img src="/raktsetu.png" alt="RaktSetu" className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" />
          </div>

          <div className="w-full flex justify-between items-start">
             <span className="bg-white text-black text-xs font-black uppercase px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">TypeScript</span>
          </div>

          <div className="mt-6 w-full flex-grow">
             <h2 className="text-black font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-2 [text-shadow:3px_3px_0_#FFF]">
               RaktSetu
             </h2>
             <p className="text-black dark:text-white font-bold text-xs md:text-sm uppercase bg-white dark:bg-[#111111] inline-block px-2 py-1 border-2 border-black dark:border-white">Health Tech App</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
            <a href="https://rakt-setu12.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-black text-white text-center py-2 font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative flex flex-col justify-between items-start rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 group/card bg-[#00FF66] p-6 border-4 border-black h-full">
          
          <div className="w-full aspect-video border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6 overflow-hidden bg-white">
            <img src="/campus.png" alt="Virtual Campus Tour" className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" />
          </div>

          <div className="w-full flex justify-between items-start">
             <span className="bg-white text-black text-xs font-black uppercase px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">React</span>
          </div>

          <div className="mt-6 w-full flex-grow">
             <h2 className="text-black font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-2 [text-shadow:3px_3px_0_#FFF]">
               Campus Tour
             </h2>
             <p className="text-black dark:text-white font-bold text-xs md:text-sm uppercase bg-white dark:bg-[#111111] inline-block px-2 py-1 border-2 border-black dark:border-white">Geeta University Virtual Tour</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
            <a href="https://virtual-wine.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full bg-black text-white text-center py-2 font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Live Demo
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center m-auto col-span-1 md:col-span-3 mt-14 mb-8">
          <span className="text-black bg-white dark:bg-[#111111] dark:text-white font-bold uppercase text-sm md:text-base border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] px-8 py-3">
            Click live demo to view projects
          </span>
        </div>
        
      </div>
    </div>
  );
}
