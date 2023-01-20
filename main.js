import "the-new-css-reset/css/reset.css";
import { appendNumber, getCurrentDisplayedNumber } from "./calculator";
import "./styles.css";

const calculatorContainer = document.querySelector(
  "[data-calculator-container]",
);
const buttons = calculatorContainer.querySelectorAll(
  "[data-calculator-button]",
);
const display = calculatorContainer.querySelector("[data-calculator-display]");

updateDisplay(getCurrentDisplayedNumber());

function handleButtonClick(button) {
  const number = button.dataset.buttonValue;
  appendNumber(number);

  updateDisplay(getCurrentDisplayedNumber());
}

function updateDisplay(number) {
  display.textContent = number;
}

for (let button of buttons) {
  button.addEventListener("click", () => {
    handleButtonClick(button);
  });
}
