import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationUZ from './locales/  uz/translation.json';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';
import translationKO from './locales/ko/translation.json';
import translationZH from './locales/zh/translation.json';
import translationTR from './locales/tr/translation.json';
import translationUK from './locales/uk/translation.json';

const resources = {
  uz: { translation: translationUZ },
  ru: { translation: translationRU },
  en: { translation: translationEN },
  // Future languages can be easily added here:
  fr: { translation: translationFR },
  ar: { translation: translationAR },
  ko: { translation: translationKO },
  zh: { translation: translationZH },
  tr: { translation: translationTR },
  uk: { translation: translationUK },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Set default language to UZB
    fallbackLng: "uz",
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
