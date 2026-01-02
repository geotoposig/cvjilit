
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Mail, Phone, ExternalLink, Facebook, Instagram, Twitter, Linkedin, MessageCircle, FileDown, Send, Share2, Copy, Check } from 'lucide-react';

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

// Official Brand SVGs for Sharing
const WhatsAppSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const XSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const Hero: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(`Portfolio de ${PERSONAL_INFO.name} - Expert en SIG`);

  const shareLinks = [
    { 
      name: 'WhatsApp', 
      icon: WhatsAppSVG, 
      href: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
      brandColor: '#25D366',
      bgColor: 'hover:bg-[#25D366]/10'
    },
    { 
      name: 'Facebook', 
      icon: FacebookSVG, 
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      brandColor: '#1877F2',
      bgColor: 'hover:bg-[#1877F2]/10'
    },
    { 
      name: 'LinkedIn', 
      icon: LinkedInSVG, 
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      brandColor: '#0A66C2',
      bgColor: 'hover:bg-[#0A66C2]/10'
    },
    { 
      name: 'X', 
      icon: XSVG, 
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      brandColor: 'currentColor', // Respect dark/light mode for X
      bgColor: 'hover:bg-slate-100 dark:hover:bg-slate-800'
    },
  ];

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

        {/* Social Media Icons (Profiles) */}
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

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href={PERSONAL_INFO.cvLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-xl transition-all active:scale-95 group">
            <FileDown size={24} className="group-hover:animate-bounce" />
            Télécharger mon CV
          </a>
          <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
            <Send size={20} className="text-indigo-600 dark:text-indigo-400" />
            Me Contacter
          </a>
        </div>

        {/* Social Sharing Section */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <Share2 size={14} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Partager ce portfolio</span>
          </div>
          <div className="flex items-center gap-3">
            {shareLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all shadow-sm ${link.bgColor} group`}
                style={{ color: link.brandColor }}
                title={`Partager sur ${link.name}`}
              >
                <link.icon />
              </a>
            ))}
            <button
              onClick={handleCopyLink}
              className={`flex items-center gap-2 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 font-bold text-xs uppercase tracking-wider`}
              title="Copier le lien"
            >
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              <span className={copied ? 'text-emerald-500' : ''}>{copied ? 'Copié' : 'Lien'}</span>
            </button>
          </div>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { icon: MapPin, label: 'Localisation', value: PERSONAL_INFO.location, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' },
            { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30' },
            { 
              icon: Phone, 
              label: 'Téléphone', 
              value: PERSONAL_INFO.phone, 
              color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
              href: PERSONAL_INFO.socials.whatsapp 
            },
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
