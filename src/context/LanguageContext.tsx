'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.cart': { en: 'Cart', ar: 'السلة' },
  'nav.search': { en: 'Search...', ar: 'بحث...' },
  'hero.title': { en: 'Premium Digital Goods', ar: 'منتجات رقمية مميزة' },
  'hero.subtitle': { en: 'Instant delivery for games, cards, and subscriptions.', ar: 'تسليم فوري للألعاب والبطاقات والاشتراكات.' },
  'hero.cta': { en: 'Shop Now', ar: 'تسوق الآن' },
  'products.featured': { en: 'Featured Products', ar: 'منتجات مميزة' },
  'products.all': { en: 'All Products', ar: 'كل المنتجات' },
  'products.add_to_cart': { en: 'Add to Cart', ar: 'أضف للسلة' },
  'products.view_details': { en: 'View Details', ar: 'عرض التفاصيل' },
  'cart.title': { en: 'Shopping Cart', ar: 'سلة التسوق' },
  'cart.empty': { en: 'Your cart is empty', ar: 'سلتك فارغة' },
  'cart.total': { en: 'Total', ar: 'المجموع' },
  'cart.checkout': { en: 'Proceed to Checkout', ar: 'إتمام الشراء' },
  'cart.whatsapp_checkout': { en: 'Complete Order via WhatsApp', ar: 'إتمام الطلب عبر واتساب' },
  'cart.select_payment': { en: 'Select Payment Method', ar: 'اختر وسيلة الدفع' },
  'cart.copy_text': { en: 'Copy Message', ar: 'نسخ نص الرسالة' },
  'cart.payment_required': { en: 'Please select a payment method', ar: 'يرجى اختيار وسيلة دفع' },
  'cart.copied': { en: 'Copied to clipboard', ar: 'تم النسخ للحافظة' },
  'cart.remove': { en: 'Remove', ar: 'حذف' },
  'common.price': { en: 'Price', ar: 'السعر' },
  'common.currency': { en: '$', ar: '$' },
  'footer.rights': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
