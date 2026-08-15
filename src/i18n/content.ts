import type { TranslateFn } from '../i18n'

export const NAV_IDS = [
  'credibility',
  'platform',
  'business-os',
  'products',
  'process',
  'services',
  'contact',
] as const

const NAV_KEYS = {
  credibility: 'navigation.credibility',
  platform: 'navigation.platform',
  'business-os': 'navigation.businessOs',
  products: 'navigation.products',
  process: 'navigation.method',
  services: 'navigation.services',
  contact: 'navigation.contact',
} as const

export function getNavItems(t: TranslateFn) {
  return NAV_IDS.map((id) => ({ id, label: t(NAV_KEYS[id]) }))
}

export function getStatusBarItems(t: TranslateFn) {
  return [
    { id: 'ai-engine', label: t('statusBar.aiEngineOnline'), live: true },
    { id: 'framework', label: t('statusBar.frameworkVersion'), live: false },
    { id: 'business-os', label: t('statusBar.businessOsConnected'), live: true },
  ] as const
}

export function getHeroBadges(t: TranslateFn) {
  return [
    { id: 'pec', label: t('hero.badgePec') },
    { id: 'ai-native', label: t('hero.badgeAiNative') },
    { id: 'enterprise', label: t('hero.badgeEnterpriseSaas') },
    { id: 'business-os', label: t('hero.badgeBusinessOs') },
  ] as const
}

export function getHeroOverlays(t: TranslateFn) {
  return [
    { id: 'revenue', label: t('hero.overlayRevenue'), value: '$284K' },
    { id: 'mrr', label: t('hero.overlayMrr'), value: '$42K' },
    { id: 'copilot', label: t('hero.overlayCopilot'), value: t('hero.overlayOnline') },
    { id: 'pipeline', label: t('hero.overlayPipeline'), value: t('hero.overlayDeals') },
    { id: 'deploy', label: t('hero.overlayDeploy'), value: t('hero.overlayLive') },
    { id: 'score', label: t('hero.overlayScore'), value: '94%' },
  ] as const
}

export function getHeroPerformance(t: TranslateFn) {
  return [
    { id: 'uptime', label: t('hero.perfUptime') },
    { id: 'enterprise', label: t('hero.perfEnterprise') },
    { id: 'ai-native', label: t('hero.perfAiNative') },
    { id: 'soc2', label: t('hero.perfSoc2') },
    { id: 'multi-tenant', label: t('hero.perfMultiTenant') },
    { id: 'white-label', label: t('hero.perfWhiteLabel') },
  ] as const
}

export function getHeroFooterMeta(t: TranslateFn) {
  return [
    { id: 'modules', label: t('hero.footerModules') },
    { id: 'bos', label: t('hero.footerBos') },
    { id: 'framework', label: t('hero.footerFramework') },
    { id: 'platform', label: t('hero.footerPlatform') },
  ] as const
}

export function getPurposeContent(t: TranslateFn) {
  return {
    eyebrow: t('purpose.eyebrow'),
    title: t('purpose.title'),
    intro: t('purpose.intro'),
    missionLabel: t('purpose.missionLabel'),
    mission: t('purpose.mission'),
    pillarsAria: t('purpose.pillarsAria'),
    pillars: [
      { id: 'people-first', title: t('purpose.peopleFirstTitle'), description: t('purpose.peopleFirstDesc') },
      { id: 'ai-ally', title: t('purpose.aiAllyTitle'), description: t('purpose.aiAllyDesc') },
      { id: 'engineering-method', title: t('purpose.engineeringTitle'), description: t('purpose.engineeringDesc') },
      { id: 'real-impact', title: t('purpose.impactTitle'), description: t('purpose.impactDesc') },
    ],
  }
}

