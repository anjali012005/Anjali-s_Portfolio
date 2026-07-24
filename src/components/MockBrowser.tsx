import type { LucideIcon } from "lucide-react";

export function MockBrowser({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-line bg-panel shadow-soft" data-reveal>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <p className="ml-2 font-mono text-[10px] text-muted">{label}</p>
      </div>
      <div className="relative grid aspect-video place-items-center overflow-hidden bg-[repeating-linear-gradient(45deg,rgb(var(--color-panel)),rgb(var(--color-panel))_12px,rgb(var(--color-paper))_12px,rgb(var(--color-paper))_13px)]">
        <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3 opacity-70">
          <span className="h-3 rounded-sm bg-line/80" />
          <span className="h-3 rounded-sm bg-accent/50" />
          <span className="h-3 rounded-sm bg-line/80" />
        </div>
        <div className="text-center">
          <Icon className="mx-auto h-9 w-9 text-muted/60" strokeWidth={1.4} />
          <p className="mt-3 font-mono text-xs text-muted">project screenshot / demo</p>
        </div>
      </div>
    </div>
  );
}
