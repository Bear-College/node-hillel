const { db } = require('../db/db');

// Отримання атрибутів користувача
async function getUserAttributes(userId) {
  const [rows] = await db.execute(
    'SELECT department, country FROM users WHERE id = ?',
    [userId]
  );
  if (rows.length > 0) {
    return rows[0];
  }
  return null;
}

// Отримання атрибутів документа
async function getResourceAttributes(resourceId) {
  const [rows] = await db.execute(
    'SELECT owner_department, classification FROM documents WHERE id = ?',
    [resourceId]
  );
  if (rows.length > 0) {
    return rows[0];
  }
  return null;
}

// Мідлвар для перевірки атрибутів
async function checkAccess(req, res, next) {
  const { userId, resourceId } = req.body;

  if (!userId || !resourceId) {
    return res.status(400).json({ message: 'userId and resourceId are required' });
  }

  const user = await getUserAttributes(userId);
  const resource = await getResourceAttributes(resourceId);

  if (!user || !resource) {
    return res.status(404).json({ message: 'User or Resource not found' });
  }

  // Політика: користувач може отримати доступ, якщо працює в тому самому департаменті і документ не secret
  if (
    user.department === resource.owner_department &&
    resource.classification !== 'secret'
  ) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied by ABAC policy' });
  }
}

module.exports = { checkAccess };
