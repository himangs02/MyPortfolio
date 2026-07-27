import React, { useState, useEffect, useRef } from 'react';
import { AVAILABLE_COMMANDS } from './terminalData';
import { parseCommand } from './commandParser';

interface HistoryItem {
  id: number;
  command?: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [historyIdCounter, setHistoryIdCounter] = useState(0);
  
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  const getWelcomeMessage = () => ({
    id: -1,
    output: (
      <>
        <p className="flex items-center gap-2">
          <span className="text-[#FF0055] font-bold">{`>`}</span>
          <span className="text-white font-bold">npm install dev-skills</span>
        </p>
        <div className="text-[#00E5FF] font-medium pl-3 md:pl-4 border-l-2 border-[#333333] space-y-1">
          <p>[+] React, Next.js, TypeScript added.</p>
          <p>[+] Node.js, Express, MongoDB linked.</p>
          <p>[+] Neo-Brutalism UI activated.</p>
        </div>
        <p className="flex items-center gap-2 mt-1 md:mt-2">
          <span className="text-[#00FF66] font-bold">{`>`}</span>
          <span className="text-white font-bold">npm start portfolio</span>
        </p>
        <div className="text-white opacity-80 pl-3 md:pl-4 space-y-1">
          <p>Compiling...</p>
          <p className="text-[#00FF66]">Compiled successfully in 42ms.</p>
        </div>
        <p className="text-[#FFEB3B] font-bold mt-2">Welcome to the interactive terminal. Type 'help' to see available commands.</p>
      </>
    )
  });

  useEffect(() => {
    setHistory([getWelcomeMessage()]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      // Use scrollTop instead of scrollIntoView to prevent the entire page from scrolling
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, isMinimized, isMaximized]);

  // Keep focus on input
  useEffect(() => {
    const handleClick = () => {
      if (!isMinimized) inputRef.current?.focus();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMinimized]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  const handleTabCompletion = () => {
    if (!input.trim()) return;

    const parts = input.split(' ');
    const lastPart = parts[parts.length - 1].toLowerCase();

    let matches: string[] = [];

    if (parts.length === 1) {
      matches = AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(lastPart));
    }

    if (matches.length === 1) {
      parts[parts.length - 1] = matches[0];
      setInput(parts.join(' ') + ' ');
    } else if (matches.length > 1) {
      const newOutput = (
        <div className="flex flex-col">
          <p className="flex items-center gap-2">
            <span className="text-[#FFEB3B] font-bold">{`>`}</span>
            <span className="text-white font-bold">{input}</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-1">
            {matches.map(match => (
              <span key={match} className="text-[#00E5FF]">{match}</span>
            ))}
          </div>
        </div>
      );
      
      setHistory(prev => [...prev, { id: historyIdCounter, output: newOutput }]);
      setHistoryIdCounter(prev => prev + 1);
    }
  };

  const executeCommand = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setHistory(prev => [
        ...prev, 
        { 
          id: historyIdCounter, 
          command: '',
          output: (
            <p className="flex items-center gap-2">
              <span className="text-[#FFEB3B] font-bold">{`>`}</span>
            </p>
          )
        }
      ]);
      setHistoryIdCounter(prev => prev + 1);
      return;
    }

    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    const commandBlock = (
      <p className="flex items-center gap-2">
        <span className="text-[#FFEB3B] font-bold">{`>`}</span>
        <span className="text-white font-bold">{trimmedInput}</span>
      </p>
    );

    setHistory(prev => [...prev, { id: historyIdCounter, command: trimmedInput, output: commandBlock }]);
    setHistoryIdCounter(prev => prev + 1);

    // Give a slight realistic delay to execution
    setTimeout(() => {
      const result = parseCommand(trimmedInput, setHistory);
      if (result) {
        setHistory(prev => [...prev, { id: historyIdCounter + 1, output: result }]);
        setHistoryIdCounter(prev => prev + 2);
      } else {
        setHistoryIdCounter(prev => prev + 1);
      }
    }, 150);

    setInput('');
  };

  // Neo-brutalist container classes
  const containerClasses = `
    transition-all duration-300 flex flex-col z-50 relative overflow-hidden bg-[#111111]
    border-4 md:border-8 border-black dark:border-white 
    shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] 
    dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]
    ${isMaximized 
      ? 'fixed top-[5vh] left-[5vw] w-[90vw] h-[90vh] z-[100] max-w-none' 
      : 'w-full max-w-md'
    }
  `;

  return (
    <div 
      className={containerClasses} 
      onClick={() => !isMinimized && inputRef.current?.focus()}
    >
      {isMaximized && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] cursor-pointer" onClick={() => setIsMaximized(false)} />
      )}
      
      {/* Terminal Header */}
      <div className="bg-white dark:bg-black border-b-4 md:border-b-8 border-black dark:border-white px-3 py-2 md:px-4 md:py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex gap-2">
          <button 
            onClick={() => {
              setHistory([getWelcomeMessage()]);
              setHistoryIdCounter(0);
            }}
            className="w-4 h-4 md:w-5 md:h-5 bg-[#FF0055] border-2 md:border-4 border-black dark:border-white rounded-full cursor-pointer hover:brightness-110 active:scale-95"
            title="Clear Terminal"
          />
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-4 h-4 md:w-5 md:h-5 bg-[#FFEB3B] border-2 md:border-4 border-black dark:border-white rounded-full cursor-pointer hover:brightness-110 active:scale-95"
            title={isMinimized ? "Expand" : "Minimize"}
          />
          <button 
            onClick={() => {
              if (isMinimized) setIsMinimized(false);
              setIsMaximized(!isMaximized);
            }}
            className="w-4 h-4 md:w-5 md:h-5 bg-[#00FF66] border-2 md:border-4 border-black dark:border-white rounded-full cursor-pointer hover:brightness-110 active:scale-95"
            title={isMaximized ? "Restore" : "Maximize"}
          />
        </div>
        <span className="text-black dark:text-white font-black uppercase text-[10px] md:text-xs tracking-widest">
          guest@himangshu:~
        </span>
      </div>
      
      {/* Terminal Body */}
      {!isMinimized && (
        <div 
          ref={containerRef}
          className={`p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed flex flex-col gap-2 md:gap-3 overflow-y-auto overflow-x-hidden scrollbar-hide ${isMaximized ? 'flex-1 h-full' : 'h-[300px] md:h-[400px]'}`}
        >
          {history.map((item) => (
            <div key={item.id} className="animate-in fade-in slide-in-from-bottom-2 duration-200 w-full">
              {item.output}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center gap-2 mt-2 md:mt-4 text-[#FFEB3B] font-black text-sm md:text-base w-full">
            <span className="text-[#FFEB3B] shrink-0">{`>`}</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none text-white font-bold w-full caret-transparent"
                spellCheck="false"
                autoComplete="off"
                autoFocus
              />
              {/* Custom blinking block cursor positioned over the actual input cursor */}
              <span 
                className="absolute pointer-events-none text-white animate-pulse"
                style={{
                  left: `calc(${input.length}ch)`, // Approximates cursor position in monospace font
                }}
              >
                _
              </span>
            </div>
          </div>
          <div className="h-4 w-full shrink-0" />
        </div>
      )}
    </div>
  );
}
