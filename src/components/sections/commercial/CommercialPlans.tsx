import { HIGHLIGHTED_PLAN, PLAN_IDS, planPriceLabel, type PlanId } from '../../../constants/commercial'
import { commercialCopy } from '../../../i18n/commercial'
import { useTranslation } from '../../../i18n'
import { trackPlanSelect, trackQuoteClick } from '../../../lib/commercial-whatsapp'
import { MotionButton } from '../../ui/Buttons'
import { Reveal } from '../../ui/Reveal'
import { Section, SectionHeader } from '../../ui/Section'

export function CommercialPlans() {
  const { locale } = useTranslation()
  const copy = commercialCopy[locale]

  const plans = PLAN_IDS.map((id) => {
    const plan = copy.plans[id]
    return {
      id,
      name: plan.name,
      for: plan.for,
      features: plan.features,
      cta: 'cta' in plan ? plan.cta : copy.plans.cta,
      featured: id === HIGHLIGHTED_PLAN,
    }
  })

  const handlePlanClick = (planId: PlanId) => {
    trackPlanSelect(planId)
    trackQuoteClick(planId)
  }

  return (
    <Section id="plans" variant="alt" className="cm-plans" ariaLabelledBy="plans-title">
      <Reveal>
        <SectionHeader id="plans-title" eyebrow={copy.plans.eyebrow} title={copy.plans.title} />
      </Reveal>

      <div className="cm-plans__grid">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`cm-plan${plan.featured ? ' cm-plan--featured' : ''}`}
          >
            {plan.featured ? <span className="cm-plan__badge">{copy.plans.mostChosen}</span> : null}
            <h3 translate="no">{plan.name}</h3>
            <p className="cm-plan__price">
              <span>{copy.plans.from}</span>
              <strong>{planPriceLabel(plan.id)}</strong>
            </p>
            <p className="cm-plan__for">{plan.for}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {plan.id === 'premium' ? <p className="cm-plan__note">{copy.plans.customNote}</p> : null}
            <MotionButton
              href={`/?plan=${plan.id}#contact`}
              className="cm-plan__cta"
              onClick={() => handlePlanClick(plan.id)}
            >
              {plan.cta}
            </MotionButton>
          </article>
        ))}
      </div>
    </Section>
  )
}
