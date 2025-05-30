export function isUsernameValid(username) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(username) && username.length >= 3 && username.length <= 20;
}

export function isPasswordValid(password, username) {
  const hasUniqueChar = /[!@#$%^&*]/.test(password);
  const notContainUsername = !password.includes(username);
  const lengthValid = password.length >= 8 && password.length <= 20;
  return hasUniqueChar && notContainUsername && lengthValid;
}
