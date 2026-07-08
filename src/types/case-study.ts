import type { ProductScreenshotRef } from './product-content'
import type { ProductStatus } from './product'

export type CaseStudyResultCategory =
  | 'timeSaved'
  | 'automation'
  | 'scalability'
  | 'performance'
  | 'experience'
  | 'governance'
  | 'roi'

export type CaseStudyResultItem = {
  category: CaseStudyResultCategory
  value: string
  description: string
  expected?: boolean
}

export type CaseStudyRoadmapLane = 'shipped' | 'in-progress' | 'next' | 'future'

export type CaseStudyRoadmapItem = {
  phase: string
  title: string
  description: string
  lane: CaseStudyRoadmapLane
}

export type CaseStudyTechStack = {
  frontend: string[]
  backend: string[]
  ai: string[]
  database: string[]
  infrastructure: string[]
  deploy: string[]
  framework: string[]
  integrations: string[]
}

export type CaseStudyStackLayer = {
  id: string
  name: string
  description: string
  active: boolean
}

export type CaseStudyReusableEngineering = {
  framework: string
  goldenScreens: string[]
  componentLibrary: string
  runtime: string
  aiOs: string
  engine: string
  sharedDomain: string
  persistence: string
}

export type CaseStudyContent = {
  slug: string
  productSlug: string
  name: string
  logo: string
  industry: string
  category: string
  status: ProductStatus
  healthScore: number
  version: string
  headline: string
  summary: string
  problem: {
    title: string
    narrative: string
    whoSuffered: string
    howResolvedBefore: string
    whyInsufficient: string
    painPoints: string[]
  }
  solution: {
    title: string
    narrative: string
    mainFlow: string[]
    differentiators: string[]
    valueDelivered: string[]
  }
  architecture: {
    summary: string
    stack: CaseStudyStackLayer[]
    modules: string[]
    decisions: string[]
  }
  technologies: CaseStudyTechStack
  aiCapabilities: string[]
  results: CaseStudyResultItem[]
  learnings: string[]
  tradeoffs: string[]
  roadmap: CaseStudyRoadmapItem[]
  reusableEngineering: CaseStudyReusableEngineering
  screenshots: ProductScreenshotRef[]
  publishedAt: string
}

export const RESULT_CATEGORY_LABELS: Record<CaseStudyResultCategory, string> = {
  timeSaved: 'Time saved',
  automation: 'Automation',
  scalability: 'Scalability',
  performance: 'Performance',
  experience: 'Experience',
  governance: 'Governance',
  roi: 'Expected ROI',
}

export const ROADMAP_LANE_LABELS: Record<CaseStudyRoadmapLane, string> = {
  shipped: 'Shipped',
  'in-progress': 'In Progress',
  next: 'Next',
  future: 'Future Vision',
}
