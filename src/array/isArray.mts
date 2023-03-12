/**
 * @description determines if the given value is array accessible
 * @since v0.0.42
 *
 * ```ts
 * IsArray([])
 * // true
 *
 * IsArray({})
 * // false
 * ```
 */

export function IsArray(arr: any): boolean {
  return Array.isArray(arr);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}
