import { describe, expect, it } from "vitest";
import { chunk } from "../../src/array";

describe("Chunk", () => {
  it("should return empty array", () => {
    expect(chunk([], 0)).toEqual([]);
  });

  it("should return null", () => {
    expect(chunk(2 as any, 0)).toEqual(null);
  });

  it("should chunk array", () => {
    let input = [0, 0, 0, 0, 0];
    let output = [[0, 0], [0, 0], [0]];
    expect(chunk(input, 2)).toEqual(output);
  });
});
