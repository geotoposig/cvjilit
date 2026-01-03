
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
      // حساب حركة الماوس بنسبة مئوية لتحريك الخلفية بشكل طفيف (Parallax)
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
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
    <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden">
      {/* Interactive GIF Background (Transparent Look) */}
      <div 
        className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-700 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.1]'}`}
        style={{
          // رابط GIF الجديد لخريطة تضاريس متقدمة
          backgroundImage: `url('https://cdn.dribbble.com/userupload/22074728/file/original-ea0981a284d1e1f2158a304b23e90aeb.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.15)`,
          transition: 'transform 0.2s ease-out',
          filter: isDark ? 'invert(1) contrast(1.5) brightness(0.8)' : 'contrast(1.1) brightness(1.1)'
        }}
      />

      {/* Subtle Pattern for Overlay depth */}
      <div className="fixed inset-0 z-[-2] topo-bg pointer-events-none opacity-30"></div>
      
      {/* Background Color Base */}
      <div className="fixed inset-0 z-[-3] bg-slate-50 dark:bg-slate-950 pointer-events-none"></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <Hero />
        
        {/* Animated Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        </div>

        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: "Années d'Expérience", value: "5+" },
              { label: "Logiciels SIG", value: "10+" },
              { label: "Cartes Réalisées", value: "100+" },
              { label: "RGPH Mission", value: "2024" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm p-6 rounded-3xl border border-white/50 dark:border-slate-800/50 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
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
