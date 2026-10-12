import type { Locale } from '../i18n/config'
import { parsePrompt } from './prompt'
import type { FlowDirection } from './types'

export type DiagramTemplate = {
  id: string
  name: string
  description: string
  prompt: string
}

const TEMPLATES: Record<Locale, DiagramTemplate[]> = {
  'pt-BR': [
    {
      id: 'commercial',
      name: 'Site comercial',
      description: 'Da visita ao WhatsApp e ao CRM.',
      prompt: `Visitante -> Landing page -> Formulário -> WhatsApp
Landing page -> Portfólio
Formulário -> CRM`,
    },
    {
      id: 'architecture',
      name: 'Arquitetura de API',
      description: 'Cliente, API, fila e banco.',
      prompt: `Cliente -> API -> Banco de dados
API -> Fila -> Worker
Worker -> Banco de dados`,
    },
    {
      id: 'support',
      name: 'Atendimento',
      description: 'Triagem com revisão humana.',
      prompt: `Cliente -> Inbox -> Análise -> Resposta
Análise -> Revisão humana
Revisão humana -> Resposta`,
    },
  ],
  en: [
    {
      id: 'commercial',
      name: 'Commercial site',
      description: 'From the visit to WhatsApp and CRM.',
      prompt: `Visitor -> Landing page -> Form -> WhatsApp
Landing page -> Portfolio
Form -> CRM`,
    },
    {
      id: 'architecture',
      name: 'API architecture',
      description: 'Client, API, queue and database.',
      prompt: `Client -> API -> Database
API -> Queue -> Worker
Worker -> Database`,
    },
    {
      id: 'support',
      name: 'Support flow',
      description: 'Triage with a human review.',
      prompt: `Customer -> Inbox -> Analysis -> Reply
Analysis -> Human review
Human review -> Reply`,
    },
  ],
  es: [
    {
      id: 'commercial',
      name: 'Sitio comercial',
      description: 'De la visita a WhatsApp y al CRM.',
      prompt: `Visitante -> Landing page -> Formulario -> WhatsApp
Landing page -> Portafolio
Formulario -> CRM`,
    },
    {
      id: 'architecture',
      name: 'Arquitectura de API',
      description: 'Cliente, API, cola y base de datos.',
      prompt: `Cliente -> API -> Banco de datos
API -> Fila -> Worker
Worker -> Banco de datos`,
    },
    {
      id: 'support',
      name: 'Atención',
      description: 'Clasificación con revisión humana.',
      prompt: `Cliente -> Inbox -> Análisis -> Respuesta
Análisis -> Revisión humana
Revisión humana -> Respuesta`,
    },
  ],
}

export function getTemplates(locale: Locale) {
  return TEMPLATES[locale]
}

export function flowFromTemplate(template: DiagramTemplate, direction: FlowDirection = 'LR') {
  return parsePrompt(template.prompt, direction)
}
