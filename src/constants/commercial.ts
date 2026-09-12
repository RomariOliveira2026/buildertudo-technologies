export const INSTAGRAM_HANDLE = '@buildertudo.technologies'
export const INSTAGRAM_URL = 'https://instagram.com/buildertudo.technologies'

export const PLAN_IDS = ['express', 'business', 'premium'] as const
export type PlanId = (typeof PLAN_IDS)[number]

export const PLAN_PRICES = {
  express: 997,
  business: 2497,
  premium: 4997,
} as const

export const HIGHLIGHTED_PLAN: PlanId = 'business'

export type WhatsAppIntent =
  | 'default'
  | 'quote'
  | 'express'
  | 'business'
  | 'premium'
  | 'care'

export function formatBRL(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function planPriceLabel(planId: PlanId) {
  return formatBRL(PLAN_PRICES[planId])
}
