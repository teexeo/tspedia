import { IsArray } from "../array/is_array";
import { last } from "../array/last";

/**
 *
 * @param arr array
 * @param exists must contain options like ['depth', 'falsey']
 * @returns options {depth: 1}
 */

export function option_checker<T extends any>(arr: any[], exists: string[]) {
  if (
    IsArray(arr) &&
    typeof last(arr) === "object" &&
    Object.keys(last(arr)).some((value) => exists.includes(value))
  ) {
    return last(arr);
  }
  return false;
}
