'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillGroups } from '@/content/skills';
import type { Locale } from '@/i18n/routing';

export function Skills() {
  const t = useTranslations('skills');
  const locale = useLocale() as Locale;

  return (
    <section id="skills" className="relative border-t border-border/60 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={t('kicker')} title={t('title')} intro={t('intro')} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title[locale]}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-6 transition-colors hover:border-foreground/20"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgb(var(--accent) / 0.08), transparent 40%)',
                }}
              />
              <h3 className="font-display text-xl tracking-tight">{group.title[locale]}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
