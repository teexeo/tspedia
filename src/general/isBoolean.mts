/**
 * @description checking boolean type.
 * @param data any type
 * @returns boolean
 * @example
 * ```ts
 * IsBoolean("")    // false
 * IsBoolean(!"")  // true
 * IsBoolean(false) // true
 * ```
 */

export function IsBoolean(data: any) {
  return typeof data === "boolean";
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DifferenceA", () => {
    it("should return different value", () => {
      expect();
    });
  });
}