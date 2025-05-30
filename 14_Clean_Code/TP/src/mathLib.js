/**
 * Menghitung akar-akar dari persamaan kuadrat ax^2 + bx + c = 0
 * @param {number[]} coefficients - Array [a, b, c]
 * @returns {number[]} Akar-akar real dari persamaan (jika ada)
 */
export function getQuadraticRoots([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) return [];
  const sqrtD = Math.sqrt(D);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}

/**
 * Mengkuadratkan persamaan linear ax + b menjadi ax² + bx + c
 * @param {number[]} coefficients - Array [a, b]
 * @returns {number[]} Koefisien hasil kuadrat: [a², 2ab, b²]
 */
export function squareLinearEquation([a, b]) {
  const aSquared = a ** 2;
  const middleTerm = 2 * a * b;
  const bSquared = b ** 2;
  return [aSquared, middleTerm, bSquared];
}
