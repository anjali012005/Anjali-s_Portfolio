import { journey } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Journey() {
  return (
    <Section id="journey" eyebrow="06 - The journey">
      <Reveal as="h2" className="mb-10 max-w-2xl font-serif text-[clamp(2rem,5vw,3.4rem)] leading-tight text-ink">
        From a Tier-3 college to shipping production systems. Self-taught.
      </Reveal>
      <Reveal className="grid overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
        {journey.map((item) => (
          <div key={item.stage} className="bg-paper p-6">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.stage}</span>
            <h3 className="mt-4 font-serif text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
