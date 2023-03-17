/**
 * @description creates an array sliced from end
 * @since v0.0.22
 * @example
 * ```ts
 * dropRight([4,5,6], 1) // [4,5]
 * dropRight([4,5,6], 2) // [4]
 * dropRight([4,5,6], 3) // []
 * ```
 */

export function dropRight<T extends unknown>(arr: T[], num: number) {
  return arr.splice(0, arr.length - num);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DropRight", () => {
    it("should return sliced array", () => {
      expect(dropRight([4, 5, 6, 9, null], 1)).toEqual([4, 5, 6, 9]);
      expect(dropRight([4, 5, 6], 2)).toEqual([4]);
    });
    it("should return empty array", () => {
      expect(dropRight([2, 3, 2, 6], 6)).toEqual([]);
    });
  });
}
