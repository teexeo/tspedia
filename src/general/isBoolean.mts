/**
 * @description checking boolean type.
 * @param data any type
 * @returns boolean
 *
 * @example
 * ```ts
 * IsBoolean("")    // false
 * IsBoolean(!"")  // true
 * IsBoolean(false) // true
 * ```
 *
 */

export function IsBoolean(data: any) {
  return typeof data === "boolean";
}
