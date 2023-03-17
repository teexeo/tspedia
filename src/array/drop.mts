/**
 * @description creates an array sliced from beginning
 * @param arr must be declare array
 * @param num how many length you want to drop
 * @since v0.0.22
 * @example
 * ```ts
 * drop([4,5,6], 1) // [5,6]
 * drop([4,5,6], 2) // [6]
 * drop([4,5,6], 3) // []
 * ```
 */

export function drop<T extends unknown>(arr: T[], num: number) {
  return arr.splice(num);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Drop", () => {
    it("should return sliced array", () => {
      expect(drop([2, 2, "two"], 1)).toEqual([2, "two"]);
    });
    it("should return empty array", () => {
      expect(drop([3, 3, 3, "three"], 6)).toEqual([]);
    });
  });
}
