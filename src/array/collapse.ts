/**
 * ```ts
 * $.collapse([45, 6, 8], "Hello", false, [3,4]) 
 * // => [45, 6, 8, "Hello", false, 3, 4]
 * ```
 * @since v0.0.42
 * @param array any array
 * @returns array
 */

export function collapse(...array: any[]): any[] {
    let collapsed: any[] = [];

    for (let arr of array) {
        if (Array.isArray(arr))
            collapsed = [...collapsed, ...arr];
        else collapsed.push(arr);
    }

    return collapsed;
}