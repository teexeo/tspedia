/** 
 * @description `difference just A array`
 * 
 * @example
 * ```ts
 * difference([2, 1], [2, 3]); 
 * // [1] 
 * ```
*/

export function differenceA(A: Array<any>, B: Array<any>) {
    return A.filter(e => !B.includes(e));
}
