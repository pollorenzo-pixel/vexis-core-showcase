import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { samplePractices } from "../data/sample-practices";
import { getPractices } from "../services/practice-service";
import { PracticeLibrary } from "./PracticeLibrary";

vi.mock("../services/practice-service", () => ({
  getPractices: vi.fn(),
}));

const mockedGetPractices = vi.mocked(getPractices);

describe("PracticeLibrary", () => {
  beforeEach(() => {
    mockedGetPractices.mockReset();
  });

  it("announces loading and then renders the synthetic library", async () => {
    mockedGetPractices.mockResolvedValue({ ok: true, data: samplePractices });

    render(<PracticeLibrary />);

    expect(screen.getByRole("status")).toHaveTextContent("Loading practice library");
    expect(await screen.findByRole("heading", { name: "Practice library" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Observe the Room" })).toBeInTheDocument();
  });

  it("filters visible practices by category", async () => {
    const user = userEvent.setup();
    mockedGetPractices.mockResolvedValue({ ok: true, data: samplePractices });

    render(<PracticeLibrary />);
    await screen.findByRole("heading", { name: "Practice library" });

    await user.click(screen.getByRole("button", { name: "Intuition" }));

    expect(screen.getByRole("heading", { name: "Signal Check" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pattern Noticing" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Observe the Room" })).not.toBeInTheDocument();
  });

  it("offers retry after a recoverable error and restores content", async () => {
    const user = userEvent.setup();
    mockedGetPractices
      .mockResolvedValueOnce({
        ok: false,
        error: { code: "network", message: "The library is temporarily unavailable." },
      })
      .mockResolvedValueOnce({ ok: true, data: samplePractices });

    render(<PracticeLibrary />);

    expect(await screen.findByText("The library is temporarily unavailable.")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Try again" }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Observe the Room" })).toBeInTheDocument();
    });
    expect(mockedGetPractices).toHaveBeenCalledTimes(2);
  });
});
