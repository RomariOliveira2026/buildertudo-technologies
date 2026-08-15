import { InfrastructurePanel } from './InfrastructurePanel'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

export function InfrastructureView() {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].infrastructure

  return (
    <div className="bos-view bos-view--infrastructure">
      <header className="bos-view__header">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">{copy.title}</h1>
          <p className="bos-view__desc">{copy.description}</p>
        </div>
      </header>
      <InfrastructurePanel />
    </div>
  )
}
