import { useState } from "react";
import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { CaseStudy } from "./sections/CaseStudy";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Journey } from "./sections/Journey";
import { OtherWork } from "./sections/OtherWork";
import { Proof } from "./sections/Proof";
import { References } from "./sections/References";
import { Stack } from "./sections/Stack";
import { Thinking } from "./sections/Thinking";
import { Work } from "./sections/Work";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useReveal();

  return (
    <div data-theme={theme} className="min-h-screen bg-paper text-ink transition-colors duration-500">
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Thinking />
        <Stack />
        <CaseStudy />
        <OtherWork />
        <Journey />
        <Proof />
        <References />
        <Contact />
      </main>
    </div>
  );
}
