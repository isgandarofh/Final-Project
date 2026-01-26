import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Cookies from "js-cookie";



i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'az', 'ru'],
        fallbackLng:'en',
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        lng: `${Cookies.get('language')}` || 'en', 

        interpolation: {
            escapeValue: false
        },
        debug: true
    });

export default i18n;