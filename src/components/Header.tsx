import { Moon, Sun } from "lucide-react";
import { navItems } from "../data/portfolio";
import { scrollToSection } from "../lib/scroll";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="font-mono text-sm text-ink transition hover:text-accent"
          type="button"
          onClick={() => scrollToSection("top")}
          aria-label="Back to top"
        >
          AD<span className="text-accent">.</span>
        </button>
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className={`eyebrow rounded-full px-2 py-2 transition hover:text-accent ${
                item.target === "contact" ? "border border-line px-4 text-ink" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
