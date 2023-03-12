import { IsArray } from "../array/isArray.mjs";
import { IsFalsey } from "./isFalsey.mjs";
import { IsVoid } from "./isVoid.mjs";
/**
 * @description 'checking is value empty'
 * @param data any
 * @returns boolean
 *
 * @example
 * ```ts
 * IsEmpty(false)   //true
 * IsEmpty(() => '')   //true
 * IsEmpty([[[{a: 33}]]])   //false
 * IsEmpty([5,"fsfs",77])   //false
 * ```
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
