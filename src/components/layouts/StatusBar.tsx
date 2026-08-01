import { STATUS_BAR_ITEMS } from '../../constants/hero'

export function StatusBar() {
  return (
    <div className="status-bar" role="status" aria-label="Platform status">
      <div className="status-bar__inner container container--wide">
        {STATUS_BAR_ITEMS.map((item) => (
          <span key={item.id} className="status-bar__item">
            {item.live ? <span className="status-bar__dot" aria-hidden="true" /> : null}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
