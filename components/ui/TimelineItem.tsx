'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/i18n/routing';
import type { ExperienceItem } from '@/content/experience';
import { formatPeriod } from '@/lib/utils';

export function TimelineItem({
  item,
  locale,
  presentLabel,
  index,
}: {
  item: ExperienceItem;
  locale: Locale;
  presentLabel: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-10"
    >
      <span
        aria-hidden
        className="absolute left-[9px] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.15)]"
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-2xl leading-tight">{item.company}</h3>
        <span className="text-sm text-muted-foreground">· {item.location}</span>
      </div>
      <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
        {item.role[locale]} · {formatPeriod(item.period.start, item.period.end, presentLabel)}
      </p>
      <p className="mt-4 text-balance text-foreground/85">{item.summary[locale]}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {item.highlights[locale].map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 h-px w-4 flex-none bg-muted-foreground/60" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
