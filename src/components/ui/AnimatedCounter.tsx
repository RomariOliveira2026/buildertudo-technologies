import { animate, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ value, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(Math.round(latest))
  })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => controls.stop()
  }, [isInView, motionValue, value])

  return (
    <span ref={ref} aria-live="polite">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
