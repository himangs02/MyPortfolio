import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import { 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA
} from './terminal/terminalData';
import { TERMINAL_CONFIG as REAL_CONFIG } from './terminal/terminalConfig';

type Tab = 'CHARACTER' | 'SKILL TREE' | 'QUEST LOG' | 'INVENTORY' | 'COMM-LINK';
const TABS: Tab[] = ['CHARACTER', 'SKILL TREE', 'QUEST LOG', 'INVENTORY', 'COMM-LINK'];

export default function GamifiedPortfolio({ onExit, cursorColor, cursorShape }: { onExit: () => void, cursorColor: string, cursorShape: any }) {
  const [activeTab, setActiveTab] = useState<Tab>('CHARACTER');
  const [glitch, setGlitch] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  const playSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  };

  const handleTabChange = (tab: Tab) => {
    playSound();
    setActiveTab(tab);
  };

  return (
    <div className={`fixed inset-0 bg-[#0A0A0A] text-white overflow-hidden font-mono select-none md:cursor-none z-[99999] ${glitch ? 'translate-x-[2px] -translate-y-[1px]' : ''}`}>
      <CustomCursor color={cursorColor} shape={cursorShape} />
      
      {/* Scanlines and Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-50 pointer-events-none opacity-40"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      {/* Main Container */}
      <div className="flex flex-col h-full max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end border-b-8 border-white pb-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-[#00FF66] tracking-tighter drop-shadow-[4px_4px_0_#000]">
              Player Dashboard
            </h1>
            <p className="text-[#00E5FF] font-bold text-lg md:text-xl mt-2 uppercase tracking-widest">
              Lvl 99 FullStack Developer
            </p>
          </div>
          <button 
            onClick={onExit}
            className="px-4 py-2 bg-[#FF0055] text-black font-black uppercase border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] transition-all cursor-none"
          >
            [ESC] Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 md:px-6 md:py-3 font-black uppercase text-sm md:text-xl border-4 transition-all cursor-none ${
                activeTab === tab 
                  ? 'bg-[#FFEB3B] text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' 
                  : 'bg-transparent text-white border-[#333] hover:border-white hover:bg-[#222]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
          {activeTab === 'CHARACTER' && <CharacterTab />}
          {activeTab === 'SKILL TREE' && <SkillTreeTab />}
          {activeTab === 'QUEST LOG' && <QuestLogTab />}
          {activeTab === 'INVENTORY' && <InventoryTab />}
          {activeTab === 'COMM-LINK' && <CommLinkTab config={REAL_CONFIG} />}
        </div>
      </div>
    </div>
  );
}

function CharacterTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-4 border-white p-6 bg-[#111] shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-black text-[#00E5FF] mb-6 uppercase border-b-2 border-[#333] pb-2">Avatar Status</h2>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b border-[#222] pb-2">
            <span className="text-white/60">Name:</span>
            <span className="font-bold text-[#FFEB3B]">Himangshu</span>
          </div>
          <div className="flex justify-between border-b border-[#222] pb-2">
            <span className="text-white/60">Class:</span>
            <span className="font-bold text-white">FullStack Engineer</span>
          </div>
          <div className="flex justify-between border-b border-[#222] pb-2">
            <span className="text-white/60">Guild:</span>
            <span className="font-bold text-[#00FF66]">Freelancers</span>
          </div>
          <div className="flex justify-between border-b border-[#222] pb-2">
            <span className="text-white/60">Base Location:</span>
            <span className="font-bold text-white">Earth, Sol System</span>
          </div>
        </div>
      </div>
      
      <div className="border-4 border-white p-6 bg-[#111] shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-black text-[#FF0055] mb-6 uppercase border-b-2 border-[#333] pb-2">Attributes</h2>
        <div className="space-y-6">
          <AttributeBar label="Problem Solving" value={95} color="bg-[#00FF66]" />
          <AttributeBar label="Frontend Magic" value={90} color="bg-[#00E5FF]" />
          <AttributeBar label="Backend Logic" value={85} color="bg-[#FFEB3B]" />
          <AttributeBar label="UI/UX Design" value={80} color="bg-[#FF0055]" />
        </div>
      </div>
    </div>
  );
}

function AttributeBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold uppercase tracking-wider">{label}</span>
        <span className="text-white/60">{value}/100</span>
      </div>
      <div className="h-4 w-full bg-[#222] border-2 border-[#444]">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function SkillTreeTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-black text-white mb-6 uppercase">Unlocked Nodes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category} className="border-4 border-white p-5 bg-[#111] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-black text-[#FFEB3B] mb-4 uppercase">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-[#222] text-[#00E5FF] border-2 border-[#00E5FF] font-bold text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestLogTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      <div>
        <h2 className="text-3xl font-black text-[#00FF66] mb-6 uppercase flex items-center gap-4">
          <span>Main Quests</span>
          <span className="text-sm px-2 py-1 bg-[#222] text-white border border-[#444]">(Experience)</span>
        </h2>
        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isPresent = exp.duration.toLowerCase().includes('present');
            const statusColor = isPresent ? 'text-[#00E5FF]' : 'text-[#00FF66]';
            const statusText = isPresent ? 'Status: Active Quest (+25 XP/day)' : 'Status: Completed (+5000 XP)';
            
            return (
              <div key={idx} className={`border-l-4 ${isPresent ? 'border-[#00E5FF]' : 'border-[#00FF66]'} pl-6 py-2 relative before:content-[''] before:absolute before:left-[-12px] before:top-4 before:w-5 before:h-5 before:bg-[#111] before:border-4 ${isPresent ? 'before:border-[#00E5FF]' : 'before:border-[#00FF66]'}`}>
                <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                <p className="text-[#FFEB3B] font-bold mt-1">@ {exp.company} <span className="text-white/50 font-normal ml-2">{exp.duration}</span></p>
                <p className="mt-3 text-white/80 max-w-3xl">{exp.description}</p>
                <div className={`mt-4 text-sm font-bold ${statusColor} uppercase`}>{statusText}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="pt-8 border-t-2 border-[#333]">
        <h2 className="text-3xl font-black text-[#00E5FF] mb-6 uppercase flex items-center gap-4">
          <span>Tutorials</span>
          <span className="text-sm px-2 py-1 bg-[#222] text-white border border-[#444]">(Education)</span>
        </h2>
        <div className="space-y-4">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-[#00E5FF] pl-6 py-2 relative before:content-[''] before:absolute before:left-[-12px] before:top-4 before:w-5 before:h-5 before:bg-[#111] before:border-4 before:border-[#00E5FF]">
              <h3 className="text-2xl font-black text-white">{edu.degree}</h3>
              <p className="text-white/80 font-bold mt-1">{edu.institution}</p>
              <p className="mt-1 text-white/50">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InventoryTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-black text-white mb-6 uppercase">Legendary Items Crafted</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <div key={idx} className="border-4 border-white bg-[#111] shadow-[8px_8px_0px_0px_rgba(0,229,255,0.4)] flex flex-col">
            <div className="bg-[#222] p-4 border-b-4 border-white flex justify-between items-center">
              <h3 className="text-2xl font-black text-white uppercase truncate pr-4">{project.name}</h3>
              <span className="px-2 py-1 bg-[#FF0055] text-black font-bold text-xs uppercase">Unique</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-white/80 mb-6 flex-1 text-lg">{project.description}</p>
              
              <div className="mb-6">
                <span className="text-[#FFEB3B] font-bold text-sm uppercase mb-2 block">Stats (Tech):</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-bold text-white bg-[#333] px-2 py-1">+{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full text-center py-3 bg-[#00FF66] text-black font-black uppercase border-2 border-[#00FF66] hover:bg-transparent hover:text-[#00FF66] transition-colors cursor-none"
                >
                  Equip (Demo)
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommLinkTab({ config }: { config: any }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto mt-10">
      <div className="border-4 border-[#FF0055] bg-[#111] p-8 shadow-[12px_12px_0px_0px_rgba(255,0,85,0.5)]">
        <h2 className="text-4xl font-black text-white mb-2 uppercase text-center">Comm-Link Active</h2>
        <p className="text-center text-[#FF0055] font-bold mb-8 uppercase animate-pulse">Awaiting Transmission...</p>
        
        <div className="space-y-4">
          <a href={`mailto:${config.email}`} className="block border-4 border-white p-4 hover:bg-white hover:text-black transition-colors group cursor-none">
            <div className="flex justify-between items-center">
              <span className="font-black uppercase text-xl group-hover:text-black text-[#00E5FF]">Send Message</span>
              <span className="font-bold opacity-60">{config.email}</span>
            </div>
          </a>
          
          <a href={config.github} target="_blank" rel="noreferrer" className="block border-4 border-white p-4 hover:bg-white hover:text-black transition-colors group cursor-none">
            <div className="flex justify-between items-center">
              <span className="font-black uppercase text-xl group-hover:text-black text-[#00FF66]">Access Database</span>
              <span className="font-bold opacity-60">GitHub</span>
            </div>
          </a>
          
          <a href={config.linkedin} target="_blank" rel="noreferrer" className="block border-4 border-white p-4 hover:bg-white hover:text-black transition-colors group cursor-none">
            <div className="flex justify-between items-center">
              <span className="font-black uppercase text-xl group-hover:text-black text-[#FFEB3B]">Guild Network</span>
              <span className="font-bold opacity-60">LinkedIn</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
