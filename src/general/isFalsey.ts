/**
 * @description Checking boolean type.
 *
 * ```ts
 * IsFalsey(true)    // false
 * IsFalsey(false)   // false
 * IsFalsey(null)   // true
 * ```
 *
 * @param data any type
 * @returns boolean
 */

export function IsFalsey(data: any): boolean {
  return typeof data !== "boolean" && !data;
}
