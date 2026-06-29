import { useEffect } from 'react'
import {
  buildCanonical,
  buildPageTitle,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  type PageSeo,
} from '../../lib/seo'

type PageMetaProps = PageSeo & {
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') element!.setAttribute(key, value)
    })
    document.head.appendChild(element)
  } else if (attributes.content) {
    element.setAttribute('content', attributes.content)
  }
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertStructuredData(id: string, data: Record<string, unknown> | Array<Record<string, unknown>>) {
  let element = document.getElementById(id) as HTMLScriptElement | null

  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  structuredData,
}: PageMetaProps) {
  useEffect(() => {
    const pageTitle = buildPageTitle(title)
    const canonical = buildCanonical(path)
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow'

    document.title = pageTitle

    upsertLink('canonical', canonical)
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'pt_BR' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    if (structuredData) {
      upsertStructuredData('page-structured-data', structuredData)
    } else {
      document.getElementById('page-structured-data')?.remove()
    }
  }, [title, description, path, image, type, noIndex, structuredData])

  return null
}
