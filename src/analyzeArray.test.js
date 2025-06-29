import { analyzeArray } from './analyzeArray';

const arr = analyzeArray();

test('max', () => {
  expect(arr.maxElement([3, 5, 1, 9, 45])).toBe(45);
});

test('min', () => {
  expect(arr.minElement([3, 5, 1, 9, 45])).toBe(1);
});

test('average', () => {
  expect(arr.average([3, 7, 1, 9, 45])).toBe(13);
});

test('length', () => {
  expect(arr.length([3, 7, 1, 9, 45])).toBe(5);
});
