// This code creates an ExpressJS server and sets it to listen on port 3000. 
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

app.get(console.log('Hello, word!'))