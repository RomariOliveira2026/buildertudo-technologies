import type { Locale } from './config'

type ActivityCopy = {
  title: string
  detail: string
  time: string
}

const en = {
  navigationAria: 'Business OS navigation',
  platformStatusAria: 'Platform status',
  live: 'Live',
  nav: {
    'command-center': 'Command Center',
    products: 'Products',
    analytics: 'Analytics',
    framework: 'Framework',
    infrastructure: 'Infrastructure',
    'ai-copilot': 'AI Copilot',
  },
  command: {
    title: 'Command Center',
    description: 'Unified operational dashboard — revenue, clients, products, AI agents and infrastructure at a glance.',
    operational: 'All systems operational',
  },
  metrics: {
    mrr: 'Revenue',
    clients: 'Active Clients',
    'ai-agents': 'AI Agents',
    products: 'Products',
    deploy: 'Deploy Success',
    infra: 'Infrastructure',
    framework: 'Framework Version',
    tasks: 'Open Tasks',
    online: 'Online',
    live: 'Live',
    stable: 'Stable',
  },
  activity: {
    title: 'Live Activity',
    subtitle: 'Real-time platform events',
    ticker: {
      t1: 'Deploy completed',
      t2: 'New enterprise client',
      t3: 'Pipeline updated',
      t4: 'Framework deployed',
      t5: 'AI analysis finished',
      t6: 'Stripe payment received',
      t7: 'Database backup completed',
      t8: 'Health Score updated',
    },
    items: {
      '1': { title: 'Deploy completed', detail: 'JurisMind v2.1.3 → production', time: '2 min ago' },
      '2': { title: 'New enterprise client', detail: 'Acme Legal Corp onboarded', time: '14 min ago' },
      '3': { title: 'Pipeline updated', detail: 'Rep4 CRM — deal moved to Negotiation', time: '28 min ago' },
      '4': { title: 'Framework deployed', detail: 'BuilderTudo Framework v2.1', time: '35 min ago' },
      '5': { title: 'AI analysis finished', detail: 'CEO Copilot processed 12 workflows', time: '1h ago' },
      '6': { title: 'Stripe payment received', detail: 'ContentFy Enterprise — $2.4K/mo', time: '2h ago' },
    } satisfies Record<string, ActivityCopy>,
  },
  copilot: {
    title: 'Executive AI Brief',
    online: 'AI ONLINE',
    status: 'Real-time executive intelligence',
    viewTitle: 'AI Copilot',
    viewDescription: 'Executive AI Brief — forecasts, health, deploy status, risk alerts and recommended actions.',
    sections: {
      brief: { title: 'Revenue forecast', items: ['MRR projected at $312K by Q3. JurisMind and ContentFy drive 68% of recurring revenue.'] },
      health: { title: 'Framework Health', items: ['Health score at 94%. 15 of 16 modules operational. Deploy pipeline stable.'] },
      deploy: { title: 'Deploy status', items: ['Last deploy: JurisMind v2.1.3 — success. 99.99% success rate across 30 days.'] },
      alerts: { title: 'Risk alerts', items: ['PetMind staging — memory threshold at 82%.', 'BuilderLeads webhook queue — 2 pending events.'] },
      actions: { title: 'Recommended actions', items: ['Review Rep4 CRM enterprise proposal — due today.', 'Approve ContentFy AI content policy update.', 'Schedule Framework v2.2 health audit before Q3 onboarding.'] },
      release: { title: 'Next release', items: ['Framework v2.2 — multi-tenant isolation improvements. Target: 3 weeks.'] },
      infra: { title: 'Infrastructure status', items: ['All regions operational. Average latency 42ms. Cloudflare edge active.'] },
    },
  },
  products: {
    title: 'Products Hub',
    description: 'BuilderTudo SaaS portfolio — live metrics across every product.',
    count: 'products',
    users: 'Users',
    uptime: 'Uptime',
    health: 'Health',
    status: 'Status',
    statuses: { production: 'Production', beta: 'Beta', mvp: 'MVP', paused: 'Paused' },
  },
  analytics: {
    title: 'Analytics',
    description: 'Revenue, growth, users, deploys, performance and health across the platform.',
    chartAria: 'chart',
    months: ['Jan', 'Apr', 'Jul', 'Oct'],
    labels: { revenue: 'Revenue', growth: 'Growth', users: 'Users', deploys: 'Deploys', performance: 'Performance', health: 'Health Score' },
  },
  framework: {
    description: 'Engineering foundation powering every BuilderTudo product.',
    healthScore: 'Health Score',
    badges: ['Multi-Tenant Ready', 'White Label Ready', 'AI Native'],
    stats: { health: 'Health Score', modules: 'Modules', packages: 'Packages', components: 'Components', deploy: 'Deploy Success', version: 'Version' },
    modulesTitle: 'Engine Modules',
    modules: ['Workflow Engine', 'Webhook Hub', 'Event Processor', 'Scheduler', 'Connector Registry', 'Dead Letter Queue', 'AI Router', 'Deploy Pipeline', 'Health Monitor', 'Tenant Isolation', 'Auth Gateway', 'Observability'],
  },
  infrastructure: {
    title: 'Infrastructure',
    description: 'Global regions, cloud services and real-time latency across the BuilderTudo platform.',
    regions: 'Regions',
    services: 'Services',
    latency: 'Latency',
  },
} as const

