import { IsArray } from "./isArray";

/**
 * Return last item of arrays;
 *
 * ```ts
 * last([1,2,3])
 * // 3
 * ```
 *
 * @param arr array []
 * @returns last item
 * @since v0.0.43
 */
export function last(arr: any[]): any {
  if (!IsArray(arr)) return null;
  return arr[arr.length - 1];
}
