import { StringWithFalsey } from "../types.mjs";
import { CheckType } from "./helpers.mjs";

/**
 *
 * @param text allows single string;
 * ```ts
 * capitalize("hello")
 * //=> Hello
 *
 * capitalize(false)
 * //=> null
 * ```
 */
export function capitalize(
  text: StringWithFalsey,
  defaultValue?: any
): string | null {
  text = CheckType(text);

  if (!text) return defaultValue ?? null;

  return text[0].toUpperCase() + text.slice(1);
}
