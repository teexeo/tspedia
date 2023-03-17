type NSB = number | string | boolean;

/**
 * @description find index of values from array
 * @example
 * ```ts
 * const users = [
 *  {name: "Jonhy", status: true},
 *  {name: "Brave", status: false}
 * ]
 * find(users, 'Jonhy', 'name') // 0
 * find(users, false, 'status') // 1
 * ```
 */

export function find(arr: any[], search: NSB, type: string = "") {
  if (!!type) return arr.findIndex((e) => e[type] === search);
  return arr.findIndex((e) => e === search);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("Find", () => {
    const users = [
      { name: "Brave", age: 33 },
      { name: "Johny", age: 44 },
      { name: "Brandon", age: 22 },
    ];
    it("should return index of founded value", () => {
      expect(find(users, "Johny", "name")).toEqual(1);
    });
    it("should return -1 if not found", () => {
      expect(find(users, "Jack", "name")).toEqual(-1);
    });
  });
}
