import type { StackLayer, FrameworkNode, BusinessOSModule, ShowcaseScreen, AICapability, LiveWidget } from '../types/platform'

export const HERO_STACK_LAYERS: StackLayer[] = [
  {
    id: 'framework',
    name: 'Framework',
    icon: '◆',
    description: 'Proprietary engineering foundation — design system, components and runtime.',
    accent: '#4F7CFF',
    href: '/framework',
  },
  {
    id: 'business-os',
    name: 'Business OS',
    icon: '⬡',
    description: 'The operating system we use daily — CRM, analytics, deploys and AI center.',
    accent: '#E4AE2B',
    href: '#business-os',
  },
  {
    id: 'ai-os',
    name: 'AI-OS',
    icon: '◎',
    description: 'Governed intelligence layer — copilots, guardrails and knowledge core.',
    accent: '#7C5CFF',
    href: '#ai',
  },
  {
    id: 'engine',
    name: 'Engine',
    icon: '⚙',
    description: 'Automation runtime — workflows, integrations and orchestration.',
    accent: '#2DD4BF',
    href: '#framework',
  },
  {
    id: 'products',
    name: 'Products',
    icon: '▣',
    description: '12 official SaaS products built on the platform — live and scaling.',
    accent: '#E4AE2B',
    href: '#products',
  },
]

export const FRAMEWORK_STACK: FrameworkNode[] = [
  { id: 'framework', name: 'Framework', description: 'Core engineering architecture' },
  { id: 'design-system', name: 'Design System', description: 'Tokens, typography and patterns' },
  { id: 'component-library', name: 'Component Library', description: '80+ production-ready components' },
  { id: 'golden-screens', name: 'Golden Screens', description: 'Reference UI implementations' },
  { id: 'runtime', name: 'Runtime', description: 'Execution layer for apps and services' },
  { id: 'ai-os', name: 'AI Operating System', description: 'Governed intelligence infrastructure' },
  { id: 'engine', name: 'Engine', description: 'Workflow and integration automation' },
  { id: 'business-os', name: 'Business OS', description: 'Internal operating system' },
  { id: 'products', name: 'Products', description: 'Market-facing SaaS portfolio' },
]

export const BUSINESS_OS_MODULES: BusinessOSModule[] = [
  { id: 'command-center', name: 'Command Center', description: 'Unified dashboard for operations and decisions.', icon: '⌘' },
  { id: 'ceo-copilot', name: 'CEO Copilot', description: 'AI assistant for strategic insights and priorities.', icon: '◈' },
  { id: 'crm', name: 'CRM', description: 'Pipeline, clients and relationship management.', icon: '◉' },
  { id: 'analytics', name: 'Analytics', description: 'Metrics, KPIs and business intelligence.', icon: '▤' },
  { id: 'products-hub', name: 'Products Hub', description: 'Portfolio overview, health and roadmap.', icon: '▣' },
  { id: 'framework-health', name: 'Framework Health', description: 'Real-time quality and consistency scores.', icon: '◆' },
  { id: 'ai-center', name: 'AI Center', description: 'Copilots, models and governance controls.', icon: '◎' },
  { id: 'studio', name: 'Studio', description: 'Design and prototyping workspace.', icon: '✦' },
  { id: 'tasks', name: 'Tasks', description: 'Sprint planning and delivery tracking.', icon: '☑' },
  { id: 'deploys', name: 'Deploys', description: 'Release pipeline and environment status.', icon: '↑' },
  { id: 'runtime', name: 'Runtime', description: 'Live services and infrastructure monitor.', icon: '⚙' },
  { id: 'settings', name: 'Settings', description: 'Platform configuration and access control.', icon: '⚙' },
]

export const SHOWCASE_SCREENS: ShowcaseScreen[] = [
  { id: 'command-center', name: 'Command Center', category: 'business-os', description: 'Operational command dashboard' },
  { id: 'products-hub', name: 'Products Hub', category: 'business-os', description: 'Product portfolio management' },
  { id: 'crm', name: 'CRM', category: 'business-os', description: 'Client relationship pipeline' },
  { id: 'studio', name: 'Studio', category: 'business-os', description: 'Design and prototyping' },
  { id: 'analytics', name: 'Analytics', category: 'business-os', description: 'Business intelligence' },
  { id: 'ai-center', name: 'AI Center', category: 'business-os', description: 'AI governance hub' },
  { id: 'framework', name: 'Framework', category: 'framework', description: 'Engineering architecture' },
  { id: 'products', name: 'Products', category: 'product', description: 'SaaS product previews' },
]

