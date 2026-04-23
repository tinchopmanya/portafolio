import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPeriod(
  start: string,
  end: string | 'present',
  presentLabel: string,
): string {
  return `${start} — ${end === 'present' ? presentLabel : end}`;
}
