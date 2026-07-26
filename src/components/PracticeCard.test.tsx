import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Practice } from "../types/practice";
import { PracticeCard } from "./PracticeCard";

const availablePractice: Practice = {
  id: "calm-start",
  title: "Calm Start",
  summary: "Synthetic test content for a privacy-safe component example.",
  durationMinutes: 5,
  category: "awareness",
  available: true,
};

describe("PracticeCard", () => {
  it("exposes an accessible start action and reports the selected practice", async () => {
    const user = userEvent.setup();
    const onStart = vi.fn();

    render(<PracticeCard practice={availablePractice} onStart={onStart} />);

    const startButton = screen.getByRole("button", { name: "Start Calm Start" });
    await user.click(startButton);

    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStart).toHaveBeenCalledWith(availablePractice);
  });

  it("prevents unavailable practices from being started", async () => {
    const user = userEvent.setup();
    const onStart = vi.fn();
    const unavailablePractice = { ...availablePractice, available: false };

    render(<PracticeCard practice={unavailablePractice} onStart={onStart} />);

    const unavailableButton = screen.getByRole("button", {
      name: "Calm Start is currently unavailable",
    });

    expect(unavailableButton).toBeDisabled();
    await user.click(unavailableButton);
    expect(onStart).not.toHaveBeenCalled();
  });
});
