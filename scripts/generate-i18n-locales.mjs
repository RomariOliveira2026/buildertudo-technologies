import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../src/i18n/locales')
mkdirSync(outDir, { recursive: true })

const en = {
  common: {
    skipToContent: 'Skip to main content',
    startYourProject: 'Start Your Project',
    explorePlatform: 'Explore Platform',
    startAProject: 'Start a project',
    bookDiscoveryCall: 'Book a discovery call',
    exploreFramework: 'Explore Framework',
    exploreBusinessOS: 'Explore Business OS',
    viewProducts: 'View products',
    viewLiveStatus: 'View live status',
    backToTop: 'Back to top',
    whatsapp: 'WhatsApp',
    whatsappAria: 'Chat with BuilderTudo Technologies on WhatsApp',
    changeLanguage: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    homeAria: 'BuilderTudo Technologies — Home',
    mainNavAria: 'Main navigation',
    platformStatusAria: 'Platform status',
    platformMetricsAria: 'Platform metrics',
    allRightsReserved: 'All rights reserved.',
    siteSlogan: 'Technology that transforms businesses.',
    defaultDescription:
      'BuilderTudo Technologies — proprietary AI engineering platform. Framework, Business OS, AI-OS, Engine and 12 SaaS products. Enterprise-grade platform engineering for global clients.',
    homeTitle: 'Proprietary AI engineering platform for global companies',
  },
  navigation: {
    credibility: 'Credibility',
    platform: 'Platform',
    businessOs: 'Business OS',
    products: 'Products',
    method: 'Method',
    services: 'Services',
    contact: 'Contact',
  },
  statusBar: {
    aiEngineOnline: 'AI Engine Online',
    frameworkVersion: 'Framework v2.1',
    businessOsConnected: 'Business OS Connected',
  },
  hero: {
    badgePec: 'Product Engineering Company',
    badgeAiNative: 'AI Native',
    badgeEnterpriseSaas: 'Enterprise SaaS',
    badgeBusinessOs: 'Business OS',
    title: 'From idea to production. We build AI-powered SaaS platforms that scale.',
    lead: 'BuilderTudo Technologies is a Product Engineering Company specialized in AI-powered SaaS platforms. We design, build and deploy enterprise-grade products using our proprietary Framework, AI Engine and Business OS.',
    poweredBy: 'Powered by BuilderTudo Framework v2.1',
    ctaPrimary: 'Start Your Project',
    ctaSecondary: 'Explore Platform',
    metricProducts: 'Live SaaS Products',
    metricComponents: 'Reusable Components',
    metricAiNative: 'AI Native Architecture',
    metricHealth: 'Framework Health',
    metricUiSystems: 'Premium UI Systems',
    metricEnterpriseValue: 'Enterprise',
    metricEnterpriseLabel: 'Ready',
    builtWith: 'Built with',
    perfUptime: '99.99% uptime',
    perfEnterprise: 'Enterprise Ready',
    perfAiNative: 'AI Native',
    perfSoc2: 'SOC2 Ready',
    perfMultiTenant: 'Multi Tenant',
    perfWhiteLabel: 'White Label Ready',
    overlayRevenue: 'Revenue',
    overlayMrr: 'MRR',
    overlayCopilot: 'AI Copilot',
    overlayPipeline: 'Pipeline',
    overlayDeploy: 'Deploy Status',
    overlayScore: 'Framework Score',
    overlayOnline: 'Online',
    overlayDeals: '12 deals',
    overlayLive: 'Live',
    showcaseEyebrow: 'Business OS · Live Demo',
    showcaseOpen: 'Open in Business OS →',
    showcaseEmpty:
      'Live Business OS demos appear here once real screenshots are captured from the platform.',
    showcaseExploreBos: 'Explore Business OS',
    showcaseExploreFramework: 'Explore Framework',
    footerModules: '11 modules',
    footerBos: 'Business OS',
    footerFramework: 'Framework v2.1',
    footerPlatform: 'Enterprise Platform',
  },
  purpose: {
    eyebrow: 'Purpose',
    title: 'Technology with purpose. Intelligence with impact.',
    intro:
      'At BuilderTudo Technologies, we believe software does not exist only to automate tasks. It exists to protect time, create opportunities, reduce friction, multiply knowledge, and help people and companies achieve more with Artificial Intelligence.',
    missionLabel: 'Our Mission',
    mission:
      "Build technology that improves people's lives, transforms businesses, and expands human potential through Artificial Intelligence.",
    pillarsAria: 'BuilderTudo institutional pillars',
    peopleFirstTitle: 'People First',
    peopleFirstDesc: 'We build technology to serve people. Never the other way around.',
    aiAllyTitle: 'AI as an Ally',
    aiAllyDesc:
      'Artificial Intelligence should amplify human capabilities, not replace purpose, creativity, or vision.',
    engineeringTitle: 'Engineering with Method',
    engineeringDesc:
      'Every product is built on our Framework, AI Engine, Business OS, and reusable engineering standards.',
    impactTitle: 'Real Impact',
    impactDesc: "Every BuilderTudo product should leave the user's life better than it was before.",
  },
  credibility: {
    eyebrow: 'Engineering credibility',
    title: 'Numbers backed by the Framework',
    description:
      'Every metric reflects real platform usage — components, tests, deploys and health scores from our daily operations.',
    health: 'Framework Health',
    packages: 'Framework packages',
    goldenScreens: 'Golden Screens',
    components: 'Reusable components',
    products: 'Products built',
    tests: 'Automated tests',
    aiCopilots: 'AI Copilots',
    businessOs: 'Business OS',
  },
  platform: {
    eyebrow: 'The BuilderTudo Platform',
    title: 'A proprietary stack — not a stack of tools.',
    description:
      'Framework, AI-OS, Engine, Runtime, Business OS and Golden Screens. One integrated platform we engineered ourselves, so every project ships faster, safer and at product grade.',
    ctaFramework: 'Explore Framework',
    ctaBusinessOs: 'Explore Business OS',
    ctaProducts: 'View products',
    layerFrameworkTag: 'Foundation',
    layerFrameworkName: 'Framework',
    layerFrameworkDesc:
      'Proprietary engineering foundation — design system, component library and runtime standards behind every product.',
    layerAiOsTag: 'Intelligence',
    layerAiOsName: 'AI-OS',
    layerAiOsDesc:
      'Governed AI layer — copilots, agents, guardrails and a shared knowledge core. Governed intelligence, not bolt-on ChatGPT.',
    layerEngineTag: 'Automation',
    layerEngineName: 'Engine',
    layerEngineDesc:
      'High-performance execution engine for workflows, integrations, event processing and background jobs at scale.',
    layerRuntimeTag: 'Execution',
    layerRuntimeName: 'Runtime',
    layerRuntimeDesc:
      'The execution layer that runs apps and services — observability, environments and reliability built in.',
    layerBusinessOsTag: 'Operations',
    layerBusinessOsName: 'Business OS',
    layerBusinessOsDesc:
      'The operating system we run the company on — CRM, analytics, deploys, tasks and AI center in one platform.',
    layerGoldenTag: 'Product',
    layerGoldenName: 'Golden Screens',
    layerGoldenDesc:
      'Reference UI implementations validated before full build — cutting enterprise rework and aligning stakeholders early.',
  },
  businessOS: {
    eyebrow: 'Business OS',
    title: 'Enterprise software we use every day',
    description:
      'Command Center, AI Copilot, live activity, product portfolio, analytics and Framework health — the same platform we offer enterprise clients.',
    ctaExplore: 'Explore Business OS',
    ctaLive: 'View live status',
  },
  products: {
    eyebrow: 'Built with BuilderTudo',
    title: 'A real product portfolio, one engineering platform.',
    description:
      'Every product inherits Framework, Golden Screens, AI-OS and Engine — shipped with health scores, roadmaps and production architecture.',
    next: 'Next',
    viewProduct: 'View product →',
    caseStudy: 'Case study →',
    technologiesAria: '{{name}} technologies',
    healthScoreTitle: 'Health score',
    statusLive: 'Live',
    statusBeta: 'Beta',
    statusBuilding: 'Building',
    ctaStart: 'Start a project',
    ctaLive: 'View live status',
  },
  method: {
    eyebrow: 'BuilderTudo Method',
    title: 'From discovery to evolution',
    description:
      'A proprietary 8-step flow — every phase powered by Framework, Golden Screens, AI-OS and Engine.',
    ctaFull: 'Full methodology',
    ctaSchedule: 'Schedule discovery',
    step01Title: 'Discovery',
    step01Desc: 'Business goals, users, constraints and success metrics — a structured, senior intake.',
    step02Title: 'Product Method',
    step02Desc: 'Scope, priorities and delivery plan using our proprietary product methodology.',
    step03Title: 'Architecture',
    step03Desc: 'System design — stack, security, data model, integrations and scale plan.',
    step04Title: 'AI-OS',
    step04Desc: 'Intelligence layer design — copilots, guardrails and knowledge architecture.',
    step05Title: 'Engine',
    step05Desc: 'Automation, workflows and integration layer configured for execution at scale.',
    step06Title: 'Golden Screens',
    step06Desc: 'Reference UI implementations validated before full development begins.',
    step07Title: 'Deploy',
    step07Desc: 'Production release with monitoring, documentation and clean handoff.',
    step08Title: 'Evolution',
    step08Desc: 'Continuous improvement, feature evolution and dedicated engineering support.',
  },
  services: {
    eyebrow: 'Services',
    title: 'Platform engineering, not programming',
    description:
      'We sell engineering capability backed by a proprietary platform — every engagement inherits Framework, AI-OS and Business OS.',
    ctaStart: 'Start a project',
    ctaBook: 'Book a discovery call',
    ctaFramework: 'Explore the Framework',
    deliverablesAria: '{{title}} deliverables',
    items: {
      aiProductEngineering: {
        title: 'AI Product Engineering',
        description:
          'End-to-end product development with AI-native architecture — copilots, agents and governed intelligence from day one.',
        differentiator: 'Built on AI-OS with guardrails, not bolt-on ChatGPT integrations.',
        d1: 'AI architecture',
        d2: 'Copilot design',
        d3: 'MVP to scale',
        d4: 'Production AI',
      },
      enterpriseSaas: {
        title: 'Enterprise SaaS',
        description:
          'Multi-tenant platforms engineered for scale — security, compliance and performance from the first sprint.',
        differentiator: 'Golden Screens validated before build — reducing enterprise rework by 60%.',
        d1: 'Multi-tenant architecture',
        d2: 'SSO & RBAC',
        d3: 'Audit trails',
        d4: 'SLA design',
      },
      businessOperatingSystems: {
        title: 'Business Operating Systems',
        description:
          'Unified operational platforms connecting CRM, analytics, tasks, deploys and AI in one ecosystem.',
        differentiator: 'Framework Health metrics prove platform quality in real-time.',
        d1: 'CRM & pipeline',
        d2: 'Analytics hub',
        d3: 'Deploy tracking',
        d4: 'AI center',
      },
      aiIntegration: {
        title: 'AI Integration',
        description:
          'Embed governed intelligence — copilots, RAG, agents and automation with AI-OS guardrails.',
        differentiator: 'Decision trees and guardrails ensure compliance, not chaos.',
        d1: 'LLM integration',
        d2: 'Knowledge core',
        d3: 'Agent design',
        d4: 'AI governance',
      },
      internalPlatforms: {
        title: 'Internal Platforms',
        description:
          'Custom business operating systems — the same approach we use internally with Business OS.',
        differentiator: 'We eat our own cooking — Business OS is our live reference implementation.',
        d1: 'Command center',
        d2: 'Workflow design',
        d3: 'Integration layer',
        d4: 'Admin panels',
      },
      architecture: {
        title: 'Architecture Consulting',
        description:
          'System design for CTOs and founders — technical due diligence, stack decisions and scale planning.',
        differentiator: 'Recommendations based on 12 official products built on our own Framework.',
        d1: 'Architecture review',
        d2: 'Tech audit',
        d3: 'Scale planning',
        d4: 'Security assessment',
      },
    },
  },
  contact: {
    badge: "Let's build together",
    title: 'Ready to ship your next platform?',
    body: "Tell us about your project — whether you're scaling on Upwork, launching a SaaS or modernizing enterprise operations. We respond within 24 hours.",
    ctaStart: 'Start a project',
    ctaBook: 'Book a discovery call',
    ctaFramework: 'Explore Framework',
    ctaWhatsapp: 'WhatsApp',
    formName: 'Name *',
    formCompany: 'Company *',
    formPhone: 'Phone *',
    formEmail: 'Email *',
    formService: 'Service *',
    formMessage: 'Message *',
    formPlaceholderName: 'Your full name',
    formPlaceholderCompany: 'Company name',
    formPlaceholderPhone: '+1 or +55 with area code',
    formPlaceholderEmail: 'you@company.com',
    formPlaceholderMessage: 'Tell us about your goals, timeline and constraints…',
    formSelectService: 'Select a service',
    formSubmit: 'Send request',
    formSubmitting: 'Sending…',
    formReviewFields: 'Please review the highlighted fields.',
    formSuccess: 'Request received! We opened WhatsApp so you can complete your message.',
    formError: 'Unable to send right now. Try again or contact us via WhatsApp.',
    errName: 'Please enter your full name.',
    errCompany: 'Please enter your company name.',
    errPhone: 'Please enter a valid phone number with area code.',
    errEmail: 'Please enter a valid email address.',
    errService: 'Please select a service.',
    errMessage: 'Please describe your needs (min. 10 characters).',
    servicePlatformEngineering: 'Platform Engineering',
    serviceAiIntegration: 'AI Integration',
    serviceSaas: 'SaaS Development',
    serviceWeb: 'Web Application',
    serviceMobile: 'Mobile Application',
    serviceAutomation: 'Automation & Integration',
    serviceUx: 'UX/UI & Design System',
    serviceConsulting: 'Technology Consulting',
    serviceSquad: 'Dedicated Squad',
    serviceOther: 'Other',
    whatsappDefault:
      'Hello! I visited the BuilderTudo Technologies website and would like to request a quote.',
    whatsappLeadIntro:
      'Hello! I visited the BuilderTudo Technologies website and would like to request a quote.',
    whatsappLeadName: 'Name',
    whatsappLeadCompany: 'Company',
    whatsappLeadPhone: 'WhatsApp',
    whatsappLeadEmail: 'Email',
    whatsappLeadService: 'Requested service',
    whatsappLeadMessage: 'Message',
  },
  footer: {
    tagline: 'Digital product engineering platform.',
    description:
      'Framework, Business OS, AI-OS, Engine and 12 official products. Built in Brazil. Ready for the world.',
    mission: 'Platform engineering · AI-native · Enterprise-ready',
    company: 'Company',
    platform: 'Platform',
    products: 'Products',
    connect: 'Connect',
    resources: 'Resources',
    about: 'About',
    framework: 'Framework',
    businessOs: 'Business OS',
    method: 'Method',
    careers: 'Careers',
    aiPlatform: 'AI Platform',
    showcase: 'Showcase',
    liveStatus: 'Live Status',
    frameworkHealth: 'Framework Health',
    caseStudies: 'Case Studies',
    labs: 'Labs',
    productsLink: 'Products',
    methodLink: 'Method',
    servicesLink: 'Services',
    startProject: 'Start a Project',
    bookCall: 'Book a Call',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
}

/** @param {typeof en} source */
function deepMap(source, mapper) {
  /** @type {any} */
  const out = Array.isArray(source) ? [] : {}
  for (const [key, value] of Object.entries(source)) {
    out[key] = typeof value === 'object' && value !== null ? deepMap(value, mapper) : mapper(key, value)
  }
  return out
}

// Spanish (LATAM neutral) and PT-BR maps applied via explicit overrides for quality.
const esOverrides = {
  'common.skipToContent': 'Saltar al contenido principal',
  'common.startYourProject': 'Inicia tu proyecto',
  'common.explorePlatform': 'Explorar plataforma',
  'common.startAProject': 'Iniciar un proyecto',
  'common.bookDiscoveryCall': 'Agendar discovery call',
  'common.exploreFramework': 'Explorar Framework',
  'common.exploreBusinessOS': 'Explorar Business OS',
  'common.viewProducts': 'Ver productos',
  'common.viewLiveStatus': 'Ver estado en vivo',
  'common.backToTop': 'Volver arriba',
  'common.whatsappAria': 'Hablar por WhatsApp con BuilderTudo Technologies',
  'common.changeLanguage': 'Cambiar idioma',
  'common.openMenu': 'Abrir menú',
  'common.closeMenu': 'Cerrar menú',
  'common.themeToLight': 'Cambiar a modo claro',
  'common.themeToDark': 'Cambiar a modo oscuro',
  'common.homeAria': 'BuilderTudo Technologies — Inicio',
  'common.mainNavAria': 'Navegación principal',
  'common.platformStatusAria': 'Estado de la plataforma',
  'common.platformMetricsAria': 'Métricas de la plataforma',
  'common.allRightsReserved': 'Todos los derechos reservados.',
  'common.siteSlogan': 'Tecnología que transforma negocios.',
  'common.defaultDescription':
    'BuilderTudo Technologies — plataforma propietaria de ingeniería con IA. Framework, Business OS, AI-OS, Engine y 12 productos SaaS. Ingeniería enterprise para clientes globales.',
  'common.homeTitle': 'Plataforma propietaria de ingeniería con IA para empresas globales',
  'navigation.credibility': 'Credibilidad',
  'navigation.platform': 'Plataforma',
  'navigation.products': 'Productos',
  'navigation.method': 'Método',
  'navigation.services': 'Servicios',
  'navigation.contact': 'Contacto',
  'statusBar.aiEngineOnline': 'AI Engine en línea',
  'statusBar.businessOsConnected': 'Business OS conectado',
  'hero.badgePec': 'Product Engineering Company',
  'hero.badgeAiNative': 'AI Native',
  'hero.badgeEnterpriseSaas': 'Enterprise SaaS',
  'hero.title':
    'De la idea a producción. Construimos plataformas SaaS con IA que escalan.',
  'hero.lead':
    'BuilderTudo Technologies es una Product Engineering Company especializada en plataformas SaaS con IA. Diseñamos, construimos y desplegamos productos enterprise con nuestro Framework propietario, AI Engine y Business OS.',
  'hero.poweredBy': 'Powered by BuilderTudo Framework v2.1',
  'hero.ctaPrimary': 'Inicia tu proyecto',
  'hero.ctaSecondary': 'Explorar plataforma',
  'hero.metricProducts': 'Productos SaaS en vivo',
  'hero.metricComponents': 'Componentes reutilizables',
  'hero.metricAiNative': 'Arquitectura AI Native',
  'hero.metricHealth': 'Framework Health',
  'hero.metricUiSystems': 'Sistemas UI premium',
  'hero.metricEnterpriseValue': 'Enterprise',
  'hero.metricEnterpriseLabel': 'Ready',
  'hero.builtWith': 'Construido con',
  'hero.perfUptime': '99.99% uptime',
  'hero.perfEnterprise': 'Enterprise Ready',
  'hero.perfWhiteLabel': 'White Label Ready',
  'hero.overlayRevenue': 'Revenue',
  'hero.overlayPipeline': 'Pipeline',
  'hero.overlayDeploy': 'Deploy Status',
  'hero.overlayOnline': 'Online',
  'hero.overlayDeals': '12 deals',
  'hero.overlayLive': 'Live',
  'hero.showcaseEyebrow': 'Business OS · Demo en vivo',
  'hero.showcaseOpen': 'Abrir en Business OS →',
  'hero.showcaseEmpty':
    'Las demos en vivo de Business OS aparecen aquí cuando se capturan screenshots reales de la plataforma.',
  'hero.showcaseExploreBos': 'Explorar Business OS',
  'hero.showcaseExploreFramework': 'Explorar Framework',
  'hero.footerModules': '11 módulos',
  'hero.footerPlatform': 'Enterprise Platform',
  'purpose.eyebrow': 'Propósito',
  'purpose.title': 'Tecnología con propósito. Inteligencia con impacto.',
  'purpose.intro':
    'En BuilderTudo Technologies creemos que el software no existe solo para automatizar tareas. Existe para proteger el tiempo, crear oportunidades, reducir fricción, multiplicar conocimiento y ayudar a personas y empresas a lograr más con Inteligencia Artificial.',
  'purpose.missionLabel': 'Nuestra misión',
  'purpose.mission':
    'Crear tecnología que mejore la vida de las personas, transforme empresas y amplíe el potencial humano a través de la Inteligencia Artificial.',
  'purpose.pillarsAria': 'Pilares institucionales de BuilderTudo',
  'purpose.peopleFirstTitle': 'Personas primero',
  'purpose.peopleFirstDesc': 'Construimos tecnología para servir a las personas. Nunca al revés.',
  'purpose.aiAllyTitle': 'IA como aliada',
  'purpose.aiAllyDesc':
    'La Inteligencia Artificial debe amplificar capacidades humanas, no reemplazar propósito, creatividad o visión.',
  'purpose.engineeringTitle': 'Ingeniería con método',
  'purpose.engineeringDesc':
    'Cada producto se construye sobre nuestro Framework, AI Engine, Business OS y estándares de ingeniería reutilizables.',
  'purpose.impactTitle': 'Impacto real',
  'purpose.impactDesc':
    'Todo producto BuilderTudo debe dejar la vida del usuario mejor de lo que estaba antes.',
  'credibility.eyebrow': 'Credibilidad de ingeniería',
  'credibility.title': 'Números respaldados por el Framework',
  'credibility.description':
    'Cada métrica refleja uso real de la plataforma: componentes, tests, deploys y health scores de nuestra operación diaria.',
  'credibility.packages': 'Paquetes del Framework',
  'credibility.components': 'Componentes reutilizables',
  'credibility.products': 'Productos construidos',
  'credibility.tests': 'Tests automatizados',
  'platform.eyebrow': 'La plataforma BuilderTudo',
  'platform.title': 'Un stack propietario — no un conjunto de herramientas.',
  'platform.description':
    'Framework, AI-OS, Engine, Runtime, Business OS y Golden Screens. Una plataforma integrada que diseñamos nosotros, para que cada proyecto se entregue más rápido, más seguro y con calidad de producto.',
  'platform.ctaProducts': 'Ver productos',
  'platform.layerFrameworkTag': 'Fundación',
  'platform.layerFrameworkDesc':
    'Fundación de ingeniería propietaria: design system, component library y estándares de runtime detrás de cada producto.',
  'platform.layerAiOsTag': 'Inteligencia',
  'platform.layerAiOsDesc':
    'Capa de IA gobernada: copilots, agents, guardrails y knowledge core compartido. Inteligencia gobernada, no ChatGPT improvisado.',
  'platform.layerEngineTag': 'Automatización',
  'platform.layerEngineDesc':
    'Motor de ejecución de alto rendimiento para workflows, integraciones, eventos y jobs en background a escala.',
  'platform.layerRuntimeTag': 'Ejecución',
  'platform.layerRuntimeDesc':
    'La capa de ejecución que corre apps y servicios, con observabilidad, entornos y confiabilidad integradas.',
  'platform.layerBusinessOsTag': 'Operaciones',
  'platform.layerBusinessOsDesc':
    'El sistema operativo con el que operamos la empresa: CRM, analytics, deploys, tasks y AI center en una sola plataforma.',
  'platform.layerGoldenTag': 'Producto',
  'platform.layerGoldenDesc':
    'Implementaciones UI de referencia validadas antes del build completo, reduciendo retrabajo enterprise y alineando stakeholders.',
  'businessOS.title': 'Software enterprise que usamos todos los días',
  'businessOS.description':
    'Command Center, AI Copilot, actividad en vivo, portafolio de productos, analytics y Framework health: la misma plataforma que ofrecemos a clientes enterprise.',
  'businessOS.ctaLive': 'Ver estado en vivo',
  'products.eyebrow': 'Construido con BuilderTudo',
  'products.title': 'Un portafolio real de productos, una sola plataforma de ingeniería.',
  'products.description':
    'Cada producto hereda Framework, Golden Screens, AI-OS y Engine, con health scores, roadmaps y arquitectura de producción.',
  'products.next': 'Próximo',
  'products.viewProduct': 'Ver producto →',
  'products.caseStudy': 'Case study →',
  'products.technologiesAria': 'Tecnologías de {{name}}',
  'products.healthScoreTitle': 'Health score',
  'products.statusBuilding': 'En construcción',
  'products.ctaStart': 'Iniciar un proyecto',
  'products.ctaLive': 'Ver estado en vivo',
  'method.eyebrow': 'Método BuilderTudo',
  'method.title': 'Del discovery a la evolución',
  'method.description':
    'Un flujo propietario de 8 pasos: cada fase impulsada por Framework, Golden Screens, AI-OS y Engine.',
  'method.ctaFull': 'Metodología completa',
  'method.ctaSchedule': 'Agendar discovery',
  'method.step01Title': 'Discovery',
  'method.step01Desc':
    'Objetivos de negocio, usuarios, restricciones y métricas de éxito: un intake estructurado y senior.',
  'method.step02Title': 'Product Method',
  'method.step02Desc':
    'Alcance, prioridades y plan de entrega con nuestra metodología de producto propietaria.',
  'method.step03Title': 'Architecture',
  'method.step03Desc':
    'Diseño del sistema: stack, seguridad, modelo de datos, integraciones y plan de escala.',
  'method.step04Desc':
    'Diseño de la capa de inteligencia: copilots, guardrails y arquitectura de conocimiento.',
  'method.step05Desc':
    'Automatización, workflows y capa de integración configurados para ejecución a escala.',
  'method.step06Desc':
    'Implementaciones UI de referencia validadas antes de iniciar el desarrollo completo.',
  'method.step07Desc':
    'Release a producción con monitoreo, documentación y handoff limpio.',
  'method.step08Title': 'Evolution',
  'method.step08Desc':
    'Mejora continua, evolución de features y soporte de ingeniería dedicado.',
  'services.eyebrow': 'Servicios',
  'services.title': 'Platform engineering, no solo programación',
  'services.description':
    'Vendemos capacidad de ingeniería respaldada por una plataforma propietaria: cada engagement hereda Framework, AI-OS y Business OS.',
  'services.ctaStart': 'Iniciar un proyecto',
  'services.ctaBook': 'Agendar discovery call',
  'services.ctaFramework': 'Explorar el Framework',
  'services.deliverablesAria': 'Entregables de {{title}}',
  'services.items.aiProductEngineering.title': 'AI Product Engineering',
  'services.items.aiProductEngineering.description':
    'Desarrollo de producto de punta a punta con arquitectura AI-native: copilots, agents e inteligencia gobernada desde el día uno.',
  'services.items.aiProductEngineering.differentiator':
    'Construido sobre AI-OS con guardrails, no integraciones improvisadas de ChatGPT.',
  'services.items.aiProductEngineering.d1': 'Arquitectura de IA',
  'services.items.aiProductEngineering.d2': 'Diseño de copilots',
  'services.items.aiProductEngineering.d3': 'MVP a escala',
  'services.items.aiProductEngineering.d4': 'IA en producción',
  'services.items.enterpriseSaas.description':
    'Plataformas multi-tenant diseñadas para escala: seguridad, compliance y performance desde el primer sprint.',
  'services.items.enterpriseSaas.differentiator':
    'Golden Screens validados antes del build, reduciendo retrabajo enterprise en un 60%.',
  'services.items.enterpriseSaas.d1': 'Arquitectura multi-tenant',
  'services.items.enterpriseSaas.d3': 'Audit trails',
  'services.items.enterpriseSaas.d4': 'Diseño de SLA',
  'services.items.businessOperatingSystems.title': 'Business Operating Systems',
  'services.items.businessOperatingSystems.description':
    'Plataformas operativas unificadas que conectan CRM, analytics, tasks, deploys e IA en un solo ecosistema.',
  'services.items.businessOperatingSystems.differentiator':
    'Las métricas de Framework Health demuestran calidad de plataforma en tiempo real.',
  'services.items.businessOperatingSystems.d1': 'CRM y pipeline',
  'services.items.businessOperatingSystems.d2': 'Hub de analytics',
  'services.items.businessOperatingSystems.d3': 'Tracking de deploys',
  'services.items.businessOperatingSystems.d4': 'AI center',
  'services.items.aiIntegration.description':
    'Integra inteligencia gobernada: copilots, RAG, agents y automatización con guardrails de AI-OS.',
  'services.items.aiIntegration.differentiator':
    'Decision trees y guardrails aseguran compliance, no caos.',
  'services.items.aiIntegration.d1': 'Integración LLM',
  'services.items.aiIntegration.d2': 'Knowledge core',
  'services.items.aiIntegration.d3': 'Diseño de agents',
  'services.items.aiIntegration.d4': 'Gobernanza de IA',
  'services.items.internalPlatforms.title': 'Plataformas internas',
  'services.items.internalPlatforms.description':
    'Sistemas operativos de negocio a medida: el mismo enfoque que usamos internamente con Business OS.',
  'services.items.internalPlatforms.differentiator':
    'Usamos lo que construimos: Business OS es nuestra implementación de referencia en vivo.',
  'services.items.internalPlatforms.d1': 'Command center',
  'services.items.internalPlatforms.d2': 'Diseño de workflows',
  'services.items.internalPlatforms.d3': 'Capa de integración',
  'services.items.internalPlatforms.d4': 'Paneles admin',
  'services.items.architecture.title': 'Consultoría de arquitectura',
  'services.items.architecture.description':
    'Diseño de sistemas para CTOs y founders: due diligence técnica, decisiones de stack y planeación de escala.',
  'services.items.architecture.differentiator':
    'Recomendaciones basadas en 12 productos oficiales construidos sobre nuestro propio Framework.',
  'services.items.architecture.d1': 'Review de arquitectura',
  'services.items.architecture.d2': 'Tech audit',
  'services.items.architecture.d3': 'Planeación de escala',
  'services.items.architecture.d4': 'Evaluación de seguridad',
  'contact.badge': 'Construyamos juntos',
  'contact.title': '¿Listo para lanzar tu próxima plataforma?',
  'contact.body':
    'Cuéntanos sobre tu proyecto: ya sea que estés escalando en Upwork, lanzando un SaaS o modernizando operaciones enterprise. Respondemos en menos de 24 horas.',
  'contact.ctaStart': 'Iniciar un proyecto',
  'contact.ctaBook': 'Agendar discovery call',
  'contact.formName': 'Nombre *',
  'contact.formCompany': 'Empresa *',
  'contact.formPhone': 'Teléfono *',
  'contact.formEmail': 'Email *',
  'contact.formService': 'Servicio *',
  'contact.formMessage': 'Mensaje *',
  'contact.formPlaceholderName': 'Tu nombre completo',
  'contact.formPlaceholderCompany': 'Nombre de la empresa',
  'contact.formPlaceholderPhone': '+52, +57, +54 u otro con código de área',
  'contact.formPlaceholderEmail': 'tu@empresa.com',
  'contact.formPlaceholderMessage': 'Cuéntanos objetivos, timeline y restricciones…',
  'contact.formSelectService': 'Selecciona un servicio',
  'contact.formSubmit': 'Enviar solicitud',
  'contact.formSubmitting': 'Enviando…',
  'contact.formReviewFields': 'Revisa los campos resaltados.',
  'contact.formSuccess':
    '¡Solicitud recibida! Abrimos WhatsApp para que completes tu mensaje.',
  'contact.formError':
    'No pudimos enviar ahora. Intenta de nuevo o contáctanos por WhatsApp.',
  'contact.errName': 'Ingresa tu nombre completo.',
  'contact.errCompany': 'Ingresa el nombre de tu empresa.',
  'contact.errPhone': 'Ingresa un teléfono válido con código de área.',
  'contact.errEmail': 'Ingresa un email válido.',
  'contact.errService': 'Selecciona un servicio.',
  'contact.errMessage': 'Describe tu necesidad (mín. 10 caracteres).',
  'contact.servicePlatformEngineering': 'Platform Engineering',
  'contact.serviceAiIntegration': 'Integración de IA',
  'contact.serviceSaas': 'Desarrollo SaaS',
  'contact.serviceWeb': 'Aplicación web',
  'contact.serviceMobile': 'Aplicación móvil',
  'contact.serviceAutomation': 'Automatización e integración',
  'contact.serviceUx': 'UX/UI y Design System',
  'contact.serviceConsulting': 'Consultoría tecnológica',
  'contact.serviceSquad': 'Squad dedicado',
  'contact.serviceOther': 'Otro',
  'contact.whatsappDefault':
    '¡Hola! Visité el sitio de BuilderTudo Technologies y me gustaría solicitar una cotización.',
  'contact.whatsappLeadIntro':
    '¡Hola! Visité el sitio de BuilderTudo Technologies y me gustaría solicitar una cotización.',
  'contact.whatsappLeadName': 'Nombre',
  'contact.whatsappLeadCompany': 'Empresa',
  'contact.whatsappLeadService': 'Servicio solicitado',
  'contact.whatsappLeadMessage': 'Mensaje',
  'footer.tagline': 'Plataforma de ingeniería de productos digitales.',
  'footer.description':
    'Framework, Business OS, AI-OS, Engine y 12 productos oficiales. Hecho en Brasil. Listo para el mundo.',
  'footer.mission': 'Platform engineering · AI-native · Enterprise-ready',
  'footer.company': 'Empresa',
  'footer.platform': 'Plataforma',
  'footer.products': 'Productos',
  'footer.connect': 'Conectar',
  'footer.resources': 'Recursos',
  'footer.about': 'Acerca de',
  'footer.method': 'Método',
  'footer.careers': 'Carreras',
  'footer.aiPlatform': 'Plataforma de IA',
  'footer.showcase': 'Showcase',
  'footer.liveStatus': 'Estado en vivo',
  'footer.caseStudies': 'Case Studies',
  'footer.productsLink': 'Productos',
  'footer.methodLink': 'Método',
  'footer.servicesLink': 'Servicios',
  'footer.startProject': 'Iniciar un proyecto',
  'footer.bookCall': 'Agendar una llamada',
  'footer.privacy': 'Política de privacidad',
  'footer.terms': 'Términos de uso',
}

const ptOverrides = {
  'common.skipToContent': 'Ir para o conteúdo principal',
  'common.startYourProject': 'Comece seu projeto',
  'common.explorePlatform': 'Explorar plataforma',
  'common.startAProject': 'Iniciar um projeto',
  'common.bookDiscoveryCall': 'Agendar discovery call',
  'common.exploreFramework': 'Explorar Framework',
  'common.exploreBusinessOS': 'Explorar Business OS',
  'common.viewProducts': 'Ver produtos',
  'common.viewLiveStatus': 'Ver status ao vivo',
  'common.backToTop': 'Voltar ao topo',
  'common.whatsappAria': 'Falar no WhatsApp da BuilderTudo Technologies',
  'common.changeLanguage': 'Alterar idioma',
  'common.openMenu': 'Abrir menu',
  'common.closeMenu': 'Fechar menu',
  'common.themeToLight': 'Mudar para modo claro',
  'common.themeToDark': 'Mudar para modo escuro',
  'common.homeAria': 'BuilderTudo Technologies — Início',
  'common.mainNavAria': 'Navegação principal',
  'common.platformStatusAria': 'Status da plataforma',
  'common.platformMetricsAria': 'Métricas da plataforma',
  'common.allRightsReserved': 'Todos os direitos reservados.',
  'common.siteSlogan': 'Tecnologia que transforma negócios.',
  'common.defaultDescription':
    'BuilderTudo Technologies — plataforma proprietária de engenharia com IA. Framework, Business OS, AI-OS, Engine e 12 produtos SaaS. Engenharia enterprise para clientes globais.',
  'common.homeTitle': 'Plataforma proprietária de engenharia com IA para empresas globais',
  'navigation.credibility': 'Credibilidade',
  'navigation.platform': 'Plataforma',
  'navigation.products': 'Produtos',
  'navigation.method': 'Método',
  'navigation.services': 'Serviços',
  'navigation.contact': 'Contato',
  'statusBar.aiEngineOnline': 'AI Engine online',
  'statusBar.businessOsConnected': 'Business OS conectado',
  'hero.title':
    'Da ideia à produção. Construímos plataformas SaaS com IA que escalam.',
  'hero.lead':
    'A BuilderTudo Technologies é uma Product Engineering Company especializada em plataformas SaaS com IA. Projetamos, construímos e entregamos produtos enterprise com nosso Framework proprietário, AI Engine e Business OS.',
  'hero.ctaPrimary': 'Comece seu projeto',
  'hero.ctaSecondary': 'Explorar plataforma',
  'hero.metricProducts': 'Produtos SaaS ao vivo',
  'hero.metricComponents': 'Componentes reutilizáveis',
  'hero.metricAiNative': 'Arquitetura AI Native',
  'hero.metricUiSystems': 'Sistemas de UI premium',
  'hero.builtWith': 'Construído com',
  'hero.showcaseEyebrow': 'Business OS · Demo ao vivo',
  'hero.showcaseOpen': 'Abrir no Business OS →',
  'hero.showcaseEmpty':
    'As demos ao vivo do Business OS aparecem aqui quando screenshots reais da plataforma são capturados.',
  'hero.showcaseExploreBos': 'Explorar Business OS',
  'hero.showcaseExploreFramework': 'Explorar Framework',
  'hero.footerModules': '11 módulos',
  'purpose.eyebrow': 'Propósito',
  'purpose.title': 'Tecnologia com propósito. Inteligência com impacto.',
  'purpose.intro':
    'Na BuilderTudo Technologies, acreditamos que software não existe apenas para automatizar tarefas. Ele existe para preservar tempo, criar oportunidades, reduzir atrito, multiplicar conhecimento e permitir que pessoas e empresas alcancem mais com Inteligência Artificial.',
  'purpose.missionLabel': 'Nossa missão',
  'purpose.mission':
    'Criar tecnologia que melhora a vida das pessoas, transforma empresas e multiplica o potencial humano através da Inteligência Artificial.',
  'purpose.pillarsAria': 'Pilares institucionais da BuilderTudo',
  'purpose.peopleFirstTitle': 'Pessoas em primeiro lugar',
  'purpose.peopleFirstDesc': 'Criamos tecnologia para servir pessoas. Nunca o contrário.',
  'purpose.aiAllyTitle': 'IA como aliada',
  'purpose.aiAllyDesc':
    'A Inteligência Artificial deve ampliar capacidades humanas, não substituir propósito, criatividade ou visão.',
  'purpose.engineeringTitle': 'Engenharia com método',
  'purpose.engineeringDesc':
    'Cada produto é construído sobre nosso Framework, AI Engine, Business OS e padrões reutilizáveis de engenharia.',
  'purpose.impactTitle': 'Impacto real',
  'purpose.impactDesc':
    'Todo produto BuilderTudo deve deixar a vida do usuário melhor do que estava antes.',
  'credibility.eyebrow': 'Credibilidade de engenharia',
  'credibility.title': 'Números respaldados pelo Framework',
  'credibility.description':
    'Cada métrica reflete uso real da plataforma — componentes, testes, deploys e health scores da nossa operação diária.',
  'credibility.packages': 'Pacotes do Framework',
  'credibility.components': 'Componentes reutilizáveis',
  'credibility.products': 'Produtos construídos',
  'credibility.tests': 'Testes automatizados',
  'platform.eyebrow': 'A plataforma BuilderTudo',
  'platform.title': 'Um stack proprietário — não um conjunto de ferramentas.',
  'platform.description':
    'Framework, AI-OS, Engine, Runtime, Business OS e Golden Screens. Uma plataforma integrada que nós mesmos engenheiramos, para que cada projeto entregue mais rápido, com mais segurança e qualidade de produto.',
  'platform.ctaProducts': 'Ver produtos',
  'platform.layerFrameworkTag': 'Fundação',
  'platform.layerFrameworkDesc':
    'Fundação proprietária de engenharia — design system, component library e padrões de runtime por trás de cada produto.',
  'platform.layerAiOsTag': 'Inteligência',
  'platform.layerAiOsDesc':
    'Camada de IA governada — copilots, agents, guardrails e knowledge core compartilhado. Inteligência governada, não ChatGPT improvisado.',
  'platform.layerEngineTag': 'Automação',
  'platform.layerEngineDesc':
    'Motor de execução de alta performance para workflows, integrações, processamento de eventos e jobs em background em escala.',
  'platform.layerRuntimeTag': 'Execução',
  'platform.layerRuntimeDesc':
    'A camada de execução que roda apps e serviços — com observabilidade, ambientes e confiabilidade nativos.',
  'platform.layerBusinessOsTag': 'Operações',
  'platform.layerBusinessOsDesc':
    'O sistema operacional com o qual operamos a empresa — CRM, analytics, deploys, tasks e AI center em uma só plataforma.',
  'platform.layerGoldenTag': 'Produto',
  'platform.layerGoldenDesc':
    'Implementações de UI de referência validadas antes do build completo — reduzindo retrabalho enterprise e alinhando stakeholders cedo.',
  'businessOS.title': 'Software enterprise que usamos todos os dias',
  'businessOS.description':
    'Command Center, AI Copilot, atividade ao vivo, portfólio de produtos, analytics e Framework health — a mesma plataforma que oferecemos a clientes enterprise.',
  'businessOS.ctaLive': 'Ver status ao vivo',
  'products.eyebrow': 'Construído com BuilderTudo',
  'products.title': 'Um portfólio real de produtos, uma plataforma de engenharia.',
  'products.description':
    'Cada produto herda Framework, Golden Screens, AI-OS e Engine — com health scores, roadmaps e arquitetura de produção.',
  'products.next': 'Próximo',
  'products.viewProduct': 'Ver produto →',
  'products.caseStudy': 'Case study →',
  'products.technologiesAria': 'Tecnologias de {{name}}',
  'products.statusBuilding': 'Em construção',
  'products.ctaStart': 'Iniciar um projeto',
  'products.ctaLive': 'Ver status ao vivo',
  'method.eyebrow': 'Método BuilderTudo',
  'method.title': 'Do discovery à evolução',
  'method.description':
    'Um fluxo proprietário de 8 etapas — cada fase impulsionada por Framework, Golden Screens, AI-OS e Engine.',
  'method.ctaFull': 'Metodologia completa',
  'method.ctaSchedule': 'Agendar discovery',
  'method.step01Desc':
    'Objetivos de negócio, usuários, restrições e métricas de sucesso — um intake estruturado e sênior.',
  'method.step02Desc':
    'Escopo, prioridades e plano de entrega com nossa metodologia proprietária de produto.',
  'method.step03Desc':
    'Design do sistema — stack, segurança, modelo de dados, integrações e plano de escala.',
  'method.step04Desc':
    'Design da camada de inteligência — copilots, guardrails e arquitetura de conhecimento.',
  'method.step05Desc':
    'Automação, workflows e camada de integração configurados para execução em escala.',
  'method.step06Desc':
    'Implementações de UI de referência validadas antes do início do desenvolvimento completo.',
  'method.step07Desc':
    'Release em produção com monitoramento, documentação e handoff limpo.',
  'method.step08Desc':
    'Melhoria contínua, evolução de features e suporte dedicado de engenharia.',
  'services.eyebrow': 'Serviços',
  'services.title': 'Platform engineering, não apenas programação',
  'services.description':
    'Vendemos capacidade de engenharia respaldada por uma plataforma proprietária — cada engagement herda Framework, AI-OS e Business OS.',
  'services.ctaStart': 'Iniciar um projeto',
  'services.ctaBook': 'Agendar discovery call',
  'services.ctaFramework': 'Explorar o Framework',
  'services.deliverablesAria': 'Entregáveis de {{title}}',
  'services.items.aiProductEngineering.description':
    'Desenvolvimento de produto ponta a ponta com arquitetura AI-native — copilots, agents e inteligência governada desde o primeiro dia.',
  'services.items.aiProductEngineering.differentiator':
    'Construído sobre AI-OS com guardrails, não integrações improvisadas de ChatGPT.',
  'services.items.aiProductEngineering.d1': 'Arquitetura de IA',
  'services.items.aiProductEngineering.d2': 'Design de copilots',
  'services.items.aiProductEngineering.d3': 'MVP à escala',
  'services.items.aiProductEngineering.d4': 'IA em produção',
  'services.items.enterpriseSaas.description':
    'Plataformas multi-tenant engenheiradas para escala — segurança, compliance e performance desde o primeiro sprint.',
  'services.items.enterpriseSaas.differentiator':
    'Golden Screens validados antes do build — reduzindo retrabalho enterprise em 60%.',
  'services.items.enterpriseSaas.d1': 'Arquitetura multi-tenant',
  'services.items.enterpriseSaas.d4': 'Design de SLA',
  'services.items.businessOperatingSystems.description':
    'Plataformas operacionais unificadas conectando CRM, analytics, tasks, deploys e IA em um único ecossistema.',
  'services.items.businessOperatingSystems.differentiator':
    'Métricas de Framework Health comprovam qualidade da plataforma em tempo real.',
  'services.items.businessOperatingSystems.d1': 'CRM e pipeline',
  'services.items.businessOperatingSystems.d2': 'Hub de analytics',
  'services.items.businessOperatingSystems.d3': 'Tracking de deploys',
  'services.items.aiIntegration.description':
    'Incorpore inteligência governada — copilots, RAG, agents e automação com guardrails do AI-OS.',
  'services.items.aiIntegration.differentiator':
    'Decision trees e guardrails garantem compliance, não caos.',
  'services.items.aiIntegration.d1': 'Integração LLM',
  'services.items.aiIntegration.d3': 'Design de agents',
  'services.items.aiIntegration.d4': 'Governança de IA',
  'services.items.internalPlatforms.title': 'Plataformas internas',
  'services.items.internalPlatforms.description':
    'Sistemas operacionais de negócio sob medida — a mesma abordagem que usamos internamente com o Business OS.',
  'services.items.internalPlatforms.differentiator':
    'Usamos o que construímos — o Business OS é nossa implementação de referência ao vivo.',
  'services.items.internalPlatforms.d2': 'Design de workflows',
  'services.items.internalPlatforms.d3': 'Camada de integração',
  'services.items.internalPlatforms.d4': 'Painéis admin',
  'services.items.architecture.title': 'Consultoria de arquitetura',
  'services.items.architecture.description':
    'Design de sistemas para CTOs e founders — due diligence técnica, decisões de stack e planejamento de escala.',
  'services.items.architecture.differentiator':
    'Recomendações baseadas em 12 produtos oficiais construídos no nosso próprio Framework.',
  'services.items.architecture.d1': 'Review de arquitetura',
  'services.items.architecture.d3': 'Planejamento de escala',
  'services.items.architecture.d4': 'Avaliação de segurança',
  'contact.badge': 'Vamos construir juntos',
  'contact.title': 'Pronto para lançar sua próxima plataforma?',
  'contact.body':
    'Conte sobre o seu projeto — seja escalando no Upwork, lançando um SaaS ou modernizando operações enterprise. Respondemos em até 24 horas.',
  'contact.ctaStart': 'Iniciar um projeto',
  'contact.ctaBook': 'Agendar discovery call',
  'contact.formName': 'Nome *',
  'contact.formCompany': 'Empresa *',
  'contact.formPhone': 'Telefone *',
  'contact.formEmail': 'E-mail *',
  'contact.formService': 'Serviço *',
  'contact.formMessage': 'Mensagem *',
  'contact.formPlaceholderName': 'Seu nome completo',
  'contact.formPlaceholderCompany': 'Nome da empresa',
  'contact.formPlaceholderPhone': '+55 com DDD',
  'contact.formPlaceholderEmail': 'voce@empresa.com',
  'contact.formPlaceholderMessage': 'Conte objetivos, prazo e restrições…',
  'contact.formSelectService': 'Selecione um serviço',
  'contact.formSubmit': 'Enviar solicitação',
  'contact.formSubmitting': 'Enviando…',
  'contact.formReviewFields': 'Revise os campos destacados.',
  'contact.formSuccess':
    'Solicitação recebida! Abrimos o WhatsApp para você concluir a mensagem.',
  'contact.formError':
    'Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.',
  'contact.errName': 'Informe seu nome completo.',
  'contact.errCompany': 'Informe o nome da empresa.',
  'contact.errPhone': 'Informe um telefone válido com DDD.',
  'contact.errEmail': 'Informe um e-mail válido.',
  'contact.errService': 'Selecione um serviço.',
  'contact.errMessage': 'Descreva sua necessidade (mín. 10 caracteres).',
  'contact.serviceAiIntegration': 'Integração de IA',
  'contact.serviceSaas': 'Desenvolvimento SaaS',
  'contact.serviceWeb': 'Aplicação web',
  'contact.serviceMobile': 'Aplicação mobile',
  'contact.serviceAutomation': 'Automação e integração',
  'contact.serviceUx': 'UX/UI e Design System',
  'contact.serviceConsulting': 'Consultoria tecnológica',
  'contact.serviceSquad': 'Squad dedicado',
  'contact.serviceOther': 'Outro',
  'contact.whatsappDefault':
    'Olá! Visitei o site da BuilderTudo Technologies e gostaria de solicitar um orçamento.',
  'contact.whatsappLeadIntro':
    'Olá! Visitei o site da BuilderTudo Technologies e gostaria de solicitar um orçamento.',
  'contact.whatsappLeadName': 'Nome',
  'contact.whatsappLeadCompany': 'Empresa',
  'contact.whatsappLeadEmail': 'E-mail',
  'contact.whatsappLeadService': 'Serviço desejado',
  'contact.whatsappLeadMessage': 'Mensagem',
  'footer.tagline': 'Plataforma de engenharia de produtos digitais.',
  'footer.description':
    'Framework, Business OS, AI-OS, Engine e 12 produtos oficiais. Feito no Brasil. Pronto para o mundo.',
  'footer.company': 'Empresa',
  'footer.platform': 'Plataforma',
  'footer.products': 'Produtos',
  'footer.connect': 'Conectar',
  'footer.resources': 'Recursos',
  'footer.about': 'Sobre',
  'footer.method': 'Método',
  'footer.careers': 'Carreiras',
  'footer.aiPlatform': 'Plataforma de IA',
  'footer.liveStatus': 'Status ao vivo',
  'footer.productsLink': 'Produtos',
  'footer.methodLink': 'Método',
  'footer.servicesLink': 'Serviços',
  'footer.startProject': 'Iniciar um projeto',
  'footer.bookCall': 'Agendar uma call',
  'footer.privacy': 'Política de Privacidade',
  'footer.terms': 'Termos de Uso',
}

function applyOverrides(base, overrides) {
  const clone = structuredClone(base)
  for (const [path, value] of Object.entries(overrides)) {
    const parts = path.split('.')
    let cursor = clone
    for (let i = 0; i < parts.length - 1; i += 1) {
      cursor = cursor[parts[i]]
    }
    cursor[parts[parts.length - 1]] = value
  }
  return clone
}

function writeLocale(name, exportName, data) {
  const body = `import type { MessageTree } from '../translate'

export const ${exportName} = ${JSON.stringify(data, null, 2)} as const satisfies MessageTree
`
  writeFileSync(join(outDir, name), body, 'utf8')
}

const es = applyOverrides(en, esOverrides)
const ptBR = applyOverrides(en, ptOverrides)

writeLocale('en.ts', 'en', en)
writeLocale('es.ts', 'es', es)
writeLocale('pt-BR.ts', 'ptBR', ptBR)

writeFileSync(
  join(outDir, 'index.ts'),
  `import type { Locale } from '../config'
import type { MessageTree } from '../translate'
import { en } from './en'
import { es } from './es'
import { ptBR } from './pt-BR'

export const dictionaries: Record<Locale, MessageTree> = {
  en,
  es,
  'pt-BR': ptBR,
}
`,
  'utf8',
)

console.log('Locales generated:', Object.keys(en).length, 'namespaces')
