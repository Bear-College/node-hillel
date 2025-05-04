# Express ABAC Project

Цей проект демонструє базову реалізацію Attribute-Based Access Control (ABAC) на базі Express.js і MySQL.

## Структура
- `src/server.js` — точка входу
- `src/middleware/abac.js` — мідлвар для перевірки атрибутів
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
