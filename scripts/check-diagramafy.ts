import assert from 'node:assert/strict'
import { fromMermaid, toMermaid } from '../src/diagramafy/mermaid.ts'
import { parsePrompt } from '../src/diagramafy/prompt.ts'
import { inferKind } from '../src/diagramafy/kinds.ts'

const flow = parsePrompt('Cliente -> API -> Banco de dados\nAPI -> Fila')
assert.ok(flow)
assert.equal(flow.nodes.length, 4)
assert.equal(flow.edges.length, 3)
const cliente = flow.nodes.find((node) => node.label === 'Cliente')
const api = flow.nodes.find((node) => node.label === 'API')
const bank = flow.nodes.find((node) => node.label === 'Banco de dados')
const queue = flow.nodes.find((node) => node.label === 'Fila')
assert.equal(cliente?.kind, 'person')
assert.equal(api?.kind, 'service')
assert.equal(bank?.kind, 'data')
assert.equal(queue?.kind, 'queue')
assert.ok(cliente && api && cliente.x < api.x)
assert.equal(inferKind('Human review'), 'person')
assert.equal(inferKind('Aprovar?'), 'decision')

const steps = parsePrompt('Pedido\nPagamento\nNota fiscal')
assert.ok(steps)
assert.equal(steps.edges.length, 2)
assert.equal(steps.nodes[0]?.label, 'Pedido')

const mermaid = toMermaid({
  direction: 'LR',
  nodes: flow.nodes,
  edges: flow.edges,
})
const imported = fromMermaid(mermaid)
assert.ok(imported)
assert.equal(imported.nodes.length, flow.nodes.length)
assert.equal(imported.edges.length, flow.edges.length)
assert.equal(imported.direction, 'LR')
const importedLabels = imported.nodes.map((node) => node.label).sort()
assert.deepEqual(importedLabels, ['API', 'Banco de dados', 'Cliente', 'Fila'])

const chain = fromMermaid('flowchart TD\n  A[Cliente] --> B[API] --> C[(Banco)]')
assert.ok(chain)
assert.equal(chain.direction, 'TD')
assert.equal(chain.nodes.find((node) => node.id === 'C')?.kind, 'data')
assert.equal(chain.edges.length, 2)

assert.equal(fromMermaid('hello world'), null)
const linked = fromMermaid('hello --> world')
assert.ok(linked)
assert.equal(linked.edges.length, 1)
assert.equal(parsePrompt('   '), null)

console.log('diagramafy checks passed')
