// Задача 2

export function validateExpression(expression: string): void{
    const cleanExp = expression.trim().replace(/\s+/g,'')

    if (!cleanExp){
        throw new Error('Выражение не может быть пустым');
    }


    const validChars = /^[0-9+\.]+$/;
    if (!validChars.test(cleanExp)){
        throw new Error('Выражение содержит недопустимые символы')
    }
}


// Функция для вычисления выражения

export function calculateExpression(expression: string): string {
    
}