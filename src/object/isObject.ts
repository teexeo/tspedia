import { IsArray } from "../array/isArray";

/**
 * @description Check the object.
 * 
 * ```ts
 * IsObject({});
 * // true
 * 
 * IsObject([])
 * // false
 * ```
 * @param obj any
 * @returns boolean
 * @since v0.0.43
 */

export function IsObject(obj: any): boolean {
  if (typeof obj === "object" && !IsArray(obj)) {
    return true;
  }
  return false;
}