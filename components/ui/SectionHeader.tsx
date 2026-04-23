'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function SectionHeader({
  kicker,
  title,
  intro,
  align = 'left',
  className,
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-px w-8 bg-muted-foreground/50" />
        {kicker}
      </span>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className="max-w-2xl text-balance text-muted-foreground">{intro}</p>
      )}
    </motion.div>
  );
}
