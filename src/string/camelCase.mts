import { TypeChecker } from "../general/typeChecker.x.mjs";
import { capitalize } from "./capitalize.mjs";

/**
 * @name camelCase
 * @param text { string }
 * @example
 * ```js
 * const text = "layout menu";
 *
 * camelCase(text);
 * //=> "LayoutMenu"
 *
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

  describe("CamelCase", () => {
    it("should return null", () => {
      expect(camelCase(null as any)).toBe(null);
    });

    it("should return default value", () => {
      let value = "This is default";
      expect(camelCase(null as any, value)).toBe(value);
    });
  });
}
