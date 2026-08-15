import { BOS_COMMAND_METRICS } from '../../content/business-os-showcase'
import { MetricGrid } from './MetricGrid'
import { LiveActivityPanel } from './LiveActivityPanel'
import { LiveActivityTicker } from './LiveActivityTicker'
import { AICopilotPanel } from './AICopilotPanel'
import { InfrastructurePanel } from './InfrastructurePanel'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

export function CommandCenterView() {
  const { locale } = useLocale()
  const copy = businessOSCopy[locale]
  const metrics = BOS_COMMAND_METRICS.map((metric) => ({
    ...metric,
    label: copy.metrics[metric.id as keyof typeof copy.metrics] ?? metric.label,
    change: metric.change === 'Online'
      ? copy.metrics.online
      : metric.change === 'Live'
        ? copy.metrics.live
        : metric.change === 'Stable'
          ? copy.metrics.stable
          : metric.change,
  }))

  return (
    <div className="bos-view bos-view--command">
      <header className="bos-view__header bos-view__header--command">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">{copy.command.title}</h1>
          <p className="bos-view__desc">{copy.command.description}</p>
        </div>
        <div className="bos-view__status-row">
          <span className="bos-view__status"><span className="bos-live__dot" aria-hidden="true" /> {copy.command.operational}</span>
          <span className="bos-view__status">Framework v2.1</span>
        </div>
      </header>

      <LiveActivityTicker />

      <MetricGrid metrics={metrics} />

      <div className="bos-command-split">
        <LiveActivityPanel />
        <AICopilotPanel />
      </div>

      <InfrastructurePanel />
    </div>
  )
}
