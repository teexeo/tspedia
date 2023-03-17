/**
 * @description checking is value function
 * @example
 * ```ts
 * IsFunction(() => "")  // true
 * IsFunction([5,6,8])  //false
 * ```
 */

export function IsFunction(func: any): boolean {
  return typeof func === "function";
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("IsFunction", () => {
    it("should return true", () => {
      expect(IsFunction(() => "")).toBe(true);
    });
    it("should return false", () => {
      expect(IsFunction({ age: 22 })).toBe(false);
    });
  });
}
