'use client'

import i18next from 'i18next'
import { useEffect } from 'react'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages } from './i18n-options'

import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import tr from '../public/locales/tr/common.json'

const resources = {
  en: {
    common: en
  },
  fr: {
    common: fr
  },
  tr: {
    common: tr
  }
}

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...getOptions(),
    resources,
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    preload: runsOnServerSide ? languages : [],
    interpolation: {
      escapeValue: false // React güvenlik özelliklerine uyum
    }
  })

export default function I18nProvider({
  children,
  locale
}: {
  children: React.ReactNode
  locale: string
}) {
  const [cookies, setCookie] = useCookies(['i18next'])

  useEffect(() => {
    const cookieLanguage = cookies.i18next

    // Çerezde dil yoksa veya eşleşmiyorsa locale'yi kullan
    if (!cookieLanguage || cookieLanguage !== locale) {
      setCookie('i18next', locale, { path: '/' }) // Çerezi güncelle
      i18next.changeLanguage(locale) // i18next dilini güncelle
    } else {
      i18next.changeLanguage(cookieLanguage) // Çerezdeki dile geçiş yap
    }
  }, [locale, cookies.i18next, setCookie])

  return (
    <div key={locale}>
      {children}
    </div>
  )
}

export function useTranslation(ns: string = 'common') {
  const translation = useTranslationOrg(ns)
  return translation
}

export { i18next }
