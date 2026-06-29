import { env } from '../config/env'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

let analyticsInitialized = false

function injectScript(id: string, src: string, async = true) {
  if (document.getElementById(id)) return

  const script = document.createElement('script')
  script.id = id
  script.src = src
  script.async = async
  document.head.appendChild(script)
}

function initGtm() {
  if (!env.gtmId) return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  injectScript('gtm-script', `https://www.googletagmanager.com/gtm.js?id=${env.gtmId}`)
}

function initGa4() {
  if (!env.ga4Id || env.gtmId) return

  injectScript('ga4-script', `https://www.googletagmanager.com/gtag/js?id=${env.ga4Id}`)

  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args as unknown as Record<string, unknown>)
  }
  window.gtag('js', new Date())
  window.gtag('config', env.ga4Id, { anonymize_ip: true })
}

function initMetaPixel() {
  if (!env.metaPixelId || window.fbq) return

  const queue: unknown[][] = []
  const fbq = (...args: unknown[]) => {
    queue.push(args)
  }

  window.fbq = fbq
  ;(fbq as typeof fbq & { queue: unknown[][]; loaded?: boolean }).queue = queue

  injectScript('meta-pixel-script', 'https://connect.facebook.net/en_US/fbevents.js')
  window.fbq('init', env.metaPixelId)
  window.fbq('track', 'PageView')
}

function initClarity() {
  if (!env.clarityId || window.clarity) return

  type ClarityFn = ((...args: unknown[]) => void) & { q: unknown[][] }
  const clarityFn: ClarityFn = (...args: unknown[]) => {
    clarityFn.q.push(args)
  }
  clarityFn.q = []

  window.clarity = clarityFn
  injectScript('clarity-script', `https://www.clarity.ms/tag/${env.clarityId}`)
}

export function initAnalytics() {
  if (analyticsInitialized || typeof window === 'undefined') return

  initGtm()
  initGa4()
  initMetaPixel()
  initClarity()
  analyticsInitialized = true
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (window.gtag) window.gtag('event', name, params)
  if (window.fbq) window.fbq('trackCustom', name, params)
  window.dataLayer?.push({ event: name, ...params })
}
