import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as data from '../locales/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: data,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
