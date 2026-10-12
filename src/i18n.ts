import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pt from './locales/pt.json'

i18n
  .use(LanguageDetector) // reads localStorage / navigator.language
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, pt: { translation: pt } },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }, // React already escapes
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.title = i18n.t('title')

  console.log(`Language changed to ${lng}`)
})

export const SUPPORTED_LANGUAGES = ['en', 'pt'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export default i18n
