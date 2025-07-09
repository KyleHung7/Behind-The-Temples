import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';
import translationJA from './locales/ja/translation.json'; // 新增
import translationKO from './locales/ko/translation.json'; // 新增

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
  ja: { // 新增
    translation: translationJA,
  },
  ko: { // 新增
    translation: translationKO,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 預設語言不變
    fallbackLng: 'en', // 備用語言不變
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;