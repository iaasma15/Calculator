let currentDisplayedNumber = "0";

export function resetNumber() {
  currentDisplayedNumber = "0";
}

export function getCurrentDisplayedNumber() {
  return currentDisplayedNumber;
}

export function appendNumber(number) {
  if (currentDisplayedNumber === "0") {
    currentDisplayedNumber = number;
  } else {
    currentDisplayedNumber += number;
  }
}
