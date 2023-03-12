import { IsArray } from "./isArray.mjs";

/**
 * @description 'returns last item of array';
 * @param arr array []
 * @returns last item
 * @since v0.0.43
 *
 * @example
 * ```ts
 * last([1,2,3])
 * // 3
 * ```
 */
export function last(arr: any[]): any {
  if (!IsArray(arr)) return null;
  return arr[arr.length - 1];
}
