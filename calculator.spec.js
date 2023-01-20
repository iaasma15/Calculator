import { describe, it, expect, beforeEach } from "vitest";
import {
  getCurrentDisplayedNumber,
  appendNumber,
  resetNumber,
} from "./calculator.js";

describe("calculator", () => {
  beforeEach(() => {
    resetNumber();
  });

  it("current displayed number is initiated to be 0", () => {
    expect(getCurrentDisplayedNumber()).toBe("0");
  });

  it("displays first number instead of initialized number", () => {
    appendNumber("1");
    expect(getCurrentDisplayedNumber()).toBe("1");
  });

  it("appends a number to the current displayed number", () => {
    appendNumber("1");
    appendNumber("1");
    expect(getCurrentDisplayedNumber()).toBe("11");
  });
});
