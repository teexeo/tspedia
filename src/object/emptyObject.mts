import { IsFalsey } from "../general/isFalsey.mjs";
import { IsObject } from "./isObject.mjs";

/**
 * @description Checking empty object
 *
 * @example
 * ```ts
 * emptyObject([]) // false
 * emptyObject({}) // true
 * ```
 */

export function emptyObject(data: any): boolean {
  return IsObject(data) && !IsFalsey(data) && Object.keys(data).length <= 0;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("Empty Object", () => {
    it("should return false", () => {
      expect(emptyObject("")).toBe(false);
      expect(emptyObject(null)).toBe(false);
      expect(emptyObject([])).toBe(false);
    });

    it("should work", () => {
      expect(emptyObject({})).toBe(true);
    });
  });
}
