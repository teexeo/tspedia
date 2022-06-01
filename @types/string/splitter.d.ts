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
export declare function splitter(text: string | number, split?: number | string): string[] | number[];
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
export declare function splitCamelCase(text: string): false | RegExpMatchArray;
//# sourceMappingURL=splitter.d.ts.map