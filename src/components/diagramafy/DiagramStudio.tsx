import { useEffect, useId, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTES } from '../../constants/routes'
import { useTranslation } from '../../i18n'
import { diagramafyCopy } from '../../diagramafy/copy'
import { clamp, clientToWorld, edgeCurve, fitView, type View } from '../../diagramafy/geometry'
import { createId } from '../../diagramafy/ids'
import { autoLayout } from '../../diagramafy/layout'
import { fromMermaid, toMermaid } from '../../diagramafy/mermaid'
import { parsePrompt } from '../../diagramafy/prompt'
import { createDiagram, loadStore, saveStore } from '../../diagramafy/storage'
import { flowFromTemplate, getTemplates } from '../../diagramafy/templates'
import { NODE_H, NODE_KINDS, NODE_W, type Diagram, type DiagramStore, type FlowDirection, type NodeKind } from '../../diagramafy/types'
import './diagramafy.css'

type Selection = { kind: 'node' | 'edge'; id: string } | null
type Pane = 'canvas' | 'library' | 'inspect'

type NodeDrag = {
  id: string
  originX: number
  originY: number
  pointerX: number
  pointerY: number
  snapshot: Diagram
  moved: boolean
}

type PanDrag = {
  pointerX: number
  pointerY: number
  view: View
  moved: boolean
}

function stamp(diagram: Diagram): Diagram {
  return { ...diagram, updatedAt: Date.now() }
}

function fileSlug(name: string) {
  const slug = name
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return slug || 'diagramafy'
}

function nodeIdFromPoint(x: number, y: number) {
  const stack = document.elementsFromPoint(x, y)
  for (const element of stack) {
    if (!(element instanceof Element)) continue
    const id = element.closest('[data-node-id]')?.getAttribute('data-node-id')
    if (id) return id
  }
  return null
}

