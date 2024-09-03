import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Gallery": "Gallery",
      "Price List": "Price List",
      "Contacts": "Contacts",
    }
  },
  ru: {
    translation: {
      "Gallery": "Галерея",
      "Price List": "Прайс-лист",
      "Contacts": "Контакты",
    }
  },
  he: {
    translation: {
      "Gallery": "גלריה",
      "Price List": "מחירון",
      "Contacts": "אנשי קשר",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // Язык по умолчанию
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
