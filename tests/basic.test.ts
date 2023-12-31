import { describe, expect, test } from "vitest";

import { isNullOrEmpty } from "../src/utils/default";

describe("testing isNullOrEmpty()", () => {
  test("should return true if null", () => {
    const result = isNullOrEmpty(null);
    expect(result).toBeTruthy();
  });
  test("should return true if undefined", () => {
    const result = isNullOrEmpty(undefined);
    expect(result).toBeTruthy();
  });
  test("should return true if empty", () => {
    const result = isNullOrEmpty("");
    expect(result).toBeTruthy();
  });
  test("should return false if has string", () => {
    const result = isNullOrEmpty("hello world");
    expect(result).toBeFalsy();
  });
});
