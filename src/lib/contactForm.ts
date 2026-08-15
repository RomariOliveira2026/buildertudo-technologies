export const CONTACT_SERVICE_KEYS = [
  'servicePlatformEngineering',
  'serviceAiIntegration',
  'serviceSaas',
  'serviceWeb',
  'serviceMobile',
  'serviceAutomation',
  'serviceUx',
  'serviceConsulting',
  'serviceSquad',
  'serviceOther',
] as const

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
  name: 'Please enter your full name.',
  company: 'Please enter your company name.',
  phone: 'Please enter a valid phone number with area code.',
  email: 'Please enter a valid email address.',
  service: 'Please select a service.',
  message: 'Please describe your needs (min. 10 characters).',
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
