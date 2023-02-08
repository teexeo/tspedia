import { describe, it, expect } from "vitest";
import { snakeCase } from "../../src/string/snakeCase";

describe("Snake Case", function () {
  it("should work!", () => {
    expect(snakeCase("hello world")).toBe("hello_world");
  });

  it("should return null", () => {
    expect(snakeCase(null as any)).toBeNull();

    expect(snakeCase(undefined)).toBeNull();

    expect(snakeCase(1 as any)).toBeNull();

    expect(snakeCase(null)).toBeNull();
  });

  it("should return default value", () => {
    const defaultValue = "default";

    expect(snakeCase(1 as any, defaultValue)).toBe(defaultValue);
  });
});
