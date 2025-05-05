jest.mock('../../../src/repositories/userRepository');
const repo = require('../../../src/repositories/userRepository');
const { getUserById } = require('../../../src/services/userService');

describe('UserService', () => {
  test('should return user when found', async () => {
    repo.findById.mockResolvedValue({ id: 1, name: 'Mocked' });
    const result = await getUserById(1);
    expect(result.name).toBe('Mocked');
  });

  test('should throw if ID is missing', async () => {
    await expect(getUserById()).rejects.toThrow('ID is required');
  });

  test('should throw if user not found', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(getUserById(999)).rejects.toThrow('User not found');
  });
});
