interface StatusPanelProps {
  title: string;
  message: string;
  tone?: "neutral" | "error";
  actionLabel?: string;
  onAction?: () => void;
}

export function StatusPanel({
  title,
  message,
  tone = "neutral",
  actionLabel,
  onAction,
}: StatusPanelProps) {
  return (
    <section
      className={`status-panel status-panel--${tone}`}
      role={tone === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      <h3>{title}</h3>
      <p>{message}</p>
      {actionLabel && onAction ? (
        <button type="button" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </section>
  );
}
