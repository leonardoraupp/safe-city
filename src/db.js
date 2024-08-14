require("dotenv").config();
const mysql = require('mysql2');
const { Client } = require('pg');

let connection;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  connection = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false
    }
  });

  connection.connect((error) => {
    if (error) {
      console.error('PostgreSQL connection error', error.stack);
    } else {
      console.log('Connected to the PostgreSQL database');
    }
  });
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
  });

  connection.connect((error) => {
    if (error) {
      console.error('MySQL connection error', error);
    } else {
      console.log('Connected to the MySQL database');
    }
  });
}

module.exports = { connection };
