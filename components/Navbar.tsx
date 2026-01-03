
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Sun, Moon, ExternalLink, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Formation', href: '#education' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-[100] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold transform hover:rotate-12 transition-all cursor-pointer shadow-lg shadow-indigo-500/20">J</div>
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight hidden sm:block">{PERSONAL_INFO.name}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 dark:text-slate-300 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group py-2">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://jilitdesigner.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 font-bold group"
            >
              Jilit Designer 🔗
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700 active:scale-90"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Glassmorphism Style) */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 shadow-2xl ${isMenuOpen ? 'max-height-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block px-5 py-4 rounded-2xl text-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a 
              href="https://jilitdesigner.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between px-6 py-5 rounded-2xl text-lg font-black text-white bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-xl shadow-indigo-500/20"
            >
              <span>Jilit Designer 🔗</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
