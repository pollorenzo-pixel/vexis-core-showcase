export const practiceCategories = [
  "awareness",
  "intuition",
  "performance",
] as const;

export type PracticeCategory = (typeof practiceCategories)[number];

export interface Practice {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  category: PracticeCategory;
  available: boolean;
}

export type PracticeFilter = "all" | PracticeCategory;
