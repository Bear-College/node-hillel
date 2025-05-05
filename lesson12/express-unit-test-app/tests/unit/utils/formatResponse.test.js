const { formatResponse } = require('../../../src/utils/formatResponse');

test('should wrap payload correctly', () => {
  const res = formatResponse({ name: 'Test' });
  expect(res).toEqual({ status: 'success', payload: { name: 'Test' } });
});
