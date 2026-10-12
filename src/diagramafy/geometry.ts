import { NODE_H, NODE_W, type DiagramNode } from './types'

export type Point = { x: number; y: number }

export type View = { x: number; y: number; scale: number }

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function edgeCurve(from: DiagramNode, to: DiagramNode) {
  const fromCenter = { x: from.x + NODE_W / 2, y: from.y + NODE_H / 2 }
  const toCenter = { x: to.x + NODE_W / 2, y: to.y + NODE_H / 2 }
  const dx = toCenter.x - fromCenter.x
  const dy = toCenter.y - fromCenter.y

  if (Math.abs(dx) >= Math.abs(dy)) {
    const start = dx >= 0 ? { x: from.x + NODE_W, y: fromCenter.y } : { x: from.x, y: fromCenter.y }
    const end = dx >= 0 ? { x: to.x, y: toCenter.y } : { x: to.x + NODE_W, y: toCenter.y }
    const pull = Math.max(40, Math.abs(end.x - start.x) * 0.45)
    const dir = end.x >= start.x ? 1 : -1
    return {
      start,
      end,
      path: `M ${start.x} ${start.y} C ${start.x + pull * dir} ${start.y}, ${end.x - pull * dir} ${end.y}, ${end.x} ${end.y}`,
    }
  }

  const start = dy >= 0 ? { x: fromCenter.x, y: from.y + NODE_H } : { x: fromCenter.x, y: from.y }
  const end = dy >= 0 ? { x: toCenter.x, y: to.y } : { x: toCenter.x, y: to.y + NODE_H }
  const pull = Math.max(40, Math.abs(end.y - start.y) * 0.45)
  const dir = end.y >= start.y ? 1 : -1
  return {
    start,
    end,
    path: `M ${start.x} ${start.y} C ${start.x} ${start.y + pull * dir}, ${end.x} ${end.y - pull * dir}, ${end.x} ${end.y}`,
  }
}

export function fitView(nodes: DiagramNode[], width: number, height: number): View {
  if (!nodes.length || width < 40 || height < 40) return { x: 48, y: 48, scale: 1 }

  const minX = Math.min(...nodes.map((node) => node.x))
  const minY = Math.min(...nodes.map((node) => node.y))
  const maxX = Math.max(...nodes.map((node) => node.x + NODE_W))
  const maxY = Math.max(...nodes.map((node) => node.y + NODE_H))
  const boundsWidth = Math.max(1, maxX - minX)
  const boundsHeight = Math.max(1, maxY - minY)
  const pad = Math.min(72, Math.max(28, width * 0.06))
  const fitted = Math.min((width - pad * 2) / boundsWidth, (height - pad * 2) / boundsHeight)
  const minScale = width < 560 ? 0.78 : 0.4
  const scale = clamp(fitted, minScale, 1.15)
  const overflows = boundsWidth * scale > width - pad || boundsHeight * scale > height - pad

  if (overflows) {
    return {
      scale,
      x: pad - minX * scale,
      y: pad - minY * scale,
    }
  }

  return {
    scale,
    x: (width - boundsWidth * scale) / 2 - minX * scale,
    y: (height - boundsHeight * scale) / 2 - minY * scale,
  }
}

export function clientToWorld(clientX: number, clientY: number, rect: DOMRect, view: View): Point {
  return {
    x: (clientX - rect.left - view.x) / view.scale,
    y: (clientY - rect.top - view.y) / view.scale,
  }
}
