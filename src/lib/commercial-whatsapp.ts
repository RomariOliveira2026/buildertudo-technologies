import type { WhatsAppIntent } from '../constants/commercial'
import type { Locale } from '../i18n'
import { commercialCopy } from '../i18n/commercial'
import { trackEvent } from './analytics'
import { buildWhatsAppUrl } from './whatsapp'

export function getWhatsAppHref(locale: Locale, intent: WhatsAppIntent = 'default') {
  return buildWhatsAppUrl(commercialCopy[locale].whatsapp[intent])
}

export function trackWhatsAppClick(intent: WhatsAppIntent = 'default') {
  trackEvent('click_whatsapp', { intent })
}

export function trackQuoteClick(plan?: string) {
  trackEvent('click_quote', plan ? { plan } : {})
}

export function trackPlanSelect(plan: string) {
  trackEvent('select_plan', { plan })
}

export function trackPortfolioView(slug: string) {
  trackEvent('view_portfolio', { slug })
}
