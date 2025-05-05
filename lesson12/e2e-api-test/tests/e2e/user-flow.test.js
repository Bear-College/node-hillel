const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/db');

beforeAll(async () => {
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

beforeEach(async () => {
  await db('users').truncate();
});

describe('E2E: User API flow', () => {
  test('User registration and retrieval', async () => {
    const resCreate = await request(app)
      .post('/users')
      .send({ name: 'Vlad', email: 'vlad@example.com' });

    expect(resCreate.statusCode).toBe(201);
    expect(resCreate.body.name).toBe('Vlad');

    const resGet = await request(app).get(`/users/${resCreate.body.id}`);
    expect(resGet.statusCode).toBe(200);
    expect(resGet.body.email).toBe('vlad@example.com');
  });

  test('User not found returns 404', async () => {
    const res = await request(app).get('/users/999');
    expect(res.statusCode).toBe(404);
  });
});
