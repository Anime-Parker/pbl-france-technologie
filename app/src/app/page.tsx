'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { playClick } from '@/lib/sounds';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useLanguage } from '@/context/LanguageContext';

export default function WelcomePage() {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();
  const { soundEnabled, reducedMotion } = useAccessibility();
  const { t } = useLanguage();

  const handleEnter = () => {
    playClick(soundEnabled);
    setIsExiting(true);
    setTimeout(() => router.push('/accueil'), 1200);
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.main
          key="welcome"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 flex items-center justify-center bg-noir z-50 overflow-hidden"
        >
          {/* Ambient glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-horizon/[0.03] blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-carmin/[0.02] blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center text-center px-6 max-w-3xl">
            {/* Decorative line */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent mb-12"
            />

            {/* Title */}
            <motion.h1
              {...fadeIn}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="font-playfair text-6xl md:text-8xl lg:text-9xl text-text-primary tracking-tight mb-8"
            >
              {t('Technologie', 'Technology')} <br />
              <span className="text-champagne italic glow-gold">{t('Française', 'French')}</span>
            </motion.h1>

            {/* Quote */}
            <motion.blockquote
              {...fadeIn}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="font-playfair text-2xl md:text-3xl lg:text-4xl text-champagne/90 leading-relaxed italic glow-gold mb-8"
            >
              &ldquo;{t("L'ingénierie est l'art d'organiser et de diriger les forces de la nature au service de l'humanité.", "Engineering is the art of organizing and directing the forces of nature for the benefit of humanity.")}&rdquo;
            </motion.blockquote>

            <motion.p
              {...fadeIn}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-text-muted text-sm tracking-widest uppercase mb-16"
            >
              — Thomas Tredgold
            </motion.p>

            {/* Team */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 1, delay: 2 }}
              className="space-y-3 mb-16"
            >
              <p className="text-text-secondary text-sm tracking-wider uppercase font-cinzel">
                {t("Présenté par l'équipe PBL 8", "Presented by PBL Team 8")}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              {...fadeIn}
              transition={{ duration: 1, delay: 2.8 }}
              onClick={handleEnter}
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              className="group relative px-8 py-3.5 rounded-full overflow-hidden transition-all duration-500"
              data-interactive
            >
              {/* Button border glow */}
              <div className="absolute inset-0 rounded-full border border-champagne/20 group-hover:border-champagne/50 transition-colors duration-500" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at center, rgba(212,175,55,0.08), transparent 70%)',
              }} />
              <span className="relative font-playfair text-sm tracking-wider text-champagne/80 group-hover:text-champagne transition-colors duration-500">
                {t("Commencer l'immersion", "Begin the immersion")}
              </span>
            </motion.button>

            {/* Decorative line bottom */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 1.5, delay: 3.2 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent mt-16"
            />
          </div>

          {/* Iris/curtain exit overlay */}
          {isExiting && (
            <motion.div
              initial={{ scale: 0, borderRadius: '100%' }}
              animate={{ scale: 20, borderRadius: '0%' }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              className="fixed inset-0 bg-noir z-[100] origin-center"
            />
          )}
        </motion.main>
      ) : (
        <motion.div
          key="exit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-noir z-50"
        />
      )}
    </AnimatePresence>
  );
}
