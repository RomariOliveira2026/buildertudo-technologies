export const PRODUCT_ROUTES = {
  contentfy: '/products/contentfy',
  fui: '/products/fui',
  jurismind: '/products/jurismind',
  blindcare: '/products/blindcare',
  professoria: '/products/professoria',
  voxcraft: '/products/voxcraft',
  prevenpro: '/products/prevenpro',
  fuelmaster: '/products/fuelmaster',
  diagramafy: '/products/diagramafy',
  respondfy: '/products/respondfy',
  ispmind: '/products/ispmind',
  proodonto: '/products/proodonto-smart',
} as const

export const PAGE_ROUTES = {
  live: '/live',
  labs: '/labs',
  framework: '/framework',
  method: '/method',
  businessOs: '/business-os',
  cases: '/cases',
  products: '/products',
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
export type PageRouteKey = keyof typeof PAGE_ROUTES
export type BlogRouteKey = keyof typeof BLOG_ROUTES

export const SITE_URL = 'https://buildertudo.com'