type DeepWiden<T> =
  T extends string ? string
    : T extends readonly (infer Item)[] ? readonly DeepWiden<Item>[]
      : T extends object ? { [Key in keyof T]: DeepWiden<T[Key]> }
        : T

type BusinessOSCopy = DeepWiden<typeof en>

const es: BusinessOSCopy = {
  ...en,
  navigationAria: 'Navegación de Business OS',
  platformStatusAria: 'Estado de la plataforma',
  live: 'En vivo',
  nav: { 'command-center': 'Centro de Control', products: 'Productos', analytics: 'Analítica', framework: 'Framework', infrastructure: 'Infraestructura', 'ai-copilot': 'Copiloto IA' },
  command: {
    title: 'Centro de Control',
    description: 'Panel operativo unificado — ingresos, clientes, productos, agentes de IA e infraestructura de un vistazo.',
    operational: 'Todos los sistemas operativos',
  },
  metrics: {
    mrr: 'Ingresos', clients: 'Clientes activos', 'ai-agents': 'Agentes de IA', products: 'Productos',
    deploy: 'Éxito de despliegue', infra: 'Infraestructura', framework: 'Versión del Framework',
    tasks: 'Tareas abiertas', online: 'En línea', live: 'En vivo', stable: 'Estable',
  },
  activity: {
    title: 'Actividad en vivo',
    subtitle: 'Eventos de la plataforma en tiempo real',
    ticker: {
      t1: 'Despliegue completado', t2: 'Nuevo cliente empresarial', t3: 'Pipeline actualizado',
      t4: 'Framework desplegado', t5: 'Análisis de IA finalizado', t6: 'Pago de Stripe recibido',
      t7: 'Copia de seguridad completada', t8: 'Health Score actualizado',
    },
    items: {
      '1': { title: 'Despliegue completado', detail: 'JurisMind v2.1.3 → producción', time: 'hace 2 min' },
      '2': { title: 'Nuevo cliente empresarial', detail: 'Acme Legal Corp incorporado', time: 'hace 14 min' },
      '3': { title: 'Pipeline actualizado', detail: 'Rep4 CRM — negocio movido a Negociación', time: 'hace 28 min' },
      '4': { title: 'Framework desplegado', detail: 'BuilderTudo Framework v2.1', time: 'hace 35 min' },
      '5': { title: 'Análisis de IA finalizado', detail: 'CEO Copilot procesó 12 flujos', time: 'hace 1 h' },
      '6': { title: 'Pago de Stripe recibido', detail: 'ContentFy Enterprise — $2.4K/mes', time: 'hace 2 h' },
    },
  },
  copilot: {
    title: 'Informe ejecutivo de IA', online: 'IA EN LÍNEA', status: 'Inteligencia ejecutiva en tiempo real',
    viewTitle: 'Copiloto IA',
    viewDescription: 'Informe ejecutivo de IA — pronósticos, salud, estado de despliegues, alertas de riesgo y acciones recomendadas.',
    sections: {
      brief: { title: 'Pronóstico de ingresos', items: ['MRR proyectado en $312K para el T3. JurisMind y ContentFy generan el 68% de los ingresos recurrentes.'] },
      health: { title: 'Salud del Framework', items: ['Health Score del 94%. 15 de 16 módulos operativos. Pipeline de despliegue estable.'] },
      deploy: { title: 'Estado del despliegue', items: ['Último despliegue: JurisMind v2.1.3 — exitoso. Tasa de éxito del 99.99% en 30 días.'] },
      alerts: { title: 'Alertas de riesgo', items: ['Staging de PetMind — umbral de memoria al 82%.', 'Cola de webhooks de BuilderLeads — 2 eventos pendientes.'] },
      actions: { title: 'Acciones recomendadas', items: ['Revisar la propuesta enterprise de Rep4 CRM — vence hoy.', 'Aprobar la actualización de la política de contenido de IA de ContentFy.', 'Programar la auditoría de salud de Framework v2.2 antes del onboarding del T3.'] },
      release: { title: 'Próxima versión', items: ['Framework v2.2 — mejoras de aislamiento multi-tenant. Objetivo: 3 semanas.'] },
      infra: { title: 'Estado de infraestructura', items: ['Todas las regiones operativas. Latencia media de 42ms. Edge de Cloudflare activo.'] },
    },
  },
  products: {
    title: 'Hub de Productos', description: 'Portafolio SaaS de BuilderTudo — métricas en vivo de cada producto.',
    count: 'productos', users: 'Usuarios', uptime: 'Disponibilidad', health: 'Salud', status: 'Estado',
    statuses: { production: 'Producción', beta: 'Beta', mvp: 'MVP', paused: 'Pausado' },
  },
  analytics: {
    title: 'Analítica', description: 'Ingresos, crecimiento, usuarios, despliegues, rendimiento y salud en toda la plataforma.',
    chartAria: 'gráfico', months: ['Ene', 'Abr', 'Jul', 'Oct'],
    labels: { revenue: 'Ingresos', growth: 'Crecimiento', users: 'Usuarios', deploys: 'Despliegues', performance: 'Rendimiento', health: 'Health Score' },
  },
  framework: {
    description: 'Base de ingeniería que impulsa todos los productos de BuilderTudo.',
    healthScore: 'Health Score',
    badges: ['Multi-Tenant listo', 'White Label listo', 'IA nativa'],
    stats: { health: 'Health Score', modules: 'Módulos', packages: 'Paquetes', components: 'Componentes', deploy: 'Éxito de despliegue', version: 'Versión' },
    modulesTitle: 'Módulos del Engine',
    modules: ['Motor de flujos', 'Hub de webhooks', 'Procesador de eventos', 'Programador', 'Registro de conectores', 'Cola de mensajes fallidos', 'Router de IA', 'Pipeline de despliegue', 'Monitor de salud', 'Aislamiento de tenants', 'Gateway de autenticación', 'Observabilidad'],
  },
  infrastructure: {
    title: 'Infraestructura',
    description: 'Regiones globales, servicios cloud y latencia en tiempo real en la plataforma BuilderTudo.',
    regions: 'Regiones', services: 'Servicios', latency: 'Latencia',
  },
}

