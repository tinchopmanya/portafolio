'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-2xl"
    />
  ),
});

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-24 pt-32 sm:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-mesh opacity-80" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-[0.25] mask-fade-b" />

      <div className="absolute right-0 top-1/2 -z-10 h-[120%] w-[90%] -translate-y-1/2 opacity-90 sm:w-[60%]">
        <HeroScene />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t('eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-6xl leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {t('name')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl font-display text-2xl italic leading-tight text-muted-foreground sm:text-3xl"
        >
          {t('titleA')} <span className="text-foreground not-italic">·</span>{' '}
          <span className="text-foreground">{t('titleB')}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-balance text-foreground/80"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projects" variant="primary">
            {t('primaryCta')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            <Mail className="h-4 w-4" />
            {t('secondaryCta')}
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground md:flex"
          aria-label={t('scroll')}
        >
          <span>{t('scroll')}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
