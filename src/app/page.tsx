'use client';

import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pb-20">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white relative inline-block">
          {t('products.all')}
          <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-[var(--color-primary)] rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
