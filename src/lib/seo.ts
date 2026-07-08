import { env } from '../config/env'
import { CONTACT } from '../constants/contact'
import type { ProductPageContent } from '../types/product-content'
import { getProductStatusLabel } from '../types/product'

export const SITE_NAME = 'BuilderTudo Technologies'
export const SITE_SLOGAN = 'Tecnologia que transforma negócios.'
export const DEFAULT_DESCRIPTION =
  'BuilderTudo Technologies — proprietary AI engineering platform. Framework, Business OS, AI-OS, Engine and 12 SaaS products. Enterprise-grade platform engineering for global clients.'

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

export function getBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  }
}

export function getProductSchema(product: ProductPageContent, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: 'Web',
    description: product.description,
    url: buildCanonical(path),
    softwareVersion: product.version,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: env.siteUrl,
    },
    featureList: product.features.join(', '),
  }
}

export function getProductStructuredData(product: ProductPageContent, path: string) {
  return [
    getProductSchema(product, path),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: product.name, path },
    ]),
    getOrganizationSchema(),
  ]
}

export function getProductOgDescription(product: ProductPageContent) {
  return `${product.tagline} ${getProductStatusLabel(product.status)} · v${product.version} · ${product.healthScore}% health. Built with BuilderTudo Framework.`
}

export function getArticleSchema(study: import('../types/case-study').CaseStudyContent, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.headline,
    description: study.summary,
    url: buildCanonical(path),
    datePublished: study.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: env.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    about: {
      '@type': 'SoftwareApplication',
      name: study.name,
      applicationCategory: study.category,
    },
  }
}

export function getCaseStudyStructuredData(study: import('../types/case-study').CaseStudyContent, path: string) {
  return [
    getArticleSchema(study, path),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Case Studies', path: '/cases' },
      { name: study.name, path },
    ]),
    getOrganizationSchema(),
  ]
}

export function getCaseStudyLibraryStructuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'BuilderTudo Engineering Case Studies',
      description: 'Applied software engineering case studies from BuilderTudo products.',
      url: buildCanonical('/cases'),
      publisher: { '@type': 'Organization', name: SITE_NAME },
    },
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Case Studies', path: '/cases' },
    ]),
    getOrganizationSchema(),
  ]
}
