import type { ProductPageContent, ProductArchitectureLayer, ProductRoadmapItem } from '../types/product-content'

function layers(
  framework: string,
  aiOs: string,
  goldenScreens: string[],
  opts?: { engine?: string; runtime?: string; businessOs?: string },
): ProductArchitectureLayer[] {
  const result: ProductArchitectureLayer[] = [
    { id: 'framework', name: 'Framework', description: framework },
    { id: 'ai-os', name: 'AI-OS', description: aiOs },
    {
      id: 'golden-screens',
      name: 'Golden Screens',
      description: goldenScreens.join(' · '),
    },
  ]
  if (opts?.engine) {
    result.splice(1, 0, { id: 'engine', name: 'Engine', description: opts.engine })
  }
  if (opts?.runtime) {
    result.splice(opts.engine ? 2 : 1, 0, { id: 'runtime', name: 'Runtime', description: opts.runtime })
  }
  if (opts?.businessOs) {
    result.push({ id: 'business-os', name: 'Business OS', description: opts.businessOs })
  }
  return result
}

function roadmap(items: [string, string, ProductRoadmapItem['status']][]): ProductRoadmapItem[] {
  return items.map(([phase, title, status], i) => ({
    phase,
    title,
    status,
    description: i === 0 ? undefined : undefined,
  }))
}

