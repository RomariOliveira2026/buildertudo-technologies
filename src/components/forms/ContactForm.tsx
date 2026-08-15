import { useState, type FormEvent } from 'react'
import { env, isFormBackendEnabled } from '../../config/env'
import { getContactServices } from '../../i18n/content'
import { useTranslation } from '../../i18n'
import { trackEvent } from '../../lib/analytics'
import {
  hasContactFormErrors,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '../../lib/contactForm'
import { buildWhatsAppLeadMessage, buildWhatsAppUrl } from '../../lib/whatsapp'
import { MotionSubmitButton } from '../ui/Buttons'

const initialState: ContactFormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

type ContactFormProps = {
  id?: string
}

export function ContactForm({ id = 'contact-form' }: ContactFormProps) {
  const { t } = useTranslation()
  const services = getContactServices(t)
  const [form, setForm] = useState<ContactFormData>(initialState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const updateField = <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validation = validateContactForm(form, {
      name: t('contact.errName'),
      company: t('contact.errCompany'),
      phone: t('contact.errPhone'),
      email: t('contact.errEmail'),
      service: t('contact.errService'),
      message: t('contact.errMessage'),
    })

    if (hasContactFormErrors(validation)) {
      setErrors(validation)
      setStatus('error')
      setFeedback(t('contact.formReviewFields'))
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      if (isFormBackendEnabled && env.formEndpoint) {
        const response = await fetch(env.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })

        if (!response.ok) throw new Error('form-submit-failed')
      }

      trackEvent('generate_lead', {
        service: form.service,
        source: 'contact_form',
      })

      const whatsappUrl = buildWhatsAppUrl(
        buildWhatsAppLeadMessage(form, {
          intro: t('contact.whatsappLeadIntro'),
          name: t('contact.whatsappLeadName'),
          company: t('contact.whatsappLeadCompany'),
          phone: t('contact.whatsappLeadPhone'),
          email: t('contact.whatsappLeadEmail'),
          service: t('contact.whatsappLeadService'),
          message: t('contact.whatsappLeadMessage'),
        }),
      )
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      setStatus('success')
      setFeedback(t('contact.formSuccess'))
      setForm(initialState)
      setErrors({})
    } catch {
      setStatus('error')
      setFeedback(t('contact.formError'))
    }
  }

  return (
    <form
      id={id}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={`${id}-feedback`}
    >
      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor={`${id}-name`}>{t('contact.formName')}</label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t('contact.formPlaceholderName')}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            required
          />
          {errors.name ? <span id={`${id}-name-error`} className="contact-form__error" role="alert">{errors.name}</span> : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-company`}>{t('contact.formCompany')}</label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={t('contact.formPlaceholderCompany')}
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${id}-company-error` : undefined}
            required
          />
          {errors.company ? <span id={`${id}-company-error`} className="contact-form__error" role="alert">{errors.company}</span> : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-phone`}>{t('contact.formPhone')}</label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t('contact.formPlaceholderPhone')}
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            required
          />
          {errors.phone ? <span id={`${id}-phone-error`} className="contact-form__error" role="alert">{errors.phone}</span> : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-email`}>{t('contact.formEmail')}</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t('contact.formPlaceholderEmail')}
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            required
          />
          {errors.email ? <span id={`${id}-email-error`} className="contact-form__error" role="alert">{errors.email}</span> : null}
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor={`${id}-service`}>{t('contact.formService')}</label>
          <select
            id={`${id}-service`}
            name="service"
            value={form.service}
            onChange={(event) => updateField('service', event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${id}-service-error` : undefined}
            required
          >
            <option value="">{t('contact.formSelectService')}</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? <span id={`${id}-service-error`} className="contact-form__error" role="alert">{errors.service}</span> : null}
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor={`${id}-message`}>{t('contact.formMessage')}</label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            placeholder={t('contact.formPlaceholderMessage')}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            required
          />
          {errors.message ? <span id={`${id}-message-error`} className="contact-form__error" role="alert">{errors.message}</span> : null}
        </div>
      </div>

      <div className="contact-form__actions">
        <MotionSubmitButton
          className="contact-form__submit"
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? t('contact.formSubmitting') : t('contact.formSubmit')}
        </MotionSubmitButton>
      </div>

      <p
        id={`${id}-feedback`}
        className={`contact-form__feedback contact-form__feedback--${status}`}
        role={status === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  )
}
