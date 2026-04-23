'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');
  const next = locale === 'es' ? 'en' : 'es';

  return (
    <button
      type="button"
      aria-label={t('toggleLanguage')}
      onClick={() => router.replace(pathname, { locale: next })}
      className={cn(
        'inline-flex h-9 items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 text-xs font-medium uppercase tracking-wider text-foreground/70 backdrop-blur transition hover:text-foreground hover:border-foreground/30',
        className,
      )}
    >
      <span className={cn(locale === 'es' && 'text-foreground')}>ES</span>
      <span className="text-muted-foreground/60">/</span>
      <span className={cn(locale === 'en' && 'text-foreground')}>EN</span>
    </button>
  );
}
