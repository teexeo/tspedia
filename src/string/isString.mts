/**
 * @description Checking data type is string.
 * @example
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

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}