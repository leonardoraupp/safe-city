const express = require('express')
const router = express.Router();

module.exports = (cep) => {
    uri = `https://viacep.com.br/ws/${cep}/json/`;

    router.get(uri, (error, response, body) => {
        if (error) console.log(error)
        if (!error && response.statusCode != 200) body = { error: 'CEP não encontrado' }
        if (!error && response.statusCode == 200) body = JSON.parse(body)
        res.send(body)
    })
};