export function getPlatformLayers(t: TranslateFn) {
  return [
    {
      id: 'framework',
      tag: t('platform.layerFrameworkTag'),
      name: t('platform.layerFrameworkName'),
      description: t('platform.layerFrameworkDesc'),
    },
    {
      id: 'ai-os',
      tag: t('platform.layerAiOsTag'),
      name: t('platform.layerAiOsName'),
      description: t('platform.layerAiOsDesc'),
    },
    {
      id: 'engine',
      tag: t('platform.layerEngineTag'),
      name: t('platform.layerEngineName'),
      description: t('platform.layerEngineDesc'),
    },
    {
      id: 'runtime',
      tag: t('platform.layerRuntimeTag'),
      name: t('platform.layerRuntimeName'),
      description: t('platform.layerRuntimeDesc'),
    },
    {
      id: 'business-os',
      tag: t('platform.layerBusinessOsTag'),
      name: t('platform.layerBusinessOsName'),
      description: t('platform.layerBusinessOsDesc'),
    },
    {
      id: 'golden-screens',
      tag: t('platform.layerGoldenTag'),
      name: t('platform.layerGoldenName'),
      description: t('platform.layerGoldenDesc'),
    },
  ] as const
}

export function getProcessSteps(t: TranslateFn) {
  return [
    { step: '01', title: t('method.step01Title'), description: t('method.step01Desc') },
    { step: '02', title: t('method.step02Title'), description: t('method.step02Desc') },
    { step: '03', title: t('method.step03Title'), description: t('method.step03Desc') },
    { step: '04', title: t('method.step04Title'), description: t('method.step04Desc') },
    { step: '05', title: t('method.step05Title'), description: t('method.step05Desc') },
    { step: '06', title: t('method.step06Title'), description: t('method.step06Desc') },
    { step: '07', title: t('method.step07Title'), description: t('method.step07Desc') },
    { step: '08', title: t('method.step08Title'), description: t('method.step08Desc') },
  ] as const
}

const SERVICE_KEYS = {
  'ai-product-engineering': 'aiProductEngineering',
  'enterprise-saas': 'enterpriseSaas',
  'business-operating-systems': 'businessOperatingSystems',
  'ai-integration': 'aiIntegration',
  'internal-platforms': 'internalPlatforms',
  architecture: 'architecture',
} as const

export function getHomeServices(t: TranslateFn) {
  return (Object.keys(SERVICE_KEYS) as Array<keyof typeof SERVICE_KEYS>).map((id) => {
    const key = SERVICE_KEYS[id]
    const title = t(`services.items.${key}.title`)
    return {
      id,
      title,
      description: t(`services.items.${key}.description`),
      differentiator: t(`services.items.${key}.differentiator`),
      deliverables: [
        t(`services.items.${key}.d1`),
        t(`services.items.${key}.d2`),
        t(`services.items.${key}.d3`),
        t(`services.items.${key}.d4`),
      ],
    }
  })
}

export function getContactServices(t: TranslateFn) {
  return [
    t('contact.servicePlatformEngineering'),
    t('contact.serviceAiIntegration'),
    t('contact.serviceSaas'),
    t('contact.serviceWeb'),
    t('contact.serviceMobile'),
    t('contact.serviceAutomation'),
    t('contact.serviceUx'),
    t('contact.serviceConsulting'),
    t('contact.serviceSquad'),
    t('contact.serviceOther'),
  ] as const
}

export function getFooterLinks(t: TranslateFn) {
  return {
    company: [
      { label: t('footer.about'), href: '/#platform' },
      { label: t('footer.framework'), href: '/framework' },
      { label: t('footer.businessOs'), href: '/business-os' },
      { label: t('footer.method'), href: '/method' },
      { label: t('footer.careers'), href: 'mailto:contato@buildertudo.com?subject=Careers' },
    ],
    platform: [
      { label: t('footer.framework'), href: '/framework' },
      { label: t('footer.businessOs'), href: '/business-os' },
      { label: t('footer.aiPlatform'), href: '/#ai' },
      { label: t('footer.showcase'), href: '/#showcase' },
      { label: t('footer.liveStatus'), href: '/live' },
      { label: t('footer.frameworkHealth'), href: '/live#framework-health' },
    ],
    resources: [
      { label: t('footer.caseStudies'), href: '/cases' },
      { label: t('footer.labs'), href: '/labs' },
      { label: t('footer.productsLink'), href: '/#products' },
      { label: t('footer.methodLink'), href: '/#process' },
      { label: t('footer.servicesLink'), href: '/#services' },
      { label: t('footer.liveStatus'), href: '/live' },
    ],
  }
}
