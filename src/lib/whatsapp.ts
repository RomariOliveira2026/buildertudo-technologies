import { CONTACT } from '../constants/contact'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Visitei o site da BuilderTudo Technologies e gostaria de solicitar um orçamento.'

export type WhatsAppLeadPayload = {
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

export function buildWhatsAppLeadMessage(payload: WhatsAppLeadPayload) {
  return [
    'Olá! Visitei o site da BuilderTudo Technologies e gostaria de solicitar um orçamento.',
    '',
    `Nome: ${payload.name}`,
    `Empresa: ${payload.company}`,
    `WhatsApp: ${payload.phone}`,
    `E-mail: ${payload.email}`,
    `Serviço desejado: ${payload.service}`,
    `Mensagem: ${payload.message}`,
  ].join('\n')
}
