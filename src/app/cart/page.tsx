'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button, buttonVariants } from '@/components/ui/Button';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { t, language } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center">
        <div className="mb-4 rounded-full bg-slate-900 p-6">
          <Trash2 className="h-12 w-12 text-slate-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-white">{t('cart.empty')}</h2>
        <p className="mb-8 text-slate-400">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/" className={buttonVariants()}>
          {t('hero.cta')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-white">{t('cart.title')}</h1>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex flex-col sm:flex-row gap-4 rounded-xl bg-slate-900/50 p-4 border border-slate-800 items-center">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800 relative">
                <Image
                  src={product.image}
                  alt={product.name[language]}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow text-center sm:text-start">
                <h3 className="font-bold text-white">{product.name[language]}</h3>
                <p className="text-sm text-slate-400">{product.category}</p>
                <div className="mt-1 text-[var(--color-primary)] font-semibold">
                  {t('common.currency')}{product.price}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-lg bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="p-2 hover:text-white text-slate-400"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="p-2 hover:text-white text-slate-400"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => removeFromCart(product.id)}
                   className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl bg-slate-900 p-6 border border-slate-800">
          <h3 className="mb-4 text-xl font-bold text-white">Summary</h3>

          <div className="mb-4 flex justify-between border-b border-slate-800 pb-4">
            <span className="text-slate-400">Subtotal</span>
            <span className="font-bold text-white">{t('common.currency')}{cartTotal}</span>
          </div>

          <div className="mb-6 flex justify-between text-lg font-bold">
            <span className="text-white">{t('cart.total')}</span>
            <span className="text-[var(--color-primary)]">{t('common.currency')}{cartTotal}</span>
          </div>

          <Button className="w-full" size="lg" onClick={() => alert('Checkout not implemented')}>
            {t('cart.checkout')}
          </Button>
        </div>
      </div>
    </div>
  );
}
