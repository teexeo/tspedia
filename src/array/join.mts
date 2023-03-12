import { IsFalsey } from "../general/isFalsey.mjs";
import { IsArray } from "./isArray.mjs";

/**
 * @description joining and stringifying an array
 *
 * @param arr e.g ["a", "b"]
 * @param separator e.g "-"
 * @returns "a-b"
 * @since v0.0.43
 * 
 * @example 
 */

export function join(arr: any[], separator: string = ""): string | null {
  if (IsFalsey(arr) && !IsArray(arr)) return null;
  return arr.join(separator);
}
