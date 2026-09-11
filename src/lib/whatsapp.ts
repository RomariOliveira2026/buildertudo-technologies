import { ANALYTICS_EVENTS } from '../config/commercial'
import { CONTACT } from '../constants/contact'
import { trackEvent } from './analytics'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Conheci a BuilderTudo pelo site e gostaria de conversar sobre a criação de um site para minha empresa.'

export type WhatsAppLeadPayload = {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export type WhatsAppLeadLabels = {
  intro: string
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export type WhatsAppContext =
  | 'default'
  | 'quote'
  | 'float'
  | 'express'
  | 'business'
  | 'premium'
  | 'landing'
  | 'custom'
  | 'buildercare'
  | 'form'

export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message)
  return `${CONTACT.whatsapp}?text=${encoded}`
}

export function trackWhatsAppClick(context: WhatsAppContext | string, extra?: Record<string, unknown>) {
  trackEvent(ANALYTICS_EVENTS.clickWhatsapp, { context, ...extra })
}

export function buildTrackedWhatsAppUrl(
  message: string,
  context: WhatsAppContext | string,
  extra?: Record<string, unknown>,
) {
  trackWhatsAppClick(context, extra)
  return buildWhatsAppUrl(message)
}

export function buildWhatsAppLeadMessage(
  payload: WhatsAppLeadPayload,
  labels: WhatsAppLeadLabels = {
    intro: WHATSAPP_DEFAULT_MESSAGE,
    name: 'Nome',
    company: 'Empresa',
    phone: 'WhatsApp',
    email: 'E-mail',
    service: 'Tipo de projeto',
    message: 'Mensagem',
  },
) {
  return [
    labels.intro,
    '',
    `${labels.name}: ${payload.name}`,
    `${labels.company}: ${payload.company}`,
    `${labels.phone}: ${payload.phone}`,
    `${labels.email}: ${payload.email}`,
    `${labels.service}: ${payload.service}`,
    `${labels.message}: ${payload.message}`,
  ].join('\n')
}
