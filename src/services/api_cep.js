const request = require('request');
const cep = '93212260';
const uri = `https://viacep.com.br/ws/${cep}/json/`;

request.get(uri, (error, response, body) => {
    if (error) console.log(error)
    console.log(body)
});
