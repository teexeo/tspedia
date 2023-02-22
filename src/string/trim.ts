import { IsString } from "./is_string";
import { IsFalsey } from "../general/isFalsey";
/**
 * @description allows just a string;
 * ```ts
 * const text = " Hi   Jeny ";
 * trim(text)
 * // "Hi Jeny"
 * ```
 * @since v0.0.12
 */

export function trim(text: string): string | null {
  if (!IsString(text)) return null;

  const splitted = text.split(" ");

  let response: string = "";
  for (let t of splitted) {
    if (!IsFalsey(t)) response += " " + t;
  }
  return response.trim();
}
