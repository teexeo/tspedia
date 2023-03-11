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
  return (
    type: JsTypes | null = null,
    is_deep: boolean = true,
    level: number = 10
  ) => {
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

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Collapse", () => {
    it("should return empty array", () => {
      expect(collapse()()).toEqual([]);
    });

    it("should return collapsed array", () => {
      let collapsed = collapse("Hello", 2, [[["world"]]]);

      // Null
      expect(collapsed()).toEqual(["Hello", 2, "world"]);

      // String
      expect(collapsed("string")).toEqual(["Hello", "world"]);

      // Number
      expect(collapsed("number")).toEqual([2]);
    });
    it("should work with deep property", () => {
      // Deeply
      expect(collapse(1, [[2]])(null, true)).toEqual([1, 2]);

      // Without deeply search
      expect(collapse(1, [[2]])(null, false)).toEqual([1, [[2]]]);
    });

    it("should work with object", () => {
      expect(collapse({ age: 10 }, 10, true)()).toEqual([
        { age: 10 },
        10,
        true,
      ]);

      expect(collapse({ age: 10 }, 10, true)("object")).toEqual([{ age: 10 }]);

      expect(
        collapse({ age: 10 }, [[{ name: "John" }]])("object", false)
      ).toEqual([{ age: 10 }, [[{ name: "John" }]]]);

      expect(
        collapse({ age: 10 }, [[{ name: "John" }]])("object", true)
      ).toEqual([{ age: 10 }, { name: "John" }]);
    });
  });
}
