import { IsFunction } from "./isFunction.mjs";

/**
 * @description check is value return smth
 * @param data any type
 * @returns boolean
 * @example
 * ```ts
 * IsVoid(() => 43434)   // false
 * IsVoid(() => "")   // false
 * IsVoid(() => {})   // true
 * ```
 */

export function IsVoid(data: Function): boolean | null {
  if (!IsFunction(data)) return null;

  if (data() === undefined) {
    return true;
  }
  return false;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DifferenceA", () => {
    it("should return different value", () => {
      expect();
    });
  });
}