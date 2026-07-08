import type { ScreenId } from '../constants/screenshots'

export type FrameworkLayer = {
  id: string
  name: string
  tag: string
  description: string
  responsibilities: string[]
  outputs: string[]
}

export type FrameworkPackage = {
  name: string
  scope: string
  description: string
  status: 'stable' | 'beta' | 'experimental'
}

export type FrameworkPipelineStage = {
  step: string
  title: string
  description: string
  artifacts: string[]
}

export type FrameworkPerformanceMetric = {
  id: string
  category: 'health' | 'tests' | 'packages' | 'deploys'
  label: string
  value: string
  detail: string
  screenId?: ScreenId
}

export const FRAMEWORK_DOC_NAV = [
  { id: 'metrics', label: 'Engineering Metrics' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'packages', label: 'Packages' },
  { id: 'engine', label: 'Engine' },
  { id: 'runtime', label: 'Runtime' },
  { id: 'ai-os', label: 'AI Operating System' },
  { id: 'golden-screens', label: 'Golden Screens' },
  { id: 'design-system', label: 'Design System' },
  { id: 'component-library', label: 'Component Library' },
  { id: 'pipeline', label: 'Development Pipeline' },
  { id: 'products', label: 'Products' },
  { id: 'performance', label: 'Performance' },
] as const

export const FRAMEWORK_ARCHITECTURE_LAYERS: FrameworkLayer[] = [
  {
    id: 'framework',
    name: 'Framework',
    tag: 'Foundation',
    description:
      'Proprietary engineering core — monorepo standards, shared contracts, design tokens, CLI tooling and governance that every product inherits by default.',
    responsibilities: [
      'Monorepo package boundaries and dependency graph',
      'Engineering standards, linting and type contracts',
      'Scaffolding CLI and project templates',
      'Cross-product observability hooks',
    ],
    outputs: ['@buildertudo/framework-core', 'Engineering playbooks', 'Health scoring model'],
  },
  {
    id: 'engine',
    name: 'Engine',
    tag: 'Automation',
    description:
      'Workflow orchestration layer — event-driven automations, webhook hub, integration connectors and retry policies that eliminate manual operations.',
    responsibilities: [
      'DAG workflow executor with dead-letter queues',
      'Webhook ingestion and outbound integrations',
      'Scheduled jobs and background processing',
      'Automation monitoring and alerting',
    ],
    outputs: ['@buildertudo/engine', 'Connector registry', 'Workflow templates'],
  },
  {
    id: 'runtime',
    name: 'Runtime',
    tag: 'Execution',
    description:
      'Unified execution environment for web apps, APIs, edge functions and services — environment parity from local to production.',
    responsibilities: [
      'Edge and Node service deployment',
      'Shared auth middleware and request context',
      'Structured logging and tracing',
      'Auto-scaling and cold-start optimization',
    ],
    outputs: ['@buildertudo/runtime', 'Deploy manifests', 'Service mesh contracts'],
  },
  {
    id: 'persistence',
    name: 'Persistence',
    tag: 'Data',
    description:
      'Data layer abstractions — tenant isolation, migrations, RLS policies and repository patterns shared across all BuilderTudo products.',
    responsibilities: [
      'Supabase / Firebase adapter layer',
      'Multi-tenant schema patterns and RLS',
      'Migration tooling and seed pipelines',
      'Audit logs and data governance',
    ],
    outputs: ['@buildertudo/persistence', 'Tenant isolation kit', 'Migration CLI'],
  },
  {
    id: 'ai-os',
    name: 'AI Operating System',
    tag: 'Intelligence',
    description:
      'Governed intelligence infrastructure — LLM routing, RAG pipelines, copilots, guardrails and institutional memory. Not bolt-on ChatGPT.',
    responsibilities: [
      'Multi-model routing and cost controls',
      'Policy engine and safety guardrails',
      'RAG knowledge core and embeddings',
      'Copilot registry and audit trails',
    ],
    outputs: ['@buildertudo/ai-os', 'Copilot SDK', 'Governance dashboard'],
  },
  {
    id: 'business-os',
    name: 'Business OS',
    tag: 'Operations',
    description:
      'The operating system BuilderTudo runs on daily — CRM, analytics, deploys, tasks, AI center and framework health feed back into product engineering.',
    responsibilities: [
      'Operational command center and KPIs',
      'Product portfolio and health tracking',
      'Deploy timeline and release management',
      'Framework evolution from real usage',
    ],
    outputs: ['Business OS platform', 'Health API', 'Live metrics feed'],
  },
  {
    id: 'products',
    name: 'Products',
    tag: 'Portfolio',
    description:
      '12 official market-facing SaaS products — each inherits the full stack above. Proof that the Framework ships production-grade platforms, not demos.',
    responsibilities: [
      'Vertical domain implementations',
      'Golden Screen → production promotion',
      'Per-product AI copilots and workflows',
      'Continuous health and roadmap evolution',
    ],
    outputs: ['12 official SaaS products', 'Engineering case studies', 'Live references'],
  },
]

