/**
 * @description difference two arrays
 * @example
 * ```ts
 * difference([3, 2, 1], [2, 3, 5]);
 * // [1, 5]
 * ```
 */

export function difference(A: any[], B: any[]): any[] {
  return A.filter((el) => !B.includes(el)).concat(
    B.filter((x) => !A.includes(x))
  );
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Difference", () => {
    it("should return different values", () => {
      expect(difference([2, false], [3, false])).toEqual([2, 3]);
      expect(difference([9, 4, 6], [4, 8, 6])).toEqual([9, 8]);
    });
    it("should return empty array", () => {
      expect(difference([2, 3], [3, 2])).toEqual([]);
    });
  });
}
