import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { decisions, caseStats, lessons } from "../data/portfolio";
import { MetricGrid } from "../components/ui/MetricGrid";
import { Reveal } from "../components/ui/Reveal";

export function CaseStudy() {
  return (
    <section id="case-study" className="border-t border-accent/35 bg-tint/60 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="eyebrow text-accent" data-reveal>Deep dive</p>
        <p className="eyebrow mt-4" data-reveal>05 - Engineering case study</p>
        <Reveal as="h2" className="mt-5 font-serif text-[clamp(3rem,9vw,6rem)] leading-none text-ink">
          NotifyFlow
        </Reveal>
        <Reveal as="p" className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          A notification service that turns one event into <span className="text-ink">at-least-once</span> delivery
          across email, SMS and push. Built in Java + Spring Boot on PostgreSQL, containerized with Docker.
        </Reveal>
        <div className="mt-7">
          <MetricGrid metrics={caseStats} />
        </div>
        <div className="mt-7">
          <ArchitectureDiagram />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">
          <div>
            <Reveal as="h3" className="mb-3 font-serif text-3xl text-ink">
              Design decisions and tradeoffs
            </Reveal>
            {decisions.map((decision, index) => (
              <Reveal key={decision.title} className="flex gap-4 border-t border-line py-5">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <div>
                  <h4 className="font-medium text-ink">{decision.title}</h4>
                  <p className="mt-2 leading-8 text-muted">{decision.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal as="h3" className="mb-5 font-serif text-3xl text-ink">
              What it taught me
            </Reveal>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Reveal key={lesson} as="p" className="font-mono text-sm leading-7 text-muted">
                  <span className="text-accent">// </span>
                  {lesson}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
