import 'dotenv/config';
export const OwnUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://rafchat-app-server.herokuapp.com/'
    : 'http://localhost/';
export const Origin =
  process.env.NODE_ENV === 'production' ? 'https://rafchat.herokuapp.com' : 'http://localhost:5000';
export const Domain =
  process.env.NODE_ENV === 'production' ? '.rafchat.herokuapp.com' : 'localhost';
