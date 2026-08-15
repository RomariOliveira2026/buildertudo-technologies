import { getStatusBarItems } from '../../i18n/content'
import { useTranslation } from '../../i18n'

export function StatusBar() {
  const { t } = useTranslation()
  const items = getStatusBarItems(t)

  return (
    <div className="status-bar" role="status" aria-label={t('common.platformStatusAria')}>
      <div className="status-bar__inner container container--wide">
        {items.map((item) => (
          <span key={item.id} className="status-bar__item">
            {item.live ? <span className="status-bar__dot" aria-hidden="true" /> : null}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
