import { useState, useEffect } from 'react';
import LoaderThreeDemo from './components/loader-three-demo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import CursorGrid from './components/ui/CursorGrid';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorColor, setCursorColor] = useState('#00FF66');
  const [cursorShape, setCursorShape] = useState<'square' | 'circle' | 'cross'>('square');

  useEffect(() => {
    // Simulate loading assets or data
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--cursor-color', cursorColor);
  }, [cursorColor]);

  if (loading) {
    return <LoaderThreeDemo />;
  }

  return (
    <div id="scroll-container" className="bg-[#F4F4F0] dark:bg-[#0A0A0A] h-[100svh] w-full overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory text-black dark:text-white transition-colors duration-0 relative selection:bg-[var(--cursor-color)] selection:text-black dark:selection:text-white font-sans md:cursor-none no-scrollbar">
      <CustomCursor color={cursorColor} shape={cursorShape} />
      <div className="fixed inset-0 pointer-events-none z-0">
        <CursorGrid
          cellSize={60}
          color={cursorColor}
          radius={180}
          falloff="linear"
          holdTime={200}
          fadeDuration={400}
          lineWidth={2}
          maxOpacity={1}
          fillOpacity={0.1}
          gridOpacity={0.05}
          cellRadius={0}
          clickPulse
          pulseSpeed={300}
        />
      </div>
      <div className="relative z-10">
        <Navbar 
          cursorColor={cursorColor} 
          setCursorColor={setCursorColor} 
          cursorShape={cursorShape}
          setCursorShape={setCursorShape}
        />
        <main className="flex flex-col gap-10">
          <Hero cursorColor={cursorColor} />
          <About />
          <TechStack />
          <Work />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
