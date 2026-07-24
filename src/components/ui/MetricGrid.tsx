import { Reveal } from "./Reveal";

type Metric = {
  value: string;
  label: string;
};

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <Reveal className="grid overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-paper/70 p-5 text-center sm:text-left">
          <p className="font-serif text-3xl text-ink">{metric.value}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">{metric.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
