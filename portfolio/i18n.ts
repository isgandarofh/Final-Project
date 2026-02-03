import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'az', 'ru'],
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        detection: {
            order: ['queryString', 'cookie'],
            caches: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        debug: false
    });

export default i18n;