'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import { playClick, playHover } from '@/lib/sounds';
import ReadingProgress from '@/components/layout/ReadingProgress';
import Footer from '@/components/layout/Footer';
import { Plane, Cpu, Atom, Flag, Users, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
} as const;

export default function AccueilPage() {
  const { soundEnabled, reducedMotion } = useAccessibility();

  const cardBase = "relative rounded-2xl overflow-hidden transition-all duration-500 group";

  return (
    <div className="min-h-screen bg-noir">
      <ReadingProgress />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-horizon/[0.03] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-carmin/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4 presentation-highlight">
            <Flag size={32} className="text-champagne/80" />
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-text-primary">
              L&apos;Ingénierie de <span className="text-champagne glow-gold italic">Demain</span>
            </h1>
            <Flag size={32} className="text-champagne/80" />
          </div>
          <p className="text-text-muted text-lg max-w-xl mx-auto presentation-dim">
            Les triomphes technologiques français qui façonnent le monde
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={reducedMotion ? {} : container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {/* RAFALE - Large Visually Dominant Card */}
          <motion.div variants={reducedMotion ? {} : item} className="md:col-span-4 lg:col-span-4 md:row-span-2">
            <Link
              href="/rafale"
              onClick={() => playClick(soundEnabled)}
              onMouseEnter={() => playHover(soundEnabled)}
              className={`${cardBase} h-full flex flex-col justify-between p-8 glass glass-hover hover:glow-blue`}
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-br from-horizon/[0.05] to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between w-full">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Plane size={24} className="text-horizon" />
                       <span className="text-xs tracking-widest uppercase text-horizon/70 font-cinzel presentation-dim">Aérospatiale</span>
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary mt-2 group-hover:text-horizon transition-colors duration-300 presentation-highlight">
                      Dassault Rafale
                    </h2>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-horizon/30 flex items-center justify-center text-horizon backdrop-blur-md">
                    <Flag size={20} />
                 </div>
              </div>
              <p className="text-text-secondary mt-3 max-w-md text-sm leading-relaxed presentation-dim relative z-10">
                L&apos;avion de combat omnirôle qui incarne la souveraineté technologique française, expliqué à travers ses capacités de pointe.
              </p>
              
              <div className="absolute right-0 bottom-0 w-80 h-80 md:w-96 md:h-96 opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-110 translate-x-12 translate-y-12">
                <Image src="/images/rafale.png" alt="Rafale" fill className="object-cover rounded-tl-[100px] presentation-highlight" />
              </div>
            </Link>
          </motion.div>

          {/* CARTE À PUCE - Medium Visual Card */}
          <motion.div variants={reducedMotion ? {} : item} className="md:col-span-2 lg:col-span-2">
            <Link
              href="/carte-a-puce"
              onClick={() => playClick(soundEnabled)}
              onMouseEnter={() => playHover(soundEnabled)}
              className={`${cardBase} h-full flex flex-col justify-between p-6 glass glass-hover`}
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-br from-champagne/[0.03] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1.5">
                   <Cpu size={20} className="text-champagne/80" />
                   <span className="text-xs tracking-widest uppercase text-champagne/60 font-cinzel presentation-dim">Microélectronique</span>
                </div>
                <h2 className="font-playfair text-2xl text-text-primary group-hover:text-champagne transition-colors duration-300 presentation-highlight">
                  Carte à Puce
                </h2>
              </div>
              <div className="absolute right-2 bottom-2 w-36 h-36 opacity-80 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl">
                <Image src="/images/smartcard.png" alt="Smartcard" fill className="object-cover presentation-highlight" />
              </div>
            </Link>
          </motion.div>

          {/* ITER - Medium Visual Card */}
          <motion.div variants={reducedMotion ? {} : item} className="md:col-span-2 lg:col-span-2">
            <Link
              href="/iter"
              onClick={() => playClick(soundEnabled)}
              onMouseEnter={() => playHover(soundEnabled)}
              className={`${cardBase} h-full flex flex-col justify-between p-6 glass glass-hover`}
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-br from-carmin/[0.04] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1.5">
                   <Atom size={20} className="text-carmin/80" />
                   <span className="text-xs tracking-widest uppercase text-carmin/60 font-cinzel presentation-dim">Énergie de Fusion</span>
                </div>
                <h2 className="font-playfair text-2xl text-text-primary group-hover:text-carmin-glow transition-colors duration-300 presentation-highlight">
                  ITER
                </h2>
              </div>
              <div className="absolute right-2 bottom-2 w-36 h-36 opacity-80 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl">
                <Image src="/images/iter.png" alt="ITER" fill className="object-cover presentation-highlight" />
              </div>
            </Link>
          </motion.div>

          {/* Info Card - Team Members */}
          <motion.div variants={reducedMotion ? {} : item} className="md:col-span-2 lg:col-span-3">
            <div className={`${cardBase} h-full flex items-center justify-center p-6 glass`}>
              <div className="text-center w-full">
                <Users size={28} className="mx-auto mb-3 text-champagne presentation-highlight" />
                <p className="font-cinzel text-xs tracking-widest uppercase text-champagne/80 mb-4 presentation-dim border-b border-glass-border pb-2">Équipe 8 (Team 8)</p>
                <ul className="text-text-primary font-space text-lg space-y-2 presentation-highlight">
                  <li>CH CHARAN</li>
                  <li>M SIDDHARTHA</li>
                  <li>R SRIRAM</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Info Card - Sources */}
          <motion.div variants={reducedMotion ? {} : item} className="md:col-span-2 lg:col-span-3">
            <div className={`${cardBase} h-full flex items-center justify-center p-6 glass glass-hover`} data-interactive>
              <div className="text-center w-full">
                <ExternalLink size={28} className="mx-auto mb-3 text-horizon presentation-highlight" />
                <p className="font-cinzel text-xs tracking-widest uppercase text-text-muted mb-4 presentation-dim border-b border-glass-border pb-2">Want to Know More?</p>
                <div className="flex flex-col gap-2 font-playfair text-sm md:text-base text-text-secondary presentation-dim">
                  <a href="https://www.dassault-aviation.com/fr/" target="_blank" rel="noopener noreferrer" className="hover:text-horizon transition-colors">Dassault Aviation Officiel →</a>
                  <a href="https://www.iter.org/" target="_blank" rel="noopener noreferrer" className="hover:text-carmin transition-colors">Projet ITER Global →</a>
                  <a href="https://fr.wikipedia.org/wiki/Carte_%C3%A0_puce" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">Archives: Carte à Puce →</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
