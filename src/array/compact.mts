/**
 * @description creates an array with all falsey values removed
 * @example
 * ```ts
 * compact([0,3,false, '', NaN, 5])
 * // => [0,3,5]
 * ```
 */

export function compact(arr: any[]): any[] {
  return arr.filter((e) => !!e !== false);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}