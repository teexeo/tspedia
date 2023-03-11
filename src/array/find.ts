type NSB = number | string | boolean;

/**
 * @description 'find index of values from array'
 * 
 * @example
 * ```ts
 * const users = [
 *  {name: "Jonhy", status: true},
 *  {name: "Brave", status: false}
 * ]
 * _.find(users, 'Jonhy', 'name') // 0
 * 
 * _.find(users, false, 'status') // 1
 * ```
 */

export function find(arr: any[], search: NSB, type: string = '') {
    if (!!type) return arr.findIndex((e) => e[type] === search);
    return arr.findIndex((e) => e === search);
}


