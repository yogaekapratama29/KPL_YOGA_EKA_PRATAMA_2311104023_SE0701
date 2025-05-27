import { tandaBilangan } from '../src/tandaBilangan.js';

test('Mengembalikan "Negatif" jika input < 0', () => {
  expect(tandaBilangan(-10)).toBe("Negatif");
});

test('Mengembalikan "Positif" jika input > 0', () => {
  expect(tandaBilangan(15)).toBe("Positif");
});

test('Mengembalikan "Nol" jika input = 0', () => {
  expect(tandaBilangan(0)).toBe("Nol");
});

