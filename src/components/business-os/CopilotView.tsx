import { AICopilotPanel } from './AICopilotPanel'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

export function CopilotView() {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].copilot

  return (
    <div className="bos-view bos-view--copilot">
      <header className="bos-view__header">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">{copy.viewTitle}</h1>
          <p className="bos-view__desc">{copy.viewDescription}</p>
        </div>
      </header>
      <AICopilotPanel executiveLayout />
    </div>
  )
}
