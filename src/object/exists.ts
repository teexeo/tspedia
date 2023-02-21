import { IsObject } from "./is_object";

/**
 * @description Object checking with key
 *
 * ```ts
 * let obj = {name: 'John', age: 20};
 *
 * exists(obj, 'age');
 * // true
 *
 * exists(obj, 'cars')
 * // false
 *
 * exists(obj, ['name', 'age'], 'AND')
 * // true
 * ```
 *
 * @param obj object for check
 * @param find string key
 * @param condition "AND | OR" default is OR
 * @returns boolean
 * @since v0.0.43
 */

export function exists<T extends string | string[]>(
  obj: object,
  find: T,
  options: {
    condition: "AND" | "OR";
  } = { condition: "OR" }
) {
  let condition_check = false;
  if (IsObject(obj)) {
    for (let o of typeof find === "string" ? [find] : find) {
      if (Object.keys(obj).includes(o)) condition_check = true;
      else condition_check = false;

      if (options.condition === "OR" && condition_check) return true;
    }
    return condition_check;
  }
  return false;
}
