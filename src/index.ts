const input = document.querySelector<HTMLInputElement>('#fullname')!;
const form = document.querySelector<HTMLFormElement>('#form')!;
const output = document.querySelector<HTMLOutputElement>('#signature')!;


function makeSignature(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length < 2) {
    return "Ошибка! Необходимо вввести хотя бы фамилию и имя.";
  }
  const [lastName, firstName, patronymic] = parts;
  for (const part of parts) {
    if (!/^[А-ЯЁа-яёA-Za-z]+$/.test(part)) {
      return "Ошибка! ФИО должно содержать только буквы.";
    }
  }
  const initials = 
    firstName ? firstName[0].toUpperCase() + "." : "";
  const patronymicInitial = 
    patronymic ? patronymic[0].toUpperCase() + "." : "";
  return `${capitalize(lastName)} ${initials}${patronymicInitial}`
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = input.value;
  const result = makeSignature(fullName)

  output.textContent = result;
});
