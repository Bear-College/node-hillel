const request = require('supertest');
const db = require('../../src/db');
const app = require('../../src/app');

beforeAll(async () => {
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

beforeEach(async () => {
  await db('users').truncate();
});

test('creates and retrieves user', async () => {
  const resCreate = await request(app).post('/users').send({ name: 'Oleh', email: 'oleh@test.com' });
  expect(resCreate.statusCode).toBe(201);

  const resGet = await request(app).get(`/users/${resCreate.body.id}`);
  expect(resGet.statusCode).toBe(200);
  expect(resGet.body.email).toBe('oleh@test.com');
});
