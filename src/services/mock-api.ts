import { samplePractices } from "../data/sample-practices";

export interface MockApiOptions {
  delayMs?: number;
  shouldFail?: boolean;
}

export async function fetchPracticePayload(
  options: MockApiOptions = {},
): Promise<unknown> {
  const { delayMs = 450, shouldFail = false } = options;

  await new Promise((resolve) => window.setTimeout(resolve, delayMs));

  if (shouldFail) {
    throw new Error("Synthetic network failure");
  }

  return structuredClone(samplePractices);
}
