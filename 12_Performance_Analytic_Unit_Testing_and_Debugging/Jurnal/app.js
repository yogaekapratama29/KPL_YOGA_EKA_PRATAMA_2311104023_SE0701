import readline from 'node:readline';
import { pangkat } from './src/pangkat.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan a: ', (a) => {
  rl.question('Masukkan b: ', (b) => {
    const hasil = pangkat(parseInt(a), parseInt(b));
    console.log(`Hasil pangkat: ${hasil}`);
    rl.close();
  });
});
