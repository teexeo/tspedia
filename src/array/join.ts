import { IsFalsey } from "../general/isFalsey";
import { IsArray } from "./isArray";
/**
 *
 * @param arr e.g ["a", "b"]
 * @param separator e.g "-"
 * @returns "a-b"
 * @since v0.0.43
 */

export function join(arr: any[], separator: string = "") {
  if (IsFalsey(arr) && !IsArray(arr)) return null;
  return arr.join(separator);
}