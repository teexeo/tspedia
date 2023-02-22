/**
 * @description Object checking with key
 *
 * ```ts
 * let obj = {name: 'John', age: 20};
 *
 * exists(obj, 'age');
 * // true
 *
 * exists(obj, 'cars')
 * // false
 *
 * exists(obj, ['name', 'age'], 'AND')
 * // true
 * ```
 *
 * @param obj object for check
 * @param find string key
 * @param condition "AND | OR" default is OR
 * @returns boolean
 * @since v0.0.43
 */
export declare function exists<T extends string | string[]>(obj: object, find: T, options?: {
    condition: "AND" | "OR";
}): boolean;
//# sourceMappingURL=exists.d.ts.map