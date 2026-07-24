import { principles } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Thinking() {
  return (
    <Section id="thinking" eyebrow="02 - How I think">
      <Reveal as="h2" className="mb-10 max-w-xl font-serif text-[clamp(2rem,5vw,3.4rem)] leading-tight text-ink">
        Engineering is decisions, not just code.
      </Reveal>
      <div>
        {principles.map((principle, index) => (
          <Reveal key={principle.title} className="flex max-w-3xl gap-5 border-t border-line py-6">
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <div>
              <h3 className="font-serif text-2xl text-ink">{principle.title}</h3>
              <p className="mt-3 leading-8 text-muted">{principle.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
