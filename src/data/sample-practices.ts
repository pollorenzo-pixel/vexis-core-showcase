import type { Practice } from "../types/practice";

export const samplePractices: Practice[] = [
  {
    id: "observe-the-room",
    title: "Observe the Room",
    summary: "A short attention exercise using neutral details in the environment.",
    durationMinutes: 5,
    category: "awareness",
    available: true,
  },
  {
    id: "steady-breath",
    title: "Steady Breath",
    summary: "A simple paced-breathing session for settling attention before a task.",
    durationMinutes: 7,
    category: "awareness",
    available: true,
  },
  {
    id: "signal-check",
    title: "Signal Check",
    summary: "A guided pause for separating useful information from immediate reaction.",
    durationMinutes: 8,
    category: "intuition",
    available: true,
  },
  {
    id: "pattern-noticing",
    title: "Pattern Noticing",
    summary: "A reflective exercise for identifying repeated cues without over-interpreting them.",
    durationMinutes: 10,
    category: "intuition",
    available: false,
  },
  {
    id: "decision-reset",
    title: "Decision Reset",
    summary: "A focused reset for clarifying the next useful action under pressure.",
    durationMinutes: 6,
    category: "performance",
    available: true,
  },
  {
    id: "pre-task-focus",
    title: "Pre-Task Focus",
    summary: "A short preparation sequence for entering demanding work deliberately.",
    durationMinutes: 9,
    category: "performance",
    available: true,
  },
];
