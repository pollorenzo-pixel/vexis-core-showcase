export type ServiceErrorCode = "network" | "invalid-data" | "unknown";

export interface ServiceError {
  code: ServiceErrorCode;
  message: string;
}

export type ServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };
