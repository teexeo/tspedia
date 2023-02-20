/**
 * Text truncating
 * ```ts
 * truncate('Hello world', 5);
 * // "Hello..."
 * ```
 * @param text string
 * @param length number
 * @returns string...
 * @since v0.0.43
 */

export function truncate(text: string, length: number) {
  return text.length > length ? text.slice(0, length - 1) + "..." : text;
}
