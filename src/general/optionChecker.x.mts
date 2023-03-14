import { IsArray } from "../array/isArray.mjs";
import { last } from "../array/last.mjs";
import { IsObject } from "../object/isObject.mjs";
export function option_checker(arr: any[], exists: string[]) {
  if (
    IsArray(arr) &&
    IsObject(last(arr)) &&
    Object.keys(last(arr)).some((value) => exists.includes(value))
  ) {
    return last(arr);
  }
  return false;
}
