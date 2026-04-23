import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Github, LinkIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { projects } from '@/content/projects';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const lc = locale as Locale;
  return {
    title: project.title[lc],
    description: project.tagline[lc],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lc = locale as Locale;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations('projects');

  return (
    <article className="relative px-6 pb-32 pt-32 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back')}
        </Link>

        <header className="mt-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {project.year}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {project.title[lc]}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl text-muted-foreground">
            {project.tagline[lc]}
          </p>
        </header>

        <div
          className={cn(
            'relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br',
            project.gradient,
          )}
        >
          <div aria-hidden className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-end p-10">
            <p className="font-display text-4xl leading-tight text-white drop-shadow-md sm:text-5xl">
              {project.title[lc]}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6 text-balance text-lg leading-relaxed text-foreground/85">
            <p>{project.description[lc]}</p>
          </div>
          <aside className="space-y-6 text-sm">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t('role')}
              </h3>
              <p className="mt-2 text-foreground/85">{project.role[lc]}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t('tech')}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {project.links && (
              <div className="flex flex-col gap-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
                  >
                    <LinkIcon className="h-4 w-4" /> Demo
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
                  >
                    <Github className="h-4 w-4" /> Repo
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
