import { getQuadraticRoots, squareLinearEquation } from './src/mathLib.js';

console.log("Akar dari x^2 - 3x - 10:");
console.log(getQuadraticRoots([1, -3, -10])); // Output: [5, -2]

console.log("Hasil kuadrat dari 2x - 3:");
console.log(squareLinearEquation([2, -3])); // Output: [4, -12, 9]