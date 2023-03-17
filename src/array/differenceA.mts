/**
 * @description difference just first array
 * @example
 * ```ts
 * difference([2, 1], [2, 3]);
 * // [1]
 * ```
 */

export function differenceA(A: any[], B: any[]): any[] {
  return A.filter((el) => !B.includes(el));
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DifferenceA", () => {
    it("should return different value", () => {
      expect(differenceA([6, 9], [9, 1])).toEqual([6]);
      expect(differenceA([6, 9, 2], [9, 1, 4, 5])).toEqual([6, 2]);
    });
  });
}
