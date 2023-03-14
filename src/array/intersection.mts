/**
 * @description shows intersecting values
 *
 * @example
 * ```ts
 * intersection(["he", "lo"], ["he", "at", 22, 88])
 * // ['he']
 * ```
 */

export function intersection(A: any[], B: any[]): any[] {
  return A.filter((el) => B.includes(el));
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  
}