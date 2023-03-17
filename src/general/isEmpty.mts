import { IsArray } from "../array/isArray.mjs";
import { IsFalsey } from "./isFalsey.mjs";
import { IsVoid } from "./isVoid.mjs";
/**
 * @description checking is value empty
 * @param data any
 * @returns boolean
 * @example
 * ```ts
 * IsEmpty(false)   //true
 * IsEmpty(() => '')   //true
 * IsEmpty([[[{a: 33}]]])   //false
 * IsEmpty([5,"fsfs",77])   //false
 * ```
 */

export function IsEmpty(data: any): boolean {
  if (IsArray(data)) {
    return data.flat(10).length <= 0;
  }

  if (!IsVoid(data)) {
    return false;
  }

  if (typeof data === "number") {
    return false;
  }

  return IsFalsey(data) || data.length === 0 || Object.keys(data).length === 0;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("IsEmpty", () => {
    it("should return true", () => {
      expect(IsEmpty([])).toBe(true);
    });
    it("should return false", () => {
      expect(IsEmpty([[[{}]]])).toBe(false);
    });
  });
}
