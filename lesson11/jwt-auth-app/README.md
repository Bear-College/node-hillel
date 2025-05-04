# JWT Authentication App

Базова реалізація аутентифікації через JWT без блекліста і Redis.

## Роути:
- POST /register — реєстрація користувача
- POST /login — логін користувача, повертає JWT токен
- GET /profile — захищений маршрут, доступний тільки з валідним токеном

## Запуск:
```
npm install
node src/server.js
```
