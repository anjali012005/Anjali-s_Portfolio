import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../lib/scroll";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function References() {
  return (
    <Section id="references" eyebrow="09 - References" innerClassName="text-center">
      <Reveal as="p" className="mx-auto max-w-3xl font-serif text-[clamp(1.5rem,4vw,2.2rem)] leading-snug text-muted">
        I would rather show the work than borrow a quote. References from colleagues and mentors are available on
        request. The pull requests, commits and videos speak first.
      </Reveal>
      <Reveal>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-ink transition hover:border-accent hover:text-accent"
        >
          Ask for references
          <ArrowRight className="h-4 w-4" />
        </button>
      </Reveal>
    </Section>
  );
}
