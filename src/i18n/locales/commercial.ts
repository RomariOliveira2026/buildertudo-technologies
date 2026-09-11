import type { MessageTree } from '../translate'

export const commercialPtBR = {
  hero: {
    kicker: 'Design + Tecnologia + Estratégia + IA',
    title: 'Criamos presença digital inteligente para empresas que querem vender mais.',
    lead: 'Sites profissionais, rápidos e estrategicamente construídos para transformar visitantes em oportunidades de negócio.',
    support: 'Seu site não precisa apenas existir. Ele precisa trabalhar para sua empresa.',
    ctaPrimary: 'Quero criar meu site',
    ctaSecondary: 'Conhecer soluções',
  },
  problem: {
    eyebrow: 'O problema',
    title: 'Ter um site não significa ter presença digital.',
    description:
      'Muitas empresas publicam uma página e esperam resultado. Sem clareza, sem caminho de contato e sem uma experiência profissional, o site vira um cartão de visitas parado.',
    transition: 'A BuilderTudo transforma presença digital em uma ferramenta comercial.',
    items: {
      outdated: {
        title: 'Site antigo',
        description: 'A aparência comunica uma empresa que parou no tempo.',
      },
      mobile: {
        title: 'Experiência ruim no celular',
        description: 'A maior parte das visitas acontece no smartphone — e o site não acompanha.',
      },
      slow: {
        title: 'Carregamento lento',
        description: 'O visitante desiste antes de entender o que a empresa faz.',
      },
      message: {
        title: 'Mensagem confusa',
        description: 'O negócio existe, mas a oferta não fica evidente nos primeiros segundos.',
      },
      cta: {
        title: 'Ausência de CTA',
        description: 'Não há um próximo passo claro para pedir orçamento ou iniciar contato.',
      },
      contact: {
        title: 'Contato difícil de encontrar',
        description: 'WhatsApp, formulário e informações da empresa ficam escondidos.',
      },
      unprofessional: {
        title: 'Aparência pouco profissional',
        description: 'A imagem digital não corresponde à qualidade real do negócio.',
      },
      'no-opportunities': {
        title: 'Site que não gera oportunidades',
        description: 'Há visitas, mas elas não se transformam em conversas comerciais.',
      },
    },
  },
  solutions: {
    eyebrow: 'Soluções',
    title: 'Presença digital com objetivo comercial.',
    description: 'Escolha a estrutura que melhor representa o momento do seu negócio.',
    items: {
      institutional: {
        title: 'Sites Institucionais',
        description: 'Presença profissional para empresas e marcas.',
      },
      landing: {
        title: 'Landing Pages',
        description: 'Páginas focadas em campanhas, produtos e conversão.',
      },
      commercial: {
        title: 'Sites Comerciais',
        description: 'Estruturas pensadas para apresentar produtos, serviços e gerar contatos.',
      },
      custom: {
        title: 'Projetos Personalizados',
        description: 'Soluções web desenvolvidas conforme necessidades específicas do negócio.',
      },
    },
  },
  plans: {
    eyebrow: 'Criação de sites',
    title: 'Escolha o ponto de partida ideal para o seu negócio.',
    description: 'Três caminhos claros, com valores iniciais para você avançar com previsibilidade.',
    featured: 'Mais escolhido',
    priceFrom: 'A partir de {{price}}',
    express: {
      name: 'Site Express',
      audience: 'Indicado para profissionais, microempresas, negócios locais e quem ainda não possui presença profissional.',
      cta: 'Quero o Site Express',
      f1: 'Página profissional One Page',
      f2: 'Layout responsivo',
      f3: 'Integração com WhatsApp',
      f4: 'Formulário de contato',
      f5: 'Configuração básica de SEO',
      f6: 'Publicação',
      f7: 'Orientação para domínio',
    },
    business: {
      name: 'Site Business',
      audience: 'Indicado para empresas que desejam uma presença digital mais completa.',
      cta: 'Quero meu Site Business',
      f1: 'Até aproximadamente 5–7 páginas',
      f2: 'Apresentação institucional',
      f3: 'Produtos ou serviços',
      f4: 'Páginas estratégicas',
      f5: 'WhatsApp',
      f6: 'Formulário de contato',
      f7: 'SEO básico',
      f8: 'Estrutura orientada à conversão',
      f9: 'Responsividade',
      f10: 'Publicação',
    },
    premium: {
      name: 'Site Premium',
      audience: 'Para projetos mais completos e personalizados.',
      cta: 'Quero o Site Premium',
      note: 'Projeto sob análise',
      f1: 'Catálogo digital',
      f2: 'Páginas avançadas',
      f3: 'Integrações',
      f4: 'Funcionalidades especiais',
      f5: 'Automações',
      f6: 'Estrutura comercial personalizada',
    },
  },
  buildercare: {
    eyebrow: 'BuilderCare',
    title: 'Seu site publicado é apenas o começo.',
    description:
      'A BuilderTudo pode continuar cuidando da estrutura depois da publicação — com manutenção, suporte e evolução contínua, no ritmo do seu negócio.',
    cta: 'Conhecer o BuilderCare',
    futureNote: 'Planos de acompanhamento poderão ser detalhados conforme a necessidade de cada projeto.',
    items: {
      maintenance: {
        title: 'Manutenção',
        description: 'Cuidado contínuo para manter o site estável e atual.',
      },
      updates: {
        title: 'Atualizações',
        description: 'Ajustes de conteúdo, estrutura e melhorias pontuais.',
      },
      support: {
        title: 'Suporte',
        description: 'Canal para dúvidas e encaminhamento técnico depois da publicação.',
      },
      monitoring: {
        title: 'Monitoramento',
        description: 'Acompanhamento da estrutura publicada para identificar necessidades.',
      },
      'small-changes': {
        title: 'Pequenas alterações',
        description: 'Mudanças objetivas sem reabrir o projeto do zero.',
      },
      technical: {
        title: 'Acompanhamento técnico',
        description: 'Olhar contínuo sobre o que precisa evoluir na presença digital.',
      },
      improvements: {
        title: 'Melhorias contínuas',
        description: 'Evolução gradual da experiência, da mensagem e dos caminhos de contato.',
      },
    },
  },
  portfolio: {
    eyebrow: 'Projetos',
    title: 'Projetos construídos para funcionar no mundo real.',
    description:
      'Estes são projetos internos da BuilderTudo. Não representam clientes externos. Cada um demonstra capacidade de construir estruturas digitais com propósito.',
    ownerLabel: 'Projeto BuilderTudo',
    cta: 'Visualizar',
    empty: 'Novos cases serão publicados aqui conforme os projetos forem aprovados para divulgação.',
    categories: {
      marketing: 'Conteúdo e marketing',
      legal: 'Serviços profissionais',
      health: 'Saúde',
      education: 'Educação',
      prevention: 'Operação e prevenção',
    },
    items: {
      contentfy: {
        name: 'ContentFy',
        description: 'Estrutura digital da BuilderTudo para organização e produção de conteúdo com consistência de marca.',
      },
      jurismind: {
        name: 'JurisMind',
        description: 'Projeto BuilderTudo voltado à organização e produtividade no contexto jurídico.',
      },
      blindcare: {
        name: 'BlindCare',
        description: 'Projeto BuilderTudo focado em cuidado, acessibilidade e jornada digital na área da saúde.',
      },
      professoria: {
        name: 'ProfessorIA',
        description: 'Projeto BuilderTudo para apoiar jornadas educacionais com uma experiência digital clara.',
      },
      prevenpro: {
        name: 'PrevenPro',
        description: 'Projeto BuilderTudo pensado para organização de rotinas de prevenção e operação.',
      },
      'proodonto-smart': {
        name: 'ProOdonto Smart',
        description: 'Projeto BuilderTudo para presença e gestão digital no segmento odontológico.',
      },
    },
  },
  process: {
    eyebrow: 'Como trabalhamos',
    title: 'Um fluxo simples, do diagnóstico à evolução.',
    description: 'Cada etapa existe para reduzir risco, alinhar expectativa e publicar uma presença digital que trabalha pela empresa.',
    steps: {
      diagnosis: {
        title: 'Diagnóstico',
        description: 'Entendemos negócio, público e objetivo.',
      },
      strategy: {
        title: 'Estratégia',
        description: 'Definimos estrutura, conteúdo e jornada.',
      },
      build: {
        title: 'Construção',
        description: 'Desenvolvemos a experiência digital.',
      },
      validation: {
        title: 'Validação',
        description: 'Testamos desktop, tablet e mobile.',
      },
      publish: {
        title: 'Publicação',
        description: 'Colocamos o projeto no ar.',
      },
      evolution: {
        title: 'Evolução',
        description: 'BuilderCare pode assumir manutenção e melhorias.',
      },
    },
  },
  differentials: {
    eyebrow: 'Diferenciais',
    title: 'Mais do que desenvolvimento.',
    description: 'A BuilderTudo une desenho, mensagem e tecnologia para a presença digital gerar conversa comercial.',
    items: {
      strategy: {
        title: 'Estratégia Comercial',
        description: 'Pensamos primeiro no objetivo do negócio.',
      },
      responsive: {
        title: 'Design Responsivo',
        description: 'Experiência profissional em diferentes telas.',
      },
      technology: {
        title: 'Tecnologia Moderna',
        description: 'Estruturas rápidas, seguras e preparadas para evoluir.',
      },
      copy: {
        title: 'Copy Orientada à Ação',
        description: 'Conteúdo construído para conduzir o visitante.',
      },
      ai: {
        title: 'Inteligência Artificial',
        description: 'IA utilizada como acelerador de produtividade, análise e desenvolvimento — sem substituir estratégia humana.',
      },
    },
  },
  segments: {
    eyebrow: 'Segmentos',
    title: 'Soluções adaptáveis a diferentes negócios.',
    description:
      'Atendemos empresas e profissionais de mercados distintos. Os exemplos abaixo ilustram capacidade de adaptação — não uma lista de clientes.',
    items: {
      industry: { title: 'Indústrias' },
      distributors: { title: 'Distribuidores' },
      'sales-reps': { title: 'Representantes comerciais' },
      services: { title: 'Empresas de serviços' },
      clinics: { title: 'Clínicas' },
      offices: { title: 'Escritórios' },
      professionals: { title: 'Profissionais liberais' },
      retail: { title: 'Comércio' },
      local: { title: 'Negócios locais' },
      b2b: { title: 'Empresas B2B' },
    },
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que empresas costumam perguntar antes de começar.',
    items: {
      cost: {
        q: 'Quanto custa criar um site?',
        a: 'Os investimentos iniciais são a partir de {{express}} no Site Express, {{business}} no Site Business e {{premium}} no Site Premium. O valor final depende do escopo, do volume de páginas e das funcionalidades necessárias. Envie um briefing para receber uma proposta alinhada ao seu negócio.',
      },
      timeline: {
        q: 'Quanto tempo leva para desenvolver?',
        a: 'O prazo varia conforme o plano e a complexidade. Uma página única costuma avançar mais rápido; sites com várias páginas, conteúdos e integrações pedem um calendário próprio. Depois do diagnóstico, alinhamos um prazo realista para o seu projeto.',
      },
      domain: {
        q: 'Preciso já possuir domínio?',
        a: 'Não. Se você já tem um domínio, utilizamos. Se ainda não tem, orientamos a escolha e a configuração para publicação.',
      },
      copy: {
        q: 'Vocês ajudam com os textos?',
        a: 'Sim. Ajudamos a estruturar a mensagem comercial das páginas para que o visitante entenda a oferta e saiba qual o próximo passo.',
      },
      mobile: {
        q: 'O site funciona no celular?',
        a: 'Sim. Todos os projetos são publicados com experiência pensada para celular, tablet e desktop.',
      },
      changes: {
        q: 'Posso solicitar alterações depois?',
        a: 'Sim. Ajustes pontuais podem ser feitos após a publicação. Para evolução contínua, o BuilderCare é o caminho para manutenção e melhorias.',
      },
      care: {
        q: 'A BuilderTudo também cuida do site depois da publicação?',
        a: 'Sim. O BuilderCare é o acompanhamento depois da publicação: manutenção, atualizações, suporte e melhorias. Os formatos de continuidade são definidos conforme a necessidade de cada projeto.',
      },
      landing: {
        q: 'Vocês criam landing pages?',
        a: 'Sim. Criamos landing pages para campanhas, produtos e geração de contatos, com estrutura focada em conversão.',
      },
    },
  },
  cta: {
    title: 'Sua empresa merece uma presença digital à altura do negócio que você está construindo.',
    body: 'Conte para a BuilderTudo o que você precisa. Nós ajudamos a transformar sua ideia em uma estrutura digital profissional.',
    primary: 'Solicitar orçamento',
    secondary: 'Falar no WhatsApp',
  },
} as const satisfies MessageTree

