import { BOS_COMMAND_METRICS } from '../../content/business-os-showcase'
import { MetricGrid } from './MetricGrid'
import { LiveActivityPanel } from './LiveActivityPanel'
import { LiveActivityTicker } from './LiveActivityTicker'
import { AICopilotPanel } from './AICopilotPanel'
import { InfrastructurePanel } from './InfrastructurePanel'

export function CommandCenterView() {
  return (
    <div className="bos-view bos-view--command">
      <header className="bos-view__header bos-view__header--command">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">Command Center</h1>
          <p className="bos-view__desc">
            Unified operational dashboard — revenue, clients, products, AI agents and infrastructure at a glance.
          </p>
        </div>
        <div className="bos-view__status-row">
          <span className="bos-view__status"><span className="bos-live__dot" aria-hidden="true" /> All systems operational</span>
          <span className="bos-view__status">Framework v2.1</span>
        </div>
      </header>

      <LiveActivityTicker />

      <MetricGrid metrics={BOS_COMMAND_METRICS} />

      <div className="bos-command-split">
        <LiveActivityPanel />
        <AICopilotPanel />
      </div>

      <InfrastructurePanel />
    </div>
  )
}
