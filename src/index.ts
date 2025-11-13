// Задача 1

import { makeSignature } from "./utils.js";

const input = document.querySelector<HTMLInputElement>('#fullname')!;
const form = document.querySelector<HTMLFormElement>('#form')!;
const output = document.querySelector<HTMLOutputElement>('#signature')!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = input.value;
  const result = makeSignature(fullName);
  output.textContent = result;
});

// Задача 2

import { calculate } from "./calculate.js";
import { formatNumber } from "./calculate.js";

const expressionInput = document.querySelector<HTMLInputElement>('#expression-input')!;
const formCalculator = document.querySelector<HTMLFormElement>('#form-calculator')!;
const outputCalculator = document.querySelector<HTMLOutputElement>('#calculator-result')!;

formCalculator.addEventListener("submit", (e) => {
  e.preventDefault();
  const expression = expressionInput.value;
  try {
    const result = calculate(expression);
    outputCalculator.textContent = formatNumber(result)
  } catch (error) {
    outputCalculator.textContent = (error as Error).message;
  }
})