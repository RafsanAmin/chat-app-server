import 'dotenv/config';
export const OwnUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://rafchat-app-server.herokuapp.com/'
    : 'http://localhost/';
export const Origin =
  process.env.NODE_ENV === 'production' ? 'https://rafchat.herokuapp.com' : 'http://127.0.0.1:3000';
export const Domain =
  process.env.NODE_ENV === 'production' ? '.rafchat.herokuapp.com' : '127.0.0.1';
