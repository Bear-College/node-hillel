const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/user');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await User.deleteMany();
});

test('creates and retrieves user', async () => {
  const resCreate = await request(app).post('/users').send({ name: 'Vlad', email: 'vlad@test.com' });
  expect(resCreate.statusCode).toBe(201);

  const resGet = await request(app).get(`/users/${resCreate.body._id}`);
  expect(resGet.statusCode).toBe(200);
  expect(resGet.body.email).toBe('vlad@test.com');
});
