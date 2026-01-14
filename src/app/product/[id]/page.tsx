'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t, language, dir } = useLanguage();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center text-white">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Button onClick={() => router.push('/')} className="mt-4">
          Go Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-8 gap-2"
      >
        {dir === 'rtl' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
        Back
      </Button>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 aspect-[4/3] relative">
          <Image
            src={product.image}
            alt={product.name[language]}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Badge className="w-fit mb-4 uppercase">{product.category}</Badge>
          <h1 className="mb-4 text-4xl font-bold text-white">
            {product.name[language]}
          </h1>
          <p className="mb-8 text-lg text-slate-400">
            {product.description[language]}
          </p>

          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[var(--color-primary)]">
              {t('common.currency')}{product.price}
            </span>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1 gap-2" onClick={() => addToCart(product)}>
              <ShoppingCart className="h-5 w-5" />
              {t('products.add_to_cart')}
            </Button>
          </div>

          <div className="mt-12 rounded-xl bg-slate-900/50 p-6 border border-slate-800">
            <h3 className="mb-2 font-bold text-white">Instant Delivery</h3>
            <p className="text-sm text-slate-400">
              Your code will be delivered to your email immediately after payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