export const AI_CAPABILITIES: AICapability[] = [
  { id: 'ai-os', name: 'AI Operating System', description: 'Central intelligence layer with governance, routing and observability.' },
  { id: 'ceo-copilot', name: 'CEO Copilot', description: 'Strategic assistant for founders and leadership teams.' },
  { id: 'specialized-copilots', name: 'Specialized Copilots', description: 'Domain-specific AI agents for product, legal, content and ops.' },
  { id: 'runtime', name: 'Runtime', description: 'Execution environment for AI workflows and automations.' },
  { id: 'guardrails', name: 'Guardrails', description: 'Policy enforcement, safety checks and compliance boundaries.' },
  { id: 'knowledge-core', name: 'Knowledge Core', description: 'Centralized context, embeddings and institutional memory.' },
  { id: 'decision-tree', name: 'Decision Tree', description: 'Structured logic for AI-assisted business decisions.' },
]

export const LIVE_WIDGETS: LiveWidget[] = [
  { id: 'framework-health', name: 'Framework Health', description: 'Real-time quality score — 94%', status: 'ready' },
  { id: 'deploys', name: 'Deploys', description: 'Latest production releases', status: 'ready' },
  { id: 'business-os', name: 'Business OS', description: 'System health overview', status: 'ready' },
  { id: 'ai-center', name: 'AI Center', description: 'Copilot and model status', status: 'ready' },
  { id: 'engine', name: 'Engine', description: 'Automation runtime status', status: 'ready' },
  { id: 'golden-screens', name: 'Golden Screens', description: 'UI reference coverage — 15 screens', status: 'ready' },
  { id: 'releases', name: 'Releases', description: 'Version changelog feed', status: 'planned' },
  { id: 'roadmap', name: 'Roadmap', description: 'Public product roadmap', status: 'planned' },
  { id: 'products', name: 'Products', description: 'Portfolio status — 12 official products', status: 'ready' },
  { id: 'runtime', name: 'Runtime', description: 'Live services monitor', status: 'ready' },
  { id: 'uptime', name: 'Uptime', description: 'Platform availability — 99.9%', status: 'ready' },
  { id: 'changelog', name: 'Changelog', description: 'Platform update log', status: 'planned' },
]

export const PLATFORM_LAYERS = [
  {
    id: 'framework',
    tag: 'Foundation',
    name: 'Framework',
    description: 'Proprietary engineering foundation — design system, component library and runtime standards behind every product.',
  },
  {
    id: 'ai-os',
    tag: 'Intelligence',
    name: 'AI-OS',
    description: 'Governed AI layer — copilots, agents, guardrails and a shared knowledge core. Governed intelligence, not bolt-on ChatGPT.',
  },
  {
    id: 'engine',
    tag: 'Automation',
    name: 'Engine',
    description: 'High-performance execution engine for workflows, integrations, event processing and background jobs at scale.',
  },
  {
    id: 'runtime',
    tag: 'Execution',
    name: 'Runtime',
    description: 'The execution layer that runs apps and services — observability, environments and reliability built in.',
  },
  {
    id: 'business-os',
    tag: 'Operations',
    name: 'Business OS',
    description: 'The operating system we run the company on — CRM, analytics, deploys, tasks and AI center in one platform.',
  },
  {
    id: 'golden-screens',
    tag: 'Product',
    name: 'Golden Screens',
    description: 'Reference UI implementations validated before full build — cutting enterprise rework and aligning stakeholders early.',
  },
] as const

export const METHOD_PILLARS = [
  { id: 'product-method', name: 'Product Method', description: 'Structured discovery-to-delivery methodology.' },
  { id: 'golden-screens', name: 'Golden Screens', description: 'Reference implementations before full build.' },
  { id: 'engine', name: 'Engine', description: 'Automation-first execution layer.' },
  { id: 'framework', name: 'Framework', description: 'Consistent engineering foundation.' },
  { id: 'business-os', name: 'Business OS', description: 'Operational backbone for every project.' },
  { id: 'governance', name: 'Governance', description: 'Quality gates, reviews and compliance.' },
  { id: 'ai-os', name: 'AI Operating System', description: 'Governed intelligence across the stack.' },
] as const
