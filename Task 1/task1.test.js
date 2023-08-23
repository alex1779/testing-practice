const stringLength = require('./task1');

test('characters count', () => {
  expect(stringLength('world')).toBe(5);
});

test('characters count only one', () => {
  expect(stringLength('w')).toBe(1);
});

test('characters count empty string', () => {
  expect(stringLength('')).toBe('error');
});

test('characters count more than 10', () => {
  expect(stringLength('kaleidoscope')).toBe('error');
});