export const PRODUCT_CATALOG: ProductPageContent[] = [
  {
    slug: 'contentfy',
    name: 'ContentFy',
    logo: '✍️',
    category: 'Marketing Tech',
    status: 'beta',
    version: '0.9.2',
    healthScore: 88,
    tagline: 'AI-powered content creation at scale.',
    description: 'Content creation, management and multi-channel distribution with governed AI and brand consistency.',
    problem:
      'Marketing teams struggle to produce on-brand content at scale. Generic AI tools ignore brand voice, create inconsistent output and lack governance — damaging credibility across channels.',
    solution:
      'ContentFy combines a structured content pipeline with AI-OS RAG over brand knowledge. Teams generate, review and distribute content across channels while maintaining voice, SEO standards and human oversight.',
    architectureSummary: 'React SPA + AI-OS content pipeline with RAG-based brand knowledge core.',
    architectureLayers: layers(
      'React SPA with BuilderTudo Design System and shared component library.',
      'RAG-based copy generation, brand voice matching and SEO optimization with guardrails.',
      ['Content Editor', 'Campaign Dashboard', 'Distribution Hub'],
      { engine: 'Multi-channel publishing workflows and content scheduling.', runtime: 'Edge deployment on Vercel with streaming AI responses.' },
    ),
    stack: ['React', 'TypeScript', 'OpenAI', 'Vercel', 'AI-OS', 'Framework'],
    features: ['Copy generation', 'Brand voice profiles', 'Multi-channel publishing', 'SEO optimization', 'Campaign analytics'],
    benefits: ['3× faster content production', 'Consistent brand voice across channels', 'Human-in-the-loop quality control', 'SEO-ready output by default'],
    roadmap: roadmap([
      ['Q1 2026', 'Multi-channel publishing', 'in-progress'],
      ['Q2 2026', 'Brand voice profiles', 'planned'],
      ['Q3 2026', 'Analytics dashboard', 'planned'],
    ]),
    aiFeatures: ['Copy generation', 'Brand voice matching', 'SEO optimization'],
    screenshots: [{ id: 'dashboard', label: 'Campaign Dashboard' }, { id: 'editor', label: 'Content Editor' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'fui',
    name: 'Fui',
    logo: '🚀',
    category: 'Mobility',
    status: 'building',
    version: '0.6.0',
    healthScore: 72,
    tagline: 'Connected mobility and journey experiences.',
    description: 'Real-time mobility journeys with partner integrations, offline resilience and location intelligence.',
    problem:
      'Mobility products require real-time tracking, partner integrations and offline resilience — but most teams rebuild location engines, privacy controls and journey UX from scratch.',
    solution:
      'Fui delivers a React Native mobility platform with event-driven location engine, partner APIs and privacy-by-design architecture — built on Framework and Engine for rapid iteration.',
    architectureSummary: 'React Native + Node.js microservices with event-driven location engine.',
    architectureLayers: layers(
      'React Native with shared Golden Screens for journey and tracking flows.',
      'Route optimization and demand prediction with governed location data handling.',
      ['Journey Map', 'Live Tracking', 'Partner Portal'],
      { engine: 'Event-driven location pipeline and partner webhook orchestration.', runtime: 'Node.js microservices with real-time WebSocket layer.' },
    ),
    stack: ['React Native', 'Node.js', 'WebSockets', 'Engine', 'Framework'],
    features: ['Real-time tracking', 'Partner integrations', 'Offline-first journeys', 'Route optimization', 'Privacy controls'],
    benefits: ['Offline-first architecture', 'Built-in location privacy', 'Partner-ready API layer', 'Cross-platform from one codebase'],
    roadmap: roadmap([
      ['Q1 2026', 'Real-time tracking', 'in-progress'],
      ['Q2 2026', 'Partner integrations', 'planned'],
      ['Q3 2026', 'iOS & Android launch', 'planned'],
    ]),
    aiFeatures: ['Route optimization', 'Demand prediction'],
    screenshots: [{ id: 'journey', label: 'Journey Map' }, { id: 'tracking', label: 'Live Tracking' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'jurismind',
    name: 'JurisMind',
    logo: '⚖️',
    category: 'Legal Tech',
    status: 'live',
    version: '1.4.1',
    healthScore: 91,
    tagline: 'Legal intelligence for modern law teams.',
    description: 'Document intelligence, case workflows and AI-powered legal research with strict compliance guardrails.',
    problem:
      'Legal teams drown in documents. Manual research, inconsistent workflows and generic AI tools that hallucinate citations create compliance risk and kill productivity.',
    solution:
      'JurisMind provides document vault, case workflows and AI research with citation-accurate RAG, strict guardrails and audit trails — built for legal-grade compliance.',
    architectureSummary: 'Next.js + Supabase + AI-OS RAG with document embedding pipeline.',
    architectureLayers: layers(
      'Next.js App Router with BuilderTudo legal Golden Screens and multi-tenant isolation.',
      'Document analysis, legal research RAG and contract summarization with citation guardrails.',
      ['Document Vault', 'Case Workflow', 'AI Research Panel'],
      { engine: 'Document ingestion, embedding pipeline and workflow automation.', runtime: 'Supabase with row-level security and audit logging.', businessOs: 'Case pipeline synced with Business OS CRM for client tracking.' },
    ),
    stack: ['Next.js', 'Supabase', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Document vault', 'Case workflows', 'AI legal research', 'Contract summarization', 'Audit trails'],
    benefits: ['Citation-accurate AI research', 'Compliance guardrails built-in', '60% faster document review', 'Multi-jurisdiction ready architecture'],
    roadmap: roadmap([
      ['Q4 2025', 'Contract analysis v2', 'done'],
      ['Q1 2026', 'Multi-jurisdiction support', 'in-progress'],
      ['Q2 2026', 'Client portal', 'planned'],
    ]),
    aiFeatures: ['Document analysis', 'Legal research RAG', 'Contract summarization'],
    screenshots: [{ id: 'vault', label: 'Document Vault' }, { id: 'research', label: 'AI Research Panel' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'blindcare',
    name: 'BlindCare',
    logo: '🛡️',
    category: 'Healthcare',
    status: 'live',
    version: '2.1.0',
    healthScore: 94,
    tagline: 'Premium care management with AI assistance.',
    description: 'Care coordination platform for families and caregivers — safety, tracking and predictive alerts with LGPD compliance.',
    problem:
      'Families and care providers lack a unified platform for coordination, safety monitoring and predictive alerts. Fragmented tools create gaps in care and compliance failures in healthcare data.',
    solution:
      'BlindCare unifies care dashboards, family portals and alert centers with AI-OS care copilot, LGPD-compliant architecture and 99.9% uptime targets.',
    architectureSummary: 'React + Supabase multi-tenant with LGPD compliance and AI-OS care copilot.',
    architectureLayers: layers(
      'React SPA with healthcare Golden Screens and accessibility-first components.',
      'Care recommendations, risk prediction and schedule optimization with strict data guardrails.',
      ['Care Dashboard', 'Family Portal', 'Alert Center'],
      { engine: 'Alert engine, notification workflows and caregiver scheduling automation.', runtime: 'Supabase multi-tenant with LGPD-compliant data isolation.', businessOs: 'Operational metrics tracked in Business OS Analytics.' },
    ),
    stack: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Care dashboard', 'Family portal', 'Predictive alerts', 'Schedule optimization', 'LGPD compliance'],
    benefits: ['99.9% uptime architecture', 'LGPD compliance from day one', 'Predictive alerts reduce incidents', 'Family-caregiver coordination in one place'],
    roadmap: roadmap([
      ['Q4 2025', 'Predictive alerts v1', 'done'],
      ['Q1 2026', 'Caregiver mobile app', 'in-progress'],
      ['Q2 2026', 'Insurance integrations', 'planned'],
    ]),
    aiFeatures: ['Care recommendations', 'Risk prediction', 'Schedule optimization'],
    screenshots: [{ id: 'dashboard', label: 'Care Dashboard' }, { id: 'alerts', label: 'Alert Center' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'professoria',
    name: 'ProfessorIA',
    logo: '🎓',
    category: 'EdTech',
    status: 'building',
    version: '0.7.3',
    healthScore: 76,
    tagline: 'Adaptive AI tutoring at institutional scale.',
    description: 'Personalized learning with adaptive AI tutoring, progress analytics and LMS integrations for education institutions.',
    problem:
      'Institutions cannot personalize learning at scale. One-size-fits-all curricula reduce engagement, and bolt-on AI tutors lack pedagogical governance and teacher oversight.',
    solution:
      'ProfessorIA delivers adaptive tutoring with teacher oversight, progress analytics and LMS integrations — powered by AI-OS with pacing algorithms and institutional guardrails.',
    architectureSummary: 'React + Firebase + AI-OS adaptive learning engine with progress tracking.',
    architectureLayers: layers(
      'React with EdTech Golden Screens for student, teacher and admin roles.',
      'Adaptive tutoring, quiz generation and progress insights with teacher-in-the-loop controls.',
      ['Student Dashboard', 'Lesson Builder', 'Progress Analytics'],
      { engine: 'Curriculum pacing engine and LMS integration workflows.', runtime: 'Firebase with real-time progress sync and offline lesson caching.' },
    ),
    stack: ['React', 'Firebase', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Adaptive tutoring', 'Lesson builder', 'Progress analytics', 'Quiz generation', 'LMS integrations'],
    benefits: ['40% higher student engagement', 'Teacher oversight on every AI interaction', 'Institutional-scale personalization', 'LMS-ready integration layer'],
    roadmap: roadmap([
      ['Q1 2026', 'Adaptive curriculum', 'in-progress'],
      ['Q2 2026', 'Student analytics', 'planned'],
      ['Q3 2026', 'LMS integrations', 'planned'],
    ]),
    aiFeatures: ['Adaptive tutoring', 'Quiz generation', 'Progress insights'],
    screenshots: [{ id: 'student', label: 'Student Dashboard' }, { id: 'lessons', label: 'Lesson Builder' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'voxcraft',
    name: 'VoxCraft',
    logo: '🎙️',
    category: 'AI & Voice',
    status: 'live',
    version: '1.2.0',
    healthScore: 89,
    tagline: 'Enterprise voice technology at sub-200ms latency.',
    description: 'API-first voice platform for text-to-speech, voice cloning and real-time streaming in digital products.',
    problem:
      'Voice integration in products requires sub-200ms latency, streaming APIs and enterprise-grade reliability — but most teams stitch together fragile third-party services without governance.',
    solution:
      'VoxCraft provides an API-first voice platform with streaming pipeline, voice studio and analytics — engineered for enterprise adoption with SDK and multi-language support.',
    architectureSummary: 'API-first microservices with sub-200ms voice pipeline and streaming.',
    architectureLayers: layers(
      'React admin console with Voice Studio Golden Screens.',
      'Text-to-speech, voice cloning and real-time streaming with model routing.',
      ['Voice Studio', 'API Console', 'Analytics Panel'],
      { engine: 'Voice processing pipeline, queue management and webhook delivery.', runtime: 'Node.js microservices with streaming WebSocket API.' },
    ),
    stack: ['React', 'Node.js', 'OpenAI', 'WebSockets', 'Engine', 'Framework'],
    features: ['Text-to-speech API', 'Voice cloning', 'Real-time streaming', 'Voice studio', 'Usage analytics'],
    benefits: ['Sub-200ms latency threshold', 'API-first drives adoption', 'Enterprise SDK ready', 'Multi-language voice support'],
    roadmap: roadmap([
      ['Q4 2025', 'Real-time streaming API', 'done'],
      ['Q1 2026', 'Multi-language voices', 'in-progress'],
      ['Q2 2026', 'Enterprise SDK', 'planned'],
    ]),
    aiFeatures: ['Text-to-speech', 'Voice cloning', 'Real-time streaming'],
    screenshots: [{ id: 'studio', label: 'Voice Studio' }, { id: 'api', label: 'API Console' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'prevenpro',
    name: 'PrevenPro',
    logo: '📋',
    category: 'Compliance',
    status: 'live',
    version: '1.8.0',
    healthScore: 92,
    tagline: 'Intelligent compliance and process control.',
    description: 'Automated compliance monitoring, critical process control and audit trails for regulated industries.',
    problem:
      'Regulated industries face audit failures from manual process control, delayed alerts and fragmented compliance tracking. Spreadsheets and generic tools cannot enforce real-time compliance.',
    solution:
      'PrevenPro automates compliance scoring, anomaly detection and audit reporting with multi-tenant isolation, real-time alerts and auto-reporting — reducing audit failures by 60%.',
    architectureSummary: 'Next.js + Firebase multi-tenant with real-time alert engine.',
    architectureLayers: layers(
      'Next.js with compliance Golden Screens and multi-tenant data isolation.',
      'Anomaly detection, compliance scoring and auto-reporting with audit guardrails.',
      ['Compliance Dashboard', 'Process Monitor', 'Audit Trail'],
      { engine: 'Real-time alert engine and compliance workflow automation.', runtime: 'Firebase multi-tenant with Cloudflare edge protection.', businessOs: 'Compliance metrics visible in Business OS Framework Health.' },
    ),
    stack: ['Next.js', 'Node.js', 'Firebase', 'Cloudflare', 'AI-OS', 'Framework'],
    features: ['Compliance dashboard', 'Process monitoring', 'Audit trails', 'Anomaly detection', 'Auto-reporting'],
    benefits: ['60% reduction in audit failures', 'Real-time compliance alerts', 'Multi-tenant isolation', 'Automated audit reports'],
    roadmap: roadmap([
      ['Q4 2025', 'Audit automation', 'done'],
      ['Q1 2026', 'Multi-tenant SaaS', 'in-progress'],
      ['Q2 2026', 'Compliance reports v2', 'planned'],
    ]),
    aiFeatures: ['Anomaly detection', 'Compliance scoring', 'Auto-reporting'],
    screenshots: [{ id: 'compliance', label: 'Compliance Dashboard' }, { id: 'audit', label: 'Audit Trail' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
    featured: true,
  },
  {
    slug: 'fuelmaster',
    name: 'FuelMaster',
    logo: '⛽',
    category: 'Logistics',
    status: 'live',
    version: '1.3.2',
    healthScore: 87,
    tagline: 'Operational intelligence for fleet and fuel.',
    description: 'Fuel management, fleet control and route optimization with real-time dashboards and IoT-ready architecture.',
    problem:
      'Fleet operators lack real-time visibility into fuel consumption, route efficiency and operational costs. Legacy systems cannot integrate IoT sensors or deliver actionable intelligence.',
    solution:
      'FuelMaster provides fleet overview, fuel analytics and route planning with Engine workflow automation, consumption prediction and IoT-ready offline sync.',
    architectureSummary: 'React + Supabase + Engine workflow automation for fleet operations.',
    architectureLayers: layers(
      'React dashboard with logistics Golden Screens for fleet and fuel analytics.',
      'Consumption prediction and route optimization with operational data models.',
      ['Fleet Overview', 'Fuel Analytics', 'Route Planner'],
      { engine: 'Fleet workflow automation, alert rules and IoT data ingestion.', runtime: 'Supabase with real-time fleet telemetry sync.' },
    ),
    stack: ['React', 'Node.js', 'Supabase', 'Engine', 'Framework'],
    features: ['Fleet overview', 'Fuel analytics', 'Route planner', 'Consumption prediction', 'IoT integration'],
    benefits: ['Real-time fleet dashboards', 'IoT-ready offline sync', 'Route optimization reduces fuel costs', 'Operational alerts before failures'],
    roadmap: roadmap([
      ['Q4 2025', 'Fleet dashboard', 'done'],
      ['Q1 2026', 'IoT sensor integration', 'in-progress'],
      ['Q2 2026', 'Route optimization v2', 'planned'],
    ]),
    aiFeatures: ['Consumption prediction', 'Route optimization'],
    screenshots: [{ id: 'fleet', label: 'Fleet Overview' }, { id: 'analytics', label: 'Fuel Analytics' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
  },
  {
    slug: 'diagramafy',
    name: 'DiagramaFy',
    logo: '📊',
    category: 'Developer Tools',
    status: 'beta',
    version: '0.8.1',
    healthScore: 81,
    tagline: 'AI-assisted architecture documentation.',
    description: 'Visual diagramming and architecture documentation with AI generation and Mermaid export for engineering teams.',
    problem:
      'Architecture documentation is slow, inconsistent and often outdated. Engineers spend hours on diagrams that diverge from implementation within weeks.',
    solution:
      'DiagramaFy accelerates documentation with AI-assisted diagram generation, auto-layout, Mermaid export and team collaboration — keeping architecture docs aligned with reality.',
    architectureSummary: 'React canvas + AI-OS diagram generation with Mermaid export.',
    architectureLayers: layers(
      'React canvas editor with developer-tool Golden Screens.',
      'Auto-diagram from text and architecture suggestions with structured output.',
      ['Canvas Editor', 'Template Library', 'Export Panel'],
      { engine: 'Diagram generation pipeline and export workflow automation.', runtime: 'Client-side canvas with server-side AI generation.' },
    ),
    stack: ['React', 'TypeScript', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Canvas editor', 'AI diagram generation', 'Mermaid export', 'Template library', 'Team collaboration'],
    benefits: ['Hours saved per diagram', 'Mermaid compatibility', 'AI-generated from natural language', 'Architecture docs stay current'],
    roadmap: roadmap([
      ['Q1 2026', 'Auto-layout engine', 'in-progress'],
      ['Q2 2026', 'Export to Mermaid', 'planned'],
      ['Q3 2026', 'Team collaboration', 'planned'],
    ]),
    aiFeatures: ['Auto-diagram from text', 'Architecture suggestions'],
    screenshots: [{ id: 'canvas', label: 'Canvas Editor' }, { id: 'export', label: 'Export Panel' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
  },
  {
    slug: 'respondfy',
    name: 'RespondFy',
    logo: '💬',
    category: 'Customer Success',
    status: 'beta',
    version: '0.9.0',
    healthScore: 84,
    tagline: 'Intelligent response automation for support teams.',
    description: 'Customer response automation with sentiment analysis, brand voice and human review loops for support and sales.',
    problem:
      'Support teams are overwhelmed by volume. Generic auto-responders damage brand voice, miss sentiment signals and escalate issues too late — hurting CSAT and retention.',
    solution:
      'RespondFy automates responses with sentiment routing, brand voice matching and mandatory human review loops — improving CSAT while reducing response time.',
    architectureSummary: 'React + Node.js + AI-OS response engine with sentiment analysis.',
    architectureLayers: layers(
      'React inbox UI with customer-success Golden Screens.',
      'Auto-response, sentiment analysis and escalation routing with brand guardrails.',
      ['Inbox', 'Response Templates', 'Analytics'],
      { engine: 'Omnichannel ingestion, routing rules and CRM sync workflows.', runtime: 'Node.js with real-time inbox streaming.' },
    ),
    stack: ['React', 'Node.js', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Omnichannel inbox', 'Auto-response', 'Sentiment analysis', 'Escalation routing', 'Response templates'],
    benefits: ['Human review prevents brand damage', 'Sentiment routing improves CSAT', 'Faster first response time', 'Brand voice consistency'],
    roadmap: roadmap([
      ['Q1 2026', 'Omnichannel inbox', 'in-progress'],
      ['Q2 2026', 'Sentiment analysis v2', 'planned'],
      ['Q3 2026', 'CRM sync', 'planned'],
    ]),
    aiFeatures: ['Auto-response', 'Sentiment analysis', 'Escalation routing'],
    screenshots: [{ id: 'inbox', label: 'Inbox' }, { id: 'templates', label: 'Response Templates' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
  },
  {
    slug: 'ispmind',
    name: 'ISPMind',
    logo: '🏥',
    category: 'Telecom',
    status: 'building',
    version: '0.5.0',
    healthScore: 68,
    tagline: 'Network intelligence for ISPs and telecom.',
    description: 'ISP operations platform with network monitoring, ticket automation and SLA dashboards for telecom providers.',
    problem:
      'ISPs operate with fragmented monitoring, manual ticket handling and no unified SLA visibility. Outages go undetected, tickets pile up and customer churn increases.',
    solution:
      'ISPMind modernizes ISP operations with network maps, automated ticket classification, SLA dashboards and 24/7 monitoring — built on Engine event processing.',
    architectureSummary: 'React + Supabase + Engine event processing for network operations.',
    architectureLayers: layers(
      'React NOC dashboard with telecom Golden Screens.',
      'Anomaly detection and ticket classification with network context.',
      ['Network Map', 'Ticket Center', 'SLA Dashboard'],
      { engine: 'Network event processing, ticket automation and SLA calculation.', runtime: 'Supabase with real-time network telemetry ingestion.' },
    ),
    stack: ['React', 'Node.js', 'Supabase', 'Engine', 'Framework'],
    features: ['Network map', 'Ticket center', 'SLA dashboard', 'Anomaly detection', 'Ticket automation'],
    benefits: ['24/7 network monitoring', 'Automated ticket classification', 'SLA tracking built-in', 'Reduced mean time to resolution'],
    roadmap: roadmap([
      ['Q1 2026', 'Network monitoring', 'in-progress'],
      ['Q2 2026', 'Ticket automation', 'planned'],
      ['Q3 2026', 'SLA dashboard', 'planned'],
    ]),
    aiFeatures: ['Anomaly detection', 'Ticket classification'],
    screenshots: [{ id: 'network', label: 'Network Map' }, { id: 'tickets', label: 'Ticket Center' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
  },
  {
    slug: 'proodonto-smart',
    name: 'ProOdonto Smart',
    logo: '🦷',
    category: 'HealthTech',
    status: 'building',
    version: '0.4.2',
    healthScore: 74,
    tagline: 'Smart dental clinic management.',
    description: 'Dental clinic platform with intelligent scheduling, patient records and AI treatment insights with LGPD compliance.',
    problem:
      'Dental clinics rely on outdated scheduling, paper records and no-shows that cost revenue. Patient data handling lacks compliance architecture and treatment planning is manual.',
    solution:
      'ProOdonto Smart digitizes clinics with smart scheduling, AI treatment suggestions, no-show prediction and LGPD-compliant patient records — built for multi-clinic operations.',
    architectureSummary: 'React + Supabase multi-tenant with AI-OS treatment assistant and LGPD compliance.',
    architectureLayers: layers(
      'React clinic dashboard with healthcare Golden Screens.',
      'Treatment suggestions, no-show prediction and records summarization with data guardrails.',
      ['Clinic Dashboard', 'Patient Records', 'Scheduling Board'],
      { engine: 'Scheduling automation, reminder workflows and multi-clinic orchestration.', runtime: 'Supabase multi-tenant with offline-tolerant scheduling sync.', businessOs: 'Clinic operations tracked in Business OS for portfolio health.' },
    ),
    stack: ['React', 'Node.js', 'Supabase', 'OpenAI', 'AI-OS', 'Framework'],
    features: ['Clinic dashboard', 'Patient records', 'Smart scheduling', 'Treatment planning AI', 'Patient portal'],
    benefits: ['Reduced no-show rates', 'LGPD-compliant patient data', 'Offline-tolerant scheduling', 'Multi-clinic ready architecture'],
    roadmap: roadmap([
      ['Q1 2026', 'Smart scheduling', 'in-progress'],
      ['Q2 2026', 'Treatment planning AI', 'planned'],
      ['Q3 2026', 'Patient portal', 'planned'],
    ]),
    aiFeatures: ['Treatment suggestions', 'No-show prediction', 'Records summarization'],
    screenshots: [{ id: 'clinic', label: 'Clinic Dashboard' }, { id: 'scheduling', label: 'Scheduling Board' }],
    cta: { primary: { label: 'Start a project', href: '/#contact' }, secondary: { label: 'Explore Framework', href: '/framework' } },
  },
]

export const OFFICIAL_PRODUCT_SLUGS = PRODUCT_CATALOG.map((p) => p.slug)

export function getProductContent(slug: string): ProductPageContent | undefined {
  return PRODUCT_CATALOG.find((p) => p.slug === slug)
}

export function getProductContentPath(slug: string) {
  return `/products/${slug}`
}
