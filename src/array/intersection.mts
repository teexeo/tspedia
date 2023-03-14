/**
 * @description shows intersecting values
 * @example
 * ```ts
 * intersection(["he", "lo"], ["he", "at", 22, 88])
 * // ['he']
 * ```
 */

export function intersection(A: any[], B: any[]): any[] {
  return A.filter((el) => B.includes(el));
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Intersection", () => {
    it("should return intersected values", () => {
      expect(intersection([true, false], [false, false])).toEqual([false]);
      expect(intersection([10, 9, 8], [8, 6, 9, 1])).toEqual([9, 8]);
      expect(intersection([0, 1], [1, 0])).toEqual([0, 1]);
    });
    it("should return empty array", () => {
      expect(intersection([5, 6], [, 7, 8])).toEqual([]);
    });
  });
}
