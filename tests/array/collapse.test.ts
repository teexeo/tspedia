import { describe, expect, it } from "vitest";
import { collapse } from "../../src/array";

describe("Collapse", () => {
  it("should return empty array", () => {
    expect(collapse()()).toEqual([]);
  });

  it("should return collapsed array", () => {
    let collapsed = collapse("Hello", 2, [[["world"]]]);

    // Null
    expect(collapsed()).toEqual(["Hello", 2, "world"]);

    // String
    expect(collapsed("string")).toEqual(["Hello", "world"]);

    // Number
    expect(collapsed("number")).toEqual([2]);
  });
  it("should work with deep property", () => {
    // Deeply
    expect(collapse(1, [[2]])(null, true)).toEqual([1, 2]);

    // Without deeply search
    expect(collapse(1, [[2]])(null, false)).toEqual([1, [[2]]]);
  });

  it("should work with object", () => {
    expect(collapse({ age: 10 }, 10, true)()).toEqual([{ age: 10 }, 10, true]);

    expect(collapse({ age: 10 }, 10, true)("object")).toEqual([{ age: 10 }]);

    expect(
      collapse({ age: 10 }, [[{ name: "John" }]])("object", false)
    ).toEqual([{ age: 10 }, [[{ name: "John" }]]]);

    expect(
      collapse({ age: 10 }, [[{ name: "John" }]])("object", true)
    ).toEqual([{ age: 10 }, { name: "John" }]);
  });
});
