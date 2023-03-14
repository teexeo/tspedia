import { IsObject } from "./isObject.mjs";

/**
 * @description 
 * 
 * @example
 * ```ts 
 * 
 * ```
 */

export function emptyObject(data: any): boolean {
  return IsObject(data) && Object.keys(data).length <= 0;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}