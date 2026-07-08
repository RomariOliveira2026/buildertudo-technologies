import type { ProductStatus } from './product'

export type ProductRoadmapStatus = 'done' | 'in-progress' | 'planned'

export type ProductRoadmapItem = {
  phase: string
  title: string
  description?: string
  status: ProductRoadmapStatus
}

export type ProductScreenshotRef = {
  id: string
  label: string
}

export type ProductArchitectureLayer = {
  id: 'framework' | 'engine' | 'runtime' | 'ai-os' | 'golden-screens' | 'business-os'
  name: string
  description: string
}

export type ProductCta = {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type ProductPageContent = {
  slug: string
  name: string
  logo: string
  category: string
  status: ProductStatus
  version: string
  healthScore: number
  tagline: string
  description: string
  problem: string
  solution: string
  architectureSummary: string
  architectureLayers: ProductArchitectureLayer[]
  stack: string[]
  features: string[]
  benefits: string[]
  roadmap: ProductRoadmapItem[]
  aiFeatures: string[]
  screenshots: ProductScreenshotRef[]
  cta: {
    primary: ProductCta
    secondary?: ProductCta
  }
  featured?: boolean
}
