export type FrameworkModule = {
  id: string
  name: string
  description: string
  benefits: string[]
  architecture: string
  dependencies: string[]
  roadmap: string[]
}

export const FRAMEWORK_MODULES: FrameworkModule[] = [
  {
    id: 'framework',
    name: 'Framework',
    description: 'Core proprietary engineering architecture that unifies design, development, AI and operations.',
    benefits: ['Single source of truth', 'Consistent quality', 'Faster delivery', 'Enterprise governance'],
    architecture: 'Monorepo packages with shared tokens, runtime contracts and deployment pipelines.',
    dependencies: [],
    roadmap: ['v3 architecture docs', 'CLI scaffolding', 'Multi-repo sync'],
  },
  {
    id: 'design-system',
    name: 'Design System',
    description: 'Token-based design language — typography, spacing, color and motion standards.',
    benefits: ['Brand consistency', 'WCAG AA compliance', 'Dark/light themes', 'Rapid prototyping'],
    architecture: 'CSS custom properties + React token provider with Figma sync.',
    dependencies: ['framework'],
    roadmap: ['Figma plugin', 'Motion tokens v2', 'Accessibility audit automation'],
  },
  {
    id: 'golden-screens',
    name: 'Golden Screens',
    description: 'Reference UI implementations validated before full product development.',
    benefits: ['Reduce rework', 'Stakeholder alignment', 'Pattern library', 'Quality baseline'],
    architecture: 'Isolated screen packages with Storybook documentation and visual regression.',
    dependencies: ['design-system', 'component-library'],
    roadmap: ['15 → 30 screens', 'Auto-screenshot CI', 'Client preview portal'],
  },
  {
    id: 'component-library',
    name: 'Component Library',
    description: '80+ production-ready, accessible React components used across all products.',
    benefits: ['Reusable UI', 'Tested patterns', 'Type-safe APIs', 'Performance optimized'],
    architecture: 'Tree-shakeable packages with unit tests, a11y tests and bundle analysis.',
    dependencies: ['design-system'],
    roadmap: ['90+ components', 'React 19 patterns', 'Native component bridge'],
  },
  {
    id: 'runtime',
    name: 'Runtime',
    description: 'Execution layer for apps, services, edge functions and background jobs.',
    benefits: ['Unified deploy', 'Environment parity', 'Observability', 'Auto-scaling'],
    architecture: 'Vercel edge + Node services with shared middleware, auth and logging.',
    dependencies: ['framework'],
    roadmap: ['Edge runtime v2', 'Multi-cloud support', 'Service mesh'],
  },
  {
    id: 'ai-os',
    name: 'AI Operating System',
    description: 'Governed intelligence infrastructure — copilots, guardrails and knowledge core.',
    benefits: ['Safe AI deployment', 'Institutional memory', 'Decision trees', 'Audit trails'],
    architecture: 'LLM routing layer with RAG, policy engine and observability dashboard.',
    dependencies: ['runtime', 'framework'],
    roadmap: ['Multi-model routing', 'Enterprise SSO for AI', 'Custom fine-tuning pipeline'],
  },
  {
    id: 'engine',
    name: 'Engine',
    description: 'Workflow automation, integrations and orchestration runtime.',
    benefits: ['Eliminate manual work', 'API integrations', 'Event-driven flows', 'Monitoring'],
    architecture: 'Webhook hub + workflow DAG executor with retry, dead-letter and alerting.',
    dependencies: ['runtime', 'ai-os'],
    roadmap: ['Visual workflow builder', '500+ connectors', 'Real-time event streaming'],
  },
  {
    id: 'business-os',
    name: 'Business OS',
    description: 'Internal operating system — the platform BuilderTudo uses daily to run operations.',
    benefits: ['Operational visibility', 'CRM + Analytics', 'Deploy tracking', 'AI center'],
    architecture: 'Modular dashboard with real-time metrics fed by Framework Health API.',
    dependencies: ['engine', 'ai-os', 'runtime'],
    roadmap: ['Public /live API', 'Client portal mode', 'Multi-tenant Business OS'],
  },
  {
    id: 'products',
    name: 'Products',
    description: '12 official market-facing SaaS products built entirely on the BuilderTudo stack.',
    benefits: ['Proven patterns', 'Vertical expertise', 'Live references', 'Continuous evolution'],
    architecture: 'Each product inherits Framework, Golden Screens, AI-OS and Engine by default.',
    dependencies: ['business-os', 'framework'],
    roadmap: ['20+ products by 2027', 'Marketplace launch', 'White-label platform'],
  },
]
