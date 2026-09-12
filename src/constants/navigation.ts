export const navItems = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'plans', label: 'Plans' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'method', label: 'Method' },
  { id: 'care', label: 'Care' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavSectionId = (typeof navItems)[number]['id']

export const observedSections: NavSectionId[] = [
  'solutions',
  'plans',
  'portfolio',
  'method',
  'care',
  'contact',
]
