/**
 *
 * @example
 * ```ts
 * _.dropRight([4,5,6], 1) // [4]
 * 
 * _.dropRight([4,5,6], 2) // [4,5]
 * 
 * _.dropRight([4,5,6], 3) // [4,5,6]
 * ```
 */

 export function dropRight<T extends unknown>(arr: T[], num: number) {
     return arr.splice(0, num);
 }


