import { Section, SectionHeader } from '../ui/Section'
import { Reveal, StaggerItem, StaggerReveal } from '../ui/Reveal'
import { MotionButton } from '../ui/Buttons'
import { useTranslation } from '../../i18n'
import { getPlanCards, getWhatsAppCopy } from '../../i18n/commercial'
import { ANALYTICS_EVENTS } from '../../config/commercial'
import { trackEvent } from '../../lib/analytics'
import { WhatsAppAnchor } from '../ui/WhatsAppAnchor'
import type { PlanId } from '../../data/commercial'

function quoteHref(planId: PlanId) {
  return `/?plano=${planId}#contact`
}

export function PlansSection() {
  const { t, locale } = useTranslation()
  const plans = getPlanCards(t, locale)

  return (
    <Section id="planos" className="commercial-plans" variant="alt" ariaLabelledBy="planos-title">
      <Reveal>
        <SectionHeader
          id="planos-title"
          eyebrow={t('commercial.plans.eyebrow')}
          title={t('commercial.plans.title')}
          description={t('commercial.plans.description')}
        />
      </Reveal>

      <StaggerReveal className="commercial-plans__grid">
        {plans.map((plan) => (
          <StaggerItem key={plan.id}>
            <article className={`plan-card${plan.featured ? ' plan-card--featured' : ''}`}>
              {plan.featured ? <p className="plan-card__badge">{t('commercial.plans.featured')}</p> : null}
              <h3>{plan.name}</h3>
              <p className="plan-card__audience">{plan.audience}</p>
              <p className="plan-card__price">{plan.priceLabel}</p>
              {plan.note ? <p className="plan-card__note">{plan.note}</p> : null}
              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="plan-card__actions">
                <MotionButton
                  href={quoteHref(plan.id)}
                  className="plan-card__cta"
                  onClick={() => {
                    trackEvent(ANALYTICS_EVENTS.selectPlan, { plan: plan.id })
                    trackEvent(ANALYTICS_EVENTS.clickQuote, { source: 'plan', plan: plan.id })
                  }}
                >
                  {plan.cta}
                </MotionButton>
                <WhatsAppAnchor className="plan-card__whatsapp" message={getWhatsAppCopy(t, plan.id)} context={plan.id}>
                  {t('contact.ctaWhatsapp')}
                </WhatsAppAnchor>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  )
}
