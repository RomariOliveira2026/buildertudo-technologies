import { CONTACT } from '../constants/contact'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello! I visited the BuilderTudo Technologies website and would like to request a quote.'

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

export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message)
  return `${CONTACT.whatsapp}?text=${encoded}`
}

export function buildWhatsAppLeadMessage(
  payload: WhatsAppLeadPayload,
  labels: WhatsAppLeadLabels = {
    intro: WHATSAPP_DEFAULT_MESSAGE,
    name: 'Name',
    company: 'Company',
    phone: 'WhatsApp',
    email: 'Email',
    service: 'Requested service',
    message: 'Message',
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
