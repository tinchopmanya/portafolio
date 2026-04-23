'use client';

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Project } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function ProjectCard({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: Locale;
  index: number;
}) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        rotateX: reduced ? 0 : rx,
        rotateY: reduced ? 0 : ry,
        transformPerspective: 1000,
      }}
      className="group relative"
    >
      <Link href={`/proyectos/${project.slug}`} className="block">
        <motion.div
          layoutId={`card-${project.slug}`}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-muted"
        >
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-500 group-hover:opacity-100',
              project.gradient,
            )}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
              <p className="font-display text-3xl leading-tight text-white drop-shadow-md">
                {project.title[locale]}
              </p>
            </div>
          </div>
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.div>

        <div className="mt-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium">{project.tagline[locale]}</h3>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <li
                key={t}
                className="rounded-full border border-border/60 bg-card/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}
