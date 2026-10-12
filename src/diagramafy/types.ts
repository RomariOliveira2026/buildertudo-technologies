export const NODE_KINDS = ['person', 'process', 'service', 'data', 'queue', 'decision'] as const

export type NodeKind = (typeof NODE_KINDS)[number]

export type DiagramNode = {
  id: string
  label: string
  kind: NodeKind
  x: number
  y: number
}

export type DiagramEdge = {
  id: string
  from: string
  to: string
  label: string
}

export type FlowDirection = 'LR' | 'TD'

export type Diagram = {
  id: string
  name: string
  direction: FlowDirection
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  updatedAt: number
}

export type DiagramStore = {
  version: 1
  activeId: string
  diagrams: Diagram[]
}

export const NODE_W = 196
export const NODE_H = 78

export function isNodeKind(value: unknown): value is NodeKind {
  return typeof value === 'string' && (NODE_KINDS as readonly string[]).includes(value)
}
