import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchPracticePayload } from "./mock-api";
import { getPractices } from "./practice-service";

vi.mock("./mock-api", () => ({
  fetchPracticePayload: vi.fn(),
}));

const mockedFetchPracticePayload = vi.mocked(fetchPracticePayload);

describe("getPractices", () => {
  beforeEach(() => {
    mockedFetchPracticePayload.mockReset();
  });

  it("rejects malformed transport data with a user-safe error", async () => {
    mockedFetchPracticePayload.mockResolvedValue([
      {
        id: "invalid-duration",
        title: "Invalid example",
        summary: "Synthetic malformed data.",
        durationMinutes: -1,
        category: "awareness",
        available: true,
      },
    ]);

    const result = await getPractices();

    expect(result).toEqual({
      ok: false,
      error: {
        code: "invalid-data",
        message: "The practice library returned an unexpected format.",
      },
    });
  });

  it("maps transport failures to a recoverable network error", async () => {
    mockedFetchPracticePayload.mockRejectedValue(new Error("Internal synthetic failure"));

    const result = await getPractices();

    expect(result).toEqual({
      ok: false,
      error: {
        code: "network",
        message: "The practice library could not be loaded. Please try again.",
      },
    });
  });
});
