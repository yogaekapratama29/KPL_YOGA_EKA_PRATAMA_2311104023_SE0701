import { getGCD, getLCM, getDerivative, getIntegral } from './src/mathUtils.js';

console.log("getGCD(60, 45):", getGCD(60, 45));
console.log("getLCM(12, 8):", getLCM(12, 8));

console.log('getDerivative dari x^3 + 4x^2 - 12x + 9:');
console.log(getDerivative([1, 4, -12, 9]));

console.log('getIntegral dari 4x^3 + 6x^2 - 12x + 9:');
console.log(getIntegral([4, 6, -12, 9]));