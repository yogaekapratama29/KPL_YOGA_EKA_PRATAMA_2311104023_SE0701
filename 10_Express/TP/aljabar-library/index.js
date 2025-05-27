function AkarPersamaanKuadrat([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) return [];
  const sqrtD = Math.sqrt(D);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}

function HasilKuadrat([a, b]) {
  // (ax + b)^2 = a^2 x^2 + 2ab x + b^2
  return [a ** 2, 2 * a * b, b ** 2];
}

module.exports = {
  AkarPersamaanKuadrat,
  HasilKuadrat,
};