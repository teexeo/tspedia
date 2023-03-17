import { IsFalsey } from "./isFalsey.mjs";

/**
 * @description putting default value if it hasn't
 * @param data any type
 * @param defaultValue any type
 * @returns data or default value
 * @example
 * ```ts
 * let car = { name: "BMW", price: "" };
 * withDefaults(car.name, "Audi");
 * // "BMW";
 * withDefaults(car?.price, "60,000$");
 * // "60,000$";
 * ```
 */
export function withDefaults<T>(data: T, defaultValue: any | T): T {
  return IsFalsey(data) ? defaultValue : data;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("WithDefaults", () => {
    const person = [{ name: "max", status: "active" }, { status: "active" }];
    it("should return default value", () => {
      expect(withDefaults(person[0].name, "someone")).toBe("max");
      expect(withDefaults(person[1].name, "someone")).toBe("someone");
    });
  });
}
