/** 
 * @description `Difference two arrays`
 * ```ts
 * difference([3,2, 1], [2, 3,5]); 
 * // [1,5] 
 * ```
*/

export default function difference<T extends unknown>(A: T[], B: T[]) {
    return A.filter(e => !B.includes(e)).concat(B.filter(x => !A.includes(x)));
}
