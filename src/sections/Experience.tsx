import { timeline } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 - Experience">
      <div className="border-l border-line pl-7">
        {timeline.map((item) => (
          <Reveal key={item.period} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="eyebrow">{item.period}</p>
            <h3 className="mt-2 font-serif text-3xl text-ink">{item.role}</h3>
            <p className="mt-1 text-sm text-accent">{item.org}</p>
            <p className="mt-3 max-w-2xl leading-8 text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
