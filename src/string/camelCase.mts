import { StringWithFalsey } from "../types.mjs";
import { capitalize } from "./capitalize.mjs";
import { CheckType } from "./helpers.mjs";

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

export function camelCase(text: StringWithFalsey, defaultValue?: any) {
  // Parameter type checks
  text = CheckType(text);

  if (!text) return defaultValue ?? null;

  return text
    .split(" ")
    .map((T) => capitalize(T))
    .join("");
}
