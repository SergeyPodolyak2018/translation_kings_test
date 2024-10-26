const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const PORT = process.env['PORT'];
const BASE_URI = process.env['BASE_URI'] || '';
const DB_PORT = process.env['DB_PORT'];
const DB_USER = process.env['DB_USER'];
const DB_NAME = process.env['DB_NAME'];
const DB_HOST = process.env['DB_HOST'];
const DB_PASSWORD = process.env['DB_PASSWORD'];
const DB_CONNECTION_STRING = process.env['DB_CONNECTION_STRING'];

module.exports = {
  PORT,
  BASE_URI,
  DB_PORT,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_CONNECTION_STRING,
  DB_HOST,
};
