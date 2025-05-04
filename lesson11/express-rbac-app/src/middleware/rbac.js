const { db } = require('../db/db');

// Симуляція витягання ролі користувача
async function getUserRole(userId) {
  const [rows] = await db.execute(
    'SELECT r.name FROM users u JOIN roles r ON u.role_id = r.id WHERE u.id = ?',
    [userId]
  );

  if (rows.length > 0) {
    return rows[0].name;
  }
  return null;
}

// Мідлвар для перевірки ролі
function checkRole(allowedRoles) {
  return async (req, res, next) => {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    const role = await getUserRole(userId);

    if (!role) {
      return res.status(403).json({ message: 'Access denied: role not found' });
    }

    if (allowedRoles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied: insufficient role' });
    }
  };
}

module.exports = { checkRole };
