/**
 * @description Text truncating
 *
 * @example
 * ```ts
 * truncate('Hello world', 5);
 * // "Hello..."
 * ```
 * @param text string
 * @param length number
 * @returns string...
 * @since v0.0.43
 */

export function truncate(text: string, length: number) {
  if (typeof text !== "string") return null;
  return text.length > length ? text.slice(0, length) + "..." : text;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Truncate", function () {
    it("should return null", () => {
      // testing with number
      expect(truncate(1 as any, 20)).to.be.null;

      // with object
      expect(truncate({} as any, 2)).to.be.null;

      // with boolean
      expect(truncate(false as any, 2)).to.be.null;
    });

    it("should work", () => {
      expect(truncate("hello", 2)).toBe("he...");
    });
  });
}
