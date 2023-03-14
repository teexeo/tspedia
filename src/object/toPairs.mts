import { IsArray } from "../array/isArray.mjs";
import { IsBoolean } from "../general/isBoolean.mjs";
import { TsTypes } from "../general/types.x.mjs";
import { IsString } from "../string/isString.mjs";
import { emptyObject } from "./emptyObject.mjs";

type toPairsType = [
  string | number,
  TsTypes | toPairsType | toPairsType[],
  boolean?
][];
type resultType = { [x: string]: any };

/**
 * @description array data to object
 * @param pairs array type
 * @returns object
 * @since v0.0.43
 *
 * @example
 * ```ts
 * toPairs([['name', 'John'], ['age', 20]]);
 * // { name: 'John', age: 20 }
 *
 * // Can also white nested object with true parameter
 * toPairs([['e', ['g', 4], true]])
 * // { e: { g: 4 } }
 *
 * toPairs([['a', 1], ['b', [['c', 2], ['d', 3]], true]])
 * // { a: 1, b: { c: 2, d: 3 } }
 * ```
 */

export function toPairs(pairs: toPairsType): resultType | null {
  if (IsArray(pairs)) {
    let result: resultType = {};
    for (let pair of pairs) {
      if (!IsArray(pair)) continue;
      let [key, value, recursive] = pair;
      if (IsBoolean(recursive) && recursive && IsArray(value)) {
        result[key] = toPairs(
          (IsString((value as toPairsType | toPairsType[])[0])
            ? [value]
            : value) as any
        );
        continue;
      }
      result[key] = value;
    }
    return emptyObject(result) ? null : result;
  }
  return null;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}