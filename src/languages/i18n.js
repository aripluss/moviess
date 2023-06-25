import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en.json';
import translationUa from './ua.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ua: {
      translation: translationUa,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Language used when there is no translation for the selected language
  interpolation: {
    escapeValue: false, // Disables automatic line escaping
  },
});

export default i18n;
