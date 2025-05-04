# Passport + JWT Authentication App

Базова реалізація аутентифікації через Passport.js та JWT без сесій.

## Роути:
- POST /register — реєстрація користувача
- POST /login — логін користувача (отримуємо токен)
- GET /profile — захищений маршрут (доступ тільки через токен)

## Запуск:
```
npm install
node src/server.js
```

## Нотатки:
- Використовується Bearer Token в заголовках.
- Паролі захешовані через bcryptjs.
- Без Redis і без сесій.
