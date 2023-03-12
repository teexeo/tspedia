import { StringWithFalsey } from "../types.mjs";

/**
 * @description Capitalize the sring
 *
 * @param text allows single string
 *
 * @example
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
  if (!text) return defaultValue ?? null;

  return text[0].toUpperCase() + text.slice(1);
}
