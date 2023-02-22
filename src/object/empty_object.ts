import { IsObject } from "./is_object";

export function emptyObject(data: any): boolean {
  return IsObject(data) && Object.keys(data).length <= 0;
}
