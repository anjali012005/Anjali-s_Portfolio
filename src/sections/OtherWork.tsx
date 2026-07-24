import { ArrowUpRight } from "lucide-react";
import { otherProjects } from "../data/portfolio";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function OtherWork() {
  return (
    <Section id="also-built" eyebrow="05b - Also built">
      <div className="border-t border-line">
        {otherProjects.map((project) => {
          const Icon = project.icon;

          return (
            <Reveal
              key={project.title}
              as="a"
              className="group flex items-center justify-between gap-5 border-b border-line py-6 text-ink transition hover:text-accent"
              href="#"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Icon className="h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                <span className="font-serif text-2xl sm:text-3xl">{project.title}</span>
              </span>
              <span className="hidden font-mono text-xs text-muted sm:inline">{project.body}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
