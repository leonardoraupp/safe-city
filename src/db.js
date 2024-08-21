require("dotenv").config();
const { Client } = require('pg');

let connection;

connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

connection.connect((error) => {
  if (error) {
    console.error('PostgreSQL connection error', error.stack);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = { connection };
