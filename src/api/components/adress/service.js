const request = require('request');

module.exports = (req, res) => {
    const { cep } = req.params;
    uri = `https://viacep.com.br/ws/${cep}/json/`;
    request(uri, (error, response, body) => {
        if (error) console.log(error);
        if (!error && response.statusCode != 200) body = { error: 'CEP não encontrado' }
        if (!error && response.statusCode == 200) body = JSON.parse(body)
        res.send(body)
    })
};





