import { Types, JsTypes } from "../general/types";

export interface ICollapseOptions {
  truthy: boolean;
}

/**
 * ```ts
 * // Without type
 * collapse([[2]], "Hello", false, [3])()
 * // => [2, "Hello", false, 3]
 *
 * // With Type
 * collapse([[2]], "Hello", false, [3])("number")
 * // => [2, 3]
 * 
 * // Without deeply
 * collapse([[2]], "Hello", false, [3])("number", false)
 * // => [[[2]], [3]]
 * 
 * ```
 * @since v0.0.42
 * @param array any array
 * @returns array
 */

export function collapse(...datas: any[]) {
  return (type: JsTypes | null = null, is_deep: boolean = true) => {
    // Result data
    let collapsed: any[] = [];
    for (let data of is_deep ? datas.flat(10) : datas) {
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
