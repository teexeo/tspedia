/**
 * @description split CamelCase that only accept string type
 *
 * @example
 * ```ts
 * splitCamelCase(camelCase("Hello world")) // ["Hello", "World"]
 * splitCamelCase("SomeTest") // ["Some", "Test"]
 * splitCamelCase(944) // false
 * ```
 * @since v0.0.42
 */

export function splitCamelCase(text: string) {
  if (typeof text !== "string") return false;
  const wordRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  return text.match(wordRegex);
}
