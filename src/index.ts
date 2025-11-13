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