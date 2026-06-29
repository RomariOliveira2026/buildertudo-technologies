export const CONTACT_SERVICES = [
  'Inteligência Artificial',
  'Plataforma SaaS',
  'Sistema Web',
  'Aplicativo',
  'Automação',
  'UX/UI e Identidade Visual',
  'Consultoria Tecnológica',
  'BuilderTudo Studio',
  'Outro',
] as const

export type ContactService = (typeof CONTACT_SERVICES)[number]

export type ContactFormData = {
  name: string
  company: string
  phone: string
  email: string
  service: ContactService | ''
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^(\+?55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-\s]?\d{4}$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const name = data.name.trim()
  const company = data.company.trim()
  const phone = data.phone.trim()
  const email = data.email.trim()
  const message = data.message.trim()

  if (name.length < 3) errors.name = 'Informe seu nome completo.'
  if (company.length < 2) errors.company = 'Informe o nome da empresa.'
  if (!phonePattern.test(phone.replace(/\s/g, ''))) {
    errors.phone = 'Informe um WhatsApp válido com DDD.'
  }
  if (!emailPattern.test(email)) errors.email = 'Informe um e-mail válido.'
  if (!data.service) errors.service = 'Selecione o serviço desejado.'
  if (message.length < 10) errors.message = 'Descreva sua necessidade com pelo menos 10 caracteres.'

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0
}
