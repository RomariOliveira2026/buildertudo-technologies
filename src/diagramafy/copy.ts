import type { Locale } from '../i18n/config'
import type { NodeKind } from './types'

export type DiagramafyCopy = {
  title: string
  lede: string
  library: string
  newDiagram: string
  templates: string
  blocks: string
  inspector: string
  noSelection: string
  label: string
  kind: string
  edgeLabel: string
  delete: string
  generateTitle: string
  generateHelp: string
  generate: string
  generatePlaceholder: string
  mermaidTitle: string
  mermaidHelp: string
  copy: string
  copied: string
  download: string
  importLabel: string
  importAction: string
  imported: string
  invalid: string
  emptyPrompt: string
  generated: string
  layout: string
  horizontal: string
  vertical: string
  undo: string
  redo: string
  zoomIn: string
  zoomOut: string
  fit: string
  saved: string
  deleteDiagram: string
  confirmDelete: string
  untitled: string
  diagramName: string
  shortcuts: string
  productPage: string
  openStudio: string
  bannerEyebrow: string
  bannerTitle: string
  bannerBody: string
  canvasLabel: string
  panes: { canvas: string; library: string; inspect: string }
  kinds: Record<NodeKind, string>
  examples: string[]
}

const copy = {
  'pt-BR': {
    title: 'DiagramaFy',
    lede: 'Descreva o fluxo em texto, organize no quadro e exporte em Mermaid.',
    library: 'Diagramas',
    newDiagram: 'Novo',
    templates: 'Modelos',
    blocks: 'Blocos',
    inspector: 'Propriedades',
    noSelection: 'Selecione um bloco ou uma ligação.',
    label: 'Rótulo',
    kind: 'Tipo',
    edgeLabel: 'Legenda da ligação',
    delete: 'Excluir',
    generateTitle: 'Gerar pelo texto',
    generateHelp: 'Uma etapa por linha, ou use setas: Cliente -> API -> Banco.',
    generate: 'Gerar diagrama',
    generatePlaceholder: 'Cliente -> Site -> WhatsApp\nSite -> CRM',
    mermaidTitle: 'Mermaid',
    mermaidHelp: 'O texto abaixo acompanha o quadro. Cole um flowchart para importar.',
    copy: 'Copiar',
    copied: 'Mermaid copiado.',
    download: 'Baixar',
    importLabel: 'Colar Mermaid',
    importAction: 'Importar',
    imported: 'Diagrama importado.',
    invalid: 'Não foi possível ler esse Mermaid. Use um flowchart com setas -->.',
    emptyPrompt: 'Escreva pelo menos uma etapa.',
    generated: 'Diagrama gerado.',
    layout: 'Organizar',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    undo: 'Desfazer',
    redo: 'Refazer',
    zoomIn: 'Aumentar',
    zoomOut: 'Diminuir',
    fit: 'Enquadrar',
    saved: 'Salvo neste navegador',
    deleteDiagram: 'Apagar diagrama',
    confirmDelete: 'Apagar este diagrama?',
    untitled: 'Sem título',
    diagramName: 'Nome do diagrama',
    shortcuts: 'Arraste o fundo para mover o quadro. Use a roda do mouse para o zoom. Arraste o ponto do bloco para ligar. Delete apaga a seleção.',
    productPage: 'Página do produto',
    openStudio: 'Abrir o estúdio',
    bannerEyebrow: 'Estúdio no navegador',
    bannerTitle: 'Desenhe a arquitetura e leve o diagrama em Mermaid.',
    bannerBody: 'O DiagramaFy transforma um texto em um fluxo editável, organiza os blocos e exporta um flowchart que entra em documentação, pull requests e wikis.',
    canvasLabel: 'Quadro do diagrama',
    panes: { canvas: 'Quadro', library: 'Biblioteca', inspect: 'Detalhes' },
    kinds: {
      person: 'Pessoa',
      process: 'Processo',
      service: 'Serviço',
      data: 'Dados',
      queue: 'Fila',
      decision: 'Decisão',
    },
    examples: ['Cliente -> API -> Banco de dados', 'Visitante -> Landing page -> WhatsApp', 'Pedido\nPagamento\nNota fiscal'],
  },
  en: {
    title: 'DiagramaFy',
    lede: 'Describe a flow in text, arrange it on the canvas, and export Mermaid.',
    library: 'Diagrams',
    newDiagram: 'New',
    templates: 'Templates',
    blocks: 'Blocks',
    inspector: 'Properties',
    noSelection: 'Select a block or a connection.',
    label: 'Label',
    kind: 'Type',
    edgeLabel: 'Connection label',
    delete: 'Delete',
    generateTitle: 'Generate from text',
    generateHelp: 'One step per line, or use arrows: Client -> API -> Database.',
    generate: 'Generate diagram',
    generatePlaceholder: 'Client -> Site -> WhatsApp\nSite -> CRM',
    mermaidTitle: 'Mermaid',
    mermaidHelp: 'The text below follows the canvas. Paste a flowchart to import it.',
    copy: 'Copy',
    copied: 'Mermaid copied.',
    download: 'Download',
    importLabel: 'Paste Mermaid',
    importAction: 'Import',
    imported: 'Diagram imported.',
    invalid: 'Could not read that Mermaid. Use a flowchart with --> arrows.',
    emptyPrompt: 'Write at least one step.',
    generated: 'Diagram generated.',
    layout: 'Arrange',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    undo: 'Undo',
    redo: 'Redo',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    fit: 'Fit',
    saved: 'Saved in this browser',
    deleteDiagram: 'Delete diagram',
    confirmDelete: 'Delete this diagram?',
    untitled: 'Untitled',
    diagramName: 'Diagram name',
    shortcuts: 'Drag the background to pan. Use the wheel to zoom. Drag a block handle to connect. Delete removes the selection.',
    productPage: 'Product page',
    openStudio: 'Open the studio',
    bannerEyebrow: 'Browser studio',
    bannerTitle: 'Draw the architecture and take the diagram as Mermaid.',
    bannerBody: 'DiagramaFy turns a sentence into an editable flow, arranges the blocks, and exports a flowchart ready for docs, pull requests, and wikis.',
    canvasLabel: 'Diagram canvas',
    panes: { canvas: 'Canvas', library: 'Library', inspect: 'Details' },
    kinds: {
      person: 'Person',
      process: 'Process',
      service: 'Service',
      data: 'Data',
      queue: 'Queue',
      decision: 'Decision',
    },
    examples: ['Client -> API -> Database', 'Visitor -> Landing page -> WhatsApp', 'Order\nPayment\nInvoice'],
  },
  es: {
    title: 'DiagramaFy',
    lede: 'Describe el flujo en texto, organízalo en el tablero y expórtalo en Mermaid.',
    library: 'Diagramas',
    newDiagram: 'Nuevo',
    templates: 'Modelos',
    blocks: 'Bloques',
    inspector: 'Propiedades',
    noSelection: 'Seleccione un bloque o una conexión.',
    label: 'Etiqueta',
    kind: 'Tipo',
    edgeLabel: 'Leyenda de la conexión',
    delete: 'Eliminar',
    generateTitle: 'Generar desde texto',
    generateHelp: 'Un paso por línea, o use flechas: Cliente -> API -> Banco.',
    generate: 'Generar diagrama',
    generatePlaceholder: 'Cliente -> Sitio -> WhatsApp\nSitio -> CRM',
    mermaidTitle: 'Mermaid',
    mermaidHelp: 'El texto de abajo sigue al tablero. Pegue un flowchart para importarlo.',
    copy: 'Copiar',
    copied: 'Mermaid copiado.',
    download: 'Descargar',
    importLabel: 'Pegar Mermaid',
    importAction: 'Importar',
    imported: 'Diagrama importado.',
    invalid: 'No fue posible leer ese Mermaid. Use un flowchart con flechas -->.',
    emptyPrompt: 'Escriba al menos un paso.',
    generated: 'Diagrama generado.',
    layout: 'Organizar',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    undo: 'Deshacer',
    redo: 'Rehacer',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    fit: 'Encajar',
    saved: 'Guardado en este navegador',
    deleteDiagram: 'Borrar diagrama',
    confirmDelete: '¿Borrar este diagrama?',
    untitled: 'Sin título',
    diagramName: 'Nombre del diagrama',
    shortcuts: 'Arrastre el fondo para mover el tablero. Use la rueda para el zoom. Arrastre el punto del bloque para conectar. Supr borra la selección.',
    productPage: 'Página del producto',
    openStudio: 'Abrir el estudio',
    bannerEyebrow: 'Estudio en el navegador',
    bannerTitle: 'Dibuje la arquitectura y lleve el diagrama en Mermaid.',
    bannerBody: 'DiagramaFy convierte un texto en un flujo editable, organiza los bloques y exporta un flowchart listo para documentación, pull requests y wikis.',
    canvasLabel: 'Tablero del diagrama',
    panes: { canvas: 'Tablero', library: 'Biblioteca', inspect: 'Detalles' },
    kinds: {
      person: 'Persona',
      process: 'Proceso',
      service: 'Servicio',
      data: 'Datos',
      queue: 'Cola',
      decision: 'Decisión',
    },
    examples: ['Cliente -> API -> Banco de datos', 'Visitante -> Landing page -> WhatsApp', 'Pedido\nPago\nFactura'],
  },
} satisfies Record<Locale, DiagramafyCopy>

export function diagramafyCopy(locale: Locale) {
  return copy[locale]
}
