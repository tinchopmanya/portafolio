'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { education, experience } from '@/content/experience';
import type { Locale } from '@/i18n/routing';
import { formatPeriod } from '@/lib/utils';

export function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const present = t('present');

  return (
    <section
      id="experience"
      className="relative border-t border-border/60 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={t('kicker')} title={t('title')} />

        <ol className="relative mt-16 space-y-14 before:absolute before:left-[14px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-border before:via-border before:to-transparent">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.company}
              item={item}
              locale={locale}
              presentLabel={present}
              index={i}
            />
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t('educationTitle')}
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((ed) => (
              <li
                key={`${ed.institution}-${ed.degree[locale]}`}
                className="rounded-2xl border border-border/60 bg-card/30 p-5"
              >
                <p className="font-medium">{ed.degree[locale]}</p>
                <p className="mt-1 text-sm text-muted-foreground">{ed.institution}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground/80">
                  {formatPeriod(ed.period.start, ed.period.end, present)}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
