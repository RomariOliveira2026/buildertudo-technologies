import { env } from '../config/env'
import { CONTACT } from '../constants/contact'

export const SITE_NAME = 'BuilderTudo Technologies'
export const SITE_SLOGAN = 'Tecnologia que transforma negócios.'
export const DEFAULT_DESCRIPTION =
  'BuilderTudo Technologies desenvolve plataformas SaaS, Inteligência Artificial, automações, sistemas web, aplicativos e soluções digitais para empresas.'

export const DEFAULT_OG_IMAGE = `${env.siteUrl}/logo-oficial.png`

export type PageSeo = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function buildCanonical(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized === '/' ? env.siteUrl : `${env.siteUrl}${normalized}`
}

export function buildPageTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: env.siteUrl,
    logo: DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    slogan: SITE_SLOGAN,
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin, CONTACT.instagram, CONTACT.github].filter(Boolean),
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: env.siteUrl,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: DEFAULT_OG_IMAGE,
    },
  }
}

export function getSoftwareCompanySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    name: SITE_NAME,
    url: env.siteUrl,
    logo: DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    slogan: SITE_SLOGAN,
    email: CONTACT.email,
    areaServed: 'BR',
    knowsAbout: [
      'Inteligência Artificial',
      'Plataformas SaaS',
      'Automação',
      'Sistemas Web',
      'Aplicativos',
    ],
  }
}

export const homeStructuredData = [
  getOrganizationSchema(),
  getWebSiteSchema(),
  getSoftwareCompanySchema(),
]
