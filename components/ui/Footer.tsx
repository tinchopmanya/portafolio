import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} Martín Franco. {t('rights')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tinchopmanya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rmartinfranco"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:tinchopmanya@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="hidden sm:block">{t('built')}</p>
      </div>
    </footer>
  );
}
