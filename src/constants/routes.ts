export const PRODUCT_ROUTES = {
  blindcare: '/blindcare',
  prevpro: '/prevpro',
  contentfy: '/contentfy',
  voxcraft: '/voxcraft',
  fuelmaster: '/fuelmaster',
  fui: '/fui',
  proodonto: '/proodonto',
  jurismind: '/jurismind',
  construfy: '/construfy',
  auditeia: '/auditeia',
  recomeca: '/recomeca',
  copygenio: '/copygenio',
} as const

export const LEGAL_ROUTES = {
  privacy: '/politica-de-privacidade',
  terms: '/termos-de-uso',
} as const

export const BLOG_ROUTES = {
  blog: '/blog',
  articles: '/artigos',
  categories: '/categorias',
} as const

export type ProductRouteKey = keyof typeof PRODUCT_ROUTES
export type BlogRouteKey = keyof typeof BLOG_ROUTES

export const SITE_URL = 'https://buildertudo.com'
