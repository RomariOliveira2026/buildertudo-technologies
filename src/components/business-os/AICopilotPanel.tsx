import { motion, useReducedMotion } from 'framer-motion'
import { BOS_COPILOT } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'

const PRIMARY_SIGNAL_IDS = new Set(['brief', 'health', 'deploy'])

const SECTION_ICONS: Record<string, string> = {
  brief: '◈',
  health: '◆',
  deploy: '↑',
  alerts: '!',
  actions: '→',
  release: '◇',
  infra: '⬡',
}

function extractMetric(item: string) {
  return item.match(/\$\d+(?:\.\d+)?[KMB]?|\d+(?:\.\d+)?%/)?.[0]
}

type AICopilotPanelProps = {
  executiveLayout?: boolean
}

export function AICopilotPanel({ executiveLayout = false }: AICopilotPanelProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <aside className="bos-copilot" aria-labelledby="bos-copilot-title">
      <header className="bos-copilot__header">
        <div className="bos-copilot__avatar" aria-hidden="true">◎</div>
        <div className="bos-copilot__header-copy">
          <div className="bos-copilot__title-row">
            <h2 id="bos-copilot-title" className="bos-copilot__title">Executive AI Brief</h2>
            <span className="bos-copilot__badge">
              <span className="bos-live__dot" aria-hidden="true" />
              AI ONLINE
            </span>
          </div>
          <p className="bos-copilot__status">Real-time executive intelligence</p>
        </div>
      </header>

      <div className="bos-copilot__sections">
        {BOS_COPILOT.map((section, sIndex) => {
          const metric = executiveLayout && PRIMARY_SIGNAL_IDS.has(section.id)
            ? extractMetric(section.items[0] ?? '')
            : undefined

          return (
            <motion.section
              key={section.id}
              className={`bos-copilot__section${executiveLayout ? ` bos-copilot__section--${section.id}` : ''}${metric ? ' bos-copilot__section--metric' : ''}${section.variant ? ` bos-copilot__section--${section.variant}` : ''}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={executiveLayout ? { y: prefersReducedMotion ? 0 : -1 } : undefined}
              transition={{ ...motionTransition.soft, delay: sIndex * 0.06 }}
            >
              {executiveLayout ? (
                <div className="bos-copilot__section-head">
                  <span className="bos-copilot__section-icon" aria-hidden="true">
                    {SECTION_ICONS[section.id] ?? '•'}
                  </span>
                  <h3>{section.title}</h3>
                </div>
              ) : (
                <h3>{section.title}</h3>
              )}
              {metric ? <strong className="bos-copilot__metric">{metric}</strong> : null}
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.section>
          )
        })}
      </div>
    </aside>
  )
}
