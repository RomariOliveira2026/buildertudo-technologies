import { env } from '../config/env'
import { formatPriceFromPlan, PRICING } from '../config/commercial'
import { CONTACT } from '../constants/contact'
import type { Locale } from '../i18n'
import { LOCALE_META } from '../i18n'
import type { ProductPageContent } from '../types/product-content'
import { getProductStatusLabel } from '../types/product'

export const SITE_NAME = 'BuilderTudo Technologies'
export const SITE_SLOGAN = 'Criamos presença digital inteligente para empresas que querem vender mais.'
export const DEFAULT_DESCRIPTION =
  'BuilderTudo Technologies cria sites profissionais, landing pages e presença digital para empresas que querem transformar visitantes em oportunidades de negócio.'

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

export function getOrganizationSchema(description = DEFAULT_DESCRIPTION, slogan = SITE_SLOGAN) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: env.siteUrl,
    logo: DEFAULT_OG_IMAGE,
    description,
    slogan,
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin, CONTACT.instagram, CONTACT.github].filter(Boolean),
  }
}

export function getWebSiteSchema(description = DEFAULT_DESCRIPTION, locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: env.siteUrl,
    description,
    inLanguage: LOCALE_META[locale].htmlLang,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: DEFAULT_OG_IMAGE,
    },
  }
}

export function getSoftwareCompanySchema(description = DEFAULT_DESCRIPTION, slogan = SITE_SLOGAN) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    name: SITE_NAME,
    url: env.siteUrl,
    logo: DEFAULT_OG_IMAGE,
    description,
    slogan,
    email: CONTACT.email,
    areaServed: 'BR',
    knowsAbout: [
      'Criação de sites',
      'Desenvolvimento de sites',
      'Sites profissionais',
      'Landing pages',
      'Presença digital',
      'Sites para empresas',
    ],
  }
}

export function getFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getWebsiteOfferCatalog() {
  const plans = [
    { id: 'express' as const, name: 'Site Express' },
    { id: 'business' as const, name: 'Site Business' },
    { id: 'premium' as const, name: 'Site Premium' },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Criação de sites BuilderTudo',
    itemListElement: plans.map((plan, index) => ({
      '@type': 'Offer',
      position: index + 1,
      name: plan.name,
      price: PRICING[plan.id],
      priceCurrency: PRICING.currency,
      url: `${env.siteUrl}/?plano=${plan.id}#contact`,
      description: `A partir de ${formatPriceFromPlan(plan.id)}`,
    })),
  }
}

export function buildHomeStructuredData({
  description = DEFAULT_DESCRIPTION,
  slogan = SITE_SLOGAN,
  locale = 'pt-BR' as Locale,
  faq,
}: {
  description?: string
  slogan?: string
  locale?: Locale
  faq?: Array<{ question: string; answer: string }>
} = {}) {
  const graph: Array<Record<string, unknown>> = [
    getOrganizationSchema(description, slogan),
    getWebSiteSchema(description, locale),
    getSoftwareCompanySchema(description, slogan),
    getWebsiteOfferCatalog(),
  ]

  if (faq?.length) graph.push(getFaqSchema(faq))
  return graph
}

export const homeStructuredData = buildHomeStructuredData()

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
      priceCurrency: 'BRL',
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
