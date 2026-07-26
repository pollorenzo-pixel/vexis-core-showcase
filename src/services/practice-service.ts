import { fetchPracticePayload, type MockApiOptions } from "./mock-api";
import type { ServiceResult } from "../types/api";
import {
  practiceCategories,
  type Practice,
  type PracticeCategory,
} from "../types/practice";

function isPracticeCategory(value: unknown): value is PracticeCategory {
  return typeof value === "string" && practiceCategories.includes(value as PracticeCategory);
}

function isPractice(value: unknown): value is Practice {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;

  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.summary === "string" &&
    typeof item.durationMinutes === "number" &&
    Number.isFinite(item.durationMinutes) &&
    item.durationMinutes > 0 &&
    isPracticeCategory(item.category) &&
    typeof item.available === "boolean"
  );
}

export async function getPractices(
  options?: MockApiOptions,
): Promise<ServiceResult<Practice[]>> {
  try {
    const payload = await fetchPracticePayload(options);

    if (!Array.isArray(payload) || !payload.every(isPractice)) {
      return {
        ok: false,
        error: {
          code: "invalid-data",
          message: "The practice library returned an unexpected format.",
        },
      };
    }

    return { ok: true, data: payload };
  } catch {
    return {
      ok: false,
      error: {
        code: "network",
        message: "The practice library could not be loaded. Please try again.",
      },
    };
  }
}
