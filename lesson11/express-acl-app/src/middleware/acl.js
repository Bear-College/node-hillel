const { db } = require('../db/db');

async function checkPermission(req, res, next) {
  const { userId, resourceId, action } = req.body;

  try {
    const [rows] = await db.execute(
      `
      SELECT acl.id
      FROM access_control_list acl
      JOIN permissions p ON acl.permission_id = p.id
      WHERE acl.user_id = ? AND acl.resource_id = ? AND p.action = ?
      `,
      [userId, resourceId, action]
    );

    if (rows.length > 0) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { checkPermission };
