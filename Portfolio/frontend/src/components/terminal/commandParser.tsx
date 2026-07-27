import React from 'react';
import { TERMINAL_CONFIG } from './terminalConfig';
import {
  AVAILABLE_COMMANDS,
  TERMINAL_BANNER,
  SKILLS_DATA,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  JOKES
} from './terminalData';

export const parseCommand = (commandStr: string, setTerminalHistory: React.Dispatch<React.SetStateAction<any[]>>): React.ReactNode => {
  const args = commandStr.trim().split(' ').filter(Boolean);
  if (args.length === 0) return null;

  const command = args[0].toLowerCase();

  switch (command) {
    case 'help':
      return (
        <div className="flex flex-col gap-1">
          {AVAILABLE_COMMANDS.map((cmd) => (
            <span key={cmd}>{cmd}</span>
          ))}
        </div>
      );

    case 'about':
      return (
        <div className="max-w-xl">
          <p>
            I am a passionate developer focusing on modern web technologies. I love building intuitive,
            fast, and scalable applications. My aesthetic approach is heavily influenced by brutalism
            and minimalistic functional design.
          </p>
        </div>
      );

    case 'skills':
      return (
        <div className="flex flex-col gap-4">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div key={category}>
              <span className="font-bold text-[#FFEB3B] underline">{category}</span>
              <div className="mt-1 flex flex-col gap-1">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case 'projects':
      return (
        <div className="flex flex-col gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="flex flex-col gap-1 border-l-2 border-[#333] pl-4">
              <span className="font-bold text-[#00E5FF] text-lg">{project.name}</span>
              <span>{project.description}</span>
              <span className="text-[#00FF66]">Tech: {project.techStack.join(', ')}</span>
              <div className="flex gap-4 mt-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="bg-white text-black px-2 py-1 font-bold hover:bg-gray-200">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="bg-[#FF0055] text-black px-2 py-1 font-bold hover:bg-red-600">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      );

    case 'experience':
      return (
        <div className="flex flex-col gap-4">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1 border-l-2 border-[#333] pl-4">
              <span className="font-bold text-[#FFEB3B]">{exp.role}</span>
              <span className="text-white">@ {exp.company}</span>
              <span className="opacity-80">{exp.duration}</span>
              <span className="mt-1">{exp.description}</span>
            </div>
          ))}
        </div>
      );

    case 'education':
      return (
        <div className="flex flex-col gap-4">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="flex flex-col gap-1 border-l-2 border-[#333] pl-4">
              <span className="font-bold text-[#00E5FF]">{edu.degree}</span>
              <span className="text-white">{edu.institution}</span>
              <span className="opacity-80">{edu.year}</span>
            </div>
          ))}
        </div>
      );

    case 'contact':
      return (
        <div className="flex flex-col gap-2">
          <span><span className="font-bold text-[#FF0055]">Email:</span> {TERMINAL_CONFIG.email}</span>
          <span><span className="font-bold text-[#00E5FF]">LinkedIn:</span> {TERMINAL_CONFIG.linkedin}</span>
          <span><span className="font-bold text-[#00FF66]">GitHub:</span> {TERMINAL_CONFIG.github}</span>
          <span><span className="font-bold text-[#FFEB3B]">Portfolio:</span> {TERMINAL_CONFIG.portfolio}</span>
        </div>
      );

    case 'github':
      window.open(TERMINAL_CONFIG.github, '_blank');
      return <span>Opening GitHub in a new tab...</span>;

    case 'linkedin':
      window.open(TERMINAL_CONFIG.linkedin, '_blank');
      return <span>Opening LinkedIn in a new tab...</span>;

    case 'resume':
      window.open(TERMINAL_CONFIG.resume, '_blank');
      return <span>Opening Resume in a new tab...</span>;

    case 'clear':
      setTimeout(() => {
        setTerminalHistory([]);
      }, 0);
      return null;

    case 'time':
      return <span>{new Date().toLocaleTimeString()}</span>;

    case 'joke':
      const randomJoke = JOKES[Math.floor(Math.random() * JOKES.length)];
      return <span className="text-[#00E5FF]">{randomJoke}</span>;

    case 'weather':
      return <span>Currently: 22°C, mostly sunny with a chance of bugs.</span>;

    case 'exit':
      return (
        <div className="flex flex-col gap-1">
          <span>Nice try 🙂</span>
          <span>This terminal cannot be closed.</span>
        </div>
      );
      
    case 'download':
      const link = document.createElement('a');
      link.href = TERMINAL_CONFIG.resume;
      link.download = 'Himangshu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return <span className="text-[#00FF66]">Downloading resume...</span>;

    case 'banner':
      return <pre className="text-[#00FF66] leading-tight font-black text-[10px] md:text-xs overflow-x-auto whitespace-pre">{TERMINAL_BANNER}</pre>;

    default:
      return (
        <div className="flex flex-col gap-1 text-[#FF0055]">
          <span>Command not found.</span>
          <span>Type <span className="font-bold text-white">help</span> to see available commands.</span>
        </div>
      );
  }
};
