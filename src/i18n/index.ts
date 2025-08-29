import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./en.json";
import fa from "./fa.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fa: { translation: fa }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */