'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import ReadingProgress from '@/components/layout/ReadingProgress';
import Footer from '@/components/layout/Footer';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { Atom, Zap, Flame, ThermometerSun, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function IterPage() {
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
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-carmin/[0.04] blur-[150px]" />
        </div>

        {/* Real Image filling right side - Visual focus */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[75vh] opacity-80">
          <Image 
            src="/images/iter.png" 
            alt="ITER Tokamak Reactor" 
            fill 
            className="object-cover object-left rounded-l-3xl presentation-highlight shadow-[0_0_50px_rgba(190,18,60,0.2)]" 
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-12 grid grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 presentation-highlight text-carmin">
              <Atom size={32} />
              <Flame size={32} className="text-carmin/60" />
            </div>

            <p className="font-cinzel text-sm tracking-[0.3em] uppercase text-carmin/60 mb-2 presentation-dim">Température du Plasma</p>
            {/* GIANT NUMBER */}
            <h1 className="font-space text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary leading-none mb-6 presentation-highlight glow-carmin">
              150M<span className="text-5xl text-text-muted relative -top-6">°C</span>
            </h1>

            <p className="font-playfair text-2xl md:text-3xl text-text-secondary italic leading-relaxed presentation-dim mb-8">
              &ldquo;Recreer l'énergie des étoiles sur Terre.&rdquo;
            </p>

            <p className="text-text-muted text-lg presentation-dim border-l-2 border-carmin/30 pl-4 py-2">
              Le réacteur de fusion nucléaire le plus ambitieux jamais conçu.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted presentation-highlight"
        >
          <ArrowRight className="rotate-90 text-carmin opacity-60" size={32} />
        </motion.div>
      </section>

      {/* Le Récit - Timeline Visuelle */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Ligne du Temps</h2>
          <p className="text-text-muted presentation-dim">La quête de l'énergie infinie et propre.</p>
        </motion.div>

        <div className="space-y-24 relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-gradient-to-b before:from-carmin/50 before:via-carmin/20 before:to-transparent">
          
          {/* Timeline Item 1 */}
          <motion.div {...fadeUp} className="flex items-center justify-between gap-12 w-full">
            <div className="w-1/2 text-right pr-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">2006</h3>
              <p className="font-cinzel text-carmin/80 tracking-widest mt-2 mb-4 presentation-dim">L'Accord Historique</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-carmin shadow-[0_0_15px_rgba(190,18,60,0.5)] z-10 presentation-highlight flex items-center justify-center">
              <Atom size={12} className="text-text-primary" />
            </div>
            <div className="w-1/2 pl-12 presentation-dim">
              <p className="text-text-secondary text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Signature officielle du traité de l'accord bilatéral <GlossaryTooltip term="ITER" definition="International Thermonuclear Experimental Reactor">ITER</GlossaryTooltip> réunissant l'expertise scientifique de 35 pays. Ce projet, d'une envergure sans précédent dans l'histoire de l'humanité, est stratégiquement basé à Cadarache, dans le sud de la France, confirmant le leadership technologique national.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div {...fadeUp} className="flex items-center justify-between gap-12 w-full flex-row-reverse">
            <div className="w-1/2 text-left pl-12">
              <h3 className="font-space text-6xl text-text-primary presentation-highlight">2026</h3>
              <p className="font-cinzel text-carmin/80 tracking-widest mt-2 mb-4 presentation-dim">Assemblage & Tests</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir border-4 border-carmin shadow-[0_0_15px_rgba(190,18,60,0.5)] z-10 presentation-highlight flex items-center justify-center">
              <Zap size={12} className="text-text-primary" />
            </div>
            <div className="w-1/2 pr-12 text-right presentation-dim">
              <p className="text-text-secondary text-lg leading-relaxed bg-glass-bg p-6 rounded-2xl border border-glass-border">
                Début colossal de l'assemblage du Tokamak, le cœur du dispositif magnétique pesant plus de 23 000 tonnes. Cette étape majeure prépare le réacteur aux premières opérations de chauffe pour démontrer définitivement la faisabilité scientifique de la fusion nucléaire sur Terre. Les matériaux repoussent les limites de la physique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Le Moteur - Technologie (Visual bullet points) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-glass-border/30 bg-gradient-to-b from-transparent to-glass-bg/30">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="font-space text-5xl text-text-primary presentation-highlight mb-4">Architecture Magnétique</h2>
          <p className="text-text-muted presentation-dim">Contrôler le plasma le plus chaud de l'univers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ThermometerSun size={48} className="text-carmin mb-6 presentation-highlight" />,
              title: 'Le Plasma',
              stat: '150M °C',
              desc: 'Dix fois plus chaud que le cœur de notre soleil, généré à l\'intérieur du vide du Tokamak.',
            },
            {
              icon: <Atom size={48} className="text-champagne mb-6 presentation-highlight" />,
              title: 'Le Tokamak',
              stat: '23 000 t',
              desc: 'Le poids total de l\'installation magnétique gigantesque confinant le plasma.',
            },
            {
              icon: <Zap size={48} className="text-horizon mb-6 presentation-highlight" />,
              title: 'Le Rendement',
              stat: 'Q ≥ 10',
              desc: 'Objectif : produire 500 MW de puissance à partir de 50 MW injectés.',
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
          <Flame size={48} className="mx-auto mb-8 text-carmin/40 presentation-highlight" />
          <h2 className="font-space text-4xl text-text-primary mb-8 presentation-highlight">L'Énergie de Demain</h2>
          <p className="text-text-secondary text-xl leading-relaxed mb-12 presentation-dim">
            La fusion nucléaire offre la promesse d'une énergie sans déchet hautement radioactif, inépuisable et sûre. 
            C'est là le véritable triomphe de la coopération internationale menée depuis la France.
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-carmin/30 to-transparent" />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
