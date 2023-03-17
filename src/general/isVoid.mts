/**
 * @description check is value return smth
 * @param data any type
 * @returns boolean
 * @example
 * ```ts
 * IsVoid(() => 43434)   // false
 * IsVoid(() => "")   // false
 * IsVoid(() => {})   // true
 * ```
 */

export function IsVoid(data: Function): boolean {
  if (data() === undefined) {
    return true;
  }
  return false;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("IsVoid", () => {
    it("should return true", () => {
      expect(IsVoid(() => {})).toBe(true);
    });
    it("should return false", () => {
      expect(IsVoid(() => "")).toBe(false);
    });
  });
}
