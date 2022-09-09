export function add(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new Error("should pass a number");
  }

  const result = firstNumber + secondNumber;
  const roundedResult = Math.round(result * 1000) / 1000;

  return roundedResult;
}