const ptBR: BusinessOSCopy = {
  ...en,
  navigationAria: 'Navegação do Business OS',
  platformStatusAria: 'Status da plataforma',
  live: 'Ao vivo',
  nav: { 'command-center': 'Central de Comando', products: 'Produtos', analytics: 'Análises', framework: 'Framework', infrastructure: 'Infraestrutura', 'ai-copilot': 'Copiloto de IA' },
  command: {
    title: 'Central de Comando',
    description: 'Painel operacional unificado — receita, clientes, produtos, agentes de IA e infraestrutura em uma única visão.',
    operational: 'Todos os sistemas operacionais',
  },
  metrics: {
    mrr: 'Receita', clients: 'Clientes ativos', 'ai-agents': 'Agentes de IA', products: 'Produtos',
    deploy: 'Sucesso de deploy', infra: 'Infraestrutura', framework: 'Versão do Framework',
    tasks: 'Tarefas abertas', online: 'Online', live: 'Ao vivo', stable: 'Estável',
  },
  activity: {
    title: 'Atividade ao vivo',
    subtitle: 'Eventos da plataforma em tempo real',
    ticker: {
      t1: 'Deploy concluído', t2: 'Novo cliente enterprise', t3: 'Pipeline atualizado',
      t4: 'Framework implantado', t5: 'Análise de IA concluída', t6: 'Pagamento via Stripe recebido',
      t7: 'Backup do banco concluído', t8: 'Health Score atualizado',
    },
    items: {
      '1': { title: 'Deploy concluído', detail: 'JurisMind v2.1.3 → produção', time: 'há 2 min' },
      '2': { title: 'Novo cliente enterprise', detail: 'Acme Legal Corp integrado', time: 'há 14 min' },
      '3': { title: 'Pipeline atualizado', detail: 'Rep4 CRM — negócio movido para Negociação', time: 'há 28 min' },
      '4': { title: 'Framework implantado', detail: 'BuilderTudo Framework v2.1', time: 'há 35 min' },
      '5': { title: 'Análise de IA concluída', detail: 'CEO Copilot processou 12 fluxos', time: 'há 1 h' },
      '6': { title: 'Pagamento via Stripe recebido', detail: 'ContentFy Enterprise — $2.4K/mês', time: 'há 2 h' },
    },
  },
  copilot: {
    title: 'Brief executivo de IA', online: 'IA ONLINE', status: 'Inteligência executiva em tempo real',
    viewTitle: 'Copiloto de IA',
    viewDescription: 'Brief executivo de IA — previsões, saúde, status de deploy, alertas de risco e ações recomendadas.',
    sections: {
      brief: { title: 'Previsão de receita', items: ['MRR projetado em $312K até o T3. JurisMind e ContentFy geram 68% da receita recorrente.'] },
      health: { title: 'Saúde do Framework', items: ['Health Score em 94%. 15 de 16 módulos operacionais. Pipeline de deploy estável.'] },
      deploy: { title: 'Status do deploy', items: ['Último deploy: JurisMind v2.1.3 — sucesso. Taxa de sucesso de 99.99% em 30 dias.'] },
      alerts: { title: 'Alertas de risco', items: ['Staging do PetMind — limite de memória em 82%.', 'Fila de webhooks do BuilderLeads — 2 eventos pendentes.'] },
      actions: { title: 'Ações recomendadas', items: ['Revisar proposta enterprise do Rep4 CRM — vence hoje.', 'Aprovar atualização da política de conteúdo de IA do ContentFy.', 'Agendar auditoria de saúde do Framework v2.2 antes do onboarding do T3.'] },
      release: { title: 'Próxima versão', items: ['Framework v2.2 — melhorias no isolamento multi-tenant. Meta: 3 semanas.'] },
      infra: { title: 'Status da infraestrutura', items: ['Todas as regiões operacionais. Latência média de 42ms. Edge da Cloudflare ativo.'] },
    },
  },
  products: {
    title: 'Hub de Produtos', description: 'Portfólio SaaS da BuilderTudo — métricas ao vivo de todos os produtos.',
    count: 'produtos', users: 'Usuários', uptime: 'Disponibilidade', health: 'Saúde', status: 'Status',
    statuses: { production: 'Produção', beta: 'Beta', mvp: 'MVP', paused: 'Pausado' },
  },
  analytics: {
    title: 'Análises', description: 'Receita, crescimento, usuários, deploys, desempenho e saúde em toda a plataforma.',
    chartAria: 'gráfico', months: ['Jan', 'Abr', 'Jul', 'Out'],
    labels: { revenue: 'Receita', growth: 'Crescimento', users: 'Usuários', deploys: 'Deploys', performance: 'Desempenho', health: 'Health Score' },
  },
  framework: {
    description: 'Base de engenharia que impulsiona todos os produtos BuilderTudo.',
    healthScore: 'Health Score',
    badges: ['Multi-Tenant pronto', 'White Label pronto', 'IA nativa'],
    stats: { health: 'Health Score', modules: 'Módulos', packages: 'Pacotes', components: 'Componentes', deploy: 'Sucesso de deploy', version: 'Versão' },
    modulesTitle: 'Módulos do Engine',
    modules: ['Motor de workflows', 'Hub de webhooks', 'Processador de eventos', 'Agendador', 'Registro de conectores', 'Fila de mensagens com falha', 'Roteador de IA', 'Pipeline de deploy', 'Monitor de saúde', 'Isolamento de tenants', 'Gateway de autenticação', 'Observabilidade'],
  },
  infrastructure: {
    title: 'Infraestrutura',
    description: 'Regiões globais, serviços em nuvem e latência em tempo real na plataforma BuilderTudo.',
    regions: 'Regiões', services: 'Serviços', latency: 'Latência',
  },
}

export const businessOSCopy: Record<Locale, BusinessOSCopy> = { en, es, 'pt-BR': ptBR }
