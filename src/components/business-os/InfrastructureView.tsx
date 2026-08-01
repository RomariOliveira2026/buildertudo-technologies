import { InfrastructurePanel } from './InfrastructurePanel'

export function InfrastructureView() {
  return (
    <div className="bos-view bos-view--infrastructure">
      <header className="bos-view__header">
        <div>
          <span className="bos-view__eyebrow">Business OS</span>
          <h1 className="bos-view__title">Infrastructure</h1>
          <p className="bos-view__desc">
            Global regions, cloud services and real-time latency across the BuilderTudo platform.
          </p>
        </div>
      </header>
      <InfrastructurePanel />
    </div>
  )
}
