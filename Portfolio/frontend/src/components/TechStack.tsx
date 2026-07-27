import React from 'react';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython,
  SiMysql, SiMongodb, SiPrisma, SiSequelize, SiSupabase,
  SiC, SiCplusplus, SiR,
  SiGit, SiGithub, SiPostman, SiVercel, SiRender
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { FaBrain, FaNetworkWired, FaProjectDiagram, FaCube } from 'react-icons/fa';

export default function TechStack() {
  const techs = [
    { icon: SiJavascript, name: "JavaScript", color: "text-black", bg: "bg-[#F7DF1E]", span: "col-span-2 row-span-2" },
    { icon: SiReact, name: "React", color: "text-black", bg: "bg-[#61DAFB]", span: "col-span-1 row-span-1" },
    { icon: SiPython, name: "Python", color: "text-white", bg: "bg-[#3776AB]", span: "col-span-1 row-span-1" },
    
    { icon: SiNodedotjs, name: "Node.js", color: "text-white", bg: "bg-[#339933]", span: "col-span-1 row-span-1" },
    { icon: SiTypescript, name: "TypeScript", color: "text-white", bg: "bg-[#3178C6]", span: "col-span-1 row-span-1" },
    
    { icon: SiNextdotjs, name: "Next.js", color: "text-white", bg: "bg-[#000000]", span: "col-span-2 row-span-1" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-black", bg: "bg-[#06B6D4]", span: "col-span-1 row-span-1" },
    { icon: SiCss, name: "CSS3", color: "text-white", bg: "bg-[#1572B6]", span: "col-span-1 row-span-1" },
    
    { icon: SiMongodb, name: "MongoDB", color: "text-white", bg: "bg-[#47A248]", span: "col-span-2 row-span-1" },
    { icon: SiMysql, name: "MySQL", color: "text-white", bg: "bg-[#4479A1]", span: "col-span-1 row-span-1" },
    { icon: SiSupabase, name: "Supabase", color: "text-white", bg: "bg-[#3ECF8E]", span: "col-span-1 row-span-1" },
    
    { icon: SiGit, name: "Git", color: "text-white", bg: "bg-[#F05032]", span: "col-span-1 row-span-1" },
    { icon: SiGithub, name: "GitHub", color: "text-black", bg: "bg-white", span: "col-span-1 row-span-1" },
    { icon: DiVisualstudio, name: "VS Code", color: "text-white", bg: "bg-[#007ACC]", span: "col-span-1 row-span-1" },
    { icon: SiPostman, name: "Postman", color: "text-white", bg: "bg-[#FF6C37]", span: "col-span-1 row-span-1" },
    
    { icon: SiExpress, name: "Express", color: "text-black", bg: "bg-[#E5E5E5]", span: "col-span-1 row-span-1" },
    { icon: SiVercel, name: "Vercel", color: "text-white", bg: "bg-black", span: "col-span-1 row-span-1" },
    { icon: SiPrisma, name: "Prisma", color: "text-white", bg: "bg-[#2D3748]", span: "col-span-2 row-span-1" },
    
    { icon: SiHtml5, name: "HTML5", color: "text-white", bg: "bg-[#E34F26]", span: "col-span-1 row-span-1" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-white", bg: "bg-[#7952B3]", span: "col-span-1 row-span-1" },
    { icon: SiSequelize, name: "Sequelize", color: "text-white", bg: "bg-[#52B0E7]", span: "col-span-2 row-span-1" },

    { icon: SiC, name: "C", color: "text-white", bg: "bg-[#A8B9CC]", span: "col-span-1 row-span-1" },
    { icon: SiCplusplus, name: "C++", color: "text-white", bg: "bg-[#00599C]", span: "col-span-1 row-span-1" },
    { icon: SiR, name: "R", color: "text-white", bg: "bg-[#276DC3]", span: "col-span-1 row-span-1" },
    { icon: FaBrain, name: "AI", color: "text-white", bg: "bg-[#8A2BE2]", span: "col-span-1 row-span-1" },

    { icon: FaNetworkWired, name: "Machine Learning", color: "text-black", bg: "bg-[#00FF66]", span: "col-span-2 row-span-1" },
    { icon: FaProjectDiagram, name: "System Design", color: "text-black", bg: "bg-[#00E5FF]", span: "col-span-2 row-span-1" },
  ];

  return (
    <div 
      id="TechStack" 
      className="relative min-h-screen w-full leading-tight py-8 md:py-12 flex flex-col justify-center items-center overflow-hidden bg-transparent snap-start"
    >
      
      {/* Professional Header */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center gap-2 mb-6 px-4">
        <div className="inline-block bg-[#00FF66] text-black font-bold uppercase tracking-widest text-xs px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          Expertise
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,5px_5px_0_#FF0055]">
          Tech Stack
        </h1>
        <p className="text-black dark:text-white font-medium max-w-2xl mt-1 text-sm md:text-base bg-white dark:bg-[#111111] p-2 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          A collection of technologies, languages, and tools I use to build beautiful, scalable, and high-performance applications.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 w-[95vw] md:w-[90vw] lg:w-[85vw] grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[70px] md:auto-rows-[80px]">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            const isLarge = tech.span.includes('row-span-2');
            return (
              <div 
                key={idx} 
                className={`group flex flex-col justify-center items-center ${tech.bg} ${tech.span} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 cursor-none ${isLarge ? 'gap-2 p-4' : 'gap-1 p-2'}`}
                title={tech.name}
              >
                <Icon className={`${isLarge ? 'w-10 h-10 md:w-12 md:h-12' : 'w-5 h-5 md:w-7 md:h-7'} ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className={`${isLarge ? 'text-sm md:text-base font-black' : 'text-[10px] md:text-xs font-bold'} opacity-90 group-hover:opacity-100 ${tech.color} text-center tracking-wide uppercase`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
    </div>
  );
}
