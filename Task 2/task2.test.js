const reverseString = require('./task2');

test('reverse string test', () => {
  expect(reverseString('world')).toBe('dlrow');
});