import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcrypt';
import { isUsernameValid, isPasswordValid } from './validators.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const usersFile = path.join(__dirname, 'users.json');

function loadUsers() {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

export function register(username, password) {
  const users = loadUsers();

  if (!isUsernameValid(username)) {
    return { success: false, message: 'Username tidak valid (hanya huruf, 3–20 karakter).' };
  }

  if (!isPasswordValid(password, username)) {
    return { success: false, message: 'Password tidak valid (min 8 karakter, 1 simbol unik, tidak mengandung username).' };
  }

  const existing = users.find(u => u.username === username);
  if (existing) {
    return { success: false, message: 'Username sudah digunakan.' };
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });
  saveUsers(users);

  return { success: true, message: 'Registrasi berhasil!' };
}

export function login(username, password) {
  const users = loadUsers();
  const user = users.find(u => u.username === username);
  if (!user) return { success: false, message: 'Username tidak ditemukan.' };

  const match = bcrypt.compareSync(password, user.password);
  return match
    ? { success: true, message: 'Login berhasil!' }
    : { success: false, message: 'Password salah.' };
}
