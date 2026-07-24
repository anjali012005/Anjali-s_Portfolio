import { stackGroups } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Stack() {
  return (
    <Section id="stack" eyebrow="04 - The stack">
      <Reveal className="grid overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.title} className="bg-paper p-6">
            <p className="font-mono text-xs text-accent">{group.eyebrow}</p>
            <h3 className="mt-3 font-serif text-2xl text-ink">{group.title}</h3>
            <ul className="mt-6 space-y-3 text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-line" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
      <Reveal as="p" className="mt-4 font-mono text-xs text-muted">
        Practices: REST API design / microservice boundaries / containerized delivery / trunk-based Git.
      </Reveal>
    </Section>
  );
}
