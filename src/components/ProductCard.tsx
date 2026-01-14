'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button, buttonVariants } from './ui/Button';
import { Badge } from './ui/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/10 flex flex-col h-full">
      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-800 relative">
        <Image
          src={product.image}
          alt={product.name[language]}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
            <div className="absolute top-2 right-2">
                <Badge variant="success">Featured</Badge>
            </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex items-start justify-between">
          <Badge variant="secondary" className="uppercase text-[10px]">
            {product.category}
          </Badge>
          <span className="font-bold text-[var(--color-secondary)]">
             {t('common.currency')}{product.price}
          </span>
        </div>
        <h3 className="mb-1 text-lg font-bold text-white line-clamp-1">
          {product.name[language]}
        </h3>
        <p className="mb-4 text-sm text-slate-400 line-clamp-2 h-10 flex-grow">
          {product.description[language]}
        </p>
        <div className="flex gap-2 mt-auto">
          <Button
             className="flex-1 gap-2"
             onClick={() => addToCart(product)}
             size="sm"
          >
            <ShoppingCart className="h-4 w-4" />
            {t('products.add_to_cart')}
          </Button>
          <Link
            href={`/product/${product.id}`}
            className={buttonVariants({ variant: 'outline', size: 'icon' })}
            title={t('products.view_details')}
          >
             <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
