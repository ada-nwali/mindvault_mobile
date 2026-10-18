import {
  logError as logRedactedError,
  normalizeError,
} from "./errorLogger";
import type { NormalizedError } from "./errorLogger";

export type { NormalizedError };
export { normalizeError };

export function logError(context: string, err: unknown): void {
  logRedactedError(context, err);
}
