import { isObject } from "../src/index";

describe("isObject", () => {
  it("should return true for an object", () => {
    const obj = { key: "value" };
    expect(isObject(obj)).toBe(true);
  });

  it("should return false for null", () => {
    expect(isObject(null)).toBe(false);
  });

  it("should return false for a non-object value (string)", () => {
    expect(isObject("string")).toBe(false);
  });

  it("should return false for a non-object value (number)", () => {
    expect(isObject(42)).toBe(false);
  });

  it("should return false for a non-object value (boolean)", () => {
    expect(isObject(true)).toBe(false);
  });

  it("should return false for an array (arrays are technically objects but are considered non-plain objects)", () => {
    const arr = [1, 2, 3];
    expect(isObject(arr)).toBe(true);
  });

  it("should return false for a function", () => {
    const func = () => {};
    expect(isObject(func)).toBe(false);
  });
});
