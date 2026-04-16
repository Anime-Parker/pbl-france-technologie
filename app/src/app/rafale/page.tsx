'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import ReadingProgress from '@/components/layout/ReadingProgress';
import Footer from '@/components/layout/Footer';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { Plane, Shield, Zap, Target, ArrowRight, Flag } from 'lucide-react';
import Image from 'next/image';

export default function RafalePage() {
  const { reducedMotion } = useAccessibility();

  const fadeUp = reducedMotion ? {} : {
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
          Retour
        </Link>
      </div>

      {/* Hero Section - L'Amorce (Scrollytelling + Big Number) */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-horizon/[0.04] blur-[150px]" />
        </div>

        {/* Real Image filling right side - Visual focus */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[75vh] opacity-80">
          <Image 
            src="/images/rafale.png" 
            alt="Dassault Rafale" 
            fill 
            className="object-cover object-left rounded-l-3xl presentation-highlight shadow-[0_0_50px_rgba(37,99,235,0.2)]" 
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-12 grid grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 presentation-highlight text-horizon">
              <Plane size={32} />
              <Flag size={32} className="text-horizon/60" />
            </div>
            
            <p className="font-cinzel text-sm tracking-[0.3em] uppercase text-horizon/60 mb-2 presentation-dim">Vitesse Maximale</p>
            {/* GIANT NUMBER */}
            <h1 className="font-space text-7xl md:text-8xl lg:text-[10rem] font-bold text-text-primary leading-none mb-6 presentation-highlight glow-blue">
              Mach<br/>1.8
            </h1>
            
            <p className="font-playfair text-2xl md:text-3xl text-text-secondary italic leading-relaxed presentation-dim mb-8">
              &ldquo;Maître du ciel, fusion d&apos;élégance et de puissance brute.&rdquo;
            </p>
            
            <p className="text-text-muted text-lg presentation-dim border-l-2 border-horizon/30 pl-4 py-2">
              Le Dassault Rafale est le summum de l&apos;Aérospatiale Française.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted presentation-highlight"
        >
          <ArrowRight className="rotate-90 text-horizon opacity-60" size={32} />
        </motion.div>
      </section>

      {/* Le Récit - Timeline Visuelle */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Ligne du Temps</h2>
          <p className="text-text-muted presentation-dim">L'évolution de l'indépendance stratégique.</p>
        </motion.div>

        <div className="space-y-24 relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-gradient-to-b before:from-horizon/50 before:via-horizon/20 before:to-transparent">
          
          {/* Timeline Item 1 */}
          <motion.div {...fadeUp} className="flex items-center justify-between gap-12 w-full">
            <div className="w-1/2 text-right pr-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">1986</h3>
              <p className="font-cinzel text-horizon/80 tracking-widest mt-2 mb-4 presentation-dim">Premier Vol</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-horizon shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 presentation-highlight flex items-center justify-center">
              <Plane size={12} className="text-text-primary" />
            </div>
            <div className="w-1/2 pl-12 presentation-dim">
              <p className="text-text-secondary text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Le Dassault Rafale prend son envol lors de son premier vol d'essai. C'est l'aube d'une nouvelle ère : un avion de combat{' '}
                <GlossaryTooltip term="Omnirôle" definition="Capable d'assurer toutes les missions de combat.">
                  omnirôle
                </GlossaryTooltip>{' '}
                conçu à 100% en France. Ce projet colossal témoigne d&apos;un défi technique prodigieux relevé par les ingénieurs français pour s&apos;affranchir de leur dépendance technologique, unifiant ainsi la force de frappe autour d&apos;un seul appareil souverain. Il remplace sept types d'avions de l'ancienne flotte technologique de la guerre froide.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div {...fadeUp} className="flex items-center justify-between gap-12 w-full flex-row-reverse">
            <div className="w-1/2 text-left pl-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">2001</h3>
              <p className="font-cinzel text-champagne/80 tracking-widest mt-2 mb-4 presentation-dim">Mise en Service</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-champagne shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 presentation-highlight flex items-center justify-center">
              <Target size={12} className="text-text-primary" />
            </div>
            <div className="w-1/2 pr-12 text-right presentation-dim">
              <p className="text-text-secondary text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Intégration officielle dans la Marine Nationale, puis dans l'Armée de l'Air. Le Rafale inaugure l&apos;ère moderne de la dissuasion nucléaire aéroportée et s&apos;impose très rapidement comme un acteur géopolitique majeur lors de diverses missions internationales à haut risque grâce à sa configuration d&apos;armement modulaire inédite et son système de guerre électronique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Le Moteur - Technologie (Visual bullet points) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30 bg-gradient-to-b from-transparent to-glass-bg/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Architecture Technique</h2>
          <p className="text-text-muted presentation-dim">Les composants clés qui rendent le Rafale unique.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={48} className="text-horizon mb-6 presentation-highlight" />,
              title: 'Snecma M88 & Puissance',
              stat: '2 × 75 kN',
              desc: 'Le turboréacteur Snecma M88 est le cœur battant du Rafale. Il offre un rapport poussée/poids exceptionnel grâce à ses aubes monocristallines qui supportent des températures extrêmes en combat aérien.',
            },
            {
              icon: <Target size={48} className="text-champagne mb-6 presentation-highlight" />,
              title: 'Radar RBE2 AESA & Capteurs',
              stat: '40 Cibles',
              desc: 'Premier avion européen équipé d\'un radar à antenne active. Il peut cartographier le terrain et suivre simultanément 40 cibles, conférant aux pilotes une avance tactique décisive dans le brouillard de guerre.',
            },
            {
              icon: <Shield size={48} className="text-carmin mb-6 presentation-highlight" />,
              title: 'Système SPECTRA & Furtivité',
              stat: '360° Actif',
              desc: 'Le système SPECTRA annule numériquement l\'empreinte radar de l\'appareil. Il assure brouillage, détection laser, et éjection de leurres, garantissant un taux de survie maximal derrière les lignes ennemies.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
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
          <Flag size={48} className="mx-auto mb-8 text-horizon/40 presentation-highlight" />
          <h2 className="font-space text-4xl text-text-primary mb-8 presentation-highlight">Une Flotte Mondiale</h2>
          <p className="text-text-secondary text-xl leading-relaxed mb-12 presentation-dim">
            Adopté par de nombreuses nations (Égypte, Qatar, Inde, Grèce, Croatie, Indonésie), 
            le Rafale prouve que l'ingénierie et l'élégance françaises sont sans frontières.
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-horizon/30 to-transparent" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
