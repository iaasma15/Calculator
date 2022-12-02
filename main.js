import "the-new-css-reset/css/reset.css";
import "./styles.css";

const calculatorContainer = document.querySelector(
  "[data-calculator-container]",
);

const buttons = calculatorContainer.querySelectorAll(
  "[data-calculator-button]",
);

for (let button of buttons) {
  button.addEventListener("click", () => {
    console.log(button.dataset.buttonValue);
  });
}

//Try to make event listener for keyboard
//use keydown
