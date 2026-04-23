import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const title = `Martín Franco · ${locale === 'es' ? 'Desarrollador Senior .NET · IA aplicada' : 'Senior .NET Developer · Applied AI'}`;
  const description = t('tagline');

  return {
    metadataBase: new URL('https://martinfranco.dev'),
    title: {
      default: title,
      template: '%s · Martín Franco',
    },
    description,
    authors: [{ name: 'Martín Franco' }],
    keywords: [
      'Martín Franco',
      '.NET Developer',
      'Senior Developer',
      'Blazor',
      'C#',
      'AI Integration',
      'RAG',
      'MCP',
      'Uruguay',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'es' ? 'es_UY' : 'en_US',
      siteName: 'Martín Franco',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#08090c' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(sans.variable, display.variable, mono.variable)}
    >
      <body className="min-h-screen antialiased">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
