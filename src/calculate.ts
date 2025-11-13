// Задача 2

// Определяет корректность выражения
export function validateExpression(expression: string): void {
    // Очищаем выражние от лишних пробелов
    const cleanExpression = expression.trim().replace(/\s+/g, '');
    
    if (!cleanExpression) {
        throw new Error("Выражение не может быть пустым");
    }

    // Проверка на допустимые символы
    const validChars = /^[0-9+*\.]+$/;
    if (!validChars.test(cleanExpression)) {
        throw new Error("Выражение содержит недопустимые символы. Разрешены только цифры, точка, + и *");
    }

    // Проверка расположения операторов
    // Если операторы идут подряд, или они стоят в начале, или в конце выражение - ошибка
    const operatorErrors = /[\+\*]{2,}|^[\+\*]|[\+\*]$/;
    if (operatorErrors.test(cleanExpression)) {
        throw new Error("Некорректное расположение операторов");
    }

    // Проверка на корректность дробных чисел
    // Две точки подряд, или "." цифры ".", или точка начало/конец выражения - ошибка
    const decimalErrors = /\.\.|\.\d*\.|\d+\.$|^\./;
    if (decimalErrors.test(cleanExpression)) {
        throw new Error("Некорректное использование точки в числах");
    }
}

// Парсинг числа (целого или дробного)
export function parseNumber(str: string): number {
    const num = parseFloat(str);
    // Если получилось не число
    if (isNaN(num)) {
        throw new Error(`Некорректное число: ${str}`);
    }
    return num;
}

// Проверка, является ли строка числом (целым или дробным)
export function isNumeric(str: string): boolean {
    return /^-?\d*\.?\d+$/.test(str);
}

// Вычисление выражения
export function calculate(expression: string): number {
    validateExpression(expression);
    
    // Удаляем все пробелы, табы, переводы строк
    const cleanExpression = expression.replace(/\s+/g, '');
    
    // Разбиваем на части по сложению
    const additionParts = cleanExpression.split('+');
    
    // Для каждой части выполняем умножение
    const multiplicationResults = additionParts.map(part => {
        if (part.includes('*')) {
            // Преобразуем множители в числа
            const factors = part.split('*').map(factor => {
                return parseNumber(factor);
            });
            // Умножаем все числа в части
            return factors.reduce((acc, val) => acc * val, 1);
        } else {
            return parseNumber(part);
        }
    });

    // Суммируем результаты всех частей
    return multiplicationResults.reduce((acc, val) => acc + val, 0);
}

// Форматирование числа (убираем лишние нули у дробной части)
export function formatNumber(num: number): string {
    if (Number.isInteger(num)) {
        return num.toString();
    }
    // Убираем лишние нули в конце дробной части
    return num.toString().replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1');
}