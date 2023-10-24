const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'safe_city'
})

connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to the database');
      
    }
  });

  module.exports = { connection }