import type { Locale } from '../i18n/config'
import { createId } from './ids'
import { flowFromTemplate, getTemplates } from './templates'
import { isNodeKind, type Diagram, type DiagramEdge, type DiagramNode, type DiagramStore, type FlowDirection } from './types'
import type { ParsedFlow } from './prompt'

export const DIAGRAM_STORAGE_KEY = 'buildertudo.diagramafy.v1'

export function createDiagram(name: string, flow?: ParsedFlow | null): Diagram {
  return {
    id: createId(),
    name,
    direction: flow?.direction ?? 'LR',
    nodes: flow?.nodes ?? [],
    edges: flow?.edges ?? [],
    updatedAt: Date.now(),
  }
}

export function createDefaultStore(locale: Locale): DiagramStore {
  const template = getTemplates(locale)[0]
  const diagram = createDiagram(template.name, flowFromTemplate(template))
  return { version: 1, activeId: diagram.id, diagrams: [diagram] }
}

function parseNode(value: unknown): DiagramNode | null {
  if (!value || typeof value !== 'object') return null
  const node = value as Partial<DiagramNode>
  if (typeof node.id !== 'string' || typeof node.label !== 'string') return null
  if (typeof node.x !== 'number' || typeof node.y !== 'number' || !Number.isFinite(node.x) || !Number.isFinite(node.y)) return null
  if (!isNodeKind(node.kind)) return null
  return { id: node.id, label: node.label, kind: node.kind, x: node.x, y: node.y }
}

function parseEdge(value: unknown, ids: Set<string>): DiagramEdge | null {
  if (!value || typeof value !== 'object') return null
  const edge = value as Partial<DiagramEdge>
  if (typeof edge.id !== 'string' || typeof edge.from !== 'string' || typeof edge.to !== 'string') return null
  if (!ids.has(edge.from) || !ids.has(edge.to) || edge.from === edge.to) return null
  return { id: edge.id, from: edge.from, to: edge.to, label: typeof edge.label === 'string' ? edge.label : '' }
}

function parseDiagram(value: unknown): Diagram | null {
  if (!value || typeof value !== 'object') return null
  const raw = value as Partial<Diagram>
  if (typeof raw.id !== 'string' || typeof raw.name !== 'string') return null
  if (!Array.isArray(raw.nodes) || !Array.isArray(raw.edges)) return null

  const nodes = raw.nodes.map(parseNode).filter((node): node is DiagramNode => Boolean(node))
  const ids = new Set(nodes.map((node) => node.id))
  const edges = raw.edges.map((edge) => parseEdge(edge, ids)).filter((edge): edge is DiagramEdge => Boolean(edge))
  const direction: FlowDirection = raw.direction === 'TD' ? 'TD' : 'LR'

  return {
    id: raw.id,
    name: raw.name.slice(0, 80),
    direction,
    nodes,
    edges,
    updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
  }
}

export function normalizeStore(value: unknown): DiagramStore | null {
  if (!value || typeof value !== 'object') return null
  const raw = value as Partial<DiagramStore>
  if (!Array.isArray(raw.diagrams)) return null
  const diagrams = raw.diagrams.map(parseDiagram).filter((diagram): diagram is Diagram => Boolean(diagram))
  if (!diagrams.length) return null
  const activeId = diagrams.some((diagram) => diagram.id === raw.activeId) ? String(raw.activeId) : diagrams[0].id
  return { version: 1, activeId, diagrams }
}

export function loadStore(locale: Locale): DiagramStore {
  try {
    const raw = localStorage.getItem(DIAGRAM_STORAGE_KEY)
    if (!raw) return createDefaultStore(locale)
    return normalizeStore(JSON.parse(raw)) ?? createDefaultStore(locale)
  } catch {
    return createDefaultStore(locale)
  }
}

export function saveStore(store: DiagramStore) {
  try {
    localStorage.setItem(DIAGRAM_STORAGE_KEY, JSON.stringify(store))
  } catch {
    /* Storage can be unavailable in private mode. The editor still works in memory. */
  }
}
