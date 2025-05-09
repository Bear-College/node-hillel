const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;
