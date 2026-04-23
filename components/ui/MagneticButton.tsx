'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-foreground text-background hover:bg-foreground/90'
      : 'border border-border/80 bg-transparent text-foreground hover:bg-muted';

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={(n) => {
          ref.current = n;
        }}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={reset}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={cn(base, styles, className)}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={(n) => {
        ref.current = n;
      }}
      type="button"
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(base, styles, className)}
    >
      {inner}
    </motion.button>
  );
}
