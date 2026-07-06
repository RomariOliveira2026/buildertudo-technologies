export const navItems = [
  { id: 'platform', label: 'Platform' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'cases', label: 'Cases' },
  { id: 'labs', label: 'Labs' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavSectionId = (typeof navItems)[number]['id']

export const observedSections: NavSectionId[] = [
  'platform',
  'products',
  'services',
  'process',
  'cases',
  'labs',
  'contact',
]
