import { useMemo, useState } from "react";
import { usePracticeLibrary } from "../hooks/usePracticeLibrary";
import type { Practice, PracticeFilter } from "../types/practice";
import { PracticeCard } from "./PracticeCard";
import { StatusPanel } from "./StatusPanel";

const filters: Array<{ label: string; value: PracticeFilter }> = [
  { label: "All", value: "all" },
  { label: "Awareness", value: "awareness" },
  { label: "Intuition", value: "intuition" },
  { label: "Performance", value: "performance" },
];

export function PracticeLibrary() {
  const { practices, status, errorMessage, retry } = usePracticeLibrary();
  const [filter, setFilter] = useState<PracticeFilter>("all");
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(null);

  const visiblePractices = useMemo(
    () =>
      filter === "all"
        ? practices
        : practices.filter((practice) => practice.category === filter),
    [filter, practices],
  );

  if (status === "loading") {
    return (
      <StatusPanel
        title="Loading practice library"
        message="Preparing the privacy-safe demonstration data."
      />
    );
  }

  if (status === "error") {
    return (
      <StatusPanel
        title="Practice library unavailable"
        message={errorMessage ?? "An unexpected error occurred."}
        tone="error"
        actionLabel="Try again"
        onAction={() => void retry()}
      />
    );
  }

  return (
    <section aria-labelledby="practice-library-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Privacy-safe component demonstration</p>
          <h2 id="practice-library-heading">Practice library</h2>
        </div>
        <p>
          Synthetic content demonstrates typed components, state handling and
          accessible interaction without exposing the production catalogue.
        </p>
      </div>

      <fieldset className="filter-group">
        <legend>Filter practices by category</legend>
        <div className="filter-row">
          {filters.map((option) => (
            <button
              key={option.value}
              type="button"
              className={filter === option.value ? "filter-button is-active" : "filter-button"}
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {visiblePractices.length === 0 ? (
        <StatusPanel
          title="No practices found"
          message="Choose another category to view available examples."
        />
      ) : (
        <div className="practice-grid">
          {visiblePractices.map((practice) => (
            <PracticeCard
              key={practice.id}
              practice={practice}
              onStart={setSelectedPractice}
            />
          ))}
        </div>
      )}

      <div className="selection-status" role="status" aria-live="polite">
        {selectedPractice
          ? `Selected: ${selectedPractice.title}. This demo does not play proprietary training content.`
          : "Choose an available practice to demonstrate selection state."}
      </div>
    </section>
  );
}
