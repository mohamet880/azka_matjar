import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'success' | 'secondary';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20': variant === 'default',
          'text-slate-300 border border-slate-600': variant === 'outline',
          'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20': variant === 'success',
          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border border-[var(--color-secondary)]/20': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  );
};
