import type { NodeKind } from './types'

const RULES: Array<[NodeKind, RegExp]> = [
  ['person', /\b(user|users|usu[aá]rio|usu[aá]rios|cliente|clientes|client|customer|visitor|visitante|persona|pessoa|person|people|operador|atendente|humano|humana|human|equipo|team)\b/i],
  ['data', /\b(database|postgres|supabase|mysql|mongo|storage|reposit[oó]rio|banco(?:\s+de\s+dados)?|db)\b/i],
  ['queue', /\b(queue|fila|kafka|rabbit|buffer|pubsub)\b/i],
  ['service', /\b(api|servi[cç]o|service|backend|gateway|servidor|server|whatsapp|crm|worker|microsservi[cç]o|microservice)\b/i],
  ['decision', /\b(decis[aã]o|decision|aprova[rç]?[aã]?o?|approve|reprova|approved)\b|\?/i],
]

export function inferKind(label: string): NodeKind {
  for (const [kind, pattern] of RULES) {
    if (pattern.test(label)) return kind
  }
  return 'process'
}
