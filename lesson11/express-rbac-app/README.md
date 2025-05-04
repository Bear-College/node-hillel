# Express RBAC Project

Цей проект демонструє базову реалізацію Role-Based Access Control (RBAC) на базі Express.js і MySQL.

## Структура
- `src/server.js` — точка входу
- `src/middleware/rbac.js` — мідлвар для перевірки ролей
- `src/db/db.js` — підключення до бази даних

## Запуск
1. Встанови залежності:
```
npm install
```
2. Запусти сервер:
```
node src/server.js
```
