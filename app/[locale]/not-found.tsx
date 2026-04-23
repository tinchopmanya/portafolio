import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('common');
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-7xl">404</p>
      <p className="text-lg text-muted-foreground">{t('notFound')}</p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full border border-border/70 px-5 py-2 text-sm transition-colors hover:bg-muted"
      >
        {t('backHome')}
      </Link>
    </div>
  );
}
