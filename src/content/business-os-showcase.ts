export type BosView = 'command-center' | 'products' | 'analytics' | 'framework'

export type BosMetric = {
  id: string
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: string
}

export type BosActivity = {
  id: string
  type: 'deploy' | 'client' | 'subscription' | 'ai' | 'product' | 'pipeline'
  title: string
  detail: string
  time: string
}

export type BosProduct = {
  id: string
  name: string
  status: 'live' | 'beta' | 'scaling'
  version: string
  activeUsers: number
  revenue: string
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
  { id: 'products', label: 'Products', icon: '▣' },
  { id: 'analytics', label: 'Analytics', icon: '▤' },
  { id: 'framework', label: 'Framework', icon: '◆' },
]

export const BOS_COMMAND_METRICS: BosMetric[] = [
  { id: 'mrr', label: 'Monthly Recurring Revenue', value: '$284K', change: '+12.4%', trend: 'up', icon: '◈' },
  { id: 'clients', label: 'Active Clients', value: '47', change: '+3', trend: 'up', icon: '◉' },
  { id: 'products', label: 'Active Products', value: '12', change: 'Live', trend: 'neutral', icon: '▣' },
  { id: 'ai-agents', label: 'AI Agents Running', value: '23', change: 'Online', trend: 'up', icon: '◎' },
  { id: 'deploy', label: 'Deploy Success Rate', value: '99.7%', change: '+0.2%', trend: 'up', icon: '↑' },
  { id: 'infra', label: 'Infrastructure Health', value: '98%', change: 'Stable', trend: 'neutral', icon: '⚙' },
  { id: 'framework', label: 'Framework Version', value: 'v2.1', change: 'Stable', trend: 'neutral', icon: '◆' },
  { id: 'tasks', label: 'Open Tasks', value: '34', change: '−6', trend: 'down', icon: '☑' },
]

export const BOS_LIVE_ACTIVITIES: BosActivity[] = [
  { id: '1', type: 'deploy', title: 'Deploy realizado', detail: 'JurisMind v2.4.1 → production', time: '2 min ago' },
  { id: '2', type: 'client', title: 'Novo cliente', detail: 'Acme Legal Corp onboarded', time: '14 min ago' },
  { id: '3', type: 'subscription', title: 'Nova assinatura', detail: 'ContentFy Enterprise — $2.4K/mo', time: '28 min ago' },
  { id: '4', type: 'ai', title: 'IA executando automações', detail: 'CEO Copilot processed 12 workflows', time: '35 min ago' },
  { id: '5', type: 'product', title: 'Produto atualizado', detail: 'DiagramaFy v1.6.2 released', time: '1h ago' },
  { id: '6', type: 'pipeline', title: 'Pipeline comercial', detail: 'Rep4.0 CRM — deal moved to Negotiation', time: '2h ago' },
]

export const BOS_COPILOT: BosCopilotSection[] = [
  {
    id: 'brief',
    title: 'Executive Brief',
    items: [
      'MRR grew 12.4% this month. JurisMind and ContentFy drive 68% of recurring revenue.',
      'Infrastructure health at 98%. All critical services operational across 3 regions.',
    ],
  },
  {
    id: 'suggestions',
    title: 'Sugestões inteligentes',
    items: [
      'Prioritize ISPMind enterprise rollout — 3 qualified leads in pipeline.',
      'Schedule Framework v2.2 health audit before Q3 client onboarding.',
      'Enable white-label config for CondoMind partner channel.',
    ],
  },
  {
    id: 'alerts',
    title: 'Alertas críticos',
    variant: 'alert',
    items: [
      'PetMind staging environment — memory threshold at 82%.',
      'BuilderLeads webhook retry queue — 2 pending events.',
    ],
  },
  {
    id: 'actions',
    title: 'Próximas ações recomendadas',
    items: [
      'Review Rep4.0 CRM enterprise proposal — due today.',
      'Approve ContentFy AI content policy update.',
      'Sign-off DiagramaFy auto-layout v2 release.',
    ],
  },
  {
    id: 'insights',
    title: 'Insights gerados por IA',
    variant: 'insight',
    items: [
      'Client churn risk low — NPS 72 across portfolio.',
      'Deploy velocity up 18% — Engine automation reducing manual ops.',
      'AI agent utilization at 94% — consider scaling copilot capacity.',
    ],
  },
]

export const BOS_PRODUCTS: BosProduct[] = [
  { id: 'jurismind', name: 'JurisMind', status: 'live', version: '2.4.1', activeUsers: 1240, revenue: '$18.2K', health: 96, logo: '⚖' },
  { id: 'contentfy', name: 'ContentFy', status: 'live', version: '1.8.0', activeUsers: 890, revenue: '$12.4K', health: 94, logo: '✎' },
  { id: 'diagramafy', name: 'DiagramaFy', status: 'live', version: '1.6.2', activeUsers: 620, revenue: '$8.1K', health: 93, logo: '◇' },
  { id: 'petmind', name: 'PetMind', status: 'scaling', version: '0.9.4', activeUsers: 340, revenue: '$4.2K', health: 88, logo: '🐾' },
  { id: 'condomind', name: 'CondoMind', status: 'beta', version: '0.7.1', activeUsers: 180, revenue: '$2.8K', health: 91, logo: '🏢' },
  { id: 'rep4', name: 'Rep4.0 CRM', status: 'live', version: '3.1.0', activeUsers: 2100, revenue: '$24.6K', health: 97, logo: '◉' },
  { id: 'builderleads', name: 'BuilderLeads', status: 'scaling', version: '1.2.3', activeUsers: 450, revenue: '$5.9K', health: 90, logo: '◈' },
  { id: 'ispmind', name: 'ISPMind', status: 'live', version: '2.0.5', activeUsers: 780, revenue: '$11.3K', health: 95, logo: '◎' },
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
  { id: 'health', label: 'Framework Health', value: '94%', icon: '◆' },
  { id: 'engine', label: 'Engine Modules', value: '12', icon: '⚙' },
  { id: 'packages', label: 'Packages', value: '37', icon: '▣' },
  { id: 'components', label: 'Components', value: '80+', icon: '⬡' },
  { id: 'apis', label: 'APIs', value: '148', icon: '◎' },
]

export const BOS_FRAMEWORK_BADGES = [
  'Multi-Tenant Ready',
  'White Label Ready',
  'AI Native',
] as const

export const BOS_ACTIVITY_ICONS: Record<BosActivity['type'], string> = {
  deploy: '↑',
  client: '◉',
  subscription: '◈',
  ai: '◎',
  product: '▣',
  pipeline: '◇',
}

export function getBosStatusLabel(status: BosProduct['status']) {
  if (status === 'live') return 'Live'
  if (status === 'beta') return 'Beta'
  return 'Scaling'
}
