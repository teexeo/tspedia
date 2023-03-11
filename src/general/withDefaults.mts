import { IsFalsey } from "./isFalsey.mjs";

/**
 * @description putting default value if it hasn't
 * 
 * @example
 * ```ts
 * let car = { name: "Bugatti" };
 * withDefaults(car.name, "Audi")
 * // "Bugatti";
 * withDefaults(car?.price, "Audi")
 * // "Audi";
 * ```
 *
 * @param data any type
 * @param defaultValue any type
 * @returns data or default value
 */
export function withDefaults<T>(data: T, defaultValue: any | T): T {
  return IsFalsey(data) ? defaultValue : data;
}
