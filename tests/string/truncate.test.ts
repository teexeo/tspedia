import { describe, it, expect } from "vitest";
import { truncate } from "../../src/string/truncate";

describe("Truncate", function () {
  it("should return null", () => {
    // testing with number
    expect(truncate(1 as any, 20)).to.be.null;

    // with object
    expect(truncate({} as any, 2)).to.be.null;

    // with boolean
    expect(truncate(false as any, 2)).to.be.null;
  });

  it("should work", () => {
    expect(truncate("hello", 2)).toBe("he...");
  });
});
