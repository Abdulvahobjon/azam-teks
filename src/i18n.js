import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationUZ from './locales/  uz/translation.json';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  uz: { translation: translationUZ },
  ru: { translation: translationRU },
  en: { translation: translationEN },
  // Future languages can be easily added here:
  // fr: { translation: translationFR },
  // de: { translation: translationDE },
  // es: { translation: translationES },
  // it: { translation: translationIT },
  // jp: { translation: translationJP },
  // cn: { translation: translationCN },
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
