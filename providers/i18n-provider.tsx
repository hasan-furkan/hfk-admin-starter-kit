'use client'

import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, fallbackLng } from './i18n-options'

import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import tr from '../public/locales/tr/common.json'

const resources = {
  en: { common: en },
  fr: { common: fr },
  tr: { common: tr }
}

const runsOnServerSide = typeof window === 'undefined'

// i18next yapılandırması
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng,
    supportedLngs: languages,
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    detection: {
      order: ['cookie'],
      lookupCookie: 'i18next',
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default function I18nProvider({
  children,
  locale
}: {
  children: React.ReactNode
  locale: string
}) {
  const [cookies] = useCookies(['i18next'])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initLanguage = async () => {
      try {
        const savedLang = cookies.i18next
        if (savedLang && languages.includes(savedLang)) {
          await i18next.changeLanguage(savedLang)
        } else {
          const browserLang = navigator.language.split('-')[0]
          const initialLang = languages.includes(browserLang) ? browserLang : fallbackLng
          await i18next.changeLanguage(initialLang)
        }
      } catch (error) {
        console.error('Language initialization error:', error)
        await i18next.changeLanguage(fallbackLng)
      } finally {
        setIsInitialized(true)
      }
    }

    if (!isInitialized) {
      initLanguage()
    }
  }, [cookies.i18next, isInitialized])

  if (!isInitialized) {
    return null
  }

  return children
}

export function useTranslation(ns: string = 'common') {
  return useTranslationOrg(ns)
}

export { i18next, I18nProvider }