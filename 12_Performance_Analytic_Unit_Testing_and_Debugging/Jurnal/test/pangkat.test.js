import { pangkat } from '../src/pangkat.js';

test('b = 0 → return 1', () => {
  expect(pangkat(100, 0)).toBe(1);
});

test('b < 0 → return -1', () => {
  expect(pangkat(5, -2)).toBe(-1);
});

test('a > 100 → return -2', () => {
  expect(pangkat(101, 2)).toBe(-2);
});

test('b > 10 → return -2', () => {
  expect(pangkat(2, 11)).toBe(-2);
});

test('hasil > MAX_SAFE_INTEGER → return -3', () => {
  expect(pangkat(9, 30)).toBe(-3);
});

test('valid pangkat → return hasil', () => {
  expect(pangkat(2, 5)).toBe(32);
});
