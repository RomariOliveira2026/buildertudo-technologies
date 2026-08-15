import { createContext } from 'react'
import type { Locale } from './config'
import type { TranslateFn } from './translate'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslateFn
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
