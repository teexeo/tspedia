import { IsFalsey } from "../general/isFalsey.mjs";
import { IsArray } from "./isArray.mjs";

/**
 * @description joining and stringifying an array
 *
 * @param arr e.g ["a", "b"]
 * @param separator e.g "-"
 * @returns "a-b"
 * @since v0.0.43
 *
 * @example
 * ```ts
 *
 * ```
 */

export function join(arr: any[], separator: string = ""): string | null {
  if (IsFalsey(arr) && !IsArray(arr)) return null;
  return arr.join(separator);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Join", () => {
    it("should join", () => {
      expect(join(["a", "b"])).toBe("ab");
      expect(join(["a", "b"], "T")).toBe("aTb");
      expect(join(["a", "b"], "-")).toBe("a-b");
    });

    it("should return null", function () {
      expect(join(null as any)).toBeNull();
    });
  });
}
