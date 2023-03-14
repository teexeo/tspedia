/**
 * @description difference two arrays
 * @example
 * ```ts
 * difference([3, 2, 1], [2, 3, 5]);
 * // [1, 5]
 * ```
 */

export function difference(A: any[], B: any[]): any[] {
  return A.filter((el) => !B.includes(el)).concat(
    B.filter((x) => !A.includes(x))
  );
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}