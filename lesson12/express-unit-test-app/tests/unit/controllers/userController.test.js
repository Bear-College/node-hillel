const { getUser } = require('../../../src/controllers/userController');
const userService = require('../../../src/services/userService');

jest.mock('../../../src/services/userService');

describe('UserController', () => {
  const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();
    return res;
  };

  test('should return formatted user if found', async () => {
    userService.getUserById.mockResolvedValue({ id: 1, name: 'Test' });

    const req = { params: { id: 1 } };
    const res = mockRes();

    await getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 'success',
      payload: { id: 1, name: 'Test' },
    });
  });

  test('should return 404 if error is thrown', async () => {
    userService.getUserById.mockRejectedValue(new Error('Not found'));

    const req = { params: { id: 2 } };
    const res = mockRes();

    await getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Not found' });
  });
});
