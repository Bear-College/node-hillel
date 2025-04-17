const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('demoDB');
    console.log('✅ Connected to MongoDB');
  }
  return db;
}

module.exports = connectDB;
