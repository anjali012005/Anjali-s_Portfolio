import {
  Bell,
  BookOpenText,
  Dumbbell,
  FileText,
  Mic2,
  NotebookText,
  Server,
  type LucideIcon
} from "lucide-react";
import type { Project, TextPair, TimelineItem } from "../types";

export const navItems = [
  { label: "Work", target: "work" },
  { label: "Case Study", target: "case-study" },
  { label: "Contact", target: "contact" }
];

export const projects: Project[] = [
  {
    number: "01",
    name: "NotifyFlow",
    icon: Bell,
    headline: "Enterprise notification infrastructure. My deepest backend work.",
    body:
      "One event fanned out to email, SMS and push with at-least-once delivery. An API gateway, JWT + role-based access, UUID-keyed dedup and a retry-with-backoff dispatcher.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Rabbit MQ", "Docker"],
    metric: ">=1",
    metricLabel: "delivery guarantee"
  },
  {
    number: "02",
    name: "MockInter",
    icon: Mic2,
    headline: "AI interview practice that actually feels like the real thing.",
    body:
      "Realtime AI-led mock interviews with generated questions, structured feedback, and auth. Built so a candidate can rehearse under pressure, not just read tips.",
    stack: ["Next.js", "Firebase", "Gemini", "Tailwind"],
    metric: "Realtime",
    metricLabel: "voice + feedback loop"
  },
  {
    number: "03",
    name: "QuiGenie",
    icon: FileText,
    headline: "Turn any PDF into a quiz in one upload.",
    body:
      "Drop in a document, Gemini extracts and generates MCQs, and the learner gets an instant practice set. A study tool that removes the busywork of making one.",
    stack: ["Next.js", "Gemini", "PDF parsing"],
    metric: "1 upload",
    metricLabel: "PDF to question bank"
  },
];

export const principles: TextPair[] = [
  {
    title: "Correctness before cleverness",
    body:
      "A system that is simple and right beats one that is elegant and fragile. I optimize the design before I optimize the code."
  },
  {
    title: "Build to be understood",
    body:
      "Boundaries, names and contracts are for the next engineer. Readable systems are the ones that survive."
  },
  {
    title: "Ship, then learn in the open",
    body:
      "Real feedback lives in production. I ship early, watch what breaks, and document what I fix."
  }
];

export const timeline: TimelineItem[] = [
   {
    period: "June 2026 - Present",
    role: "Software Engineer",
    org: "Bhivo, New Delhi, Delhi",
    body:
      "Building HR management software end-to-end with FastAPI, React and PostgreSQL. Production features used by real teams."
  },
  {
    period: "Jan 2026 - Apr 2026",
    role: "Software Engineer",
    org: "Morgan Soft Innovation, Gwalior, MP",
    body:
      "Building HR management software end-to-end with FastAPI, React and PostgreSQL. Production features used by real teams."
  },
  {
    period: "Jan 2025 - Apr 2025",
    role: "Software Engineer Intern",
    org: "Technoscien, Noida, UP",
    body:
      "Shipped features on live software products and learned how real codebases behave under real users."
  },
  {
    period: "Nov 2024 - Dec 2024",
    role: "FullStack Developer Intern",
    org: "Yashi IT Services, Indore, MP",
    body:
      "No pipeline, no shortcut. Everything learned by building projects and shipping them into the open."
  }
];

export const stackGroups = [
  {
    eyebrow: "// languages",
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"]
  },
  
  {
    eyebrow: "// backend",
    title: "Backend",
    items: ["Spring Boot", "FastAPI", "Hibernate", "Spring Data JPA", "REST APIs", "Swagger/OpenAPI"]
  },
  {
    eyebrow: "// frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3"]
  },
  {
    eyebrow: "// data & infra",
    title: "Data & infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git"]
  }
];

export const caseStats = [
  { value: "3", label: "delivery channels, one API" },
  { value: ">=1", label: "delivery guarantee, deduped" },
  { value: "UUID", label: "idempotency key per event" }
];

export const decisions: TextPair[] = [
  {
    title: "Fan-out over point-to-point",
    body:
      "One published event, three delivery adapters behind a common interface. Adding a channel never touches producer code."
  },
  {
    title: "UUID dedup for at-least-once",
    body:
      "Retries are safe because every event carries an idempotency key; the service drops duplicates instead of double-sending."
  },
  {
    title: "Status log as source of truth",
    body:
      "Each attempt is written to PostgreSQL from queued to sent or failed, so delivery state is auditable and retries are driven by data."
  },
  {
    title: "Gateway + JWT + RBAC",
    body:
      "An API gateway centralizes auth; role-based access keeps internal delivery endpoints off the public surface."
  }
];

export const lessons = [
  "At-least-once is only safe if dedup comes first. The key is the design.",
  "The schema is the architecture: get UUID and status transitions right early.",
  "A retry loop without backoff is just a faster way to fail.",
  "Leaving a clean boundary for a broker beats bolting one on later."
];

export const otherProjects: Array<{ title: string; body: string; icon: LucideIcon }> = [
  { title: "EasyBook", body: "Booking flows, done cleanly.", icon: BookOpenText },
  { title: "NoteSphere", body: "Notes with structure, not clutter.", icon: NotebookText },
  { title: "FitWeb", body: "Fitness tracking on the web.", icon: Dumbbell },
  { title: "Java Web Server", body: "HTTP from first principles.", icon: Server }
];

export const journey = [
  {
    stage: "Start",
    title: "Tier-3, no map",
    body: "Started with a laptop and questions no one around me could answer."
  },
  {
    stage: "Build",
    title: "Learning by building",
    body: "Learned by shipping. Every gap in knowledge became the next project."
  },
  {
    stage: "Depth",
    title: "System design & DSA",
    body: "500+ LeetCode problems, ~1560 contest rating, and a pull toward backend systems."
  },
  {
    stage: "Now",
    title: "Software Engineer",
    body: "Building microservices and infra-grade backends."
  }
];

export const proof = [
  { value: "500+", label: "LeetCode problems solved" },
  { value: "~1560", label: "Peak contest rating" },
  { value: "CodeVita", label: "Competitive programming" },
  { value: "4+", label: "Full-stack products shipped" }
];

export const profileLinks = [
  { label: "Email", value: "hello@anjali.dev", href: "mailto:hello@anjali.dev" },
  { label: "GitHub", value: "github.com/anjali", href: "https://github.com/anjali" },
  { label: "LinkedIn", value: "in/anjali", href: "https://linkedin.com/in/anjali" }
];
