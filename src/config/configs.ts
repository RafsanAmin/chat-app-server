import 'dotenv/config';

export const origin =
  process.env.NODE_ENV === 'production' ? 'https://rafchat.herokuapp.com' : 'http://localhost:3000';
export const domain =
  process.env.NODE_ENV === 'production' ? '.rafchat.herokuapp.com' : 'localhost';
