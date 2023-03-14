import { IsFalsey } from "./isFalsey.mjs";
import { JsTypes } from "./types.x.mjs";

export function TypeChecker(
  data: any,
  type: JsTypes,
  defaultValue?: any
): { type: "success" | "error"; data: any } {
  if (typeof data === type && !IsFalsey(data)) {
    return {
      type: "success",
      data,
    };
  }
  return {
    type: "error",
    data: defaultValue || null,
  };
}
