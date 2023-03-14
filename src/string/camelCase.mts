import { StringWithFalsey } from "../types.mjs";
import { capitalize } from "./capitalize.mjs";
import { CheckType } from "./helpers.mjs";

/**
 * @description turn string to CamelCase
 *
 * @param text { string }
 *
 * @example
 * ```js
 * const text = "layout menu";
 * camelCase(text);
 * //=> "LayoutMenu"
 * camelCase()
 * //=> null
 * ```
 */

export function camelCase(text: StringWithFalsey, defaultValue?: any) {
  // Parameter type checks
  text = CheckType(text);

  if (!text) return defaultValue ?? null;

  return text
    .split(" ")
    .map((T) => capitalize(T))
    .join("");
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Camel case", function () {
    it("should return null", () => {
      expect(camelCase(null)).toBe(null);
    });

    it("should camel case work", () => {
      expect(camelCase("layout menu index")).toBe("LayoutMenuIndex");
    });

    it("type check. should return null", () => {
      expect(camelCase(true as any)).toBeNull();
    });

    it("one letter test", () => {
      expect(camelCase("s . ")).toBe("S.");
    });
  });
}