export const commercialEn = {
  hero: {
    kicker: 'Design + Technology + Strategy + AI',
    title: 'We create intelligent digital presence for companies that want to sell more.',
    lead: 'Professional, fast websites strategically built to turn visitors into business opportunities.',
    support: 'Your website should not just exist. It should work for your company.',
    ctaPrimary: 'I want to create my website',
    ctaSecondary: 'Explore solutions',
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Having a website is not the same as having a digital presence.',
    description:
      'Many companies publish a page and wait for results. Without clarity, a contact path and a professional experience, the website becomes a static business card.',
    transition: 'BuilderTudo turns digital presence into a commercial tool.',
    items: {
      outdated: { title: 'Outdated website', description: 'The look communicates a company that stopped in time.' },
      mobile: { title: 'Poor mobile experience', description: 'Most visits happen on a phone — and the website does not keep up.' },
      slow: { title: 'Slow loading', description: 'Visitors leave before they understand what the company does.' },
      message: { title: 'Unclear message', description: 'The business exists, but the offer is not obvious in the first seconds.' },
      cta: { title: 'No clear call to action', description: 'There is no obvious next step to request a quote or start a conversation.' },
      contact: { title: 'Hard-to-find contact', description: 'WhatsApp, forms and company information stay hidden.' },
      unprofessional: { title: 'Unprofessional appearance', description: 'The digital image does not match the real quality of the business.' },
      'no-opportunities': { title: 'A website that does not generate opportunities', description: 'There is traffic, but it does not become commercial conversations.' },
    },
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Digital presence with a commercial objective.',
    description: 'Choose the structure that best represents the moment of your business.',
    items: {
      institutional: { title: 'Institutional websites', description: 'Professional presence for companies and brands.' },
      landing: { title: 'Landing pages', description: 'Pages focused on campaigns, products and conversion.' },
      commercial: { title: 'Commercial websites', description: 'Structures designed to present products, services and generate contacts.' },
      custom: { title: 'Custom projects', description: 'Web solutions developed around specific business needs.' },
    },
  },
  plans: {
    eyebrow: 'Website creation',
    title: 'Choose the right starting point for your business.',
    description: 'Three clear paths, with starting prices so you can move forward with predictability.',
    featured: 'Most chosen',
    priceFrom: 'From {{price}}',
    express: {
      name: 'Express Website',
      audience: 'For professionals, micro-businesses, local companies and anyone without a professional presence yet.',
      cta: 'I want the Express Website',
      f1: 'Professional one-page website',
      f2: 'Responsive layout',
      f3: 'WhatsApp integration',
      f4: 'Contact form',
      f5: 'Basic SEO setup',
      f6: 'Publication',
      f7: 'Domain guidance',
    },
    business: {
      name: 'Business Website',
      audience: 'For companies that want a more complete digital presence.',
      cta: 'I want my Business Website',
      f1: 'Approximately 5–7 pages',
      f2: 'Institutional presentation',
      f3: 'Products or services',
      f4: 'Strategic pages',
      f5: 'WhatsApp',
      f6: 'Contact form',
      f7: 'Basic SEO',
      f8: 'Conversion-oriented structure',
      f9: 'Responsive design',
      f10: 'Publication',
    },
    premium: {
      name: 'Premium Website',
      audience: 'For more complete and custom projects.',
      cta: 'I want the Premium Website',
      note: 'Project under review',
      f1: 'Digital catalog',
      f2: 'Advanced pages',
      f3: 'Integrations',
      f4: 'Special features',
      f5: 'Automations',
      f6: 'Custom commercial structure',
    },
  },
  buildercare: {
    eyebrow: 'BuilderCare',
    title: 'Publishing your website is only the beginning.',
    description:
      'BuilderTudo can keep taking care of the structure after publication — with maintenance, support and ongoing evolution, at the pace of your business.',
    cta: 'Learn about BuilderCare',
    futureNote: 'Follow-up plans can be detailed according to each project’s needs.',
    items: {
      maintenance: { title: 'Maintenance', description: 'Ongoing care to keep the website stable and current.' },
      updates: { title: 'Updates', description: 'Content, structure and targeted improvements.' },
      support: { title: 'Support', description: 'A channel for questions and technical follow-up after publication.' },
      monitoring: { title: 'Monitoring', description: 'Follow-up of the published structure to identify needs.' },
      'small-changes': { title: 'Small changes', description: 'Objective updates without restarting the project.' },
      technical: { title: 'Technical follow-up', description: 'A continuous look at what the digital presence needs next.' },
      improvements: { title: 'Continuous improvement', description: 'Gradual evolution of experience, message and contact paths.' },
    },
  },
  portfolio: {
    eyebrow: 'Projects',
    title: 'Projects built to work in the real world.',
    description:
      'These are BuilderTudo internal projects. They are not presented as external clients. Each one shows the ability to build purposeful digital structures.',
    ownerLabel: 'BuilderTudo project',
    cta: 'View',
    empty: 'New cases will be published here as projects are approved for disclosure.',
    categories: {
      marketing: 'Content and marketing',
      legal: 'Professional services',
      health: 'Health',
      education: 'Education',
      prevention: 'Operations and prevention',
    },
    items: {
      contentfy: { name: 'ContentFy', description: 'BuilderTudo digital structure for organizing and producing on-brand content.' },
      jurismind: { name: 'JurisMind', description: 'BuilderTudo project focused on organization and productivity in legal work.' },
      blindcare: { name: 'BlindCare', description: 'BuilderTudo project focused on care, accessibility and digital journeys in health.' },
      professoria: { name: 'ProfessorIA', description: 'BuilderTudo project to support educational journeys with a clear digital experience.' },
      prevenpro: { name: 'PrevenPro', description: 'BuilderTudo project designed to organize prevention and operational routines.' },
      'proodonto-smart': { name: 'ProOdonto Smart', description: 'BuilderTudo project for digital presence and management in dentistry.' },
    },
  },
  process: {
    eyebrow: 'How we work',
    title: 'A simple path, from diagnosis to evolution.',
    description: 'Each step exists to reduce risk, align expectations and publish a digital presence that works for the company.',
    steps: {
      diagnosis: { title: 'Diagnosis', description: 'We understand the business, audience and objective.' },
      strategy: { title: 'Strategy', description: 'We define structure, content and journey.' },
      build: { title: 'Build', description: 'We develop the digital experience.' },
      validation: { title: 'Validation', description: 'We test desktop, tablet and mobile.' },
      publish: { title: 'Publication', description: 'We put the project live.' },
      evolution: { title: 'Evolution', description: 'BuilderCare can take on maintenance and improvements.' },
    },
  },
  differentials: {
    eyebrow: 'Differentiators',
    title: 'More than development.',
    description: 'BuilderTudo combines design, message and technology so digital presence generates commercial conversation.',
    items: {
      strategy: { title: 'Commercial strategy', description: 'We start with the business objective.' },
      responsive: { title: 'Responsive design', description: 'A professional experience across screens.' },
      technology: { title: 'Modern technology', description: 'Fast, secure structures ready to evolve.' },
      copy: { title: 'Action-oriented copy', description: 'Content built to guide the visitor.' },
      ai: { title: 'Artificial intelligence', description: 'AI used as an accelerator for productivity, analysis and development — without replacing human strategy.' },
    },
  },
  segments: {
    eyebrow: 'Segments',
    title: 'Solutions that adapt to different businesses.',
    description: 'We serve companies and professionals across markets. The examples below illustrate adaptability — not a client list.',
    items: {
      industry: { title: 'Industry' },
      distributors: { title: 'Distributors' },
      'sales-reps': { title: 'Sales representatives' },
      services: { title: 'Service companies' },
      clinics: { title: 'Clinics' },
      offices: { title: 'Offices' },
      professionals: { title: 'Independent professionals' },
      retail: { title: 'Retail' },
      local: { title: 'Local businesses' },
      b2b: { title: 'B2B companies' },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'What companies usually ask before starting.',
    items: {
      cost: {
        q: 'How much does it cost to create a website?',
        a: 'Starting investments are from {{express}} for Express, {{business}} for Business and {{premium}} for Premium. The final amount depends on scope, number of pages and required features. Send a briefing to receive a proposal aligned with your business.',
      },
      timeline: {
        q: 'How long does development take?',
        a: 'Timing varies with the plan and complexity. A one-page project usually moves faster; websites with several pages, content and integrations need their own calendar. After diagnosis, we align a realistic timeline.',
      },
      domain: {
        q: 'Do I already need a domain?',
        a: 'No. If you already have a domain, we use it. If not, we guide selection and setup for publication.',
      },
      copy: {
        q: 'Do you help with the copy?',
        a: 'Yes. We help structure the commercial message so visitors understand the offer and know the next step.',
      },
      mobile: {
        q: 'Does the website work on mobile?',
        a: 'Yes. Every project is published with an experience designed for phone, tablet and desktop.',
      },
      changes: {
        q: 'Can I request changes later?',
        a: 'Yes. Point adjustments can be made after publication. For ongoing evolution, BuilderCare is the path for maintenance and improvements.',
      },
      care: {
        q: 'Does BuilderTudo also take care of the website after publication?',
        a: 'Yes. BuilderCare is the follow-up after publication: maintenance, updates, support and improvements. Continuity formats are defined according to each project.',
      },
      landing: {
        q: 'Do you create landing pages?',
        a: 'Yes. We create landing pages for campaigns, products and lead generation, with a conversion-focused structure.',
      },
    },
  },
  cta: {
    title: 'Your company deserves a digital presence that matches the business you are building.',
    body: 'Tell BuilderTudo what you need. We help turn your idea into a professional digital structure.',
    primary: 'Request a quote',
    secondary: 'Talk on WhatsApp',
  },
} as const satisfies MessageTree

export const commercialEs = {
  hero: {
    kicker: 'Diseño + Tecnología + Estrategia + IA',
    title: 'Creamos presencia digital inteligente para empresas que quieren vender más.',
    lead: 'Sitios profesionales, rápidos y construidos estratégicamente para transformar visitantes en oportunidades de negocio.',
    support: 'Tu sitio no necesita solo existir. Necesita trabajar para tu empresa.',
    ctaPrimary: 'Quiero crear mi sitio',
    ctaSecondary: 'Conocer soluciones',
  },
  problem: {
    eyebrow: 'El problema',
    title: 'Tener un sitio no significa tener presencia digital.',
    description:
      'Muchas empresas publican una página y esperan resultados. Sin claridad, sin un camino de contacto y sin una experiencia profesional, el sitio se convierte en una tarjeta de visita detenida.',
    transition: 'BuilderTudo transforma la presencia digital en una herramienta comercial.',
    items: {
      outdated: { title: 'Sitio antiguo', description: 'La apariencia comunica una empresa que se detuvo en el tiempo.' },
      mobile: { title: 'Mala experiencia en el celular', description: 'La mayor parte de las visitas ocurre en el teléfono — y el sitio no acompaña.' },
      slow: { title: 'Carga lenta', description: 'El visitante se va antes de entender qué hace la empresa.' },
      message: { title: 'Mensaje confuso', description: 'El negocio existe, pero la oferta no queda clara en los primeros segundos.' },
      cta: { title: 'Ausencia de llamado a la acción', description: 'No hay un siguiente paso claro para pedir una cotización o iniciar contacto.' },
      contact: { title: 'Contacto difícil de encontrar', description: 'WhatsApp, formulario e información de la empresa quedan escondidos.' },
      unprofessional: { title: 'Apariencia poco profesional', description: 'La imagen digital no corresponde a la calidad real del negocio.' },
      'no-opportunities': { title: 'Un sitio que no genera oportunidades', description: 'Hay visitas, pero no se transforman en conversaciones comerciales.' },
    },
  },
  solutions: {
    eyebrow: 'Soluciones',
    title: 'Presencia digital con objetivo comercial.',
    description: 'Elige la estructura que mejor representa el momento de tu negocio.',
    items: {
      institutional: { title: 'Sitios institucionales', description: 'Presencia profesional para empresas y marcas.' },
      landing: { title: 'Landing pages', description: 'Páginas enfocadas en campañas, productos y conversión.' },
      commercial: { title: 'Sitios comerciales', description: 'Estructuras pensadas para presentar productos, servicios y generar contactos.' },
      custom: { title: 'Proyectos personalizados', description: 'Soluciones web desarrolladas según necesidades específicas del negocio.' },
    },
  },
  plans: {
    eyebrow: 'Creación de sitios',
    title: 'Elige el punto de partida ideal para tu negocio.',
    description: 'Tres caminos claros, con valores iniciales para avanzar con previsibilidad.',
    featured: 'Más elegido',
    priceFrom: 'Desde {{price}}',
    express: {
      name: 'Sitio Express',
      audience: 'Indicada para profesionales, microempresas, negocios locales y quienes aún no tienen presencia profesional.',
      cta: 'Quiero el Sitio Express',
      f1: 'Página profesional One Page',
      f2: 'Diseño responsivo',
      f3: 'Integración con WhatsApp',
      f4: 'Formulario de contacto',
      f5: 'Configuración básica de SEO',
      f6: 'Publicación',
      f7: 'Orientación para dominio',
    },
    business: {
      name: 'Sitio Business',
      audience: 'Indicada para empresas que desean una presencia digital más completa.',
      cta: 'Quiero mi Sitio Business',
      f1: 'Hasta aproximadamente 5–7 páginas',
      f2: 'Presentación institucional',
      f3: 'Productos o servicios',
      f4: 'Páginas estratégicas',
      f5: 'WhatsApp',
      f6: 'Formulario de contacto',
      f7: 'SEO básico',
      f8: 'Estructura orientada a la conversión',
      f9: 'Diseño responsivo',
      f10: 'Publicación',
    },
    premium: {
      name: 'Sitio Premium',
      audience: 'Para proyectos más completos y personalizados.',
      cta: 'Quiero el Sitio Premium',
      note: 'Proyecto bajo análisis',
      f1: 'Catálogo digital',
      f2: 'Páginas avanzadas',
      f3: 'Integraciones',
      f4: 'Funcionalidades especiales',
      f5: 'Automatizaciones',
      f6: 'Estructura comercial personalizada',
    },
  },
  buildercare: {
    eyebrow: 'BuilderCare',
    title: 'Publicar tu sitio es apenas el comienzo.',
    description:
      'BuilderTudo puede seguir cuidando la estructura después de la publicación — con mantenimiento, soporte y evolución continua, al ritmo de tu negocio.',
    cta: 'Conocer BuilderCare',
    futureNote: 'Los planes de acompañamiento podrán detallarse según la necesidad de cada proyecto.',
    items: {
      maintenance: { title: 'Mantenimiento', description: 'Cuidado continuo para mantener el sitio estable y actual.' },
      updates: { title: 'Actualizaciones', description: 'Ajustes de contenido, estructura y mejoras puntuales.' },
      support: { title: 'Soporte', description: 'Canal para dudas y seguimiento técnico después de la publicación.' },
      monitoring: { title: 'Monitoreo', description: 'Acompañamiento de la estructura publicada para identificar necesidades.' },
      'small-changes': { title: 'Pequeños cambios', description: 'Cambios objetivos sin reabrir el proyecto desde cero.' },
      technical: { title: 'Acompañamiento técnico', description: 'Una mirada continua sobre lo que la presencia digital necesita evolucionar.' },
      improvements: { title: 'Mejoras continuas', description: 'Evolución gradual de la experiencia, el mensaje y los caminos de contacto.' },
    },
  },
  portfolio: {
    eyebrow: 'Proyectos',
    title: 'Proyectos construidos para funcionar en el mundo real.',
    description:
      'Estos son proyectos internos de BuilderTudo. No se presentan como clientes externos. Cada uno demuestra capacidad de construir estructuras digitales con propósito.',
    ownerLabel: 'Proyecto BuilderTudo',
    cta: 'Ver',
    empty: 'Nuevos cases se publicarán aquí cuando los proyectos estén aprobados para divulgación.',
    categories: {
      marketing: 'Contenido y marketing',
      legal: 'Servicios profesionales',
      health: 'Salud',
      education: 'Educación',
      prevention: 'Operación y prevención',
    },
    items: {
      contentfy: { name: 'ContentFy', description: 'Estructura digital de BuilderTudo para organizar y producir contenido con consistencia de marca.' },
      jurismind: { name: 'JurisMind', description: 'Proyecto BuilderTudo orientado a la organización y productividad en el contexto jurídico.' },
      blindcare: { name: 'BlindCare', description: 'Proyecto BuilderTudo enfocado en cuidado, accesibilidad y trayectoria digital en salud.' },
      professoria: { name: 'ProfessorIA', description: 'Proyecto BuilderTudo para apoyar trayectorias educativas con una experiencia digital clara.' },
      prevenpro: { name: 'PrevenPro', description: 'Proyecto BuilderTudo pensado para organizar rutinas de prevención y operación.' },
      'proodonto-smart': { name: 'ProOdonto Smart', description: 'Proyecto BuilderTudo para presencia y gestión digital en el segmento odontológico.' },
    },
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Un flujo simple, del diagnóstico a la evolución.',
    description: 'Cada etapa existe para reducir riesgo, alinear expectativas y publicar una presencia digital que trabaja para la empresa.',
    steps: {
      diagnosis: { title: 'Diagnóstico', description: 'Entendemos negocio, público y objetivo.' },
      strategy: { title: 'Estrategia', description: 'Definimos estructura, contenido y recorrido.' },
      build: { title: 'Construcción', description: 'Desarrollamos la experiencia digital.' },
      validation: { title: 'Validación', description: 'Probamos escritorio, tablet y móvil.' },
      publish: { title: 'Publicación', description: 'Ponemos el proyecto en el aire.' },
      evolution: { title: 'Evolución', description: 'BuilderCare puede asumir mantenimiento y mejoras.' },
    },
  },
  differentials: {
    eyebrow: 'Diferenciales',
    title: 'Más que desarrollo.',
    description: 'BuilderTudo une diseño, mensaje y tecnología para que la presencia digital genere conversación comercial.',
    items: {
      strategy: { title: 'Estrategia comercial', description: 'Pensamos primero en el objetivo del negocio.' },
      responsive: { title: 'Diseño responsivo', description: 'Experiencia profesional en distintas pantallas.' },
      technology: { title: 'Tecnología moderna', description: 'Estructuras rápidas, seguras y preparadas para evolucionar.' },
      copy: { title: 'Copy orientado a la acción', description: 'Contenido construido para conducir al visitante.' },
      ai: { title: 'Inteligencia artificial', description: 'IA utilizada como acelerador de productividad, análisis y desarrollo — sin sustituir la estrategia humana.' },
    },
  },
  segments: {
    eyebrow: 'Segmentos',
    title: 'Soluciones adaptables a distintos negocios.',
    description: 'Atendemos empresas y profesionales de mercados distintos. Los ejemplos ilustran capacidad de adaptación — no una lista de clientes.',
    items: {
      industry: { title: 'Industrias' },
      distributors: { title: 'Distribuidores' },
      'sales-reps': { title: 'Representantes comerciales' },
      services: { title: 'Empresas de servicios' },
      clinics: { title: 'Clínicas' },
      offices: { title: 'Oficinas' },
      professionals: { title: 'Profesionales independientes' },
      retail: { title: 'Comercio' },
      local: { title: 'Negocios locales' },
      b2b: { title: 'Empresas B2B' },
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que las empresas suelen preguntar antes de comenzar.',
    items: {
      cost: {
        q: '¿Cuánto cuesta crear un sitio?',
        a: 'Las inversiones iniciales son desde {{express}} en Sitio Express, {{business}} en Sitio Business y {{premium}} en Sitio Premium. El valor final depende del alcance, las páginas y las funcionalidades. Envíe un briefing para recibir una propuesta alineada a su negocio.',
      },
      timeline: {
        q: '¿Cuánto tiempo lleva desarrollar?',
        a: 'El plazo varía según el plan y la complejidad. Una página única suele avanzar más rápido; sitios con varias páginas, contenidos e integraciones necesitan un calendario propio. Después del diagnóstico, alineamos un plazo realista.',
      },
      domain: {
        q: '¿Necesito ya tener dominio?',
        a: 'No. Si ya tiene un dominio, lo utilizamos. Si aún no tiene, orientamos la elección y la configuración para la publicación.',
      },
      copy: {
        q: '¿Ayudan con los textos?',
        a: 'Sí. Ayudamos a estructurar el mensaje comercial de las páginas para que el visitante entienda la oferta y sepa el siguiente paso.',
      },
      mobile: {
        q: '¿El sitio funciona en el celular?',
        a: 'Sí. Todos los proyectos se publican con una experiencia pensada para celular, tablet y escritorio.',
      },
      changes: {
        q: '¿Puedo solicitar cambios después?',
        a: 'Sí. Se pueden hacer ajustes puntuales después de la publicación. Para una evolución continua, BuilderCare es el camino para mantenimiento y mejoras.',
      },
      care: {
        q: '¿BuilderTudo también cuida el sitio después de la publicación?',
        a: 'Sí. BuilderCare es el acompañamiento después de la publicación: mantenimiento, actualizaciones, soporte y mejoras. Los formatos de continuidad se definen según cada proyecto.',
      },
      landing: {
        q: '¿Crean landing pages?',
        a: 'Sí. Creamos landing pages para campañas, productos y generación de contactos, con estructura enfocada en conversión.',
      },
    },
  },
  cta: {
    title: 'Tu empresa merece una presencia digital a la altura del negocio que estás construyendo.',
    body: 'Cuéntale a BuilderTudo lo que necesitas. Ayudamos a transformar tu idea en una estructura digital profesional.',
    primary: 'Solicitar cotización',
    secondary: 'Hablar por WhatsApp',
  },
} as const satisfies MessageTree
