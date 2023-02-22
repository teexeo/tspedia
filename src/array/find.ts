type NSB = number | string | boolean;

/**
 * @example
 * ```ts
 * const users = [
 *  {name: "Jonhy", status: true},
 *  {name: "Brave", status: false}
 * ]
 * _.findIndexWith(users, 'Jonhy', 'name') // 0
 * 
 * _.findIndexWith(users, false, 'status') // 1
 * ```
 */

export function find(arr: any[], search: NSB, type: string = '') {
    if (!!type) return arr.findIndex((e) => e[type] === search);
    return arr.findIndex((e) => e === search);
}


