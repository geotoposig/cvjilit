
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

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
    <div className="min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="overflow-x-hidden">
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
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
