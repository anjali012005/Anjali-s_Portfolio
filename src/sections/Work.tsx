import { projects } from "../data/portfolio";
import { MockBrowser } from "../components/MockBrowser";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Work() {
  return (
    <Section id="work" eyebrow="01 - Selected work">
      <div className="space-y-20">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_5fr_1.6fr] lg:items-start">
              <div>
                <span className="font-mono text-sm text-accent">{project.number}</span>
                <p className="eyebrow mt-2" data-reveal>{project.name}</p>
              </div>
              <div>
                <Reveal as="h3" className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-tight text-ink">
                  {project.headline}
                </Reveal>
                <Reveal as="p" className="mt-4 max-w-2xl leading-8 text-muted">
                  {project.body}
                </Reveal>
                <Reveal className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </Reveal>
              </div>
              <Reveal className="border-line lg:border-l lg:pl-5">
                <p className="font-serif text-3xl text-ink">{project.metric}</p>
                <p className="mt-1 font-mono text-xs text-muted">{project.metricLabel}</p>
              </Reveal>
            </div>
            <MockBrowser label={`${project.name.toLowerCase()}.app`} icon={project.icon} />
          </article>
        ))}
      </div>
    </Section>
  );
}
