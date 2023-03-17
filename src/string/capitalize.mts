import { StringWithFalsey } from "../types.mjs";

/**
 * @description Capitalize the sring
 * @param text allows single string
 * @example
 * ```ts
 * capitalize("hello")
 * //=> Hello
 *
 * capitalize(false)
 * //=> null
 * ```
 */
export function capitalize(
  text: StringWithFalsey,
  defaultValue?: any
): string | null {
  if (!text) return defaultValue ?? null;

  return text[0].toUpperCase() + text.slice(1);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Capitalize", function () {
    it("should return null", () => {
      // testing with number
      expect(capitalize(1 as any)).to.be.null;

      // with object
      expect(capitalize({} as any)).to.be.null;

      // with boolean
      expect(capitalize(false as any)).to.be.null;
    });

    it("should work", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should return default value", () => {
      let defaultValue = "test";
      expect(capitalize(false as any, defaultValue)).toBe(defaultValue);
    });
  });
}
