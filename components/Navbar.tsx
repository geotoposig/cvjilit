
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
    <nav className="sticky top-0 z-[100] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold transform hover:rotate-12 transition-transform cursor-pointer">J</div>
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">{PERSONAL_INFO.name}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://jilitdesigner.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50 font-bold group"
            >
              Jilit Designer 🔗
              <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a 
              href="#contact" 
              className="hidden sm:block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
            >
              Collaborer
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://jilitdesigner.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50"
          >
            Jilit Designer 🔗
            <ExternalLink size={18} />
          </a>
          <div className="pt-4">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
            >
              Collaborer
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
