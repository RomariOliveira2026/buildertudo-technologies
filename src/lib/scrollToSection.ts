type ScrollOptions = {
  behavior?: ScrollBehavior
}

export function scrollToSectionId(id: string, options?: ScrollOptions): boolean {
  const element = document.getElementById(id)
  if (!element) return false

  element.scrollIntoView({
    behavior: options?.behavior ?? 'smooth',
    block: 'start',
  })
  return true
}

export function scrollToHash(hash: string, options?: ScrollOptions): boolean {
  if (!hash || hash === '#') return false
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  return scrollToSectionId(id, options)
}

export function scrollToHashWithRetry(
  hash: string,
  { maxAttempts = 24, intervalMs = 100, behavior = 'smooth' }: ScrollOptions & {
    maxAttempts?: number
    intervalMs?: number
  } = {},
): () => void {
  if (!hash) {
    window.scrollTo({ top: 0, behavior })
    return () => {}
  }

  let attempts = 0
  let timer: number | undefined

  const tryScroll = () => {
    if (scrollToHash(hash, { behavior })) return

    attempts += 1
    if (attempts < maxAttempts) {
      timer = window.setTimeout(tryScroll, intervalMs)
    }
  }

  tryScroll()

  return () => {
    if (timer !== undefined) window.clearTimeout(timer)
  }
}
