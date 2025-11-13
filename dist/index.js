// Задача 1
import { makeSignature } from "./utils.js";
const input = document.querySelector('#fullname');
const form = document.querySelector('#form');
const output = document.querySelector('#signature');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = input.value;
    const result = makeSignature(fullName);
    output.textContent = result;
});
// Задача 2
import { calculate } from "./calculate.js";
import { formatNumber } from "./calculate.js";
const expressionInput = document.querySelector('#expression-input');
const formCalculator = document.querySelector('#form-calculator');
const outputCalculator = document.querySelector('#calculator-result');
formCalculator.addEventListener("submit", (e) => {
    e.preventDefault();
    const expression = expressionInput.value;
    try {
        const result = calculate(expression);
        outputCalculator.textContent = formatNumber(result);
    }
    catch (error) {
        outputCalculator.textContent = error.message;
    }
});
//# sourceMappingURL=index.js.map