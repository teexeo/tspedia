import { IsArray } from "./is_array";

export function last(arr: any[]): any {
  if (!IsArray(arr)) return null;
  return arr[arr.length - 1];
}
