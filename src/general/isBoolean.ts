/**
 * @description Checking boolean type.
 *
 * ```ts
 * IsBoolean("")    // false
 * IsBoolean(!"")  // true
 * IsBoolean(false) // true
 * ```
 *
 * @param data any type
 * @returns boolean
 */

export function IsBoolean(data: any) {
  return typeof data === "boolean";
}
