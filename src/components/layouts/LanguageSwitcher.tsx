import { useEffect, useId, useRef, useState } from 'react'
import { LOCALE_META, LOCALES, type Locale } from '../../i18n/config'
import { useTranslation } from '../../i18n'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const selectLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
  }

  return (
    <div className={`lang-switcher${compact ? ' lang-switcher--compact' : ''}${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="lang-switcher__trigger"
        aria-label={t('common.changeLanguage')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{LOCALE_META[locale].shortLabel}</span>
        <span className="lang-switcher__caret" aria-hidden="true">▾</span>
      </button>

      {open ? (
        <ul id={listId} className="lang-switcher__menu" role="listbox" aria-label={t('common.changeLanguage')}>
          {LOCALES.map((item) => (
            <li key={item} role="option" aria-selected={item === locale}>
              <button
                type="button"
                className={`lang-switcher__option${item === locale ? ' is-active' : ''}`}
                onClick={() => selectLocale(item)}
              >
                <span className="lang-switcher__code">{LOCALE_META[item].shortLabel}</span>
                <span className="lang-switcher__label">{LOCALE_META[item].label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
