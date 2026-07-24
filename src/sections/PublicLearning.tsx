import { publicLearning } from "../data/portfolio";
import { BuildLoop } from "../components/BuildLoop";
import { Reveal } from "../components/ui/Reveal";

export function PublicLearning() {
  return (
    <>
      <section className="border-t border-line bg-tint/35 py-24 text-center">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Reveal as="p" className="font-serif text-[clamp(2rem,6vw,3.8rem)] leading-tight text-ink">
            Build the thing.
            <br />
            Then <span className="text-accent">teach</span> the thing.
            <br />
            <span className="text-muted">Repeat until it is instinct.</span>
          </Reveal>
        </div>
      </section>
      <section id="learning-public" className="border-t border-line bg-panel/50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <p className="eyebrow mb-8" data-reveal>07 - Building and learning in public</p>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Reveal as="h2" className="max-w-2xl font-serif text-[clamp(2rem,5vw,3.2rem)] leading-tight text-ink">
                The channel is not separate from the engineering. It <span className="text-accent">is</span> the
                engineering, documented.
              </Reveal>
              <Reveal as="p" className="mt-5 max-w-2xl leading-8 text-muted">
                I build the product first. Then I teach it. Everything I know was self-taught, so I make the resource I
                wish I had.
              </Reveal>
            </div>
            <Reveal>
              <BuildLoop />
            </Reveal>
          </div>
          <div className="mt-10 space-y-6">
            {publicLearning.map((beat) => (
              <Reveal key={beat.title} className="border-l-2 border-accent/50 pl-5">
                <h3 className="font-serif text-2xl text-ink">{beat.title}</h3>
                <p className="mt-2 leading-8 text-muted">{beat.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
