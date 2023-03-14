import { last } from "./last.mjs";
/**
 * @description creates an array sliced from end
 * @since v0.0.22
 * @example
 * ```ts
 * dropRight([4,5,6], 1) // [4]
 * dropRight([4,5,6], 2) // [4,5]
 * dropRight([4,5,6], 3) // [4,5,6]
 * ```
 */


export function dropRight<T extends unknown>(arr: T[], num: number) {
  return arr.splice(last(arr), num);
}

console.log(dropRight([4, 5, 6], 1));


if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("DropRight", () => {
    it("should return sliced array", () => {
      expect(dropRight([4, 5, 6], 1)).toEqual([4]);
    });
  });
}
