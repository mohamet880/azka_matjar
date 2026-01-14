'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Globe, Gamepad2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button, buttonVariants } from '@/components/ui/Button';

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { cartCount } = useCart();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
           <Link href="/" className="flex items-center gap-2">
             <Gamepad2 className="h-6 w-6 text-violet-500" />
             <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
               AzkaStore
             </span>
           </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language}</span>
          </Button>

          <Link
            href="/cart"
            className={buttonVariants({ variant: 'ghost', size: 'icon', className: 'relative' })}
          >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                  {cartCount}
                </span>
              )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
