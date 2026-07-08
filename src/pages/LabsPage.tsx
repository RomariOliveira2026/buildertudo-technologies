import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout, SubPageHero } from '../components/layouts/PageLayout'
import { LABS } from '../constants/labs'

export function LabsPage() {
  return (
    <PageLayout className="subpage">
      <PageMeta
        title="BuilderTudo Labs — Research & Experiments"
        description="Experimental projects, AI research, prototypes and new technologies from BuilderTudo Technologies."
        path="/labs"
      />
      <SubPageHero
        eyebrow="BuilderTudo Labs"
        title="Where we experiment before you ship"
        description="Research, prototypes and cutting-edge technology — agents, voice AI, design automation and framework innovations."
      />

      <section className="subpage-section">
        <div className="container">
          <div className="labs-grid">
            {LABS.map((lab) => (
              <article key={lab.id} className="lab-card">
                <div className="lab-card__head">
                  <h3>{lab.title}</h3>
                  <span className={`lab-status lab-status--${lab.status.toLowerCase()}`}>{lab.status}</span>
                </div>
                <p>{lab.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
