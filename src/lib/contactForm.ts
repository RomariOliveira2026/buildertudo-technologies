export const CONTACT_SERVICE_KEYS = [
  'express',
  'business',
  'premium',
  'landing',
  'custom',
  'unknown',
] as const

export type ContactProjectType = (typeof CONTACT_SERVICE_KEYS)[number]

export type ContactFormData = {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export type ContactValidationMessages = {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^(\+?\d{1,3}\s?)?(\(?\d{2,3}\)?\s?)?\d{4,5}[-\s]?\d{4}$/

const DEFAULT_MESSAGES: ContactValidationMessages = {
  name: 'Informe seu nome completo.',
  company: 'Informe o nome da empresa.',
  phone: 'Informe um WhatsApp válido com DDD.',
  email: 'Informe um e-mail válido.',
  service: 'Selecione o tipo de projeto.',
  message: 'Descreva sua necessidade (mínimo de 10 caracteres).',
}

export function validateContactForm(
  data: ContactFormData,
  messages: ContactValidationMessages = DEFAULT_MESSAGES,
): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const name = data.name.trim()
  const company = data.company.trim()
  const phone = data.phone.trim()
  const email = data.email.trim()
  const message = data.message.trim()

  if (name.length < 3) errors.name = messages.name
  if (company.length < 2) errors.company = messages.company
  if (!phonePattern.test(phone.replace(/\s/g, ''))) {
    errors.phone = messages.phone
  }
  if (!emailPattern.test(email)) errors.email = messages.email
  if (!data.service) errors.service = messages.service
  if (message.length < 10) errors.message = messages.message

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0
}

export function isContactProjectType(value: string | null | undefined): value is ContactProjectType {
  return Boolean(value && (CONTACT_SERVICE_KEYS as readonly string[]).includes(value))
}
