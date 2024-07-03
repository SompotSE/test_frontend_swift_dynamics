import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import transtionEnglish from "./translation/english/translation.json";
import transtionThai from "./translation/thai/translation.json";

const resources = {
    en: {
        translation: transtionEnglish
    },
    th: {
        translation: transtionThai
    }
}

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
})

export default i18n