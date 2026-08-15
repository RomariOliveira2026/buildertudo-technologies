import { motion, useReducedMotion } from 'framer-motion'
import { BOS_INFRASTRUCTURE } from '../../content/business-os-showcase'
import { motionTransition } from '../../motion/variants'
import { useLocale } from '../../i18n'
import { businessOSCopy } from '../../i18n/business-os'

type InfrastructurePanelProps = {
  frameworkOverview?: boolean
}

export function InfrastructurePanel({ frameworkOverview = false }: InfrastructurePanelProps) {
  const prefersReducedMotion = useReducedMotion()
  const { locale } = useLocale()
  const copy = businessOSCopy[locale].infrastructure
  const serviceGroups = [
    { id: 'edge', label: copy.edgeDelivery, services: ['Cloudflare'] },
    { id: 'ai', label: copy.aiProviders, services: ['OpenAI', 'Anthropic'] },
    { id: 'data', label: copy.dataPlatform, services: ['Supabase'] },
    { id: 'payments', label: copy.payments, services: ['Stripe'] },
  ]
  const latency = (
    <span className="bos-infra__latency">
      {copy.latency} <strong>{BOS_INFRASTRUCTURE.latency}</strong>
    </span>
  )

  if (!frameworkOverview) {
    return (
      <section
        className="bos-infra bos-infra--premium"
        aria-labelledby="bos-infra-premium-title"
      >
        <header className="bos-infra-premium__header">
          <div>
            <span className="bos-infra-premium__eyebrow">{copy.globalInfrastructure}</span>
            <h2 id="bos-infra-premium-title" className="bos-infra-premium__title">
              {copy.overviewTitle}
            </h2>
            <p>{copy.overviewDescription}</p>
          </div>
          <span className="bos-infra-premium__showcase">
            <span aria-hidden="true">◇</span>
            {copy.showcaseData}
          </span>
        </header>

        <div className="bos-infra-kpis" role="list" aria-label={copy.indicatorsAria}>
          <article className="bos-infra-kpi" role="listitem">
            <span>{copy.regions}</span>
            <strong>{BOS_INFRASTRUCTURE.regions.length}</strong>
            <small>{copy.distributedNodes}</small>
          </article>
          <article className="bos-infra-kpi" role="listitem">
            <span>{copy.services}</span>
            <strong>{BOS_INFRASTRUCTURE.services.length}</strong>
            <small>{copy.architectureStack}</small>
          </article>
          <article className="bos-infra-kpi bos-infra-kpi--accent" role="listitem">
            <span>{copy.latency}</span>
            <strong>{BOS_INFRASTRUCTURE.latency}</strong>
            <small>{copy.showcaseMetric}</small>
          </article>
          <article className="bos-infra-kpi bos-infra-kpi--status" role="listitem">
            <span>{copy.status}</span>
            <strong><i aria-hidden="true" />{copy.showcase}</strong>
            <small>{copy.architectureModel}</small>
          </article>
        </div>

        <div className="bos-infra-architecture" aria-label={copy.architectureAria}>
          <div className="bos-infra-architecture__column bos-infra-regions">
            <span className="bos-infra-architecture__label">{copy.regions}</span>
            <div className="bos-infra-regions__list">
              {BOS_INFRASTRUCTURE.regions.map((region, index) => (
                <motion.article
                  key={region}
                  className="bos-infra-region"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: prefersReducedMotion ? 0 : -1 }}
                  transition={{ ...motionTransition.soft, delay: index * 0.05 }}
                >
                  <span className="bos-infra-region__node" aria-hidden="true">
                    <span />
                  </span>
                  <div>
                    <strong>{region}</strong>
                    <small>{copy.regionalNode}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="bos-infra-connector" aria-hidden="true">
            <span />
            <i>→</i>
          </div>

          <motion.div
            className="bos-infra-core"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={motionTransition.soft}
          >
            <span className="bos-infra-core__mark" aria-hidden="true">⬡</span>
            <small>{copy.coreInfrastructure}</small>
            <strong>BuilderTudo Core</strong>
            <p>{copy.coreDescription}</p>
          </motion.div>

          <div className="bos-infra-connector" aria-hidden="true">
            <span />
            <i>→</i>
          </div>

          <div className="bos-infra-architecture__column bos-infra-services">
            <span className="bos-infra-architecture__label">{copy.services}</span>
            <div className="bos-infra-services__grid">
              {serviceGroups.map((group, index) => (
                <motion.article
                  key={group.id}
                  className="bos-infra-service-group"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: prefersReducedMotion ? 0 : -1 }}
                  transition={{ ...motionTransition.soft, delay: 0.12 + index * 0.04 }}
                >
                  <span>{group.label}</span>
                  <div>
                    {group.services.map((service) => <strong key={service}>{service}</strong>)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="bos-infra-application">
          <span>{copy.applicationLayer}</span>
          <div aria-label={copy.applicationLayerAria}>
            {copy.applicationItems.map((item) => (
              <span key={item}><i aria-hidden="true" />{item}</span>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="bos-infra bos-infra--framework"
      aria-labelledby="bos-infra-title"
    >
      <header className="bos-infra__header">
        <h2 id="bos-infra-title" className="bos-infra__title">Infrastructure</h2>
      </header>

      <div className="bos-infra__grid">
        <div className="bos-infra__group">
          <span className="bos-infra__group-label">{copy.regions}</span>
          <div className="bos-infra__tags">
            {BOS_INFRASTRUCTURE.regions.map((region, index) => (
              <motion.span
                key={region}
                className="bos-infra__tag"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition.soft, delay: index * 0.05 }}
              >
                {region}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="bos-infra__group">
          <span className="bos-infra__group-label">{copy.services}</span>
          <div className="bos-infra__tags">
            {BOS_INFRASTRUCTURE.services.map((service, index) => (
              <motion.span
                key={service}
                className="bos-infra__tag bos-infra__tag--service"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition.soft, delay: 0.1 + index * 0.05 }}
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="bos-infra__latency-zone">{latency}</div>
      </div>
    </section>
  )
}
