/**
 * @description checking is value integer
 *
 * @example
 * ```ts
 * isInt('a') // false
 * isInt(20) // true
 * ```
 *
 */

export function isInt(val: any) {
  return typeof val === "number";
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("IsInt", () => {
    it("should give false", () => {
      expect(isInt("")).toBe(false);
      expect(isInt(null)).toBe(false);
    });

    it("should give true", () => {
      expect(isInt(30)).toBe(true);
    });
  });
}
