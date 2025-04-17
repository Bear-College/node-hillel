const { v4: uuidv4 } = require('uuid');
const connectDB = require('../db');

exports.createUser = async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('users').insertOne({_id: uuidv4(), ...req.body});
  res.status(201).json({ message: 'User created', id: result.insertedId });
};

exports.getUsers = async (req, res) => {
  const db = await connectDB();
  const users = await db.collection('users').find().toArray();
  res.json(users);
};

exports.getStats = async (req, res) => {
  const db = await connectDB();
  const stats = await db.collection('users').aggregate([
    {
      $group: {
        _id: "$city",
        totalUsers: { $sum: 1 },
        avgAge: { $avg: "$age" }
      }
    },
    { $sort: { totalUsers: -1 } }
  ]).toArray();
  res.json(stats);
};
