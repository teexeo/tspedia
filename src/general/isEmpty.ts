import { IsArray } from "../array";
import { IsFalsey } from "./isFalsey";
/**
 *
 * Checking is value empty.
 *
 * ```ts
 * IsEmpty(true)  //true
 * IsEmpty({a: 42})  //false
 * IsEmpty([5,"fsfs",77])  //false
 * ```
 *
 * @param data any
 * @returns boolean
 */

export function IsEmpty(datas: any): boolean {
  if (IsArray(datas)) {
    return datas.flat(10).length <= 0;
  }

  return (
    IsFalsey(datas) || datas.length === 0 || Object.keys(datas).length === 0
  );
}
