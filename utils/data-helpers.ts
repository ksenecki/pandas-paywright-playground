import * as crypto from 'crypto';

const validLogin = '';
const validPassword = '';
const wrongLogin = '';
const wrongPassword = '';

module.exports = {
  validLogin,
  validPassword,
  wrongLogin,
  wrongPassword,
};

export async function getRandomNumber() {
  return Math.floor(Math.random() * 1000 + 1);
}

export async function getRandomString() {
  return crypto.randomBytes(5).toString('hex');
}
