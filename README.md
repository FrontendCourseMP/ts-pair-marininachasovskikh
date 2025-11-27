MarininaChasovskikh \
Участники: \
1. Маринина Анастасия Павловна - Prinkley \
2. Часовских Мария Олеговна - lucarrg \

Критерии оценки библиотек: (Часовских) \
1. Простота использования\
2.Гибкость \
3. Размер и производительность \
4.Документация \

Топ библиотек для валидации форм: (Часовских) \
1. JustValidate (простая интеграция, написано на TS,
хорошая документация, поддерживает асинхронные проверки) \
2. FormValidation (гибкость и кол-во валидаторов, поддерживает
сложные формы и зависимости полей, есть премиум функции) \
3. PristineJs (лёгкая и быстрая, легко подключается, хорошо
справляется с базовой документацией) \
4. Vanilla Validator (использует нативную HTML5 валидацию,
подходит для небольших форм, лёгкая) \
5. validator.js (универсальная библиотека, но слабо ориентирована
на HTML-формы, часто используется для валидации объектов) \

(Маринина)\
Точка входа: import JustValidate from 'just-validate'; или
<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script> \

Основные методы валидации: \
const validator = new JustValidate('#form'); Создание экземпляра валидатора - конструктор\
  Возвращает: экземпляр JustValidate \
validator.addField('#email', [ { rule: 'required' }, { rule: 'email' } ]); Добавление правил валидации для конкретного поля - метод\
  Возвращает: экземпляр JustValidate (chainable)\
validator.addRule(selector, rule, errorMessage) Добавление правила к существующему полю - метод\
  Возвращает: экземпляр JustValidate\
validator.onSuccess((event) => {}); Колбэк успешной валидации - метод\
  Возвращает: экземпляр JustValidate\
validator.onFail((event) => {}); Колбэк ошибок валидации - метод\
  Возвращает: экземпляр JustValidate\
validator.revalidate() Перезапускает валидацию всех полей - метод\
  Возвращает: boolean (результат валидации)\

Вспомогательные методы:\
validator.destroy() Удаляет все обработчики и очищает валидатор - метод\
  Возвращает: void\
validator.setCurrentLocale(locale) Устанавливает язык ошибок - метод\
  Возвращает: экземпляр JustValidate\

Минимальный набор:\
const validator = new JustValidate('#form');\
validator\
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])\
  .addField('#password', [{ rule: 'required' }, { rule: 'minLength', value: 6 }])\
  .onSuccess((event) => {\
    // обработка успешной отправки\
  });\
