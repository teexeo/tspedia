/**
 * ```ts
 * let car = { name: "Bugatti" };
 * withDefaults(car.name, "Audi")
 * // "Bugatti";
 * withDefaults(car?.price, "Audi")
 * // "Audi";
 * ```
 *
 * @param data any type
 * @param defaultValue any type
 * @returns data or default value
 */
export declare function withDefaults(data: any, defaultValue: any): any;
//# sourceMappingURL=with_defaults.d.ts.map