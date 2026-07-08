import type { ProductRouteKey } from '../constants/routes'

export type ProductStatus = 'live' | 'beta' | 'building'

export type Product = {
  logo: string
  name: string
  slug: string
  description: string
  objective: string
  category: string
  technologies: string[]
  status: ProductStatus
  healthScore: number
  roadmap: string[]
  architecture: string
  goldenScreens: string[]
  aiFeatures: string[]
  learnings: string[]
  routeKey?: ProductRouteKey
  href?: string
  featured?: boolean
}

export type ProductCardVariant = 'ecosystem' | 'featured'

export function getProductStatusLabel(status: ProductStatus) {
  if (status === 'live') return 'Live'
  if (status === 'beta') return 'Beta'
  return 'Building'
}
