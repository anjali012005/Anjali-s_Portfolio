import { proof } from "../data/portfolio";
import { MetricGrid } from "../components/ui/MetricGrid";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function Proof() {
  return (
    <Section id="proof" eyebrow="08 - Proof">
      <MetricGrid metrics={proof} />
      <Reveal as="p" className="mt-4 font-mono text-xs text-muted">
        Verify: <a href="#" className="text-accent hover:underline">leetcode.com/anjali</a> /{" "}
        <a href="#" className="text-accent hover:underline">github.com/anjali</a>
      </Reveal>
    </Section>
  );
}
