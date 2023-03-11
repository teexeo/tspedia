import { describe, it, expect } from "vitest";
import { trim } from "../../src/string";

describe("Trim", () => {
  it("should return null", () => {
    // testing with number
    expect(trim(1 as any)).to.be.null;

    // with object
    expect(trim({} as any)).to.be.null;

    // with boolean
    expect(trim(false as any)).to.be.null;
  });

  it("should work", () => {
    expect(trim(" Hi   Jeny ")).toBe("Hi Jeny");
  });
});
