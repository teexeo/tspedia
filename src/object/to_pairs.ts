import { IsArray } from "../array/is_array";
import { IsBoolean } from "../general/isBoolean";
import { TsTypes } from "../general/types";
import { IsString } from "../string/is_string";
import { emptyObject } from "./empty_object";

type toPairsType = [
  string | number,
  TsTypes | toPairsType | toPairsType[],
  boolean?
][];
type resultType = { [x: string]: any };

/**
 * @description Array data to object
 *
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
 *
 * ```
 *
 * @param pairs array type
 * @returns object
 * @since v0.0.43
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
