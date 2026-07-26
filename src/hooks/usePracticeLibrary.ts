import { useCallback, useEffect, useState } from "react";
import { getPractices } from "../services/practice-service";
import type { Practice } from "../types/practice";

interface PracticeLibraryState {
  practices: Practice[];
  status: "loading" | "success" | "error";
  errorMessage: string | null;
}

export function usePracticeLibrary() {
  const [state, setState] = useState<PracticeLibraryState>({
    practices: [],
    status: "loading",
    errorMessage: null,
  });

  const load = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", errorMessage: null }));
    const result = await getPractices();

    if (!result.ok) {
      setState({ practices: [], status: "error", errorMessage: result.error.message });
      return;
    }

    setState({ practices: result.data, status: "success", errorMessage: null });
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { ...state, retry: load };
}
