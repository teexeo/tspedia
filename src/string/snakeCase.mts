import { CheckType } from "./helpers.mjs";
import { StringWithFalsey } from "../types.mjs";

/**
 * @example
 * @param text string
 * 
 * ```js
 * const text = "layout menu index"
 *
 * snakeCase(text) 
 * // "layout_menu_index"
 * ```
 */

export function snakeCase(text: StringWithFalsey, defaultValue?: any) {
  text = CheckType(text);
  
  if (!text) return defaultValue ?? null;

  return text.replace(/\s/g, "_");
}
