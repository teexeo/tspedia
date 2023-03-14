import { IsArray } from "../array/isArray.mjs";

/**
 * @description check is value object
 * @param obj any
 * @returns boolean
 * @since v0.0.43
 *
 * @example
 * ```ts
 * IsObject({});
 * // true
 * IsObject([])
 * // false
 * ```
 */

export function IsObject(obj: any): boolean {
  if (typeof obj === "object" && !IsArray(obj)) {
    return true;
  }
  return false;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}