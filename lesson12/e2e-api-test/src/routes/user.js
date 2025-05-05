const express = require('express');
const db = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
  const [id] = await db('users').insert(req.body);
  const user = await db('users').where({ id }).first();
  res.status(201).json(user);
});

router.get('/:id', async (req, res) => {
  const user = await db('users').where({ id: req.params.id }).first();
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

module.exports = router;
