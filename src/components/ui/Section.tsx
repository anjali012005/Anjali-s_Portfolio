import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  className?: string;
  innerClassName?: string;
}>;

export function Section({ id, eyebrow, className = "", innerClassName = "", children }: SectionProps) {
  return (
    <section id={id} className={`border-t border-line/80 py-16 sm:py-20 ${className}`}>
      <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${innerClassName}`}>
        {eyebrow ? <p className="eyebrow mb-8" data-reveal>{eyebrow}</p> : null}
        {children}
      </div>
    </section>
  );
}
