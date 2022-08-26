import { describe, expect, it } from "vitest";
import { add } from "./counter";

describe("counter", () => {
  it("add two numbers", () => {
    expect(add(5, 6)).toBe(11);
    expect(add(2, 4)).toBe(6);
  });
});
