import { IsFunction } from "../general/isFunction";
import { IsObject } from "../object";
import { IsString } from "../string";
import { IsArray } from "./isArray";

type FindType<T> =
  | ((data: T) => boolean) // Function
  | Partial<T> // Object
  | keyof T // String
  | [keyof T, any]; // Array

let checks = [IsFunction, IsString, IsArray, IsObject];

/**
 * @description 'negated or reversed filter'
 *
 * @example
 * ```ts
 * let users = [
 * { 'user': 'ted', 'age': 31, 'married': false },
 * { 'user': 'jack', 'age': 21, 'married': true }
 * ];
 *
 * reject(users, { 'age': 40, 'active': true });
 * // [{ 'user': 'ted', 'age': 31, 'married': false }]
 *
 * reject(users, 'active');
 * // [{ 'user': 'ted', 'age': 31, 'married': false }]
 *
 * reject(users, function(o) { return !o.married; });
 * // [{ 'user': 'jack', 'age': 21, 'married': true }]
 *
 * reject(users, ['active', false]);
 * // [{ 'user': 'jack', 'age': 21, 'married': true }]
 * ```
 *
 */

export function reject<T>(arr: T[], find: FindType<T>): T[] {
  if (checks.some((func) => func(find))) {
    return arr.filter((obj) => {
      if (IsString(find)) {
        return !(obj as any)[find];
      }
      if (IsFunction(find)) {
        return typeof find === "function" && !find(obj);
      } else {
        let entries = Object.entries(obj as object).toString();
        let values = IsArray(find)
          ? Object.values(find).toString()
          : Object.entries(find).toString();
        return !entries.includes(values);
      }
    });
  }
  return [];
}
