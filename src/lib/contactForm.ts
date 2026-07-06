export const CONTACT_SERVICES = [
  'Platform Engineering',
  'AI Integration',
  'SaaS Development',
  'Web Application',
  'Mobile Application',
  'Automation & Integration',
  'UX/UI & Design System',
  'Technology Consulting',
  'Dedicated Squad',
  'Other',
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

  if (name.length < 3) errors.name = 'Please enter your full name.'
  if (company.length < 2) errors.company = 'Please enter your company name.'
  if (!phonePattern.test(phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number with area code.'
  }
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address.'
  if (!data.service) errors.service = 'Please select a service.'
  if (message.length < 10) errors.message = 'Please describe your needs (min. 10 characters).'

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0
}
