const { findById } = require('../repositories/userRepository');

async function getUserById(id) {
  if (!id) throw new Error('ID is required');
  const user = await findById(id);
  if (!user) throw new Error('User not found');
  return user;
}
module.exports = { getUserById };
