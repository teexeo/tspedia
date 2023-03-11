import { describe, it, expect } from "vitest";
import { toArray } from "../../src/array";

describe("To Array", () => {
  it("should return empty array", () => {
    expect(toArray([])).toEqual([]);
  });
  it.todo("should know options", () => {
    expect(toArray("a", "b", false));
  });
});
