import { describe, it, expect } from "vitest";
import { toArray } from "../../src/array/to_array";

describe("To Array", () => {
  it("should return empty array", () => {
    expect(toArray([])).toEqual([]);
  });
  it.todo("should can know options", () => {
    expect(toArray("a", "b", false));
  });
});
