
/**
 * @param val { number }
 * @description its checking number is integer or other number like (float, double);
 * 
 * `if gives true integer` 
 * ```ts
 * isInt(23.45) // false
 * ```
 */

 export function isInt(val: number) {
    return +val % 1 === 0;
}