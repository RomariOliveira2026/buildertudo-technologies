import { createId } from './ids'
import { inferKind } from './kinds'
import { autoLayout } from './layout'
import type { DiagramEdge, DiagramNode, FlowDirection } from './types'

const STEP_SPLIT =
  /\s*(?:-->|->|→|=>|—>|–>)\s*|\s+(?:then|depois|luego|entonces|então|entao|chama|calls)\s+|\s+envia para\s+|\s+envía a\s+|\s+sends to\s+/i

export type ParsedFlow = {
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  direction: FlowDirection
}

function cleanStep(value: string) {
  return value.replace(/^\s*(?:\d+[.)]\s+|[-*]\s+)/, '').trim().replace(/^["']|["']$/g, '')
}

export function parsePrompt(text: string, direction: FlowDirection = 'LR'): ParsedFlow | null {
  const lines = text
    .split(/\n/)
    .map(cleanStep)
    .filter(Boolean)

  if (!lines.length) return null

  const nodes: DiagramNode[] = []
  const byLabel = new Map<string, string>()
  const edges: DiagramEdge[] = []
  const seenEdges = new Set<string>()

  function ensure(label: string) {
    const clean = cleanStep(label)
    if (!clean) return null
    const key = clean.toLocaleLowerCase()
    const existing = byLabel.get(key)
    if (existing) return existing
    const id = createId()
    byLabel.set(key, id)
    nodes.push({ id, label: clean, kind: inferKind(clean), x: 0, y: 0 })
    return id
  }

  function link(from: string, to: string) {
    const key = `${from}>${to}`
    if (from === to || seenEdges.has(key)) return
    seenEdges.add(key)
    edges.push({ id: createId(), from, to, label: '' })
  }

  const hasFlow = lines.some((line) => STEP_SPLIT.test(line))

  if (!hasFlow) {
    const ids = lines.map(ensure).filter((id): id is string => Boolean(id))
    for (let index = 0; index < ids.length - 1; index += 1) link(ids[index], ids[index + 1])
  } else {
    for (const line of lines) {
      const parts = line.split(STEP_SPLIT).map((part) => part.trim()).filter(Boolean)
      const ids = parts.map(ensure).filter((id): id is string => Boolean(id))
      for (let index = 0; index < ids.length - 1; index += 1) link(ids[index], ids[index + 1])
    }
  }

  if (!nodes.length) return null

  return {
    nodes: autoLayout(nodes, edges, direction),
    edges,
    direction,
  }
}
