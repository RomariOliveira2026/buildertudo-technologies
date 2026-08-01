import { motion } from 'framer-motion'
import { BOS_INFRASTRUCTURE } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'

export function InfrastructurePanel() {
  return (
    <section className="bos-infra" aria-labelledby="bos-infra-title">
      <header className="bos-infra__header">
        <h2 id="bos-infra-title" className="bos-infra__title">Infrastructure</h2>
        <span className="bos-infra__latency">
          Latency <strong>{BOS_INFRASTRUCTURE.latency}</strong>
        </span>
      </header>

      <div className="bos-infra__grid">
        <div className="bos-infra__group">
          <span className="bos-infra__group-label">Regions</span>
          <div className="bos-infra__tags">
            {BOS_INFRASTRUCTURE.regions.map((region, index) => (
              <motion.span
                key={region}
                className="bos-infra__tag"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition.soft, delay: index * 0.05 }}
              >
                {region}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="bos-infra__group">
          <span className="bos-infra__group-label">Services</span>
          <div className="bos-infra__tags">
            {BOS_INFRASTRUCTURE.services.map((service, index) => (
              <motion.span
                key={service}
                className="bos-infra__tag bos-infra__tag--service"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition.soft, delay: 0.1 + index * 0.05 }}
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
