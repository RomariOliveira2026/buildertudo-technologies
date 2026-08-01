export type BosView =
  | 'command-center'
  | 'products'
  | 'analytics'
  | 'framework'
  | 'infrastructure'
  | 'ai-copilot'

export type BosMetricFormat = 'revenue' | 'number' | 'percent' | 'text'

export type BosMetric = {
  id: string
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: string
  liveValues?: (number | string)[]
  format?: BosMetricFormat
}

export type BosActivity = {
  id: string
  type: 'deploy' | 'client' | 'subscription' | 'ai' | 'product' | 'pipeline' | 'payment' | 'backup' | 'health'
  title: string
  detail: string
  time: string
}

export type BosProductStatus = 'production' | 'beta' | 'mvp' | 'paused'

export type BosProduct = {
  id: string
  name: string
  status: BosProductStatus
  version: string
  activeUsers: number
  uptime?: string
  health: number
  logo: string
}

export type BosCopilotSection = {
  id: string
  title: string
  items: string[]
  variant?: 'default' | 'alert' | 'insight'
}

export type BosChartSeries = {
  id: string
  label: string
  values: number[]
  color: string
}

export type BosFrameworkStat = {
  id: string
  label: string
  value: string
  icon: string
}

export const BOS_NAV: { id: BosView; label: string; icon: string }[] = [
  { id: 'command-center', label: 'Command Center', icon: '⌘' },
  { id: 'products', label: 'Products', icon: '▦' },
  { id: 'analytics', label: 'Analytics', icon: '◫' },
  { id: 'framework', label: 'Framework', icon: '◆' },
  { id: 'infrastructure', label: 'Infrastructure', icon: '⬡' },
  { id: 'ai-copilot', label: 'AI Copilot', icon: '◎' },
]

export const BOS_COMMAND_METRICS: BosMetric[] = [
  {
    id: 'mrr',
    label: 'Revenue',
    value: '$284K',
    liveValues: [283940, 283980, 284010, 284050],
    format: 'revenue',
    change: '+12.4%',
    trend: 'up',
    icon: '◈',
  },
  {
    id: 'clients',
    label: 'Active Clients',
    value: '47',
    liveValues: [46, 47, 48, 47],
    format: 'number',
    change: '+3',
    trend: 'up',
    icon: '◉',
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    value: '23',
    liveValues: [22, 23, 23, 24],
    format: 'number',
    change: 'Online',
    trend: 'up',
    icon: '◎',
  },
  {
    id: 'products',
    label: 'Products',
    value: '12',
    liveValues: [11, 12, 12, 13],
    format: 'number',
    change: 'Live',
    trend: 'neutral',
    icon: '▣',
  },
  { id: 'deploy', label: 'Deploy Success', value: '99.99%', change: '+0.2%', trend: 'up', icon: '↑' },
  { id: 'infra', label: 'Infrastructure', value: '98%', change: 'Stable', trend: 'neutral', icon: '⚙' },
  { id: 'framework', label: 'Framework Version', value: 'v2.1', format: 'text', change: 'Stable', trend: 'neutral', icon: '◆' },
  { id: 'tasks', label: 'Open Tasks', value: '34', change: '−6', trend: 'down', icon: '☑' },
]

export const BOS_ACTIVITY_TICKER: BosActivity[] = [
  { id: 't1', type: 'deploy', title: 'Deploy completed', detail: 'JurisMind v2.1.3 → production', time: 'now' },
  { id: 't2', type: 'client', title: 'New enterprise client', detail: 'Acme Legal Corp onboarded', time: 'now' },
  { id: 't3', type: 'pipeline', title: 'Pipeline updated', detail: 'Rep4 CRM — deal moved to Negotiation', time: 'now' },
  { id: 't4', type: 'deploy', title: 'Framework deployed', detail: 'BuilderTudo Framework v2.1', time: 'now' },
  { id: 't5', type: 'ai', title: 'AI analysis finished', detail: 'CEO Copilot processed 12 workflows', time: 'now' },
  { id: 't6', type: 'payment', title: 'Stripe payment received', detail: 'ContentFy Enterprise — $2.4K/mo', time: 'now' },
  { id: 't7', type: 'backup', title: 'Database backup completed', detail: 'All regions synced', time: 'now' },
  { id: 't8', type: 'health', title: 'Health Score updated', detail: 'Framework health at 94%', time: 'now' },
]

export const BOS_LIVE_ACTIVITIES: BosActivity[] = [
  { id: '1', type: 'deploy', title: 'Deploy completed', detail: 'JurisMind v2.1.3 → production', time: '2 min ago' },
  { id: '2', type: 'client', title: 'New enterprise client', detail: 'Acme Legal Corp onboarded', time: '14 min ago' },
  { id: '3', type: 'pipeline', title: 'Pipeline updated', detail: 'Rep4 CRM — deal moved to Negotiation', time: '28 min ago' },
  { id: '4', type: 'deploy', title: 'Framework deployed', detail: 'BuilderTudo Framework v2.1', time: '35 min ago' },
  { id: '5', type: 'ai', title: 'AI analysis finished', detail: 'CEO Copilot processed 12 workflows', time: '1h ago' },
  { id: '6', type: 'payment', title: 'Stripe payment received', detail: 'ContentFy Enterprise — $2.4K/mo', time: '2h ago' },
]

