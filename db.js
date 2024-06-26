const { Client } = require('pg');

const pool = new Client({
  user: process.env.DATA_USER,
  host: process.env.HOST,
  port: process.env.DATA_PORT,
  password: process.env.DATA_PASS,
  database: process.env.DATABASE_NAME
});

module.exports = pool;