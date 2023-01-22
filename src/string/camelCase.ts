import { capitalize } from "./capitalize";
import { trim } from "./trim";

/**
 * @name camelCase
 * @param text { string }
 * @example
 * ```js
 * const text = "layout menu index"
 * 
 * camelCase(text) // "LayoutMenuIndex"
 * ```
 */


 export function camelCase(text: string): string {
    let splitted = trim(text).split(' ');
    let finished = '';
    for (let t of splitted) {
        finished += capitalize(t);
    }
    return finished;
}
