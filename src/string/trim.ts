/**
 * allows just a string;
 * ```ts
 * const text = " Hi   Jeny ";
 * trim(text)
 * // "Hi Jeny"
 * ```
 */

export function trim(text: string): string | null {
  if (!text || typeof text != "string") return null;


  const splitted = text.split(" ");

  let response: string = "";
  for (let t of splitted) {
    if (!!t) response += " " + t;
  }

  return text
    .split(" ")
    .map((T) => T ?? "")
    .join(" ")
    .trim();
}
