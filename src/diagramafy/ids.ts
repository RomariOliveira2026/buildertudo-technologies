export function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID().replace(/-/g, '').slice(0, 10)
  }
  return `id${Math.random().toString(36).slice(2, 12)}`
}
