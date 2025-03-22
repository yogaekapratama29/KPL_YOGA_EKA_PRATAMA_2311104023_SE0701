 import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Bagian A
rl.question("Masukkan nama Anda: ", (nama) => {
  console.log(`Selamat datang, ${nama}!`);

  // Bagian B
  let arr = Array.from({ length: 50 }, (_, i) => i);

  arr.forEach((num) => {
    let output = `${num}`;
    if (num % 2 === 0 && num % 3 === 0) {
      output += " #$#$";
    } else if (num % 2 === 0) {
      output += " ##";
    } else if (num % 3 === 0) {
      output += " $$";
    }
    console.log(output);
  });

  // Bagian C
  rl.question("Masukkan angka (1-10000): ", (inputAngka) => {
    let nilaiInt = parseInt(inputAngka);
    if (!isNaN(nilaiInt) && nilaiInt >= 1 && nilaiInt <= 10000) {
      if (isPrime(nilaiInt)) {
        console.log(`${nilaiInt} adalah bilangan prima.`);
      } else {
        console.log(`${nilaiInt} adalah bilangan bukan prima.`);
      }
    } else {
      console.log("Input tidak valid. Harap masukkan angka antara 1 - 10000.");
    }
    rl.close();
  });
});
