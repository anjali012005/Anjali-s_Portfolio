const steps = [
  { label: "Build", x: 120, y: 42, active: true },
  { label: "Ship", x: 198, y: 120 },
  { label: "Learn", x: 120, y: 198 },
  { label: "Teach", x: 42, y: 120 }
];

export function BuildLoop() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="mx-auto w-full max-w-[230px]"
      role="img"
      aria-label="A loop cycling through build, ship, learn and teach."
    >
      <title>Build Teach Loop</title>
      <defs>
        <marker id="loopArrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7" className="fill-accent" />
        </marker>
      </defs>
      <circle cx="120" cy="120" r="78" fill="none" className="stroke-line" strokeWidth="1.5" strokeDasharray="3 6" />
      <path d="M143,52 A78 78 0 0 1 190,98" fill="none" className="stroke-accent" strokeWidth="1.5" markerEnd="url(#loopArrow)" />
      <path d="M190,142 A78 78 0 0 1 143,188" fill="none" className="stroke-accent" strokeWidth="1.5" markerEnd="url(#loopArrow)" />
      <path d="M97,188 A78 78 0 0 1 50,142" fill="none" className="stroke-accent" strokeWidth="1.5" markerEnd="url(#loopArrow)" />
      <path d="M50,98 A78 78 0 0 1 97,52" fill="none" className="stroke-accent" strokeWidth="1.5" markerEnd="url(#loopArrow)" />
      {steps.map((step) => (
        <g key={step.label}>
          <circle
            cx={step.x}
            cy={step.y}
            r="21"
            className={`fill-paper ${step.active ? "stroke-accent" : "stroke-line"}`}
          />
          <text x={step.x} y={step.y + 4} textAnchor="middle" className="fill-ink font-mono text-xs">
            {step.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
