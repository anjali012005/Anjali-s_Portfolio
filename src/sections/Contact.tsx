import { ArrowUpRight } from "lucide-react";
import { profileLinks } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="eyebrow mb-7" data-reveal>10 - Let's talk</p>
        <Reveal as="h2" className="font-serif text-[clamp(2.8rem,9vw,6rem)] leading-none text-ink">
          Building something
          <br />
          worth engineering?
        </Reveal>
        <Reveal>
          <a
            href="mailto:hello@anjali.dev"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-medium text-paper transition hover:bg-accent"
          >
            Start a conversation
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Reveal>
        <Reveal className="mt-14 grid gap-5 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {profileLinks.map((link) => (
            <a key={link.label} href={link.href} className="group block min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{link.label}</p>
              <p className="mt-2 truncate text-ink transition group-hover:text-accent">{link.value}</p>
            </a>
          ))}
        </Reveal>
        <p className="mt-12 font-mono text-xs text-muted">Copyright 2026 Anjali Daharwal - built, then documented.</p>
      </div>
    </section>
  );
}
