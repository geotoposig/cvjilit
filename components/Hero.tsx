
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Mail, Phone, ExternalLink, Facebook, Instagram, Twitter, Linkedin, MessageCircle, FileDown, Send } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Profile Image with Status and Flag */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-transform group-hover:scale-105 duration-500 bg-white dark:bg-slate-900">
            <img 
              src="https://jilitelmostafa.github.io/portfolio/assets/img/Jilit-Elmostafa.webp" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Indicator (Right) */}
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 border-4 border-white dark:border-slate-800 rounded-full animate-pulse shadow-lg z-10" title="En ligne"></div>
          
          {/* Morocco Flag Indicator (Left) */}
          <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-white dark:border-slate-800 rounded-full shadow-lg overflow-hidden z-10 bg-white flex items-center justify-center" title="Maroc">
            <img 
              src="https://flagcdn.com/w80/ma.png" 
              alt="Maroc" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50">
          Disponible pour de nouveaux projets
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">
          {PERSONAL_INFO.name}
        </h1>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { href: PERSONAL_INFO.socials.facebook, icon: Facebook, color: 'hover:text-indigo-600', title: 'Facebook' },
            { href: PERSONAL_INFO.socials.instagram, icon: Instagram, color: 'hover:text-rose-600', title: 'Instagram' },
            { href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, color: 'hover:text-blue-600', title: 'LinkedIn' },
            { href: PERSONAL_INFO.socials.twitter, icon: Twitter, color: 'hover:text-slate-900 dark:hover:text-white', title: 'Twitter' },
            { href: PERSONAL_INFO.socials.tiktok, icon: TikTokIcon, color: 'hover:text-black dark:hover:text-slate-300', title: 'TikTok' },
            { href: PERSONAL_INFO.socials.whatsapp, icon: MessageCircle, color: 'hover:text-emerald-600', title: 'WhatsApp' }
          ].map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-2.5 bg-white dark:bg-slate-800 rounded-full text-slate-500 ${social.color} border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-110`} title={social.title}>
              <social.icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PERSONAL_INFO.titles.map((title, i) => (
            <span key={i} className="px-5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 shadow-sm font-medium">
              {title}
            </span>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {PERSONAL_INFO.objective}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href={PERSONAL_INFO.cvLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-xl transition-all active:scale-95 group">
            <FileDown size={24} className="group-hover:animate-bounce" />
            Télécharger mon CV
          </a>
          <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
            <Send size={20} className="text-indigo-600 dark:text-indigo-400" />
            Me Contacter
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { icon: MapPin, label: 'Localisation', value: PERSONAL_INFO.location, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' },
            { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30' },
            { icon: Phone, label: 'Téléphone', value: PERSONAL_INFO.phone, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
            { icon: ExternalLink, label: 'LinkedIn', value: 'Connecter', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30', href: PERSONAL_INFO.linkedin }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`${item.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform`}>
                <item.icon size={22} />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{item.label}</p>
                {item.href ? (
                   <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold truncate block group-hover:text-indigo-600 transition-colors">{item.value}</a>
                ) : (
                  <p className="text-sm font-semibold truncate">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
