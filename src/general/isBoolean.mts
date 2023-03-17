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
  describe("IsBoolean", () => {
    it("should return true", () => {
      expect(IsBoolean(false)).toBe(true);
    });
    it("should return false", () => {
      expect(IsBoolean("boolean")).toBe(false);
    });
  });
}
