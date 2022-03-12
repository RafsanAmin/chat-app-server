import 'dotenv/config';

export const Origin =
  process.env.NODE_ENV === 'production' ? 'https://rafchat.herokuapp.com' : 'http://localhost:3000';
export const Domain =
  process.env.NODE_ENV === 'production' ? '.rafchat.herokuapp.com' : 'localhost';
