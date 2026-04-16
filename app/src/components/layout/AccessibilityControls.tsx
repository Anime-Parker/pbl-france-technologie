'use client';
import { useAccessibility } from '@/context/AccessibilityContext';
import { playClick } from '@/lib/sounds';

export default function AccessibilityControls() {
  const { reducedMotion, soundEnabled, toggleMotion, toggleSound } = useAccessibility();

  return (
    <div className="fixed top-4 right-4 z-[9997] flex gap-2">
      <button
        onClick={() => { playClick(soundEnabled); toggleSound(); }}
        className="glass glass-hover w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:border-champagne/30"
        aria-label={soundEnabled ? 'Couper le son' : 'Activer le son'}
        title={soundEnabled ? 'Couper le son' : 'Activer le son'}
        data-interactive
      >
        {soundEnabled ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
      <button
        onClick={() => { playClick(soundEnabled); toggleMotion(); }}
        className="glass glass-hover w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:border-champagne/30"
        aria-label={reducedMotion ? 'Activer les animations' : 'Réduire les animations'}
        title={reducedMotion ? 'Activer les animations' : 'Réduire les animations'}
        data-interactive
      >
        {reducedMotion ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}
