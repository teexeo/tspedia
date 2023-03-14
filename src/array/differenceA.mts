/**
 * @description difference just first array
 * @example
 * ```ts
 * difference([2, 1], [2, 3]);
 * // [1]
 * ```
 */

export function differenceA(A: any[], B: any[]): any[] {
  return A.filter((el) => !B.includes(el));
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}