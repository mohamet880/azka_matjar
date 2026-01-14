export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  category: 'game' | 'card' | 'subscription' | 'service';
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: { en: 'Free Fire Diamonds', ar: 'جواهر فري فاير' },
    description: { en: 'Top up Free Fire Diamonds instantly.', ar: 'شحن جواهر فري فاير فوري.' },
    price: 10,
    category: 'game',
    image: 'https://placehold.co/600x400/1e293b/FFF?text=Free+Fire',
    featured: true,
  },
  {
    id: '2',
    name: { en: 'PUBG UC', ar: 'شدات ببجي' },
    description: { en: 'Get PUBG Mobile UC now.', ar: 'شحن شدات ببجي موبايل.' },
    price: 15,
    category: 'game',
    image: 'https://placehold.co/600x400/1e293b/FFF?text=PUBG',
    featured: true,
  },
  {
    id: '3',
    name: { en: 'Mobile Legends', ar: 'موبايل ليجند' },
    description: { en: 'Mobile Legends Bang Bang Diamonds.', ar: 'جواهر موبايل ليجند بانج بانج.' },
    price: 5,
    category: 'game',
    image: 'https://placehold.co/600x400/1e293b/FFF?text=MLBB',
  },
  {
    id: '4',
    name: { en: 'ChatGPT Plus', ar: 'اشتراك شات جي بي تي' },
    description: { en: 'Monthly subscription for ChatGPT Plus.', ar: 'اشتراك شهري في ChatGTP Plus.' },
    price: 20,
    category: 'subscription',
    image: 'https://placehold.co/600x400/10a37f/FFF?text=ChatGPT',
    featured: true,
  },
  {
    id: '5',
    name: { en: 'Gemini Advanced', ar: 'اشتراك جيمناي' },
    description: { en: 'Google Gemini Advanced Monthly.', ar: 'اشتراك جيمناي المتقدم شهري.' },
    price: 22,
    category: 'subscription',
    image: 'https://placehold.co/600x400/4285f4/FFF?text=Gemini',
  },
  {
    id: '6',
    name: { en: 'RedotPay Visa', ar: 'فيزا RedotPay' },
    description: { en: 'Virtual Visa Card for online payments.', ar: 'بطاقة فيزا افتراضية للدفع عبر الإنترنت.' },
    price: 10,
    category: 'card',
    image: 'https://placehold.co/600x400/ef4444/FFF?text=RedotPay',
  },
  {
    id: '7',
    name: { en: 'Bybit Card', ar: 'بطاقة Bybit' },
    description: { en: 'Bybit Crypto Card.', ar: 'بطاقة بايبت للعملات الرقمية.' },
    price: 0,
    category: 'card',
    image: 'https://placehold.co/600x400/f59e0b/FFF?text=Bybit',
  },
  {
    id: '8',
    name: { en: 'CA WhatsApp', ar: 'رقم واتساب كندي' },
    description: { en: 'Virtual Canadian number for WhatsApp.', ar: 'رقم كندي افتراضي لتفعيل الواتساب.' },
    price: 5,
    category: 'service',
    image: 'https://placehold.co/600x400/22c55e/FFF?text=WhatsApp',
  },
];
