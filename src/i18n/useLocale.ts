import { useLocation } from 'react-router-dom';
import { translations } from './translations';
import { useEffect } from 'react';

export type Locale = 'it' | 'en';

export const useLocale = () => {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith('/en') ? 'en' : 'it';
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Helper to prefix paths with /en when needed
  const localePath = (path: string) => locale === 'en' ? `/en${path === '/' ? '' : path}` : path;

  return { locale, t, localePath };
};
