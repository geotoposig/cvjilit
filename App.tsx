
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // تحريك خفيف للخلفية (Parallax effect)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300">
      {/* Interactive Background GIF (Visible in Light Mode) */}
      {!isDark && (
        <div 
          className="fixed inset-0 z-[-1] pointer-events-none opacity-10"
          style={{
            backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZkODl4N3R6eGZ5Z2x6Z2x6Z2x6Z2x6Z2x6Z2x6Z2x6Z2wmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/3o7TKVUn7iM8FMEU24/giphy.gif')`, // خريطة تقنية مجردة
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      )}
      
      {/* Topographic Pattern Overlay */}
      <div className="fixed inset-0 z-[-2] topo-bg pointer-events-none opacity-50"></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative overflow-x-hidden">
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Années d'Expérience", value: "5+" },
              { label: "Logiciels SIG", value: "10+" },
              { label: "Cartes Réalisées", value: "100+" },
              { label: "RGPH Mission", value: "2024" }
            ].map((stat, i) => (
              <div key={i} className="text-center group transition-transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default App;
