import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // تحريك خفيف للخلفية (Parallax effect)
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
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
    <div className="relative min-h-screen transition-colors duration-300 overflow-x-hidden">
      {/* Interactive Transparent GIF Background */}
      <div 
        className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-700 ${isDark ? 'opacity-[0.04]' : 'opacity-[0.08]'}`}
        style={{
          backgroundImage: `url('https://cdn.dribbble.com/userupload/22074728/file/original-ea0981a284d1e1f2158a304b23e90aeb.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)`,
          transition: 'transform 0.15s ease-out',
          filter: isDark ? 'invert(1) brightness(0.7)' : 'none'
        }}
      />
      
      {/* Background Layer Base */}
      <div className="fixed inset-0 z-[-2] bg-slate-50 dark:bg-slate-950 pointer-events-none"></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative">
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