import { PageMeta } from '../components/seo/PageMeta'
import { PageLayout } from '../components/layouts/PageLayout'
import {
  FrameworkDocLayout,
  FrameworkDocHero,
  FrameworkMetricsSection,
  FrameworkArchitectureSection,
  FrameworkPackagesSection,
  FrameworkModuleSection,
  FrameworkGoldenScreensSection,
  FrameworkDesignSystemSection,
  FrameworkComponentLibrarySection,
  FrameworkPipelineSection,
  FrameworkProductsSection,
  FrameworkPerformanceSection,
  FrameworkDocCTA,
} from '../components/framework-docs'
import {
  FRAMEWORK_ENGINE_DETAILS,
  FRAMEWORK_RUNTIME_DETAILS,
  FRAMEWORK_AI_OS_DETAILS,
} from '../content/framework-docs'

export function FrameworkPage() {
  return (
    <PageLayout className="subpage framework-doc-page">
      <PageMeta
        title="BuilderTudo Framework — Official Documentation"
        description="Official engineering documentation for the BuilderTudo Framework — architecture, packages, runtime, AI-OS, Golden Screens and 12 production products."
        path="/framework"
      />

      <FrameworkDocHero />

      <div className="container container--wide">
        <FrameworkDocLayout>
          <FrameworkMetricsSection />
          <FrameworkArchitectureSection />
          <FrameworkPackagesSection />

          <FrameworkModuleSection
            id="engine"
            eyebrow="Engine"
            title={FRAMEWORK_ENGINE_DETAILS.title}
            summary={FRAMEWORK_ENGINE_DETAILS.summary}
            capabilities={FRAMEWORK_ENGINE_DETAILS.capabilities}
            patterns={FRAMEWORK_ENGINE_DETAILS.patterns}
            screenId={FRAMEWORK_ENGINE_DETAILS.screenId}
          />

          <FrameworkModuleSection
            id="runtime"
            eyebrow="Runtime"
            title={FRAMEWORK_RUNTIME_DETAILS.title}
            summary={FRAMEWORK_RUNTIME_DETAILS.summary}
            capabilities={FRAMEWORK_RUNTIME_DETAILS.capabilities}
            patterns={FRAMEWORK_RUNTIME_DETAILS.patterns}
            screenId={FRAMEWORK_RUNTIME_DETAILS.screenId}
            variant="alt"
          />

          <FrameworkModuleSection
            id="ai-os"
            eyebrow="AI Operating System"
            title={FRAMEWORK_AI_OS_DETAILS.title}
            summary={FRAMEWORK_AI_OS_DETAILS.summary}
            capabilities={FRAMEWORK_AI_OS_DETAILS.capabilities}
            patterns={FRAMEWORK_AI_OS_DETAILS.patterns}
            screenId={FRAMEWORK_AI_OS_DETAILS.screenId}
          />

          <FrameworkGoldenScreensSection />
          <FrameworkDesignSystemSection />
          <FrameworkComponentLibrarySection />
          <FrameworkPipelineSection />
          <FrameworkProductsSection />
          <FrameworkPerformanceSection />
        </FrameworkDocLayout>
      </div>

      <FrameworkDocCTA />
    </PageLayout>
  )
}
