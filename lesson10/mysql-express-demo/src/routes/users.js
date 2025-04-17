const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getStats
} = require('../controllers/usersController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/stats', getStats);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
