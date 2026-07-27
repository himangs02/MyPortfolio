import { useState, useEffect } from 'react';
import LoaderThreeDemo from './components/loader-three-demo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import CursorGrid from './components/ui/CursorGrid';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets or data
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderThreeDemo />;
  }

  return (
    <div id="scroll-container" className="bg-[#F4F4F0] dark:bg-[#0A0A0A] h-screen w-full overflow-x-hidden overflow-y-auto snap-y snap-mandatory text-black dark:text-white transition-colors duration-0 relative selection:bg-pink-500 selection:text-white font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <CursorGrid
          cellSize={60}
          color="#FF0055"
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
        <Navbar />
        <main className="flex flex-col gap-10">
          <Hero />
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