export const BOS_COPILOT: BosCopilotSection[] = [
  {
    id: 'brief',
    title: 'Revenue forecast',
    items: ['MRR projected at $312K by Q3. JurisMind and ContentFy drive 68% of recurring revenue.'],
  },
  {
    id: 'health',
    title: 'Framework Health',
    items: ['Health score at 94%. 15 of 16 modules operational. Deploy pipeline stable.'],
  },
  {
    id: 'deploy',
    title: 'Deploy status',
    items: ['Last deploy: JurisMind v2.1.3 — success. 99.99% success rate across 30 days.'],
  },
  {
    id: 'alerts',
    title: 'Risk alerts',
    variant: 'alert',
    items: ['PetMind staging — memory threshold at 82%.', 'BuilderLeads webhook queue — 2 pending events.'],
  },
  {
    id: 'actions',
    title: 'Recommended actions',
    items: [
      'Review Rep4 CRM enterprise proposal — due today.',
      'Approve ContentFy AI content policy update.',
      'Schedule Framework v2.2 health audit before Q3 onboarding.',
    ],
  },
  {
    id: 'release',
    title: 'Next release',
    items: ['Framework v2.2 — multi-tenant isolation improvements. Target: 3 weeks.'],
  },
  {
    id: 'infra',
    title: 'Infrastructure status',
    variant: 'insight',
    items: ['All regions operational. Average latency 42ms. Cloudflare edge active.'],
  },
]

export const BOS_PRODUCTS: BosProduct[] = [
  { id: 'jurismind', name: 'JurisMind', status: 'production', version: '2.1.3', activeUsers: 1245, uptime: '99.98%', health: 98, logo: '⚖' },
  { id: 'contentfy', name: 'ContentFy', status: 'production', version: '1.9.8', activeUsers: 865, uptime: '99.99%', health: 99, logo: '✎' },
  { id: 'diagramafy', name: 'DiagramaFy', status: 'beta', version: '1.6.2', activeUsers: 421, health: 93, logo: '◇' },
  { id: 'petmind', name: 'PetMind', status: 'production', version: '0.9.4', activeUsers: 340, uptime: '99.95%', health: 88, logo: '🐾' },
  { id: 'rep4', name: 'Rep4 CRM', status: 'mvp', version: '0.8.0', activeUsers: 128, health: 91, logo: '◉' },
  { id: 'condomind', name: 'CondoMind', status: 'beta', version: '0.7.1', activeUsers: 180, health: 91, logo: '🏢' },
  { id: 'builderleads', name: 'BuilderLeads', status: 'paused', version: '1.2.3', activeUsers: 450, health: 90, logo: '◈' },
  { id: 'ispmind', name: 'ISPMind', status: 'production', version: '2.0.5', activeUsers: 780, uptime: '99.97%', health: 95, logo: '◎' },
]

export const BOS_ANALYTICS_CHARTS: BosChartSeries[] = [
  { id: 'revenue', label: 'Receita', values: [42, 48, 52, 58, 64, 72, 78, 84, 92, 98, 108, 118], color: '#E4AE2B' },
  { id: 'growth', label: 'Crescimento', values: [8, 10, 9, 12, 11, 14, 13, 15, 16, 14, 18, 17], color: '#4F7CFF' },
  { id: 'users', label: 'Usuários', values: [1200, 1350, 1480, 1620, 1780, 1920, 2100, 2280, 2450, 2620, 2780, 2940], color: '#7C5CFF' },
  { id: 'deploys', label: 'Deploys', values: [12, 14, 11, 16, 18, 15, 20, 22, 19, 24, 26, 28], color: '#2DD4BF' },
  { id: 'performance', label: 'Performance', values: [94, 95, 94, 96, 95, 97, 96, 98, 97, 98, 99, 98], color: '#4F7CFF' },
  { id: 'health', label: 'Health Score', values: [88, 89, 90, 91, 90, 92, 93, 92, 94, 93, 94, 94], color: '#E4AE2B' },
]

export const BOS_FRAMEWORK_STATS: BosFrameworkStat[] = [
  { id: 'health', label: 'Health Score', value: '94%', icon: '◆' },
  { id: 'modules', label: 'Modules', value: '15/16', icon: '⚙' },
  { id: 'packages', label: 'Packages', value: '37', icon: '▣' },
  { id: 'components', label: 'Components', value: '80+', icon: '⬡' },
  { id: 'deploy', label: 'Deploy Success', value: '99.99%', icon: '↑' },
  { id: 'version', label: 'Version', value: 'v2.1', icon: '◎' },
]

export const BOS_FRAMEWORK_HEALTH_SCORE = 94

export const BOS_FRAMEWORK_BADGES = [
  'Multi-Tenant Ready',
  'White Label Ready',
  'AI Native',
] as const

export const BOS_INFRASTRUCTURE = {
  regions: ['São Paulo', 'Virginia', 'Frankfurt'],
  services: ['Cloudflare', 'OpenAI', 'Anthropic', 'Stripe', 'Supabase'],
  latency: '42 ms',
} as const

export const BOS_ACTIVITY_ICONS: Record<BosActivity['type'], string> = {
  deploy: '✓',
  client: '◉',
  subscription: '◈',
  ai: '⚡',
  product: '📦',
  pipeline: '◇',
  payment: '💳',
  backup: '🖥',
  health: '◆',
}

export function getBosStatusLabel(status: BosProductStatus) {
  if (status === 'production') return 'Production'
  if (status === 'beta') return 'Beta'
  if (status === 'mvp') return 'MVP'
  return 'Paused'
}
