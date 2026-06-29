export const navItems = [
  { id: 'ecossistema', label: 'Ecossistema' },
  { id: 'solucoes', label: 'Soluções' },
  { id: 'studio', label: 'Studio' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
] as const

export const observedSections = [
  'home',
  'numeros',
  'ecossistema',
  'solucoes',
  'segmentos',
  'diferenciais',
  'processo',
  'projetos',
  'studio',
  'tecnologias',
  'contato',
] as const

export type NavSectionId = (typeof navItems)[number]['id']
export type SectionId = (typeof observedSections)[number]
