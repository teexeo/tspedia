import { describe, it, expect } from "vitest";
import { join } from "../../src/array";

describe("Join", () => {

  it('should join', () => {
    expect(join(['a', 'b'])).toBe('ab');
    expect(join(['a', 'b'], 'T')).toBe('aTb');
    expect(join(['a', 'b'], '-')).toBe('a-b');
  })

  it("should return null", function () {
    expect(join(null as any)).toBeNull();
  });
});
