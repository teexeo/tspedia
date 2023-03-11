import { IsFunction } from "./isFunction";

/**
 * @description Checking boolean type.
 *
 * @example
 * ```ts
 * IsVoid(() => 43434)   // false
 * IsVoid(() => "")   // false
 * IsVoid(() => {})   // true
 * ```
 *
 * @param data any type
 * @returns boolean
 */


export function IsVoid(data: any): boolean | null {
  if (!IsFunction(data)) return null;

  if (data() === undefined) {
    return true;
  }
  return false;
}
