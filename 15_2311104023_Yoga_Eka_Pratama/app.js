import readline from 'readline';
import { register, login } from './userService.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('=== Aplikasi Login/Registrasi ===');
  const choice = await prompt('Pilih menu (1 = Register, 2 = Login): ');

  const username = await prompt('Username: ');
  const password = await prompt('Password: ');

  let result;
  if (choice === '1') {
    result = register(username, password);
  } else if (choice === '2') {
    result = login(username, password);
  } else {
    result = { message: 'Pilihan tidak valid.', success: false };
  }

  console.log(result.message);
  rl.close();
}

main();
