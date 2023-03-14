/**
 * @description Splitter includes only string or number.
 * 
 * @example
 * ```ts
 * $.splitter("Hello world") // ["H", "e", "l" ...]
 * $.splitter(123456) // [1, 2, 3, 4, 5, 6]
 * $.splitter('Hello world', ' ') // ["Hello", "world"]
 * ```
 * @since v0.0.42
 */

export function splitter (text: string | number, split: number | string = ''): string[] | number[] {
    return text.toString().split(split.toString()).map((e: any) => {
        return typeof text === "number" ? +e : e;
    });
}

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest;
    
  }