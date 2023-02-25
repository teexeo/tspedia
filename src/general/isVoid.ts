/**
 * @description Checking boolean type.
 *
 * ```ts
 * IsVoid(() => 43434)   // false
 * IsVoid(() => '')   // true
 * ```
 *
 * @param data any type
 * @returns boolean
 */

export function IsVoid(data: Function): boolean {
  if (data()) {
    return false;
  }
  return true;
}
