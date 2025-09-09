// index.ts: Configuration file for i18next internationalization, enabling multi-language support with English and Persian translations.

// Import initReactI18next to integrate i18next with React.
import { initReactI18next } from "react-i18next";

// Import the i18next core library for internationalization.
import i18n from "i18next";

// Import English translation resources from en.json.
import en from "./en.json";

// Import Persian translation resources from fa.json.
import fa from "./fa.json";

// Initialize i18next with configuration for React integration.
i18n
    .use(initReactI18next) // Use the React integration plugin
    .init({
        resources: {
            en: { translation: en }, // English translations from en.json
            fa: { translation: fa }  // Persian translations from fa.json
        },
        lng: "en", // Set default language to English
        fallbackLng: "en", // Fallback to English if translation for the current language is missing
        interpolation: {
            escapeValue: false // Disable escaping of values (React handles XSS prevention)
        }
    });

// Export the initialized i18n instance for use in the application.
export default i18n;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */