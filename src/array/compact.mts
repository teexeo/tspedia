/**
 * @description creates an array with all falsey values removed
 * @example
 * ```ts
 * compact([0,3,false, '', NaN, 5])
 * // => [0,3,5]
 * ```
 */

export function compact(arr: any[]): any[] {
  return arr.filter((e) => !!e !== false);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Compact", () => {
    it("should return truthy values", () => {
      expect(compact([5, "53", "", false])).toEqual([5, "53"]);
    });
    it("should return empty array", () => {
      expect(compact([false, NaN])).toEqual([]);
    });
  });
}
