/**
 * @description checking is value integer
 * 
 * @example
 * ```ts
 * isInt()
 * ```
 * 
 */

export function isInt(val: number) {
  return +val % 1 === 0;
}