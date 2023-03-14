import { IsArray } from "./isArray.mjs";

/**
 * @description returns last item of array
 * @param arr array
 * @returns last item
 * @since v0.0.43
 * @example
 * ```ts
 * last([1,2,3])
 * // 3
 * ```
 */
export function last(arr: any[]): any {
  if (!IsArray(arr)) return null;
  return arr[arr.length - 1];
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Last", () => {
    it("should return last element", () => {
      expect(last([9, 7, 5])).toBe(5);
      expect(last([45, 0, "good"])).toBe("good");
    });
    it("should return null", () => {
      expect(last([3, 5, null])).toBeNull();
    });
  });
}
