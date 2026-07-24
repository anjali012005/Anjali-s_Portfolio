export function ArchitectureDiagram() {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-paper p-4" data-reveal>
      <svg
        viewBox="0 0 840 250"
        className="min-w-[720px]"
        role="img"
        aria-label="NotifyFlow architecture from client to gateway to notify service, storage, delivery adapters, and retry loop."
      >
        <title>NotifyFlow Architecture</title>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8" className="fill-muted" />
          </marker>
        </defs>
        <g className="font-mono text-xs">
          <Node x={16} y={96} width={112} height={46} title="Client" subtitle="JWT" />
          <Line x1={128} y1={119} x2={182} y2={119} />
          <Node x={184} y={96} width={120} height={46} title="Gateway" subtitle="auth + RBAC" />
          <Line x1={304} y1={119} x2={358} y2={119} />
          <Node x={360} y={82} width={150} height={74} title="Notify service" subtitle="dedup on UUID" accent />
          <Node x={360} y={176} width={150} height={34} title="PostgreSQL" subtitle="status log" />
          <Line x1={435} y1={156} x2={435} y2={176} />
          <Line x1={510} y1={119} x2={596} y2={66} />
          <Adapter x={600} y={49} label="Email adapter" />
          <Line x1={510} y1={119} x2={596} y2={126} />
          <Adapter x={600} y={109} label="SMS adapter" />
          <Line x1={510} y1={119} x2={596} y2={186} />
          <Adapter x={600} y={169} label="Push adapter" />
          <path
            d="M675,203 C675,238 435,244 435,214"
            fill="none"
            className="stroke-accent"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            markerEnd="url(#arrow)"
          />
          <text x="540" y="242" textAnchor="middle" className="fill-accent text-[10px]">
            retry with backoff on failure
          </text>
        </g>
      </svg>
    </div>
  );
}

function Node({
  x,
  y,
  width,
  height,
  title,
  subtitle,
  accent = false
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  accent?: boolean;
}) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="7"
        className={`fill-panel ${accent ? "stroke-accent" : "stroke-line"}`}
      />
      <text x={x + width / 2} y={y + height / 2 - 2} textAnchor="middle" className="fill-ink">
        {title}
      </text>
      <text x={x + width / 2} y={y + height / 2 + 15} textAnchor="middle" className="fill-muted text-[10px]">
        {subtitle}
      </text>
    </>
  );
}

function Adapter({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <>
      <rect x={x} y={y} width={150} height={34} rx="7" className="fill-panel stroke-line" />
      <circle cx={x + 16} cy={y + 17} r="3" className="fill-accent" />
      <text x={x + 32} y={y + 21} className="fill-ink">
        {label}
      </text>
    </>
  );
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-muted" strokeWidth="1.5" markerEnd="url(#arrow)" />;
}
