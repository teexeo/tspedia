/**
 * @description Checking data type is string.
 * ```ts
 * IsString("hi") // true
 * IsString(2)    // false
 * ```
 * @param text any type
 * @returns boolean
 */

export function IsString(text: any) {
  return typeof text === "string";
}
