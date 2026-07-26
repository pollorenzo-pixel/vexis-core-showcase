import { useCallback, useEffect, useState } from "react";
import { getPractices } from "../services/practice-service";
import type { ServiceResult } from "../types/api";
import type { Practice } from "../types/practice";

interface PracticeLibraryState {
  practices: Practice[];
  status: "loading" | "success" | "error";
  errorMessage: string | null;
}

function stateFromResult(result: ServiceResult<Practice[]>): PracticeLibraryState {
  if (!result.ok) {
    return {
      practices: [],
      status: "error",
      errorMessage: result.error.message,
    };
  }

  return {
    practices: result.data,
    status: "success",
    errorMessage: null,
  };
}

export function usePracticeLibrary() {
  const [state, setState] = useState<PracticeLibraryState>({
    practices: [],
    status: "loading",
    errorMessage: null,
  });

  const retry = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", errorMessage: null }));
    const result = await getPractices();
    setState(stateFromResult(result));
  }, []);

  useEffect(() => {
    let cancelled = false;

    void getPractices().then((result) => {
      if (!cancelled) {
        setState(stateFromResult(result));
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { ...state, retry };
}
