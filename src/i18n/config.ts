export const LOCALES = ['en', 'es', 'pt-BR'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'buildertudo.locale'

export const LOCALE_META: Record<
  Locale,
  { label: string; shortLabel: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: 'English', shortLabel: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', shortLabel: 'ES', htmlLang: 'es', ogLocale: 'es_LA' },
  'pt-BR': { label: 'Português (Brasil)', shortLabel: 'PT-BR', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}
