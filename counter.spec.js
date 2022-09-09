import { describe, expect, it } from "vitest";
import { add } from "./counter";

describe("counter", () => {
  it("should add two numbers", () => {
    const expectedResult = add(5, 6);
    expect(expectedResult).toBe(11);
  });

  it("should throw an error when passing strings", () => {
    const expectedResult = () => add("dog", "cat");
    expect(expectedResult).toThrowError("should pass a number");
  });

  it("should throw an error when passing null", () => {
    const expectedResult = () => add(null, null);
    expect(expectedResult).toThrowError("should pass a number");
  });

  it("should throw an error when passing null and undefined", () => {
    const expectedResult = () => add(null, undefined);
    expect(expectedResult).toThrowError("should pass a number");
  });

  it("should throw an error when passing undefined", () => {
    const expectedResult = () => add(undefined, undefined);
    expect(expectedResult).toThrowError("should pass a number");
  });

  it("should handle decimal numbers", () => {
    const expectedResult = add(0.1, 0.2);
    expect(expectedResult).toBe(0.3);
  });
});
