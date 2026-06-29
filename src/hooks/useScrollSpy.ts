import { useEffect, useState } from 'react'
import type { SectionId } from '../constants/navigation'

export function useScrollSpy(sectionIds: readonly SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-38% 0px -48% 0px',
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
