/**
 * @description getting key and value property
 *
 * @param obj object
 *
 * @example
 * ```ts
 *   divide({
 *       name: "Suleyman",
 *       age: 20,
 *       jobs: ["Programming", "Student"],
 *   })
 * //    keys: [ 'name', 'age', 'jobs' ],
 * //    values: [ 'Suleyman', 20, [ 'Programming', 'Student' ]]
 * ```
 */

export function divide(obj: object) {
  if (typeof obj !== "object" || Array.isArray(obj)) return false;
  return {
    keys: Object.keys(obj),
    values: Object.values(obj),
  };
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
}