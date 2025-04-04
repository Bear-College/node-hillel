const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Vlad' },
  { id: 2, name: 'Anna' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res, next) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    return next(err);
  }
  res.json(user);
});

module.exports = router;