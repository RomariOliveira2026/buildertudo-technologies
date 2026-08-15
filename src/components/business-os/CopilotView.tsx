import { AICopilotPanel } from './AICopilotPanel'

export function CopilotView() {
  return (
    <div className="bos-view bos-view--copilot">
      <header className="bos-view__header">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">AI Copilot</h1>
          <p className="bos-view__desc">
            Executive AI Brief — forecasts, health, deploy status, risk alerts and recommended actions.
          </p>
        </div>
      </header>
      <AICopilotPanel executiveLayout />
    </div>
  )
}
