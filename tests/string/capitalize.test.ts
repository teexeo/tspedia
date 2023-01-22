import { describe, it, expect } from "vitest";
import { capitalize } from "../../src/string/capitalize";

describe("Capitalize", function () {
  it("should return null", () => {
    // testing with number
    expect(capitalize(1 as any)).to.be.null;

    // with object
    expect(capitalize({} as any)).to.be.null;

    // with boolean
    expect(capitalize(false as any)).to.be.null;
  });

  it("should work", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it('should return default value', () => {
    let defaultValue = "test";

    expect(capitalize(false as any, defaultValue)).toBe(defaultValue)
  })
});
