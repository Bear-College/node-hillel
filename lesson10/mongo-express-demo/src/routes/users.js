const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getStats
} = require('../controllers/usersController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/stats', getStats);

module.exports = router;
