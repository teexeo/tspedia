import { CheckType } from "./helpers.mjs";
import { StringWithFalsey } from "../types.mjs";

/**
 * @description turn string to snake_case
 * 
 * @example
 * ```js
 * const text = "layout menu index"
 *
 * snakeCase(text)
 * // "layout_menu_index"
 * ```
 * 
 * @param text string
 */

export function snakeCase(text: StringWithFalsey, defaultValue?: any) {
  text = CheckType(text);

  if (!text) return defaultValue ?? null;

  return text.replace(/\s/g, "_");
}
