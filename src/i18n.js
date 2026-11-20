import i18n from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

// Translation files downloaded from Transifex are picked up automatically.
const translations = import.meta.glob('./locales/*.json', { eager: true, import: 'default' });

export const LANGUAGES = { en: 'English', fr: 'Français', de: 'Deutsch' };

const resources = Object.fromEntries(
  Object.keys(LANGUAGES).map((lng) => [
    lng,
    { translation: translations[`./locales/${lng}.json`] ?? en },
  ]),
);

const saved = localStorage.getItem('lang');
const browser = navigator.language?.split('-')[0];
const initial = saved || (browser in LANGUAGES ? browser : 'en');

i18n
  .use(ICU)
  .use(initReactI18next)
  .init({
    resources,
    lng: initial,
    fallbackLng: 'en',
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
  document.documentElement.lang = lng;
});
document.documentElement.lang = i18n.language;

export default i18n;
