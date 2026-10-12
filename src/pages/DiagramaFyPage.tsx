import { PageMeta } from '../components/seo/PageMeta'
import { Header } from '../components/layouts/Header'
import { DiagramStudio } from '../components/diagramafy/DiagramStudio'
import { useScrollState } from '../hooks/useScrollState'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from '../i18n'
import { diagramafyCopy } from '../diagramafy/copy'

export function DiagramaFyPage() {
  const { theme, toggleTheme } = useTheme()
  const { headerScrolled } = useScrollState()
  const { locale } = useTranslation()
  const text = diagramafyCopy(locale)

  return (
    <>
      <PageMeta
        title={`${text.title} — ${text.bannerTitle}`}
        description={text.bannerBody}
        path="/diagramafy"
      />
      <a className="skip-link" href="#diagramafy-canvas">{text.canvasLabel}</a>
      <main className="page page--diagramafy">
        <Header headerScrolled={headerScrolled} activeSection="" theme={theme} onToggleTheme={toggleTheme} />
        <DiagramStudio />
      </main>
    </>
  )
}
