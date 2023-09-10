// This code creates an ExpressJS server and sets it to listen on port 3000. 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

app.use(bodyParser.json())



// This code makes the database setuppags10110
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'safe_city'
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});

// Creating routes for HTTP methods
app.get('/', (request, response) => {
  connection.query('SELECT * FROM users', (error, data) => {
    if (error) {
      console.error(error)
      response.status(500).send('Error retriving users');
    } else {
      response.send(data)
    }
  })
})

app.post('/users', (request, response) => {
  const { name, email } = request.body
  connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error) => {
    if (error) {
      console.error(error)
      response.status(500).send('Error creating user')
    } else {
      response.send('User created successfully')
    }
  })
})
 
