const config = require('../knexfile').test;
const knex = require('knex')(config);
module.exports = knex;
