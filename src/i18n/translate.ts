import type { Locale } from './config'
import { DEFAULT_LOCALE } from './config'

export type MessageTree = { [key: string]: string | MessageTree }

export type TranslateOptions = {
  values?: Record<string, string | number>
}

function getByPath(tree: MessageTree, path: string): string | MessageTree | undefined {
  return path.split('.').reduce<string | MessageTree | undefined>((acc, key) => {
    if (!acc || typeof acc === 'string') return undefined
    return acc[key]
  }, tree)
}

function interpolate(template: string, values?: Record<string, string | number>) {
  if (!values) return template
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = values[key]
    return value === undefined ? `{{${key}}}` : String(value)
  })
}

export function createTranslator(dictionaries: Record<Locale, MessageTree>, locale: Locale) {
  const active = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
  const fallback = dictionaries[DEFAULT_LOCALE]

  return function t(key: string, options?: TranslateOptions): string {
    const fromActive = getByPath(active, key)
    const fromFallback = fromActive === undefined ? getByPath(fallback, key) : undefined
    const resolved = fromActive ?? fromFallback

    if (typeof resolved === 'string') {
      return interpolate(resolved, options?.values)
    }

    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing key: ${key} (locale: ${locale})`)
    }

    return key
  }
}

export type TranslateFn = ReturnType<typeof createTranslator>
