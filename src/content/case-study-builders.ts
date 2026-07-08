import type { ProductPageContent, ProductArchitectureLayer } from '../types/product-content'
import type {
  CaseStudyContent,
  CaseStudyReusableEngineering,
  CaseStudyResultItem,
  CaseStudyRoadmapItem,
  CaseStudyStackLayer,
  CaseStudyTechStack,
} from '../types/case-study'

type EvolutionInput = {
  phase: string
  title: string
  status: 'done' | 'in-progress' | 'planned'
  description?: string
}

const FRONTEND = new Set(['React', 'Next.js', 'React Native', 'TypeScript'])
const BACKEND = new Set(['Node.js', 'APIs', 'WebSockets'])
const AI = new Set(['OpenAI', 'AI-OS'])
const DATABASE = new Set(['Supabase', 'Firebase'])
const INFRA = new Set(['Vercel', 'Cloudflare'])
const FRAMEWORK = new Set(['Framework', 'Engine'])

export function categorizeTechnologies(stack: string[]): CaseStudyTechStack {
  const buckets: CaseStudyTechStack = {
    frontend: [],
    backend: [],
    ai: [],
    database: [],
    infrastructure: [],
    deploy: [],
    framework: [],
    integrations: [],
  }

  for (const tech of stack) {
    if (FRONTEND.has(tech)) buckets.frontend.push(tech)
    else if (BACKEND.has(tech)) buckets.backend.push(tech)
    else if (AI.has(tech)) buckets.ai.push(tech)
    else if (DATABASE.has(tech)) buckets.database.push(tech)
    else if (INFRA.has(tech)) buckets.infrastructure.push(tech)
    else if (FRAMEWORK.has(tech)) buckets.framework.push(tech)
    else buckets.integrations.push(tech)
  }

  if (buckets.infrastructure.includes('Vercel')) {
    buckets.deploy.push('Vercel Edge')
  }
  if (buckets.infrastructure.includes('Cloudflare')) {
    buckets.deploy.push('Cloudflare CDN')
  }
  if (buckets.deploy.length === 0 && buckets.infrastructure.length > 0) {
    buckets.deploy.push(...buckets.infrastructure)
  }

  return buckets
}

export function buildArchitectureStack(product: ProductPageContent): CaseStudyStackLayer[] {
  const layerMap = new Map(product.architectureLayers.map((l) => [l.id, l]))
  const order: Array<{ id: ProductArchitectureLayer['id']; name: string }> = [
    { id: 'framework', name: 'BuilderTudo Framework' },
    { id: 'ai-os', name: 'AI Operating System' },
    { id: 'engine', name: 'Engine' },
    { id: 'runtime', name: 'Runtime' },
    { id: 'golden-screens', name: 'Golden Screens' },
    { id: 'business-os', name: 'Business OS' },
  ]

  const stack: CaseStudyStackLayer[] = order.map(({ id, name }) => {
    const layer = layerMap.get(id)
    return {
      id,
      name,
      description: layer?.description ?? 'Not required for this product scope.',
      active: Boolean(layer),
    }
  })

  stack.push({
    id: 'product',
    name: product.name,
    description: product.architectureSummary,
    active: true,
  })

  return stack
}

export function buildReusableEngineering(product: ProductPageContent): CaseStudyReusableEngineering {
  const layers = product.architectureLayers
  const golden = layers.find((l) => l.id === 'golden-screens')
  const goldenScreens = golden ? golden.description.split(' · ').filter(Boolean) : product.features.slice(0, 3)

  return {
    framework: layers.find((l) => l.id === 'framework')?.description ?? 'BuilderTudo Design System, tokens and engineering standards.',
    goldenScreens,
    componentLibrary: '80+ production-ready components from BuilderTudo Component Library.',
    runtime: layers.find((l) => l.id === 'runtime')?.description ?? 'Shared runtime patterns for auth, data fetching and observability.',
    aiOs: layers.find((l) => l.id === 'ai-os')?.description ?? 'Governed AI layer with copilots and guardrails.',
    engine: layers.find((l) => l.id === 'engine')?.description ?? 'Workflow automation and integration orchestration.',
    sharedDomain: `${product.category} domain models and validation rules packaged for reuse across BuilderTudo products.`,
    persistence: product.stack.filter((t) => ['Supabase', 'Firebase'].includes(t)).join(' + ') || 'Framework persistence abstractions with tenant isolation.',
  }
}

export function buildRoadmapLanes(evolution: EvolutionInput[]): CaseStudyRoadmapItem[] {
  let plannedIndex = 0
  return evolution.map((item) => {
    let lane: CaseStudyRoadmapItem['lane'] = 'future'
    if (item.status === 'done') lane = 'shipped'
    else if (item.status === 'in-progress') lane = 'in-progress'
    else if (item.status === 'planned') {
      lane = plannedIndex === 0 ? 'next' : 'future'
      plannedIndex += 1
    }
    return { phase: item.phase, title: item.title, description: item.description ?? '', lane }
  })
}

