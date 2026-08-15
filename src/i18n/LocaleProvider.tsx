import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from './config'
import { dictionaries } from './locales'
import { LocaleContext } from './locale-context'
import { createTranslator } from './translate'

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = LOCALE_META[locale].htmlLang
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    return readStoredLocale()
  })

  useEffect(() => {
    applyDocumentLocale(locale)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const t = useMemo(() => createTranslator(dictionaries, locale), [locale])
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
