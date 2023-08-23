const calculator = require('./task3');



describe('calculator', () => {

  const obj = new calculator();

  test('add', () => {
    expect(obj.add(3,2)).toBe(5);
  });

  test('subtract', () => {
    expect(obj.subtract(3,2)).toBe(1);
  });

  test('divide', () => {
    expect(obj.divide(3,2)).toBe(1.5);
  });

  test('multiply', () => {
    expect(obj.multiply(3,2)).toBe(6);
  });

});