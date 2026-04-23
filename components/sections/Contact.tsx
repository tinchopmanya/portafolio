'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      className="relative border-t border-border/60 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={t('kicker')} title={t('title')} intro={t('intro')} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="flex flex-col justify-between gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-card/60 to-card/30 p-8 backdrop-blur sm:p-10">
            <div className="space-y-6 font-display text-3xl leading-tight sm:text-4xl">
              <p>tinchopmanya</p>
              <p className="text-muted-foreground italic">@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                href="mailto:tinchopmanya@gmail.com"
                variant="primary"
                external
              >
                <Mail className="h-4 w-4" />
                {t('emailCta')}
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/rmartinfranco"
                variant="secondary"
                external
              >
                <Linkedin className="h-4 w-4" />
                {t('linkedinCta')}
              </MagneticButton>
              <MagneticButton
                href="https://github.com/tinchopmanya"
                variant="secondary"
                external
              >
                <Github className="h-4 w-4" />
                {t('githubCta')}
              </MagneticButton>
            </div>
          </div>

          <ul className="grid gap-4 self-start text-sm">
            <li className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/30 p-5">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t('kicker')}
                </p>
                <p className="mt-1">{t('location')}</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/30 p-5">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <a href="tel:+598094052053" className="transition-colors hover:text-foreground">
                +598 094 052 053
              </a>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/30 p-5">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <a
                href="mailto:tinchopmanya@gmail.com"
                className="transition-colors hover:text-foreground"
              >
                tinchopmanya@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
