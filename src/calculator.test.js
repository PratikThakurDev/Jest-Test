import { calculator } from './calculator';

const calc = calculator();

test('addition', () => {
  expect(calc.add(3, 4)).toBe(7);
});

test('addition', () => {
  expect(calc.add('45gg', 4)).toBe('please enter a number');
});

test('SUBTRACTION', () => {
  expect(calc.subtract(3, 4)).toBe(-1);
});

test('SUBTRACTION', () => {
  expect(calc.subtract('45gg', 4)).toBe('please enter a number');
});

test('multiplication', () => {
  expect(calc.multiply(4, 5)).toBe(20);
});

test('multiplication', () => {
  expect(calc.multiply('a', 5)).toBe('please enter a number');
});

test('division', () => {
  expect(calc.divide(125, 5)).toBe(25);
});

test('division', () => {
  expect(calc.divide(125, 0)).toBe('Cannot divide by zero');
});

test('division', () => {
  expect(calc.divide(125, 'c')).toBe('please enter a number');
});
