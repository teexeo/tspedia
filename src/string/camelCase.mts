import { TypeChecker } from "../general/typeChecker.x.mjs";
import { capitalize } from "./capitalize.mjs";

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

export function camelCase(text: string, defaultValue?: any) {
  // Parameter type checks
  let checked = TypeChecker(text, "string", defaultValue);
  if (checked.type === "error") return checked.data;

  return text
    .split(" ")
    .map((T) => capitalize(T))
    .join("");
}


if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Camel case", function () {
    it("should return null", () => {
      expect(camelCase(null as any)).toBe(null);
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
