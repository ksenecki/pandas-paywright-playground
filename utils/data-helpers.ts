import * as crypto from 'crypto';

export const validLogin = '';
export const validPassword = '';
export const wrongLogin = '';
export const wrongPassword = '';

export async function getRandomNumber() {
  return Math.floor(Math.random() * 1000 + 1);
}

export async function getRandomString() {
  return crypto.randomBytes(5).toString('hex');
}
