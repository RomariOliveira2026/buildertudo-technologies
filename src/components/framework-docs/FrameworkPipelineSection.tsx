import { FRAMEWORK_PIPELINE } from '../../content/framework-docs'
import { Reveal } from '../ui/Reveal'
import { Section, SectionHeader } from '../ui/Section'

export function FrameworkPipelineSection() {
  return (
    <Section id="pipeline" variant="alt" ariaLabelledBy="framework-pipeline-title">
      <Reveal>
        <SectionHeader
          id="framework-pipeline-title"
          eyebrow="Development Pipeline"
          title="From scaffold to production"
          description="Eight-stage engineering pipeline used to ship every official BuilderTudo product — repeatable, measurable and governed."
          align="left"
        />
      </Reveal>

      <div className="framework-pipeline">
        {FRAMEWORK_PIPELINE.map((stage, index) => (
          <Reveal key={stage.step}>
            <article className="framework-pipeline-stage">
              <div className="framework-pipeline-stage__marker">
                <span>{stage.step}</span>
                {index < FRAMEWORK_PIPELINE.length - 1 ? (
                  <span className="framework-pipeline-stage__line" aria-hidden="true" />
                ) : null}
              </div>
              <div className="framework-pipeline-stage__body">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <ul className="framework-pipeline-stage__artifacts">
                  {stage.artifacts.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
