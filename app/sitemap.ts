import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { routing } from '@/i18n/routing';

const base = 'https://martinfranco.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const home = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    priority: 1,
  }));
  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: `${base}/${locale}/proyectos/${p.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  );
  return [...home, ...projectPages];
}
