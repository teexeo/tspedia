import { JsTypes } from "../general/types.mjs";

export interface ICollapseOptions {
  truthy: boolean;
}

/**
 * @description 'showing array with various deep levels'
 * 
 * @example
 * ```ts
 * // Without type
 * collapse([[2]], "Hello", false, [3])()
 * // => [2, "Hello", false, 3]
 *
 * // With type
 * collapse([[2]], "Hello", false, [3])("number")
 * // => [2, 3]
 * 
 * // Without deep
 * collapse([[2]], "Hello", false, [3])("number", false)
 * // => [[[2]], [3]]
 * ```
 * @since v0.0.42
 * @param array any array
 * @returns array
 */

export function collapse(...datas: any[]) {
  return (type: JsTypes | null = null, is_deep: boolean = true, level: number = 10) => {
    // Result data
    let collapsed: any[] = [];
    for (let data of is_deep ? datas.flat(level) : datas) {
      if (!type) {
        collapsed.push(data);
        continue;
      }
      // Checking data type if exists
      if (type === typeof data) {
        collapsed.push(data);
      }
    }
    return collapsed;
  };
}
