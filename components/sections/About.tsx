'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code2, HeartPulse, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function About() {
  const t = useTranslations('about');

  const highlights = [
    {
      icon: Code2,
      value: t('highlights.exp'),
      label: t('highlights.expLabel'),
    },
    {
      icon: HeartPulse,
      value: t('highlights.domain'),
      label: t('highlights.domainLabel'),
    },
    {
      icon: Sparkles,
      value: t('highlights.ai'),
      label: t('highlights.aiLabel'),
    },
  ];

  return (
    <section id="about" className="relative border-t border-border/60 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeader kicker={t('kicker')} title={t('title')} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-6 text-balance text-lg leading-relaxed text-foreground/85"
        >
          <motion.p variants={item}>{t('paragraph1')}</motion.p>
          <motion.p variants={item}>{t('paragraph2')}</motion.p>
          <motion.p variants={item}>{t('paragraph3')}</motion.p>

          <motion.ul
            variants={item}
            className="grid gap-4 pt-6 sm:grid-cols-3"
          >
            {highlights.map(({ icon: Icon, value, label }) => (
              <li
                key={label}
                className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur"
              >
                <Icon className="mb-3 h-5 w-5 text-accent" />
                <p className="font-display text-2xl leading-tight">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
