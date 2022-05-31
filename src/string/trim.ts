/**
 * allows just a string;
 * ```ts
 * const text = "Hi my    name   is Jeny";
 * 
 * trim(text) // "Hi my name is Jeny"
 * ```
 */

 export function trim (text: string): string {
    const splitted = text.split(' ');
    let response = ''
    for (let t of splitted) {
        if (t !== '') response += ' ' + t;
    }

    return response.slice(1);
}