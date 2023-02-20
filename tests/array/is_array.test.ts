import { describe, expect, it } from "vitest";
import { IsArray } from "../../src/array";

describe("IsArray", () => {
  it("should return false", () => {
    expect(IsArray(0 as any)).toBe(false);
    expect(IsArray("" as any)).toBe(false);
    expect(IsArray((() => {}) as any)).toBe(false);
  });

  it("should return true", () => {
    expect(IsArray([])).toBe(true);
  });
});
