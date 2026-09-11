import type { TranslateFn } from './translate'
import {
  BUILDERCARE_ITEM_IDS,
  DIFFERENTIAL_IDS,
  FAQ_IDS,
  PLAN_FEATURE_COUNTS,
  PLANS,
  PORTFOLIO_ITEMS,
  PROBLEM_IDS,
  PROCESS_STEP_IDS,
  SEGMENT_IDS,
  SOLUTION_IDS,
  type PlanId,
} from '../data/commercial'
import { formatPriceFromPlan } from '../config/commercial'

export function getProblemItems(t: TranslateFn) {
  return PROBLEM_IDS.map((id) => ({
    id,
    title: t(`commercial.problem.items.${id}.title`),
    description: t(`commercial.problem.items.${id}.description`),
  }))
}

export function getSolutionItems(t: TranslateFn) {
  return SOLUTION_IDS.map((id) => ({
    id,
    title: t(`commercial.solutions.items.${id}.title`),
    description: t(`commercial.solutions.items.${id}.description`),
  }))
}

export function getPlanCards(t: TranslateFn, locale: string) {
  const priceLocale = locale === 'en' ? 'en-US' : locale === 'es' ? 'es-ES' : 'pt-BR'

  return PLANS.map((plan) => ({
    ...plan,
    name: t(`commercial.plans.${plan.id}.name`),
    audience: t(`commercial.plans.${plan.id}.audience`),
    cta: t(`commercial.plans.${plan.id}.cta`),
    note: plan.customQuote ? t(`commercial.plans.${plan.id}.note`) : '',
    priceLabel: t('commercial.plans.priceFrom', {
      values: { price: formatPriceFromPlan(plan.priceId, priceLocale) },
    }),
    features: Array.from({ length: PLAN_FEATURE_COUNTS[plan.id] }, (_, index) =>
      t(`commercial.plans.${plan.id}.f${index + 1}`),
    ),
  }))
}

export function getBuilderCareItems(t: TranslateFn) {
  return BUILDERCARE_ITEM_IDS.map((id) => ({
    id,
    title: t(`commercial.buildercare.items.${id}.title`),
    description: t(`commercial.buildercare.items.${id}.description`),
  }))
}

export function getProcessSteps(t: TranslateFn) {
  return PROCESS_STEP_IDS.map((id, index) => ({
    id,
    step: String(index + 1).padStart(2, '0'),
    title: t(`commercial.process.steps.${id}.title`),
    description: t(`commercial.process.steps.${id}.description`),
  }))
}

export function getDifferentials(t: TranslateFn) {
  return DIFFERENTIAL_IDS.map((id) => ({
    id,
    title: t(`commercial.differentials.items.${id}.title`),
    description: t(`commercial.differentials.items.${id}.description`),
  }))
}

export function getSegments(t: TranslateFn) {
  return SEGMENT_IDS.map((id) => ({
    id,
    title: t(`commercial.segments.items.${id}.title`),
  }))
}

export function getFaqItems(t: TranslateFn) {
  const prices = {
    express: formatPriceFromPlan('express'),
    business: formatPriceFromPlan('business'),
    premium: formatPriceFromPlan('premium'),
  }

  return FAQ_IDS.map((id) => ({
    id,
    question: t(`commercial.faq.items.${id}.q`),
    answer: t(`commercial.faq.items.${id}.a`, { values: prices }),
  }))
}

export function getPortfolioItems(t: TranslateFn) {
  return PORTFOLIO_ITEMS.map((item) => ({
    ...item,
    name: t(`commercial.portfolio.items.${item.id}.name`),
    description: t(`commercial.portfolio.items.${item.id}.description`),
    category: t(`commercial.portfolio.categories.${item.category}`),
    ownerLabel: t('commercial.portfolio.ownerLabel'),
  }))
}

export function getWhatsAppCopy(t: TranslateFn, context: PlanId | 'default' | 'quote' | 'buildercare' | 'landing' | 'custom') {
  const keyMap = {
    default: 'contact.whatsappDefault',
    quote: 'contact.whatsappQuote',
    express: 'contact.whatsappExpress',
    business: 'contact.whatsappBusiness',
    premium: 'contact.whatsappPremium',
    landing: 'contact.whatsappLanding',
    custom: 'contact.whatsappCustom',
    buildercare: 'contact.whatsappBuilderCare',
  } as const

  return t(keyMap[context])
}
