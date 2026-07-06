export const ECOSYSTEM_LAYERS = [
  {
    id: 'framework',
    name: 'Framework',
    tagline: 'Architectural foundation',
    description:
      'Core standards, patterns and engineering foundations that ensure every BuilderTudo product is scalable, secure and maintainable from day one.',
    capabilities: ['Design system rules', 'API conventions', 'Security baseline', 'Multi-tenant patterns'],
    accent: '#4F7CFF',
  },
  {
    id: 'business-os',
    name: 'Business OS',
    tagline: 'Operating layer for companies',
    description:
      'The digital operating system that connects teams, workflows, data and decisions — turning fragmented operations into a unified business platform.',
    capabilities: ['Workflow orchestration', 'Role-based access', 'Operational dashboards', 'Integrations hub'],
    accent: '#E4AE2B',
  },
  {
    id: 'ai-os',
    name: 'AI-OS',
    tagline: 'Intelligence orchestration',
    description:
      'An AI-native layer that embeds agents, models and automations across products — with governance, observability and human oversight built in.',
    capabilities: ['LLM agents', 'RAG pipelines', 'Prompt governance', 'AI safety controls'],
    accent: '#7C5CFF',
  },
  {
    id: 'engine',
    name: 'Engine',
    tagline: 'Execution at scale',
    description:
      'High-performance execution engine for automations, background jobs, event processing and real-time business logic across the ecosystem.',
    capabilities: ['Event-driven architecture', 'Queue processing', 'Webhooks', 'Scheduled jobs'],
    accent: '#2DD4BF',
  },
  {
    id: 'component-library',
    name: 'Component Library',
    tagline: 'Reusable building blocks',
    description:
      'Production-ready UI and system components — forms, tables, auth flows, billing modules — accelerating delivery without sacrificing quality.',
    capabilities: ['React components', 'Auth modules', 'Data tables', 'Payment flows'],
    accent: '#F59E0B',
  },
  {
    id: 'golden-screens',
    name: 'Golden Screens',
    tagline: 'Premium UI templates',
    description:
      'Curated, pixel-perfect screen templates and interface patterns that define the BuilderTudo visual standard across every product surface.',
    capabilities: ['Dashboard templates', 'Onboarding flows', 'Mobile patterns', 'Dark/light modes'],
    accent: '#EC4899',
  },
  {
    id: 'showcase',
    name: 'Showcase',
    tagline: 'Proof of capability',
    description:
      'Live demos, interactive prototypes and reference implementations that demonstrate technical depth to prospects, partners and enterprise buyers.',
    capabilities: ['Live demos', 'Case studies', 'Technical specs', 'ROI calculators'],
    accent: '#38BDF8',
  },
] as const

export type EcosystemLayerId = (typeof ECOSYSTEM_LAYERS)[number]['id']
