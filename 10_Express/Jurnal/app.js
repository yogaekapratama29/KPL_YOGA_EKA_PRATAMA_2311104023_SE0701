const { FPB, KPK, Turunan, Integral } = require('./matematika-library');

console.log("FPB(60, 45):", FPB(60, 45));
console.log("KPK(12, 8):", KPK(12, 8));

console.log('Turunan dari x^3 + 4x^2 - 12x + 9:');
console.log(Turunan([1, 4, -12, 9]));

console.log('Integral dari 4x^3 + 6x^2 - 12x + 9:');
console.log(Integral([4, 6, -12, 9]));