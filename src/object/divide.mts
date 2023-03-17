import { IsFalsey } from "../general/isFalsey.mjs";
import { IsArray } from "../array/isArray.mjs";

type DivideReturnType = {
  keys: string[];
  values: any[];
} | null;

/**
 * @description Object keys and values dividing
 * @param obj object
 * @example
 * ```ts
 *   divide({
 *       name: "Suleyman",
 *       age: 20,
 *       jobs: ["Programming", "Student"],
 *   })
 * //    keys: [ 'name', 'age', 'jobs' ],
 * //    values: [ 'Suleyman', 20, [ 'Programming', 'Student' ]]
 * ```
 */

export function divide(obj: object): DivideReturnType {
  if (IsFalsey(obj) || IsArray(obj)) return null;
  return {
    keys: Object.keys(obj),
    values: Object.values(obj),
  };
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Divide", () => {
    it("should return null", () => {
      expect(divide(null as any)).toBe(null);
      expect(divide([] as any)).toBe(null);
    });

    it("should divide object", () => {
      expect(
        divide({
          name: "John",
          age: 20,
        })
      ).toEqual({
        keys: ["name", "age"],
        values: ["John", 20],
      });
    });
  });
}

