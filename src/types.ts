import type { LucideIcon } from "lucide-react";

export type Project = {
  number: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  stack: string[];
  metric: string;
  metricLabel: string;
};

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  body: string;
};

export type TextPair = {
  title: string;
  body: string;
};
