const { getUserById } = require('../services/userService');
const { formatResponse } = require('../utils/formatResponse');

async function getUser(req, res) {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(formatResponse(user));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}
module.exports = { getUser };
