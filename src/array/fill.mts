
/**
 * @description 'change the entries of array to fill value'
 * 
 * @example
 * ```ts
 * const arr = [1,3,5]
 * fill(arr, 'a') // ['a','b','b']
 * ```
 */


 export function fill(arr: any[], value: any, start: number = 0, end: number = arr.length) {
    for (let  i = start; i < end; i++) {
        arr[i] = value;
    }
    return arr;
}
