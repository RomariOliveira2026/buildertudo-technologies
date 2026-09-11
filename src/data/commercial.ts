import { PRICING, type PlanPriceId } from '../config/commercial'

export const COMMERCIAL_NAV_IDS = [
  'solucoes',
  'planos',
  'buildercare',
  'projetos',
  'processo',
  'contact',
] as const

export type CommercialNavId = (typeof COMMERCIAL_NAV_IDS)[number]

export const COMMERCIAL_OBSERVED_SECTIONS = COMMERCIAL_NAV_IDS

export const PROBLEM_IDS = [
  'outdated',
  'mobile',
  'slow',
  'message',
  'cta',
  'contact',
  'unprofessional',
  'no-opportunities',
] as const

export const SOLUTION_IDS = ['institutional', 'landing', 'commercial', 'custom'] as const

export const PLAN_IDS = ['express', 'business', 'premium'] as const
export type PlanId = (typeof PLAN_IDS)[number]

export const PLANS: Array<{
  id: PlanId
  priceId: PlanPriceId
  featured: boolean
  featureCount: number
  customQuote: boolean
}> = [
  { id: 'express', priceId: 'express', featured: false, featureCount: 7, customQuote: false },
  { id: 'business', priceId: 'business', featured: true, featureCount: 10, customQuote: false },
  { id: 'premium', priceId: 'premium', featured: false, featureCount: 6, customQuote: true },
]

export const PLAN_FEATURE_COUNTS: Record<PlanId, number> = {
  express: 7,
  business: 10,
  premium: 6,
}

export const BUILDERCARE_ITEM_IDS = [
  'maintenance',
  'updates',
  'support',
  'monitoring',
  'small-changes',
  'technical',
  'improvements',
] as const

export const PROCESS_STEP_IDS = [
  'diagnosis',
  'strategy',
  'build',
  'validation',
  'publish',
  'evolution',
] as const

export const DIFFERENTIAL_IDS = [
  'strategy',
  'responsive',
  'technology',
  'copy',
  'ai',
] as const

export const SEGMENT_IDS = [
  'industry',
  'distributors',
  'sales-reps',
  'services',
  'clinics',
  'offices',
  'professionals',
  'retail',
  'local',
  'b2b',
] as const

export const FAQ_IDS = [
  'cost',
  'timeline',
  'domain',
  'copy',
  'mobile',
  'changes',
  'care',
  'landing',
] as const

export const PROJECT_TYPE_IDS = [
  'express',
  'business',
  'premium',
  'landing',
  'custom',
  'unknown',
] as const

export type ProjectTypeId = (typeof PROJECT_TYPE_IDS)[number]

export const PORTFOLIO_ITEMS = [
  {
    id: 'contentfy',
    slug: 'contentfy',
    href: '/products/contentfy',
    category: 'marketing',
  },
  {
    id: 'jurismind',
    slug: 'jurismind',
    href: '/products/jurismind',
    category: 'legal',
  },
  {
    id: 'blindcare',
    slug: 'blindcare',
    href: '/products/blindcare',
    category: 'health',
  },
  {
    id: 'professoria',
    slug: 'professoria',
    href: '/products/professoria',
    category: 'education',
  },
  {
    id: 'prevenpro',
    slug: 'prevenpro',
    href: '/products/prevenpro',
    category: 'prevention',
  },
  {
    id: 'proodonto-smart',
    slug: 'proodonto-smart',
    href: '/products/proodonto-smart',
    category: 'health',
  },
] as const

export type PortfolioItem = (typeof PORTFOLIO_ITEMS)[number]

export const PLAN_PRICE_AMOUNT: Record<PlanId, number> = {
  express: PRICING.express,
  business: PRICING.business,
  premium: PRICING.premium,
}
