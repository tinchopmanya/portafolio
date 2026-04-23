import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martín Franco',
    jobTitle:
      locale === 'es'
        ? 'Desarrollador Senior .NET con integración de IA aplicada'
        : 'Senior .NET Developer with applied AI integration',
    email: 'mailto:tinchopmanya@gmail.com',
    telephone: '+598094052053',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Piedras',
      addressRegion: 'Canelones',
      addressCountry: 'UY',
    },
    sameAs: [
      'https://www.linkedin.com/in/rmartinfranco',
      'https://github.com/tinchopmanya',
    ],
    knowsAbout: [
      '.NET',
      'C#',
      'Blazor',
      'Entity Framework',
      'RAG',
      'MCP',
      'LLM integration',
      'SQL Server',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
