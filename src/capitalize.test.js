import { capitalize } from './capitalize.js';

test('hello => Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Hello => Hello', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('hello world => Hello world', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test(' hello => Hello if it starts with space', () => {
  expect(capitalize(' hello')).toBe('Hello');
});
