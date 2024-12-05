import { createI18n } from 'vue-i18n';
const messages = {
  en: {
    welcome: 'Welcome'
  },
  de: {
    welcome: 'Wilkomen'
  },
};

// Create the i18n instance
const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback if a translation is missing
  messages,
});

export default i18n;
