'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from './ui/Button';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-primary)]/20 via-slate-950 to-slate-950 -z-10" />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="shadow-lg shadow-[var(--color-primary)]/25">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};
