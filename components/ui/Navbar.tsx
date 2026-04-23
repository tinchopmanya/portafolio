'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { cn } from '@/lib/utils';

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('about');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            'flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-border/60 px-4 backdrop-blur-xl transition-colors sm:px-6',
            scrolled ? 'bg-background/70 shadow-[0_4px_24px_rgba(0,0,0,0.06)]' : 'bg-background/30',
          )}
        >
          <Link
            href="/"
            className="font-display text-lg leading-none tracking-tight"
            aria-label="Martín Franco"
          >
            <span className="italic">Martín</span>
            <span className="text-muted-foreground">.</span>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground',
                    active === id && 'text-foreground',
                  )}
                >
                  {t(id)}
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
