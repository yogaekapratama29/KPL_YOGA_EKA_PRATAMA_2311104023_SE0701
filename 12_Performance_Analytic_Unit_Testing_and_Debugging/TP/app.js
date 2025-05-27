import readline from 'node:readline';
import { tandaBilangan } from './src/tandaBilangan.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan angka: ', (input) => {
  const angka = parseInt(input, 10);
  if (isNaN(angka)) {
    console.log('Input tidak valid');
  } else {
    console.log('Tanda bilangan:', tandaBilangan(angka));
  }
  rl.close();
});
