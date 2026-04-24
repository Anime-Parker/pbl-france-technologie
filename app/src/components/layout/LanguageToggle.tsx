'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 md:top-4 md:bottom-auto md:right-4 z-50 flex items-center gap-2 pointer-events-auto bg-noir/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-champagne/10 shadow-lg">
      <span className={`text-[10px] font-cinzel tracking-widest uppercase transition-colors ${language === 'fr' ? 'text-champagne font-bold' : 'text-text-muted'}`}>
        FR
      </span>
      <button 
        onClick={toggleLanguage}
        className="relative inline-flex h-5 w-10 items-center rounded-full bg-glass border border-champagne/20 transition-colors focus:outline-none focus:ring-2 focus:ring-champagne/50"
        aria-label="Toggle Language"
        data-interactive
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-champagne transition-transform duration-300 ease-in-out ${language === 'en' ? 'translate-x-5' : 'translate-x-[2px]'}`} 
        />
      </button>
      <span className={`text-[10px] font-cinzel tracking-widest uppercase transition-colors ${language === 'en' ? 'text-champagne font-bold' : 'text-text-muted'}`}>
        EN
      </span>
    </div>
  );
}
