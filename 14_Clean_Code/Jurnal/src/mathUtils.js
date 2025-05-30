/**
 * Menghitung Faktor Persekutuan Terbesar (GCD)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function getGCD(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

/**
 * Menghitung Kelipatan Persekutuan Terkecil (LCM)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function getLCM(a, b) {
  return Math.abs(a * b) / getGCD(a, b);
}

/**
 * Menghitung turunan dari persamaan polinomial
 * @param {number[]} coefficients - Array koefisien [a, b, c, ...]
 * @returns {string} Bentuk string hasil turunan
 */
export function getDerivative(coefficients) {
  const n = coefficients.length;

  const terms = coefficients
    .slice(0, -1)
    .map((coefficient, index) => {
      const exponent = n - index - 1;
      const derivedCoefficient = coefficient * exponent;
      if (derivedCoefficient === 0) return null;

      const sign = derivedCoefficient > 0 && index > 0 ? ' + ' : derivedCoefficient < 0 ? ' - ' : '';
      const value = Math.abs(derivedCoefficient);
      const variable = exponent - 1 > 1 ? `x${exponent - 1}` : exponent - 1 === 1 ? 'x' : '';
      return `${sign}${value}${variable}`;
    })
    .filter(Boolean)
    .join('');

  return terms || '0';
}

/**
 * Menghitung integral dari persamaan polinomial
 * @param {number[]} coefficients - Array koefisien [a, b, c, ...]
 * @returns {string} Bentuk string hasil integral + C
 */
export function getIntegral(coefficients) {
  const n = coefficients.length;

  const terms = coefficients
    .map((coefficient, index) => {
      const exponent = n - index;
      if (coefficient === 0) return null;

      const sign = coefficient > 0 && index > 0 ? ' + ' : coefficient < 0 ? ' - ' : '';
      const value = Math.abs(coefficient / exponent);
      const variable = exponent > 1 ? `x${exponent}` : 'x';
      return `${sign}${value === 1 ? '' : value}${variable}`;
    })
    .filter(Boolean)
    .join('');

  return terms + ' + C';
}
