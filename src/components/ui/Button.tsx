import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className
}: {
  variant?: ButtonProps['variant'],
  size?: ButtonProps['size'],
  className?: string
} = {}) => {
  return cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    {
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]': variant === 'primary',
      'bg-[var(--color-secondary)] text-white hover:brightness-110': variant === 'secondary',
      'border border-slate-600 bg-transparent hover:bg-slate-800 text-slate-200': variant === 'outline',
      'hover:bg-slate-800 text-slate-300 hover:text-white': variant === 'ghost',
      'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
      'h-8 px-3 text-sm': size === 'sm',
      'h-10 px-4 py-2': size === 'md',
      'h-12 px-6 text-lg': size === 'lg',
      'h-10 w-10': size === 'icon',
    },
    className
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