export const FRAMEWORK_PACKAGES: FrameworkPackage[] = [
  { name: '@buildertudo/framework-core', scope: 'foundation', description: 'Core types, utilities, config and engineering contracts.', status: 'stable' },
  { name: '@buildertudo/design-system', scope: 'ui', description: 'Design tokens, typography, spacing, color and motion standards.', status: 'stable' },
  { name: '@buildertudo/components', scope: 'ui', description: '80+ accessible, tree-shakeable React components.', status: 'stable' },
  { name: '@buildertudo/golden-screens', scope: 'ui', description: 'Reference screen packages with visual regression tests.', status: 'stable' },
  { name: '@buildertudo/runtime', scope: 'infra', description: 'Edge + Node execution layer with shared middleware.', status: 'stable' },
  { name: '@buildertudo/persistence', scope: 'data', description: 'Tenant-aware data access, migrations and RLS patterns.', status: 'stable' },
  { name: '@buildertudo/ai-os', scope: 'ai', description: 'LLM routing, RAG, copilots and governance SDK.', status: 'stable' },
  { name: '@buildertudo/engine', scope: 'automation', description: 'Workflow DAG executor, webhooks and connectors.', status: 'stable' },
  { name: '@buildertudo/auth', scope: 'security', description: 'Unified authentication, RBAC and session management.', status: 'stable' },
  { name: '@buildertudo/observability', scope: 'infra', description: 'Logging, tracing, metrics and health probes.', status: 'stable' },
  { name: '@buildertudo/cli', scope: 'tooling', description: 'Project scaffolding, package sync and deploy helpers.', status: 'beta' },
  { name: '@buildertudo/testing', scope: 'quality', description: 'Shared test utilities, a11y checks and visual regression.', status: 'stable' },
]

export const FRAMEWORK_ENGINE_DETAILS = {
  title: 'Engine',
  summary:
    'Event-driven automation runtime that connects products, AI-OS and external systems. Every workflow is observable, retryable and auditable.',
  capabilities: [
    { name: 'Workflow DAG', description: 'Directed acyclic graph executor with parallel branches, conditions and human-in-the-loop steps.' },
    { name: 'Webhook Hub', description: 'Inbound and outbound webhooks with signature verification, rate limiting and replay.' },
    { name: 'Connector Registry', description: 'Pre-built integrations for CRM, email, payments, storage and messaging providers.' },
    { name: 'Dead Letter Queue', description: 'Failed jobs routed to DLQ with alerting — no silent automation failures.' },
  ],
  patterns: ['Event sourcing for audit trails', 'Idempotent handlers', 'Circuit breakers on external APIs', 'Scheduled cron + real-time triggers'],
  screenId: 'tasks' as ScreenId,
}

export const FRAMEWORK_RUNTIME_DETAILS = {
  title: 'Runtime',
  summary:
    'Single execution model from local dev to Vercel Edge — shared middleware, auth context and observability across every service.',
  capabilities: [
    { name: 'Edge Functions', description: 'Low-latency handlers at the edge with cold-start optimization.' },
    { name: 'Node Services', description: 'Long-running APIs, background workers and WebSocket gateways.' },
    { name: 'Environment Parity', description: 'Identical config contracts across dev, staging and production.' },
    { name: 'Service Health', description: 'Live probes, uptime tracking and runtime dashboards in Business OS.' },
  ],
  patterns: ['Request context propagation', 'Structured JSON logging', 'Graceful shutdown', 'Zero-downtime deploys'],
  screenId: 'command-center' as ScreenId,
}

export const FRAMEWORK_AI_OS_DETAILS = {
  title: 'AI Operating System',
  summary:
    'Governed intelligence layer — not a chat widget. Copilots, guardrails, knowledge core and multi-model routing built into the platform fabric.',
  capabilities: [
    { name: 'Multi-Model Routing', description: 'Route requests to optimal models by cost, latency and capability.' },
    { name: 'Guardrails', description: 'Policy engine enforcing safety, compliance and domain boundaries before output.' },
    { name: 'Knowledge Core', description: 'RAG pipeline with embeddings, institutional memory and context windows.' },
    { name: 'Copilot Registry', description: 'Domain-specific agents — CEO, legal, content, ops — with audit trails.' },
  ],
  patterns: ['Human-in-the-loop approval gates', 'Prompt versioning', 'Token budget controls', 'Decision trees for business logic'],
  screenId: 'ai-center' as ScreenId,
}

