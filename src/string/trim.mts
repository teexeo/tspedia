import { IsString } from "./isString.mjs";
import { IsFalsey } from "../general/isFalsey.mjs";
/**
 * @description allows just a string
 * @since v0.0.12
 * @example
 * ```ts
 * const text = " Hi   Jeny ";
 * trim(text)
 * // "Hi Jeny"
 * ```
 */

export function trim(text: string): string | null {
  if (!IsString(text)) return null;

  const splitted = text.split(" ");

  let response: string = "";
  for (let t of splitted) {
    if (!IsFalsey(t)) response += " " + t;
  }
  return response.trim();
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Trim", () => {
    it("should return null", () => {
      // testing with number
      expect(trim(1 as any)).to.be.null;

      // with object
      expect(trim({} as any)).to.be.null;

      // with boolean
      expect(trim(false as any)).to.be.null;
    });

    it("should work", () => {
      expect(trim(" Hi   Jeny ")).toBe("Hi Jeny");
    });
  });
}
