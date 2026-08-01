import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import type { BosView } from '../../content/business-os-showcase'
import { BOS_NAV } from '../../content/business-os-showcase'
import { CommandCenterView } from './CommandCenterView'
import { ProductsView } from './ProductsView'
import { AnalyticsView } from './AnalyticsView'
import { FrameworkView } from './FrameworkView'
import { InfrastructureView } from './InfrastructureView'
import { CopilotView } from './CopilotView'
import { motionTransition } from '../../motion/variants'

const VIEWS: Record<BosView, () => ReactNode> = {
  'command-center': () => <CommandCenterView />,
  products: () => <ProductsView />,
  analytics: () => <AnalyticsView />,
  framework: () => <FrameworkView />,
  infrastructure: () => <InfrastructureView />,
  'ai-copilot': () => <CopilotView />,
}

type BusinessOSShowcaseProps = {
  compact?: boolean
}

export function BusinessOSShowcase({ compact = false }: BusinessOSShowcaseProps) {
  const [activeView, setActiveView] = useState<BosView>('command-center')
  const ActiveView = VIEWS[activeView]

  return (
    <div className={`bos-showcase${compact ? ' bos-showcase--compact' : ''}`}>
      <div className="bos-showcase__grid-bg" aria-hidden="true" />
      <div className="bos-showcase__glow bos-showcase__glow--blue" aria-hidden="true" />
      <div className="bos-showcase__glow bos-showcase__glow--gold" aria-hidden="true" />

      <div className="bos-showcase__shell">
        <aside className="bos-sidebar" aria-label="Business OS navigation">
          <div className="bos-sidebar__brand">
            <span className="bos-sidebar__logo" aria-hidden="true">⬡</span>
            <div className="bos-sidebar__brand-copy">
              <div className="bos-sidebar__brand-row">
                <strong>Business OS</strong>
                <span className="bos-sidebar__product-badge">Business OS</span>
              </div>
              <span className="bos-sidebar__brand-sub">BuilderTudo</span>
            </div>
          </div>

          <div className="bos-sidebar__live" aria-label="Platform status">
            <span className="bos-live__dot" aria-hidden="true" />
            LIVE
          </div>

          <nav className="bos-sidebar__nav">
            {BOS_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`bos-sidebar__item${activeView === item.id ? ' bos-sidebar__item--active' : ''}`}
                onClick={() => setActiveView(item.id)}
                aria-current={activeView === item.id ? 'page' : undefined}
              >
                <span className="bos-sidebar__icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {!compact ? (
            <div className="bos-sidebar__footer">
              <Link to="/#contact" className="bos-sidebar__cta">Start Your Project</Link>
              <Link to="/framework" className="bos-sidebar__link">Explore Framework →</Link>
            </div>
          ) : null}
        </aside>

        <main className="bos-main">
          <div className="bos-main__monitor-glow" aria-hidden="true" />
          <div className="bos-main__chrome">
            <div className="bos-main__dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="bos-main__chrome-sep" aria-hidden="true" />
            <span className="bos-main__url">business-os.buildertudo.com/{activeView}</span>
            <span className="bos-main__live">
              <span className="bos-live__dot" aria-hidden="true" />
              Live
            </span>
          </div>

          <div className="bos-main__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                className="bos-main__view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={motionTransition.soft}
              >
                <ActiveView />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
