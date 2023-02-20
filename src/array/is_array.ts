/**
 * @description The Accessible method determines if the given value is array accessible
 * @since v0.0.42
 * 
 * ```ts
 * accessible([])
 * // true
 * ```
 *
 * 
 */

export function IsArray(arr: any[]): boolean {
    return Array.isArray(arr);
}