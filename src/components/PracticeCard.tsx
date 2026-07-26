import type { Practice } from "../types/practice";

interface PracticeCardProps {
  practice: Practice;
  onStart: (practice: Practice) => void;
}

export function PracticeCard({ practice, onStart }: PracticeCardProps) {
  return (
    <article className="practice-card">
      <div className="practice-card__meta">
        <span>{practice.category}</span>
        <span>{practice.durationMinutes} min</span>
      </div>

      <h3>{practice.title}</h3>
      <p>{practice.summary}</p>

      <button
        type="button"
        disabled={!practice.available}
        aria-label={
          practice.available
            ? `Start ${practice.title}`
            : `${practice.title} is currently unavailable`
        }
        onClick={() => onStart(practice)}
      >
        {practice.available ? "Start practice" : "Coming soon"}
      </button>
    </article>
  );
}
