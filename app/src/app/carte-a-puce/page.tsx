'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useLanguage } from '@/context/LanguageContext';
import ReadingProgress from '@/components/layout/ReadingProgress';
import Footer from '@/components/layout/Footer';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { Cpu, Lock, Globe, Database, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CarteAPucePage() {
  const { reducedMotion } = useAccessibility();
  const { t } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-noir">
      <ReadingProgress />

      {/* Back navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/accueil" className="glass glass-hover px-4 py-2 rounded-full text-xs tracking-wider text-text-muted hover:text-text-primary transition-colors duration-300 flex items-center gap-2" data-interactive>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          {t('Retour', 'Back')}
        </Link>
      </div>

      {/* Hero Section - L'Amorce (Scrollytelling + Big Number) */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-champagne/[0.03] blur-[150px]" />
        </div>

        {/* Real Image filling right side - Visual focus */}
        <div className="absolute right-0 bottom-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%] h-[40vh] lg:h-[75vh] opacity-20 lg:opacity-80">
          <Image 
            src="/images/smartcard.png" 
            alt="Smartcard Microchip" 
            fill 
            className="object-cover object-center lg:object-left rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl presentation-highlight shadow-[0_0_50px_rgba(212,175,55,0.2)]" 
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp} className="max-w-2xl py-20 pb-80 lg:pb-0 lg:py-0">
            <div className="flex items-center gap-3 mb-6 presentation-highlight text-champagne">
              <Cpu size={32} />
              <Lock size={32} className="text-champagne/60" />
            </div>

            <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-champagne/60 mb-2 presentation-dim">{t('Brevet Fondateur', 'Founding Patent')}</p>
            {/* GIANT NUMBER */}
            <h1 className="font-space text-6xl md:text-8xl lg:text-[10rem] font-bold text-text-primary leading-none mb-6 presentation-highlight glow-gold break-words">
              1974
            </h1>

            <p className="font-playfair text-xl md:text-3xl text-text-secondary italic leading-relaxed presentation-dim mb-8">
              &ldquo;{t("Une invention française qui a sécurisé le monde numérique.", "A French invention that secured the digital world.")}&rdquo;
            </p>

            <p className="text-text-muted text-base md:text-lg presentation-dim border-l-2 border-champagne/30 pl-4 py-2">
              {t("Roland Moreno invente la mémoire intégrée, la base de la modernité.", "Roland Moreno invents integrated memory, the foundation of modernity.")}
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted presentation-highlight"
        >
          <ArrowRight className="rotate-90 text-champagne opacity-60" size={32} />
        </motion.div>
      </section>

      {/* Le Récit - Timeline Visuelle */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Ligne du Temps</h2>
          <p className="text-text-muted presentation-dim">La révolution de la microélectronique de poche.</p>
        </motion.div>

        <div className="space-y-16 md:space-y-24 relative md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-px md:before:h-full md:before:bg-gradient-to-b md:before:from-champagne/50 md:before:via-champagne/20 md:before:to-transparent">
          
          {/* Timeline Item 1 */}
          <motion.div {...fadeUp} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full">
            <div className="w-full md:w-1/2 text-center md:text-right px-4 md:px-0 md:pr-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">1974</h3>
              <p className="font-cinzel text-champagne/80 tracking-widest mt-2 mb-4 presentation-dim">Premier Brevet</p>
            </div>
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-champagne shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 presentation-highlight flex items-center justify-center mb-4 md:mb-0">
              <Cpu size={12} className="text-text-primary" />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-0 md:pl-12 presentation-dim text-center md:text-left">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                <GlossaryTooltip term="Roland Moreno" definition="Inventeur français (1945-2012)">
                  Roland Moreno
                </GlossaryTooltip> brevète la carte à circuit intégré, une invention qui marque le début d'une révolution numérique. Son idée est aussi simple techniquement que complexe à réaliser à l'époque : insérer un microcontrôleur sécurisé directement au cœur d'un morceau de plastique standard.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div {...fadeUp} className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 w-full">
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 md:pl-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">1983</h3>
              <p className="font-cinzel text-champagne/80 tracking-widest mt-2 mb-4 presentation-dim">La Télécarte</p>
            </div>
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-champagne shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 presentation-highlight flex items-center justify-center mb-4 md:mb-0">
              <Lock size={12} className="text-text-primary" />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-0 md:pr-12 presentation-dim text-center md:text-right">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Première application mondiale grand public autorisée par France Télécom. Ce système inaugure un dialogue crypté sécurisé, une avancée technologique impossible avec les simples bandes magnétiques, empêchant ainsi la fraude massive téléphonique.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div {...fadeUp} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full">
            <div className="w-full md:w-1/2 text-center md:text-right px-4 md:px-0 md:pr-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">1992</h3>
              <p className="font-cinzel text-champagne/80 tracking-widest mt-2 mb-4 presentation-dim">Carte Bancaire</p>
            </div>
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-champagne shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 presentation-highlight flex items-center justify-center mb-4 md:mb-0">
              <Globe size={12} className="text-text-primary" />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-0 md:pl-12 presentation-dim text-center md:text-left">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Adoption massive en France à travers le consortium Carte Bleue, imposant le standard qui sécurise désormais les transactions financières mondiales (standard EMV), prouvant la fiabilité à grande échelle de l'algorithmique embarquée.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Le Moteur - Technologie (Visual bullet points) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30 bg-gradient-to-b from-transparent to-glass-bg/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Architecture Numérique</h2>
          <p className="text-text-muted presentation-dim">Le socle invisible de la confiance électronique.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lock size={48} className="text-champagne mb-6 presentation-highlight" />,
              title: 'Sécurité AES',
              stat: '256-bit',
              desc: 'Chiffrement inviolable par attaque de force brute commerciale.',
            },
            {
              icon: <Database size={48} className="text-horizon mb-6 presentation-highlight" />,
              title: 'Stockage',
              stat: '256 Ko',
              desc: 'Capacité intégrée sécurisée dans un espace sub-millimétrique.',
            },
            {
              icon: <Globe size={48} className="text-carmin mb-6 presentation-highlight" />,
              title: 'Déploiement',
              stat: '30+ Mrd',
              desc: 'Puces produites inondant le marché de la téléphonie et bancaire.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass p-10 rounded-2xl text-center group hover:bg-glass-hover transition-colors"
            >
              <div className="flex justify-center">{item.icon}</div>
              <p className="font-space text-4xl text-text-primary mb-2 presentation-highlight group-hover:scale-105 transition-transform">{item.stat}</p>
              <p className="font-cinzel text-sm tracking-wider uppercase text-text-muted mb-6 presentation-dim">{item.title}</p>
              <p className="text-sm text-text-secondary leading-relaxed presentation-dim border-t border-glass-border pt-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* L'Héritage - Impact */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div {...fadeUp}>
          <Globe size={48} className="mx-auto mb-8 text-champagne/40 presentation-highlight" />
          <h2 className="font-space text-4xl text-text-primary mb-8 presentation-highlight">L'Hégémonie Numérique</h2>
          <p className="text-text-secondary text-xl leading-relaxed mb-12 presentation-dim">
            De la carte bancaire à la carte SIM, en passant par les passeports biométriques. 
            Des entreprises comme Thales (Gemalto) continuent de définir les standards de la sécurité mondiale grâce à l'invention de Moreno.
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
