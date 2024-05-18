import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const sl = ['de', 'en', 'ua'];
i18n.use (HttpApi).use (LanguageDetector).use (initReactI18next).init ({
  supportedLngs: sl,
  fallbackLng: 'en',
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  },
  react: {
    useSuspense: false,
  },
});

export const supportedLanguages = sl;
export default i18n;
