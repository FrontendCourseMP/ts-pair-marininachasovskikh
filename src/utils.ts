export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Функция, которая создаёт подпись
export function makeSignature(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length < 2) {
    return "Ошибка! Необходимо ввести хотя бы фамилию и имя.";
  }

  const allValid = parts.every(part => /^[А-ЯЁа-яёA-Za-z]+$/.test(part));
  if (!allValid) {
    return "Ошибка! ФИО должно содержать только буквы.";
  }

  const [lastName, firstName, patronymic] = parts;
  const initials = firstName ? firstName[0].toUpperCase() + "." : "";
  const patronymicInitial = patronymic ? patronymic[0].toUpperCase() + "." : "";

  return `${capitalize(lastName)} ${initials}${patronymicInitial}`;
}