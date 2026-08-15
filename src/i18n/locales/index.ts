import type { Locale } from '../config'
import type { MessageTree } from '../translate'
import { en } from './en'
import { es } from './es'
import { ptBR } from './pt-BR'

export const dictionaries: Record<Locale, MessageTree> = {
  en,
  es,
  'pt-BR': ptBR,
}
