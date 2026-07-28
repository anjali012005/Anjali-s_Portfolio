import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { scrollToSection } from "../lib/scroll";
import { Reveal } from "../components/ui/Reveal";
import anjaliPhoto from "../public/anjali.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-tint/55 to-transparent">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-12">
        <div>
          <Reveal className="mb-6 flex flex-wrap gap-3">
            <span className="status-pill">
              <span className="pulse-dot" />
              Open to SWE roles
            </span>
            <span className="status-pill text-muted">
              <MapPin className="h-3.5 w-3.5" />
              India / remote-friendly
            </span>
          </Reveal>
          <Reveal as="h1" className="max-w-[700px] font-serif text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[1.02] tracking-tight text-ink">
            Building real-world software. <span className="text-muted">Sharing what I learn.</span>
          </Reveal>
          <Reveal as="p" className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Software Engineer passionate about building scalable backend systems and exceptional web experiences. I specialize in Java, Spring Boot, FastAPI, and React, with a strong focus on clean architecture and performance.
          </Reveal>
          <Reveal className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("case-study")}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
            >
              View NotifyFlow
              <ArrowDownRight className="h-4 w-4" />
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-ink transition hover:border-accent hover:text-accent"
            >
              Download resume
              <Download className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <Reveal className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[288px] overflow-hidden rounded-lg border border-line bg-panel sm:max-w-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgb(var(--color-accent)/0.24),transparent_34%),linear-gradient(160deg,transparent,rgb(var(--color-accent)/0.18))]" />
            <div className="absolute inset-8 overflow-hidden rounded-t-full border border-line bg-paper/65">
              <img
                src={anjaliPhoto}
                alt="Anjali Daharwal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
