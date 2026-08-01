import { motion } from 'framer-motion'
import { BOS_COPILOT } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'

export function AICopilotPanel() {
  return (
    <aside className="bos-copilot" aria-labelledby="bos-copilot-title">
      <header className="bos-copilot__header">
        <div className="bos-copilot__avatar" aria-hidden="true">◎</div>
        <div>
          <h2 id="bos-copilot-title" className="bos-copilot__title">AI Copilot</h2>
          <p className="bos-copilot__status">
            <span className="bos-live__dot" aria-hidden="true" />
            Executive mode
          </p>
        </div>
      </header>

      <div className="bos-copilot__sections">
        {BOS_COPILOT.map((section, sIndex) => (
          <motion.section
            key={section.id}
            className={`bos-copilot__section${section.variant ? ` bos-copilot__section--${section.variant}` : ''}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransition.soft, delay: sIndex * 0.08 }}
          >
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </aside>
  )
}
