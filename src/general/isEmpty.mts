import { IsArray } from "../array";
import { IsFalsey } from "./isFalsey";
import { IsVoid } from "./isVoid";
/**
 *
 * @description 'checking is value empty'
 *
 * @example
 * ```ts
 * IsEmpty(false)   //true
 * IsEmpty(() => '')   //true
 * IsEmpty([[[{a: 33}]]])   //false
 * IsEmpty([5,"fsfs",77])   //false
 * ```
 *
 * @param data any
 * @returns boolean
 */

export function IsEmpty(datas: any): boolean {
  if (IsArray(datas)) {
    return datas.flat(10).length <= 0;
  }

  if (!IsVoid(datas)) {
    return false;
  }

  if (datas === 0) {
    return true;
  }

  if (typeof datas === "number") {
    return false;
  }

  return (
    IsFalsey(datas) || datas.length === 0 || Object.keys(datas).length === 0
  );
}
