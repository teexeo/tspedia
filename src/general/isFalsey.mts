/**
 * @description checking boolean type
 * @param data any type
 * @returns boolean
 * @example
 * ```ts
 * IsFalsey(true)    // false
 * IsFalsey(false)   // false
 * IsFalsey(null)   // true
 * ```
 */

export function IsFalsey(data: any): boolean {
  return typeof data !== "boolean" && !data;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DifferenceA", () => {
    it("should return different value", () => {
      expect();
    });
  });
}