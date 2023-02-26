import { IsFalsey } from "./isFalsey";

/**
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
export function withDefaults(data: any, defaultValue: any) {
  return IsFalsey(data) ? defaultValue : data;
}
