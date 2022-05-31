declare type NSB = number | string | boolean;
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
export declare function findIndexWith(arr: any[], search: NSB, type?: string): number;
export {};
//# sourceMappingURL=findIndexWith.d.ts.map