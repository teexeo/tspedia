import { IsArray } from "../array/isArray";
import { last } from "../array/last";
import { IsObject } from "../object";

/**
 *
 * @description checks is function have an object option
 * 
 * @param arr array
 * @param exists must contain options like ['depth', 'falsey']
 * @returns options {depth: 1}
 */

export function option_checker<T extends any>(arr: any[], exists: string[]) {
  if (
    IsArray(arr) &&
    IsObject(last(arr)) &&
    Object.keys(last(arr)).some((value) => exists.includes(value))
  ) {
    return last(arr);
  }
  return false;
}