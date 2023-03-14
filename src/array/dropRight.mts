/**
 * @description
 *
 * @example
 * ```ts
 * dropRight([4,5,6], 1) // [4]
 * dropRight([4,5,6], 2) // [4,5]
 * dropRight([4,5,6], 3) // [4,5,6]
 * ```
 */

export function dropRight<T extends unknown>(arr: T[], num: number) {
  return arr.splice(0, num);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}