const express = require('express')
const router = express.Router();
const request = require('request');

const uri = `https://viacep.com.br/ws/${cep}/json/`

request.get(uri, (error, response, body) => {
    if (error) console.log(error)
    console.log(body)
});