export const FRAMEWORK_DESIGN_SYSTEM = {
  title: 'Design System',
  summary:
    'Token-based design language ensuring brand consistency, WCAG AA accessibility and rapid prototyping across all 12 products.',
  tokens: [
    { name: 'Color', items: ['Brand gold #E4AE2B', 'Surface layers', 'Semantic status colors', 'Dark / light themes'] },
    { name: 'Typography', items: ['Inter variable', 'Scale 12–72px', 'Weight 400–800', 'Line-height ratios'] },
    { name: 'Spacing', items: ['4px base grid', 'Container widths', 'Section rhythm', 'Component padding scale'] },
    { name: 'Motion', items: ['Framer Motion presets', 'Stagger reveals', 'Reduced-motion support', 'Transition tokens'] },
  ],
  principles: ['Accessibility first (WCAG AA)', 'Dark mode by default', 'Composable tokens', 'Figma ↔ code sync'],
  screenId: 'studio' as ScreenId,
}

export const FRAMEWORK_COMPONENT_LIBRARY = {
  title: 'Component Library',
  summary:
    '80+ production-ready React components — tree-shakeable, type-safe, tested and used across every official BuilderTudo product.',
  categories: [
    { name: 'Layout', count: 12, examples: ['PageLayout', 'Section', 'Grid', 'Sidebar'] },
    { name: 'Navigation', count: 8, examples: ['Header', 'Breadcrumbs', 'Tabs', 'Pagination'] },
    { name: 'Data Display', count: 18, examples: ['Table', 'Card', 'Badge', 'Metric'] },
    { name: 'Forms', count: 14, examples: ['Input', 'Select', 'DatePicker', 'FileUpload'] },
    { name: 'Feedback', count: 10, examples: ['Toast', 'Modal', 'Skeleton', 'Alert'] },
    { name: 'Charts', count: 8, examples: ['LineChart', 'BarChart', 'Donut', 'Sparkline'] },
    { name: 'AI', count: 10, examples: ['CopilotPanel', 'ChatThread', 'PromptInput', 'GuardrailBadge'] },
  ],
  standards: ['Unit + a11y tests per component', 'Bundle size budget', 'Storybook documentation', 'React 19 patterns'],
  screenId: 'studio' as ScreenId,
}

export const FRAMEWORK_GOLDEN_SCREENS = {
  title: 'Golden Screens',
  summary:
    'Reference UI implementations validated with stakeholders before full product development — reducing rework and establishing quality baselines.',
  workflow: [
    'Domain discovery and screen inventory',
    'Golden Screen build in Studio with Design System tokens',
    'Stakeholder review and sign-off',
    'Visual regression baseline in CI',
    'Promotion to production product codebase',
  ],
  screenIds: ['studio', 'analytics', 'command-center'] as ScreenId[],
}

export const FRAMEWORK_PIPELINE: FrameworkPipelineStage[] = [
  {
    step: '01',
    title: 'Scaffold',
    description: 'CLI generates product skeleton from Framework templates — packages, auth, persistence and deploy config pre-wired.',
    artifacts: ['Monorepo structure', 'CI pipeline', 'Environment config'],
  },
  {
    step: '02',
    title: 'Golden Screens',
    description: 'Reference screens built and validated before feature development — stakeholder alignment and UX baseline.',
    artifacts: ['Screen packages', 'Visual regression baselines', 'Storybook docs'],
  },
  {
    step: '03',
    title: 'Domain Layer',
    description: 'Business logic, data models and API contracts implemented on shared persistence patterns.',
    artifacts: ['Domain models', 'API routes', 'Migration scripts'],
  },
  {
    step: '04',
    title: 'AI-OS Integration',
    description: 'Copilots, guardrails and knowledge core configured for the product domain.',
    artifacts: ['Copilot configs', 'RAG indexes', 'Policy rules'],
  },
  {
    step: '05',
    title: 'Engine Workflows',
    description: 'Automations, integrations and event flows wired through the Engine runtime.',
    artifacts: ['Workflow DAGs', 'Webhook endpoints', 'Connector configs'],
  },
  {
    step: '06',
    title: 'Quality Gates',
    description: 'Framework Health checks — tests, bundle analysis, a11y audit and type coverage before deploy.',
    artifacts: ['Health score', 'Test report', 'Bundle report'],
  },
  {
    step: '07',
    title: 'Deploy',
    description: 'Production release via Runtime with monitoring, documentation and Business OS tracking.',
    artifacts: ['Deploy record', 'Changelog', 'Health monitoring'],
  },
  {
    step: '08',
    title: 'Evolve',
    description: 'Continuous improvement loop — metrics from Business OS feed back into Framework evolution.',
    artifacts: ['Roadmap updates', 'Case study', 'Framework patches'],
  },
]

export const FRAMEWORK_PERFORMANCE_CATEGORIES = [
  { id: 'health', label: 'Health', description: 'Framework Health score from Business OS — real-time quality and consistency metrics.' },
  { id: 'tests', label: 'Tests', description: 'Unit, integration, a11y and visual regression coverage across packages.' },
  { id: 'packages', label: 'Packages', description: 'Monorepo package count, dependency graph health and bundle budgets.' },
  { id: 'deploys', label: 'Deploys', description: 'Production release pipeline, deploy frequency and rollback capability.' },
] as const
