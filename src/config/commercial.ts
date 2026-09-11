export const PRICING = {
  currency: 'BRL',
  locale: 'pt-BR',
  express: 997,
  business: 2497,
  premium: 4997,
} as const

export type PlanPriceId = keyof Omit<typeof PRICING, 'currency' | 'locale'>

export function formatPriceFrom(amount: number, locale: string = PRICING.locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: PRICING.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPriceFromPlan(plan: PlanPriceId, locale: string = PRICING.locale) {
  return formatPriceFrom(PRICING[plan], locale)
}

export const SOCIAL = {
  instagramHandle: '@buildertudo.technologies',
  instagramUrl: 'https://www.instagram.com/buildertudo.technologies/',
} as const

/**
 * Commercial WhatsApp. Keep the E.164 number here — never hardcode it in components.
 * If this number ever changes, update only this object.
 */
export const WHATSAPP_CONFIG = {
  e164: '5579999348812',
  display: '+55 79 99934-8812',
} as const

export const ANALYTICS_EVENTS = {
  clickWhatsapp: 'click_whatsapp',
  clickQuote: 'click_quote',
  selectPlan: 'select_plan',
  submitLead: 'submit_lead',
  viewPortfolio: 'view_portfolio',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]
