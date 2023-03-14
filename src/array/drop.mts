/**
 * @description
 * @param arr must be declare array
 * @param num how many length you want to drop
 * @example
 * ```ts
 * drop([4,5,6], 1) // [5,6]
 * drop([4,5,6], 2) // [6]
 * drop([4,5,6], 3) // []
 * ```
 */

export function drop<T extends unknown>(arr: T[], num: number) {
  return arr.splice(num);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}