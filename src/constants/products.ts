import { PRODUCT_CATALOG } from '../content/products'
import type { Product } from '../types/product'
import type { ProductRouteKey } from './routes'

const SLUG_TO_ROUTE: Record<string, ProductRouteKey> = {
  contentfy: 'contentfy',
  fui: 'fui',
  jurismind: 'jurismind',
  blindcare: 'blindcare',
  professoria: 'professoria',
  voxcraft: 'voxcraft',
  prevenpro: 'prevenpro',
  fuelmaster: 'fuelmaster',
  diagramafy: 'diagramafy',
  respondfy: 'respondfy',
  ispmind: 'ispmind',
  'proodonto-smart': 'proodonto',
}

function toProduct(entry: (typeof PRODUCT_CATALOG)[number]): Product {
  const goldenLayer = entry.architectureLayers.find((l) => l.id === 'golden-screens')
  const goldenScreens = goldenLayer
    ? goldenLayer.description.split(' · ').filter(Boolean)
    : []

  return {
    logo: entry.logo,
    name: entry.name,
    slug: entry.slug,
    description: entry.description,
    objective: entry.solution,
    category: entry.category,
    technologies: entry.stack.filter((t) => !['Framework', 'AI-OS', 'Engine'].includes(t)),
    status: entry.status,
    healthScore: entry.healthScore,
    roadmap: entry.roadmap.map((r) => r.title),
    architecture: entry.architectureSummary,
    goldenScreens,
    aiFeatures: entry.aiFeatures,
    learnings: entry.benefits,
    routeKey: SLUG_TO_ROUTE[entry.slug],
    featured: entry.featured,
    href: `/products/${entry.slug}`,
  }
}

/** Official product list — sourced from src/content/products.ts */
export const products: Product[] = PRODUCT_CATALOG.map(toProduct)

export const featuredProducts = products.filter((p) => p.featured)
export const footerProductNames = products.map((p) => p.name)
export const footerProducts = products

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
