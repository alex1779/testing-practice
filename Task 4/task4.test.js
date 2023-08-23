const capitalize = require('./task4');

test('capitalize', () => {
  expect(capitalize('world')).toBe('World');
});