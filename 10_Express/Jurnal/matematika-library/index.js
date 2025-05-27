// Menghitung FPB
function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

// Menghiung KPK
function KPK(a, b) {
  return Math.abs(a * b) / FPB(a, b);
}

// Fungsi Turunan
function Turunan(coeffs) {
  const hasil = coeffs
    .slice(0, -1)
    .map((c, i) => c * (coeffs.length - i - 1))
    .map((val, idx) => {
      const pangkat = coeffs.length - idx - 2;
      if (val === 0) return null;
      const simbol = val > 0 && idx > 0 ? " + " : val < 0 ? " - " : "";
      const nilai = Math.abs(val);
      return `${simbol}${nilai}${pangkat > 0 ? 'x' + (pangkat > 1 ? pangkat : '') : ''}`;
    })
    .filter(Boolean)
    .join("");
  return hasil;
}

// Fungsi Integral
function Integral(coeffs) {
  const hasil = coeffs
    .map((c, i) => {
      const pangkat = coeffs.length - i;
      if (c === 0) return null;
      const simbol = c > 0 && i > 0 ? " + " : c < 0 ? " - " : "";
      const nilai = Math.abs(c / pangkat);
      return `${simbol}${nilai === 1 ? '' : nilai}${pangkat > 1 ? 'x' + pangkat : 'x'}`;
    })
    .filter(Boolean)
    .join("") + " + C";
  return hasil;
}

module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral,
};