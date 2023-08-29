const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DATA_USER,
  password: process.env.DATA_PASS,
  host: process.env.HOST,
  port: process.env.DATA_PORT,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;