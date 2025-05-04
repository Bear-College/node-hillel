var express = require('express');
const { getUsers } = require('../controllers/users.controllers');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;

// m - model
// v - view
// c - controller