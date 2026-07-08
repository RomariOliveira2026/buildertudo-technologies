export const navItems = [
  { id: 'credibility', label: 'Credibility' },
  { id: 'platform', label: 'Platform' },
  { id: 'business-os', label: 'Business OS' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'Method' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavSectionId = (typeof navItems)[number]['id']

export const observedSections: NavSectionId[] = [
  'credibility',
  'platform',
  'business-os',
  'products',
  'process',
  'services',
  'contact',
]

export const footerLinks = {
  company: [
    { label: 'About', href: '/#platform' },
    { label: 'Framework', href: '/framework' },
    { label: 'Business OS', href: '/business-os' },
    { label: 'Method', href: '/method' },
    { label: 'Careers', href: 'mailto:contato@buildertudo.com?subject=Careers' },
  ],
  platform: [
    { label: 'Framework', href: '/framework' },
    { label: 'Business OS', href: '/business-os' },
    { label: 'AI Platform', href: '/#ai' },
    { label: 'Showcase', href: '/#showcase' },
    { label: 'Live Status', href: '/live' },
    { label: 'Framework Health', href: '/live#framework-health' },
  ],
  resources: [
    { label: 'Case Studies', href: '/cases' },
    { label: 'Labs', href: '/labs' },
    { label: 'Products', href: '/#products' },
    { label: 'Method', href: '/#process' },
    { label: 'Services', href: '/#services' },
    { label: 'Live Status', href: '/live' },
  ],
  connect: [
    { label: 'Start a Project', href: '/#contact' },
    { label: 'Book a Discovery Call', href: 'mailto:contato@buildertudo.com?subject=Book%20a%20Discovery%20Call' },
    { label: 'GitHub', href: 'https://github.com/buildertudo', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/buildertudo', external: true },
    { label: 'Upwork', href: 'https://www.upwork.com/agencies/buildertudo', external: true },
  ],
} as const
