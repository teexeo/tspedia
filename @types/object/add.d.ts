type keyType = string | number | object;
/**
 * ```ts
 * $.add({ name: "Adam" }, "age", 20) // { name: "Adam", age: 20 }
 *
 * $.add({ name: "Adam", age: 20 }, "age", 22) // { name: "Adam", age: 22 }
 * ```
 * @param obj must be a object
 * @param key string | number | object
 * @param value any
 * @returns object
 * @since 0.2.3
 *
 */
export declare function add(obj: object | undefined, key: keyType, value: any): false | object;
export {};
//# sourceMappingURL=add.d.ts.map