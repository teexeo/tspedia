type keyType = string | number | object;

/**
 * @description object pushing method
 * @param obj must be an object
 * @param key string | number | object
 * @param value any
 * @returns object
 * @since 0.2.3
 *
 * @example
 * ```ts
 * add({ name: "Adam" }, "age", 20) // { name: "Adam", age: 20 }
 * add({ name: "Adam", age: 20 }, "age", 22) // { name: "Adam", age: 22 }
 * ```
 *
 */

export function add(obj: object = {}, key: keyType, value: any) {
  if (typeof obj !== "object" || Array.isArray(obj)) return false;
  if (typeof key === "object") {
    return {
      ...obj,
      ...key,
    };
  }

  (obj as any)[key] = value;
  return obj;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}
