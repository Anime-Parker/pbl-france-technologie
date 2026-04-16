'use client';
import { motion } from 'framer-motion';
import { playClick } from '@/lib/sounds';
import { useAccessibility } from '@/context/AccessibilityContext';

export default function Footer() {
  const { soundEnabled, reducedMotion } = useAccessibility();

  const scrollToTop = () => {
    playClick(soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-auto border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-horizon/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Signature */}
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-lg text-text-secondary italic"
          >
            Conçu avec passion par{' '}
            <span className="text-champagne glow-gold">l&apos;équipe PBL</span>
          </motion.p>

          {/* Tricolor line */}
          <div className="w-24 h-0.5 tricolor-gradient rounded-full opacity-40" />

          {/* Links */}
          <div className="flex gap-8 text-sm text-text-muted">
            <span className="hover:text-champagne transition-colors duration-300" data-interactive>
              Sources & Bibliographie
            </span>
            <span className="text-white/10">|</span>
            <span className="text-text-muted">
              Projet PBL — Français 2026
            </span>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={reducedMotion ? {} : { y: -4 }}
            className="group flex flex-col items-center gap-2 text-text-muted hover:text-champagne transition-colors duration-300"
            data-interactive
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span className="text-xs tracking-widest uppercase">Retour au sommet</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