export function buildStandardResults(
  product: ProductPageContent,
  metrics: Array<{ value: string; label: string }>,
): CaseStudyResultItem[] {
  const isBuilding = product.status === 'building'
  const expected = isBuilding || product.status === 'beta'

  const find = (needle: string) => metrics.find((m) => m.label.toLowerCase().includes(needle.toLowerCase()))

  return [
    {
      category: 'timeSaved',
      value: find('time')?.value ?? find('faster')?.value ?? (expected ? 'TBD' : '—'),
      description: find('time')?.label ?? find('faster')?.label ?? 'Engineering velocity vs. greenfield build',
      expected: expected && !find('time') && !find('faster'),
    },
    {
      category: 'automation',
      value: product.aiFeatures.length > 0 ? `${product.aiFeatures.length} AI flows` : 'Engine workflows',
      description: 'Automated pipelines via AI-OS and Engine',
      expected: isBuilding,
    },
    {
      category: 'scalability',
      value: product.status === 'live' ? 'Multi-tenant' : 'Architected',
      description: 'Tenant isolation and horizontal scale patterns from Framework',
      expected: product.status !== 'live',
    },
    {
      category: 'performance',
      value: find('latency')?.value ?? find('uptime')?.value ?? `${product.healthScore}%`,
      description: find('latency')?.label ?? find('uptime')?.label ?? 'Framework Health score',
      expected: !find('latency') && !find('uptime'),
    },
    {
      category: 'experience',
      value: find('engagement')?.value ?? find('onboarding')?.value ?? 'Golden Screens',
      description: find('engagement')?.label ?? find('onboarding')?.label ?? 'Reference UX validated before build',
      expected: !find('engagement') && !find('onboarding'),
    },
    {
      category: 'governance',
      value: find('compliance')?.value ?? find('review')?.value ?? 'AI-OS guardrails',
      description: find('compliance')?.label ?? find('review')?.label ?? 'Governed AI and audit-ready architecture',
      expected: !find('compliance') && !find('review'),
    },
    {
      category: 'roi',
      value: metrics[0]?.value ?? 'Platform leverage',
      description: metrics[0]?.label ?? 'ROI from shared Framework vs. custom build',
      expected: expected,
    },
  ]
}

export type CaseStudyEnrichment = {
  industry: string
  headline: string
  summary: string
  problemTitle: string
  problemNarrative: string
  whoSuffered?: string
  howResolvedBefore?: string
  whyInsufficient?: string
  painPoints: string[]
  solutionTitle: string
  solutionNarrative: string
  mainFlow?: string[]
  differentiators?: string[]
  approach: string[]
  architectureDecisions: string[]
  architectureModules?: string[]
  results: Array<{ value: string; label: string }>
  learnings: string[]
  tradeoffs?: string[]
  evolution: EvolutionInput[]
  publishedAt: string
}

export function mergeEnrichment(product: ProductPageContent, extra: CaseStudyEnrichment): CaseStudyContent {
  const roadmap = buildRoadmapLanes(extra.evolution)

  return {
    slug: product.slug,
    productSlug: product.slug,
    name: product.name,
    logo: product.logo,
    industry: extra.industry,
    category: product.category,
    status: product.status,
    healthScore: product.healthScore,
    version: product.version,
    headline: extra.headline,
    summary: extra.summary,
    problem: {
      title: extra.problemTitle,
      narrative: extra.problemNarrative,
      whoSuffered: extra.whoSuffered ?? `Operations and product teams in ${extra.industry}.`,
      howResolvedBefore: extra.howResolvedBefore ?? 'Manual workflows, spreadsheets, generic SaaS and disconnected point tools.',
      whyInsufficient: extra.whyInsufficient ?? 'Existing tools were not built for domain-specific governance, scale or AI-native workflows.',
      painPoints: extra.painPoints,
    },
    solution: {
      title: extra.solutionTitle,
      narrative: extra.solutionNarrative,
      mainFlow: extra.mainFlow ?? extra.approach,
      differentiators: extra.differentiators ?? product.aiFeatures,
      valueDelivered: product.benefits,
    },
    architecture: {
      summary: product.architectureSummary,
      stack: buildArchitectureStack(product),
      modules: extra.architectureModules ?? product.architectureLayers.map((l) => l.name),
      decisions: extra.architectureDecisions,
    },
    technologies: categorizeTechnologies(product.stack),
    aiCapabilities: product.aiFeatures,
    results: buildStandardResults(product, extra.results),
    learnings: extra.learnings,
    tradeoffs: extra.tradeoffs ?? [
      'Speed vs. full custom flexibility — Framework accelerates delivery with opinionated patterns.',
      'AI automation vs. human oversight — guardrails trade full autonomy for trust and compliance.',
    ],
    roadmap,
    reusableEngineering: buildReusableEngineering(product),
    screenshots: product.screenshots,
    publishedAt: extra.publishedAt,
  }
}

