import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

type FrameworkHealthRingProps = {
  score: number
}

export function FrameworkHealthRing({ score }: FrameworkHealthRingProps) {
  const [offset, setOffset] = useState(CIRCUMFERENCE)

  useEffect(() => {
    const target = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE
    const frame = window.requestAnimationFrame(() => setOffset(target))
    return () => window.cancelAnimationFrame(frame)
  }, [score])

  return (
    <div className="bos-framework-score__ring" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={RADIUS} className="bos-framework-score__track" />
        <motion.circle
          cx="60"
          cy="60"
          r={RADIUS}
          className="bos-framework-score__fill"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  )
}