export function DiagramStudio() {
  const { locale } = useTranslation()
  const text = diagramafyCopy(locale)
  const templates = getTemplates(locale)
  const baseId = useId()

  const [store, setStore] = useState<DiagramStore>(() => loadStore(locale))
  const [selection, setSelection] = useState<Selection>(null)
  const [view, setView] = useState<View>({ x: 48, y: 48, scale: 1 })
  const [pane, setPane] = useState<Pane>('canvas')
  const [prompt, setPrompt] = useState('')
  const [importText, setImportText] = useState('')
  const [notice, setNotice] = useState<string | null>(null)
  const [canHistory, setCanHistory] = useState({ undo: false, redo: false })
  const [draft, setDraft] = useState<{ fromId: string; x1: number; y1: number; x2: number; y2: number } | null>(null)
  const [fitToken, setFitToken] = useState(0)

  const storeRef = useRef(store)
  const viewRef = useRef(view)
  const canvasRef = useRef<HTMLDivElement>(null)
  const exportRef = useRef<HTMLTextAreaElement>(null)
  const past = useRef<Diagram[]>([])
  const future = useRef<Diagram[]>([])
  const nodeDrag = useRef<NodeDrag | null>(null)
  const panDrag = useRef<PanDrag | null>(null)
  const draftRef = useRef(draft)
  const labelOrigin = useRef<Diagram | null>(null)
  const noticeTimer = useRef<number | null>(null)
  const actions = useRef({ undo: () => {}, redo: () => {}, remove: () => {} })

  const diagram = store.diagrams.find((item) => item.id === store.activeId) ?? store.diagrams[0]
  const selectedNode = selection?.kind === 'node' ? diagram.nodes.find((node) => node.id === selection.id) : undefined
  const selectedEdge = selection?.kind === 'edge' ? diagram.edges.find((edge) => edge.id === selection.id) : undefined
  const mermaid = useMemo(() => toMermaid(diagram), [diagram])

  function syncHistory() {
    setCanHistory({ undo: past.current.length > 0, redo: future.current.length > 0 })
  }

  function showNotice(message: string) {
    setNotice(message)
    if (noticeTimer.current) window.clearTimeout(noticeTimer.current)
    noticeTimer.current = window.setTimeout(() => setNotice(null), 2400)
  }

  function commitStore(next: DiagramStore, options?: { fit?: boolean; resetHistory?: boolean }) {
    storeRef.current = next
    setStore(next)
    if (options?.resetHistory) {
      past.current = []
      future.current = []
      syncHistory()
    }
    if (options?.fit) setFitToken((token) => token + 1)
  }

  function mapActive(recipe: (current: Diagram) => Diagram, options?: { history?: boolean; fit?: boolean }) {
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (!current) return null
    const nextDiagram = stamp(recipe(current))
    if (options?.history !== false) {
      past.current.push(current)
      if (past.current.length > 60) past.current.shift()
      future.current = []
      syncHistory()
    }
    const next = {
      ...storeRef.current,
      diagrams: storeRef.current.diagrams.map((item) => (item.id === current.id ? nextDiagram : item)),
    }
    commitStore(next, { fit: options?.fit })
    return nextDiagram
  }

  function rememberLabelOrigin() {
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (current) labelOrigin.current = current
  }

  function commitLabelOrigin() {
    const origin = labelOrigin.current
    labelOrigin.current = null
    if (!origin) return
    const current = storeRef.current.diagrams.find((item) => item.id === origin.id)
    if (!current || JSON.stringify(origin) === JSON.stringify(current)) return
    past.current.push(origin)
    future.current = []
    syncHistory()
  }

  function undo() {
    const snapshot = past.current.pop()
    if (!snapshot) return
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (current) future.current.push(current)
    commitStore({
      ...storeRef.current,
      activeId: snapshot.id,
      diagrams: storeRef.current.diagrams.map((item) => (item.id === snapshot.id ? snapshot : item)),
    })
    syncHistory()
    setSelection(null)
  }

  function redo() {
    const snapshot = future.current.pop()
    if (!snapshot) return
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (current) past.current.push(current)
    commitStore({
      ...storeRef.current,
      activeId: snapshot.id,
      diagrams: storeRef.current.diagrams.map((item) => (item.id === snapshot.id ? snapshot : item)),
    })
    syncHistory()
    setSelection(null)
  }

  function removeSelection() {
    const currentSelection = selection
    if (!currentSelection) return
    if (currentSelection.kind === 'node') {
      mapActive((current) => ({
        ...current,
        nodes: current.nodes.filter((node) => node.id !== currentSelection.id),
        edges: current.edges.filter((edge) => edge.from !== currentSelection.id && edge.to !== currentSelection.id),
      }))
    } else {
      mapActive((current) => ({
        ...current,
        edges: current.edges.filter((edge) => edge.id !== currentSelection.id),
      }))
    }
    setSelection(null)
  }

  useEffect(() => {
    storeRef.current = store
    viewRef.current = view
    draftRef.current = draft
  }, [store, view, draft])

  useEffect(() => {
    actions.current = { undo, redo, remove: removeSelection }
  })

  useEffect(() => {
    const timer = window.setTimeout(() => saveStore(store), 180)
    return () => window.clearTimeout(timer)
  }, [store])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const canvas = canvasRef.current
      const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
      if (!canvas || !current) return
      const rect = canvas.getBoundingClientRect()
      const next = fitView(current.nodes, rect.width, rect.height)
      viewRef.current = next
      setView(next)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [fitToken])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const current = viewRef.current
      const mx = event.clientX - rect.left
      const my = event.clientY - rect.top
      const scale = clamp(current.scale * (event.deltaY > 0 ? 0.92 : 1.08), 0.35, 2.2)
      const worldX = (mx - current.x) / current.scale
      const worldY = (my - current.y) / current.scale
      const next = { scale, x: mx - worldX * scale, y: my - worldY * scale }
      viewRef.current = next
      setView(next)
    }

    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target instanceof HTMLElement ? event.target : null
      const typing = Boolean(target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable))
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') {
        event.preventDefault()
        if (event.shiftKey) actions.current.redo()
        else actions.current.undo()
        return
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'y') {
        event.preventDefault()
        actions.current.redo()
        return
      }
      if (typing) return
      if (event.key === 'Escape') {
        setDraft(null)
        setSelection(null)
      }
      if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault()
        actions.current.remove()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => () => {
    if (noticeTimer.current) window.clearTimeout(noticeTimer.current)
  }, [])

  function zoomBy(factor: number) {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const current = viewRef.current
    const mx = rect.width / 2
    const my = rect.height / 2
    const scale = clamp(current.scale * factor, 0.35, 2.2)
    const worldX = (mx - current.x) / current.scale
    const worldY = (my - current.y) / current.scale
    const next = { scale, x: mx - worldX * scale, y: my - worldY * scale }
    viewRef.current = next
    setView(next)
  }

  function openDiagram(diagramId: string) {
    if (diagramId === storeRef.current.activeId) return
    commitStore({ ...storeRef.current, activeId: diagramId }, { fit: true, resetHistory: true })
    setSelection(null)
    setPane('canvas')
  }

  function addDiagram(nextDiagram: Diagram) {
    const diagrams = [...storeRef.current.diagrams, nextDiagram].slice(-30)
    commitStore({ version: 1, activeId: nextDiagram.id, diagrams }, { fit: true, resetHistory: true })
    setSelection(null)
    setPane('canvas')
  }

  function applyPrompt(source: string) {
    const flow = parsePrompt(source, diagram.direction)
    if (!flow) {
      showNotice(text.emptyPrompt)
      return
    }
    setPrompt(source)
    mapActive((current) => ({ ...current, direction: flow.direction, nodes: flow.nodes, edges: flow.edges }), { fit: true })
    setSelection(null)
    setPane('canvas')
    showNotice(text.generated)
  }

  function applyTemplate(templateId: string) {
    const template = templates.find((item) => item.id === templateId)
    if (!template) return
    const flow = flowFromTemplate(template)
    if (!flow) return
    addDiagram(createDiagram(template.name, flow))
    setPrompt(template.prompt)
    showNotice(text.generated)
  }

  function importMermaid() {
    const flow = fromMermaid(importText)
    if (!flow) {
      showNotice(text.invalid)
      return
    }
    mapActive((current) => ({ ...current, direction: flow.direction, nodes: flow.nodes, edges: flow.edges }), { fit: true })
    setSelection(null)
    setPane('canvas')
    showNotice(text.imported)
  }

  async function copyMermaid() {
    try {
      await navigator.clipboard.writeText(mermaid)
      showNotice(text.copied)
    } catch {
      exportRef.current?.focus()
      exportRef.current?.select()
    }
  }

  function downloadMermaid() {
    const blob = new Blob([mermaid], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${fileSlug(diagram.name)}.mmd`
    link.click()
    URL.revokeObjectURL(url)
  }

  function addNode(kind: NodeKind) {
    const canvas = canvasRef.current
    const currentView = viewRef.current
    let x = 96
    let y = 96
    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      x = (rect.width / 2 - currentView.x) / currentView.scale - NODE_W / 2
      y = (rect.height / 2 - currentView.y) / currentView.scale - NODE_H / 2
    }
    const offset = (diagram.nodes.length % 6) * 18
    const id = createId()
    mapActive((current) => ({
      ...current,
      nodes: [...current.nodes, { id, kind, label: text.kinds[kind], x: x + offset, y: y + offset }],
    }))
    setSelection({ kind: 'node', id })
    setPane('canvas')
  }

  function connectNodes(from: string, to: string) {
    if (from === to) return
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (!current || current.edges.some((edge) => edge.from === from && edge.to === to)) return
    const id = createId()
    mapActive((diagramState) => ({
      ...diagramState,
      edges: [...diagramState.edges, { id, from, to, label: '' }],
    }))
    setSelection({ kind: 'edge', id })
  }

  function setDirection(direction: FlowDirection) {
    if (direction === diagram.direction) return
    mapActive((current) => ({
      ...current,
      direction,
      nodes: autoLayout(current.nodes, current.edges, direction),
    }), { fit: true })
  }

  function deleteActiveDiagram() {
    if (!window.confirm(text.confirmDelete)) return
    if (store.diagrams.length === 1) {
      const blank = createDiagram(text.untitled)
      commitStore({ version: 1, activeId: blank.id, diagrams: [blank] }, { fit: true, resetHistory: true })
      setSelection(null)
      return
    }
    const diagrams = store.diagrams.filter((item) => item.id !== diagram.id)
    commitStore({ version: 1, activeId: diagrams[0].id, diagrams }, { fit: true, resetHistory: true })
    setSelection(null)
  }

  function onNodePointerDown(event: ReactPointerEvent<HTMLElement>, nodeId: string) {
    if (event.button !== 0) return
    event.stopPropagation()
    const node = diagram.nodes.find((item) => item.id === nodeId)
    const current = storeRef.current.diagrams.find((item) => item.id === storeRef.current.activeId)
    if (!node || !current) return
    setSelection({ kind: 'node', id: nodeId })
    nodeDrag.current = {
      id: nodeId,
      originX: node.x,
      originY: node.y,
      pointerX: event.clientX,
      pointerY: event.clientY,
      snapshot: current,
      moved: false,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onNodePointerMove(event: ReactPointerEvent<HTMLElement>) {
    const drag = nodeDrag.current
    if (!drag) return
    const dx = (event.clientX - drag.pointerX) / viewRef.current.scale
    const dy = (event.clientY - drag.pointerY) / viewRef.current.scale
    if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true
    mapActive((current) => ({
      ...current,
      nodes: current.nodes.map((node) => (
        node.id === drag.id ? { ...node, x: drag.originX + dx, y: drag.originY + dy } : node
      )),
    }), { history: false })
  }

  function onNodePointerUp() {
    const drag = nodeDrag.current
    nodeDrag.current = null
    if (!drag?.moved) return
    past.current.push(drag.snapshot)
    future.current = []
    syncHistory()
  }

  function onPortPointerDown(event: ReactPointerEvent<HTMLButtonElement>, nodeId: string) {
    if (event.button !== 0) return
    event.stopPropagation()
    event.preventDefault()
    const node = diagram.nodes.find((item) => item.id === nodeId)
    if (!node) return
    const start = { x: node.x + NODE_W, y: node.y + NODE_H / 2 }
    const next = { fromId: nodeId, x1: start.x, y1: start.y, x2: start.x, y2: start.y }
    draftRef.current = next
    setDraft(next)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPortPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    const canvas = canvasRef.current
    if (!canvas) return
    const current = draftRef.current
    if (!current) return
    const world = clientToWorld(event.clientX, event.clientY, canvas.getBoundingClientRect(), viewRef.current)
    const next = { ...current, x2: world.x, y2: world.y }
    draftRef.current = next
    setDraft(next)
  }

  function onPortPointerUp(event: ReactPointerEvent<HTMLButtonElement>) {
    const fromId = draftRef.current?.fromId
    draftRef.current = null
    setDraft(null)
    if (!fromId) return
    const target = nodeIdFromPoint(event.clientX, event.clientY)
    if (target) connectNodes(fromId, target)
  }

  function onCanvasPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0 && event.button !== 1) return
    const target = event.target instanceof Element ? event.target : null
    if (target?.closest('.dfy-node, .dfy-edge, .dfy-empty__card')) return
    panDrag.current = { pointerX: event.clientX, pointerY: event.clientY, view: viewRef.current, moved: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onCanvasPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = panDrag.current
    if (!drag) return
    if (Math.abs(event.clientX - drag.pointerX) + Math.abs(event.clientY - drag.pointerY) > 3) drag.moved = true
    const next = {
      ...drag.view,
      x: drag.view.x + (event.clientX - drag.pointerX),
      y: drag.view.y + (event.clientY - drag.pointerY),
    }
    viewRef.current = next
    setView(next)
  }

  function onCanvasPointerUp() {
    const drag = panDrag.current
    panDrag.current = null
    if (drag && !drag.moved) setSelection(null)
  }

  const edgeFrom = selectedEdge ? diagram.nodes.find((node) => node.id === selectedEdge.from) : undefined
  const edgeTo = selectedEdge ? diagram.nodes.find((node) => node.id === selectedEdge.to) : undefined

  return (
    <section className="dfy" aria-labelledby={`${baseId}-title`}>
      <header className="dfy-top">
        <div className="dfy-top__identity">
          <p className="dfy-kicker" id={`${baseId}-title`}>{text.title}</p>
          <input
            className="dfy-name"
            aria-label={text.diagramName}
            value={diagram.name}
            maxLength={80}
            onFocus={rememberLabelOrigin}
            onBlur={commitLabelOrigin}
            onChange={(event) => {
              const name = event.target.value
              mapActive((current) => ({ ...current, name }), { history: false })
            }}
          />
          <p className="dfy-lede">{text.lede}</p>
        </div>
        <div className="dfy-toolbar" role="toolbar" aria-label={text.title}>
          <button type="button" className="dfy-btn" onClick={undo} disabled={!canHistory.undo}>{text.undo}</button>
          <button type="button" className="dfy-btn" onClick={redo} disabled={!canHistory.redo}>{text.redo}</button>
          <button
            type="button"
            className="dfy-btn"
            onClick={() => mapActive((current) => ({ ...current, nodes: autoLayout(current.nodes, current.edges, current.direction) }), { fit: true })}
          >
            {text.layout}
          </button>
          <button type="button" className={`dfy-btn${diagram.direction === 'LR' ? ' is-active' : ''}`} aria-pressed={diagram.direction === 'LR'} onClick={() => setDirection('LR')}>{text.horizontal}</button>
          <button type="button" className={`dfy-btn${diagram.direction === 'TD' ? ' is-active' : ''}`} aria-pressed={diagram.direction === 'TD'} onClick={() => setDirection('TD')}>{text.vertical}</button>
          <button type="button" className="dfy-btn" onClick={() => zoomBy(1 / 1.1)} aria-label={text.zoomOut}>−</button>
          <span className="dfy-zoom">{Math.round(view.scale * 100)}%</span>
          <button type="button" className="dfy-btn" onClick={() => zoomBy(1.1)} aria-label={text.zoomIn}>+</button>
          <button type="button" className="dfy-btn" onClick={() => setFitToken((token) => token + 1)}>{text.fit}</button>
          <Link className="dfy-btn dfy-btn--link" to={PRODUCT_ROUTES.diagramafy}>{text.productPage}</Link>
        </div>
      </header>

      <div className="dfy-panes" role="tablist" aria-label={text.title}>
        {(['library', 'canvas', 'inspect'] as const).map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={pane === item}
            className={`dfy-pane${pane === item ? ' is-active' : ''}`}
            onClick={() => setPane(item)}
          >
            {text.panes[item]}
          </button>
        ))}
      </div>

      <div className="dfy-shell" data-pane={pane}>
        <aside className="dfy-side" aria-label={text.library}>
          <div className="dfy-side__head">
            <h2>{text.library}</h2>
            <button type="button" className="dfy-btn dfy-btn--gold" onClick={() => addDiagram(createDiagram(text.untitled))}>{text.newDiagram}</button>
          </div>
          <ul className="dfy-list">
            {store.diagrams.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`dfy-list__item${item.id === diagram.id ? ' is-active' : ''}`}
                  aria-current={item.id === diagram.id ? 'true' : undefined}
                  onClick={() => openDiagram(item.id)}
                >
                  {item.name || text.untitled}
                </button>
              </li>
            ))}
          </ul>

          <h2>{text.templates}</h2>
          <ul className="dfy-templates">
            {templates.map((template) => (
              <li key={template.id}>
                <button type="button" className="dfy-template" onClick={() => applyTemplate(template.id)}>
                  <strong>{template.name}</strong>
                  <span>{template.description}</span>
                </button>
              </li>
            ))}
          </ul>

          <h2>{text.blocks}</h2>
          <div className="dfy-kinds">
            {NODE_KINDS.map((kind) => (
              <button key={kind} type="button" className={`dfy-kind dfy-kind--${kind}`} onClick={() => addNode(kind)}>
                {text.kinds[kind]}
              </button>
            ))}
          </div>
          <p className="dfy-saved">{text.saved}</p>
        </aside>

        <div
          ref={canvasRef}
          id="diagramafy-canvas"
          className="dfy-canvas"
          role="application"
          aria-label={text.canvasLabel}
          onPointerDown={onCanvasPointerDown}
          onPointerMove={onCanvasPointerMove}
          onPointerUp={onCanvasPointerUp}
          style={{
            '--dfy-x': `${view.x}px`,
            '--dfy-y': `${view.y}px`,
            '--dfy-z': String(view.scale),
          } as CSSProperties}
        >
          <div className="dfy-world">
            <svg className="dfy-edges" aria-hidden="true">
              <defs>
                <marker id="dfy-arrow" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
              </defs>
              {diagram.edges.map((edge) => {
                const from = diagram.nodes.find((node) => node.id === edge.from)
                const to = diagram.nodes.find((node) => node.id === edge.to)
                if (!from || !to) return null
                const curve = edgeCurve(from, to)
                const selected = selection?.kind === 'edge' && selection.id === edge.id
                const midX = (curve.start.x + curve.end.x) / 2
                const midY = (curve.start.y + curve.end.y) / 2
                return (
                  <g key={edge.id}>
                    <path
                      className="dfy-edge-hit"
                      d={curve.path}
                      onPointerDown={(event) => {
                        event.stopPropagation()
                        setSelection({ kind: 'edge', id: edge.id })
                      }}
                    />
                    <path
                      className={`dfy-edge${selected ? ' is-selected' : ''}`}
                      d={curve.path}
                      markerEnd="url(#dfy-arrow)"
                    />
                    {edge.label ? (
                      <text className="dfy-edge-label" x={midX} y={midY - 8} textAnchor="middle">{edge.label}</text>
                    ) : null}
                  </g>
                )
              })}
              {draft ? (
                <path className="dfy-edge dfy-edge--draft" d={`M ${draft.x1} ${draft.y1} L ${draft.x2} ${draft.y2}`} />
              ) : null}
            </svg>

            {diagram.nodes.map((node) => {
              const selected = selection?.kind === 'node' && selection.id === node.id
              return (
                <article
                  key={node.id}
                  data-node-id={node.id}
                  className={`dfy-node dfy-node--${node.kind}${selected ? ' is-selected' : ''}`}
                  style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                  tabIndex={0}
                  aria-selected={selected}
                  onFocus={() => setSelection({ kind: 'node', id: node.id })}
                  onPointerDown={(event) => onNodePointerDown(event, node.id)}
                  onPointerMove={onNodePointerMove}
                  onPointerUp={onNodePointerUp}
                >
                  <span>{text.kinds[node.kind]}</span>
                  <strong>{node.label}</strong>
                  <button
                    type="button"
                    className="dfy-port"
                    aria-label={text.edgeLabel}
                    onPointerDown={(event) => onPortPointerDown(event, node.id)}
                    onPointerMove={onPortPointerMove}
                    onPointerUp={onPortPointerUp}
                  />
                </article>
              )
            })}
          </div>

          {diagram.nodes.length === 0 ? (
            <div className="dfy-empty">
              <div className="dfy-empty__card">
                <h2>{text.generateTitle}</h2>
                <p>{text.generateHelp}</p>
                <div className="dfy-chips">
                  {text.examples.map((example) => (
                    <button key={example} type="button" className="dfy-chip" onClick={() => applyPrompt(example)}>
                      {example.split('\n')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {notice ? <p className="dfy-toast" role="status">{notice}</p> : null}
        </div>

        <aside className="dfy-inspector" aria-label={text.inspector}>
          <h2>{text.inspector}</h2>
          {selectedNode ? (
            <div className="dfy-fields">
              <label htmlFor={`${baseId}-node-label`}>{text.label}</label>
              <input
                id={`${baseId}-node-label`}
                value={selectedNode.label}
                maxLength={80}
                onFocus={rememberLabelOrigin}
                onBlur={commitLabelOrigin}
                onChange={(event) => {
                  const label = event.target.value
                  mapActive((current) => ({
                    ...current,
                    nodes: current.nodes.map((node) => (node.id === selectedNode.id ? { ...node, label } : node)),
                  }), { history: false })
                }}
              />
              <label htmlFor={`${baseId}-node-kind`}>{text.kind}</label>
              <select
                id={`${baseId}-node-kind`}
                value={selectedNode.kind}
                onChange={(event) => {
                  const kind = event.target.value as NodeKind
                  mapActive((current) => ({
                    ...current,
                    nodes: current.nodes.map((node) => (node.id === selectedNode.id ? { ...node, kind } : node)),
                  }))
                }}
              >
                {NODE_KINDS.map((kind) => (
                  <option key={kind} value={kind}>{text.kinds[kind]}</option>
                ))}
              </select>
              <button type="button" className="dfy-btn dfy-btn--danger" onClick={removeSelection}>{text.delete}</button>
            </div>
          ) : null}

          {selectedEdge ? (
            <div className="dfy-fields">
              <p className="dfy-edge-caption">{edgeFrom?.label} → {edgeTo?.label}</p>
              <label htmlFor={`${baseId}-edge-label`}>{text.edgeLabel}</label>
              <input
                id={`${baseId}-edge-label`}
                value={selectedEdge.label}
                maxLength={40}
                onFocus={rememberLabelOrigin}
                onBlur={commitLabelOrigin}
                onChange={(event) => {
                  const label = event.target.value
                  mapActive((current) => ({
                    ...current,
                    edges: current.edges.map((edge) => (edge.id === selectedEdge.id ? { ...edge, label } : edge)),
                  }), { history: false })
                }}
              />
              <button type="button" className="dfy-btn dfy-btn--danger" onClick={removeSelection}>{text.delete}</button>
            </div>
          ) : null}

          {!selectedNode && !selectedEdge ? <p className="dfy-muted">{text.noSelection}</p> : null}
          <p className="dfy-shortcuts">{text.shortcuts}</p>

          <h2>{text.generateTitle}</h2>
          <p className="dfy-muted">{text.generateHelp}</p>
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={text.generatePlaceholder}
            rows={5}
            onKeyDown={(event) => {
              if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
                event.preventDefault()
                applyPrompt(prompt)
              }
            }}
          />
          <div className="dfy-chips">
            {text.examples.map((example) => (
              <button key={example} type="button" className="dfy-chip" onClick={() => applyPrompt(example)}>
                {example.replace(/\n/g, ' · ')}
              </button>
            ))}
          </div>
          <button type="button" className="dfy-btn dfy-btn--gold" onClick={() => applyPrompt(prompt)}>{text.generate}</button>

          <h2>{text.mermaidTitle}</h2>
          <p className="dfy-muted">{text.mermaidHelp}</p>
          <textarea ref={exportRef} readOnly value={mermaid} rows={8} aria-label={text.mermaidTitle} />
          <div className="dfy-row">
            <button type="button" className="dfy-btn dfy-btn--gold" onClick={copyMermaid}>{text.copy}</button>
            <button type="button" className="dfy-btn" onClick={downloadMermaid}>{text.download}</button>
          </div>
          <label htmlFor={`${baseId}-import`}>{text.importLabel}</label>
          <textarea
            id={`${baseId}-import`}
            value={importText}
            onChange={(event) => setImportText(event.target.value)}
            placeholder={'flowchart LR\n  A[Cliente] --> B[API]'}
            rows={5}
          />
          <button type="button" className="dfy-btn" onClick={importMermaid}>{text.importAction}</button>
          <button type="button" className="dfy-btn dfy-btn--danger" onClick={deleteActiveDiagram}>{text.deleteDiagram}</button>
        </aside>
      </div>
    </section>
  )
}
