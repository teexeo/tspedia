import { TypeChecker } from "../general/typeChecker.x.mjs";
import { StringWithFalsey } from "../types.mjs";

/**
 * @description turn string to snake_case
 * @param text string
 * @example
 * ```js
 * const text = "layout menu index"
 * snakeCase(text)
 * // "layout_menu_index"
 * ```
 */

export function snakeCase(text: StringWithFalsey, defaultValue?: any) {
  text = CheckType(text);

  if (!text) return defaultValue ?? null;

  return text.replace(/\s/g, "_");
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Snake Case", function () {
    it("should work!", () => {
      expect(snakeCase("hello world")).toBe("hello_world");
    });

    it("should return null", () => {
      expect(snakeCase(null as any)).toBeNull();

      expect(snakeCase(undefined)).toBeNull();

      expect(snakeCase(1 as any)).toBeNull();

      expect(snakeCase(null)).toBeNull();
    });

    it("should return default value", () => {
      const defaultValue = "default";

      expect(snakeCase(1 as any, defaultValue)).toBe(defaultValue);
    });
  });
}
