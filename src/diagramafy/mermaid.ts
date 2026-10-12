import { createId } from './ids'
import { inferKind } from './kinds'
import { autoLayout } from './layout'
import type { Diagram, DiagramEdge, DiagramNode, FlowDirection, NodeKind } from './types'

function escapeLabel(label: string) {
  const clean = label.replace(/["[\]{}()|<>]/g, ' ').replace(/\s+/g, ' ').trim()
  return clean || 'Node'
}

function mermaidId(id: string, used: Set<string>) {
  const base = `n${id.replace(/[^A-Za-z0-9_]/g, '') || 'x'}`
  let next = base
  let suffix = 2
  while (used.has(next)) {
    next = `${base}_${suffix}`
    suffix += 1
  }
  used.add(next)
  return next
}

function wrapLabel(kind: NodeKind, label: string) {
  const safe = escapeLabel(label)
  if (kind === 'person') return `([${safe}])`
  if (kind === 'data') return `[(${safe})]`
  if (kind === 'queue') return `[/${safe}/]`
  if (kind === 'decision') return `{${safe}}`
  if (kind === 'service') return `[[${safe}]]`
  return `[${safe}]`
}

export function toMermaid(diagram: Pick<Diagram, 'direction' | 'nodes' | 'edges'>) {
  const used = new Set<string>()
  const ids = new Map(diagram.nodes.map((node) => [node.id, mermaidId(node.id, used)]))
  const lines = [`flowchart ${diagram.direction}`]

  for (const node of diagram.nodes) {
    lines.push(`  ${ids.get(node.id)}${wrapLabel(node.kind, node.label)}`)
  }

  for (const edge of diagram.edges) {
    const from = ids.get(edge.from)
    const to = ids.get(edge.to)
    if (!from || !to) continue
    const label = edge.label.trim() ? `|${escapeLabel(edge.label)}| ` : ''
    lines.push(`  ${from} -->${label} ${to}`)
  }

  return lines.join('\n')
}

type ShapeKind = NodeKind | 'auto'

type Token = {
  id: string
  label?: string
  shape: ShapeKind
  rest: string
}

const SHAPES: Array<{ pattern: RegExp; shape: ShapeKind }> = [
  { pattern: /^\s*\[\((.+?)\)\]/, shape: 'data' },
  { pattern: /^\s*\(\[(.+?)\]\)/, shape: 'person' },
  { pattern: /^\s*\[\[(.+?)\]\]/, shape: 'service' },
  { pattern: /^\s*\{\{(.+?)\}\}/, shape: 'service' },
  { pattern: /^\s*\(\((.+?)\)\)/, shape: 'person' },
  { pattern: /^\s*\[\/(.+?)\/\]/, shape: 'queue' },
  { pattern: /^\s*\[(.+?)\]/, shape: 'auto' },
  { pattern: /^\s*\{(.+?)\}/, shape: 'decision' },
  { pattern: /^\s*\((.+?)\)/, shape: 'auto' },
  { pattern: /^\s*>(.+?)\]/, shape: 'process' },
]

function unquote(value: string) {
  return value.trim().replace(/^["']|["']$/g, '').trim()
}

function parseNodeToken(input: string): Token | null {
  const match = input.match(/^\s*([A-Za-z_][\w-]*)/)
  if (!match) return null
  const id = match[1]
  const rest = input.slice(match[0].length)

  for (const shape of SHAPES) {
    const found = rest.match(shape.pattern)
    if (!found) continue
    return { id, label: unquote(found[1]), shape: shape.shape, rest: rest.slice(found[0].length) }
  }

  return { id, shape: 'auto', rest }
}

function kindFor(label: string, shape: ShapeKind): NodeKind {
  if (shape === 'auto') return inferKind(label)
  return shape
}

export function fromMermaid(source: string): { nodes: DiagramNode[]; edges: DiagramEdge[]; direction: FlowDirection } | null {
  let direction: FlowDirection = 'LR'
  const header = source.match(/\b(?:flowchart|graph)\s+(LR|RL|TD|TB|BT)\b/i)
  if (header) {
    const value = header[1].toUpperCase()
    direction = value === 'TD' || value === 'TB' || value === 'BT' ? 'TD' : 'LR'
  }

  const nodes = new Map<string, DiagramNode>()
  const edges: DiagramEdge[] = []
  const seenEdges = new Set<string>()

  function ensure(token: Token) {
    const label = token.label?.trim() || token.id
    const kind = kindFor(label, token.label ? token.shape : 'auto')
    const current = nodes.get(token.id)
    if (!current) {
      nodes.set(token.id, { id: token.id, label, kind, x: 0, y: 0 })
      return token.id
    }
    if (token.label && (current.label === current.id || current.label === token.id)) {
      current.label = label
      current.kind = kind
    }
    return token.id
  }

  function link(from: string, to: string, label = '') {
    const key = `${from}>${to}>${label}`
    if (from === to || seenEdges.has(key) || !nodes.has(from) || !nodes.has(to)) return
    seenEdges.add(key)
    edges.push({ id: createId(), from, to, label: label.trim() })
  }

  const lines = source.split('\n')
  for (const rawLine of lines) {
    const line = rawLine.replace(/%%.*$/, '').trim()
    if (!line || /^(flowchart|graph|subgraph|end|direction|classDef|class|style|click)\b/i.test(line)) continue

    const first = parseNodeToken(line)
    if (!first) continue
    const shaped = first.label !== undefined
    const linked = /-->|---|\.->/.test(line)
    if (!shaped && !linked) continue
    ensure(first)
    let previous = first
    let rest = first.rest

    let consumed = false
    while (true) {
      const arrow = rest.match(/^\s*(?:-->|---|-.->)\s*(?:\|([^|]*)\|\s*)?/)
      if (!arrow) break
      const next = parseNodeToken(rest.slice(arrow[0].length))
      if (!next) break
      ensure(next)
      link(previous.id, next.id, arrow[1] ?? '')
      previous = next
      rest = next.rest
      consumed = true
    }

    if (!consumed) ensure(first)
  }

  if (!nodes.size) return null

  const list = [...nodes.values()]
  return {
    nodes: autoLayout(list, edges, direction),
    edges,
    direction,
  }
}
