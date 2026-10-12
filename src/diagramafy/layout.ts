import { NODE_H, NODE_W, type DiagramEdge, type DiagramNode, type FlowDirection } from './types'

export function autoLayout(nodes: DiagramNode[], edges: DiagramEdge[], direction: FlowDirection = 'LR') {
  const incoming = new Map<string, string[]>()
  for (const node of nodes) incoming.set(node.id, [])
  for (const edge of edges) {
    if (incoming.has(edge.to) && incoming.has(edge.from)) incoming.get(edge.to)?.push(edge.from)
  }

  const rank = new Map<string, number>()
  const visiting = new Set<string>()

  function rankOf(id: string): number {
    const known = rank.get(id)
    if (known !== undefined) return known
    if (visiting.has(id)) return 0
    visiting.add(id)
    const preds = incoming.get(id) ?? []
    const value = preds.length === 0 ? 0 : Math.max(...preds.map(rankOf)) + 1
    visiting.delete(id)
    rank.set(id, value)
    return value
  }

  nodes.forEach((node) => rankOf(node.id))

  const columns = new Map<number, DiagramNode[]>()
  for (const node of nodes) {
    const column = rank.get(node.id) ?? 0
    const list = columns.get(column) ?? []
    list.push(node)
    columns.set(column, list)
  }

  const gapX = 112
  const gapY = 56

  return nodes.map((node) => {
    const column = rank.get(node.id) ?? 0
    const stack = columns.get(column) ?? [node]
    const index = Math.max(0, stack.indexOf(node))
    if (direction === 'TD') {
      return {
        ...node,
        x: 72 + index * (NODE_W + gapX),
        y: 72 + column * (NODE_H + gapY + 36),
      }
    }
    return {
      ...node,
      x: 72 + column * (NODE_W + gapX),
      y: 72 + index * (NODE_H + gapY),
    }
  })
}
