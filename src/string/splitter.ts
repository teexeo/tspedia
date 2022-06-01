/**
 * 
 * ```ts
 * $.splitter("Hello world") // ["H", "e", "l" ...]
 * 
 * $.splitter(123456) // [1, 2, 3, 4, 5, 6]
 * 
 * $.splitter('Hello world', ' ') // ["Hello", "world"]
 * ```
 * @since v0.0.42
 * @description Splitter includes only string or number.
 */

export function splitter (text: string | number, split: number | string = ''): string[] | number[] {
    return text.toString().split(split.toString()).map((e: any) => {
        return typeof text === "number" ? +e : e;
    });
}

/**
 * 
 * ```ts
 * $.splitCamelCase($.camelCase("Hello world")) // ["Hello", "World"]
 * 
 * $.splitCamelCase("SomeTest") // ["Some", "Test"]
 * 
 * $.splitCamelCase(944) // false
 * ```
 * @since v0.0.42
 * @description
 * Split Camel Case only accept string type, otherwise returns false.
 */

export function splitCamelCase (text: string) {
    if (typeof text !== "string") return false;
    const wordRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
    return text.match(wordRegex);
}