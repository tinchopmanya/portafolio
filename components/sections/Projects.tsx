'use client';

import { useLocale, useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/content/projects';
import type { Locale } from '@/i18n/routing';

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <section id="projects" className="relative border-t border-border/60 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={t('kicker')} title={t('title')} intro={t('intro')} />

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
