const { connection } = require("../../../db")

module.exports = {

    getAll(req, res) {
        connection.query('SELECT a.*, aa.score, aa.comment FROM  adress a INNER JOIN adressassessment aa ON a.id  = aa.adressId', (error, data, field) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the adresses.')
            } else {
                res.send(data);
            }
        })
    },
    getById(req, res) {
        const { id } = req.params;
        connection.query('SELECT * FROM adresses WHERE id = ?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the adress.');
            } else {
                res.send(data);
            }
        })
    },
    registerAdress(req, res) {
        const { postalCode, addressName, city, state, score, comment } = req.body
        const createdAt = new Date()
        const updatedAt = new Date()
        const userId = null
        connection.query('INSERT INTO adresses (postalcode, adressName, city, state, createdAt, updatedAt) VALUES(?, ?, ?, ?, ?, ?)',
            [postalCode, addressName, city, state, createdAt, updatedAt],
            (error, data) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Erro ao registrar o endereço.');
                }
                const adressId = data.insertId

                connection.query('INSERT INTO assessmentaddress(adressId, createdAt, score, comment, userId, updatedAt) VALUES(?, ?, ?, ?, ?, ?)',
                    [adressId, createdAt, score, comment, userId, updatedAt],
                    (error, data) => {
                        if (error) {
                            console.error(error);
                            res.status(500).send('Error ao avaliar o endereço.');
                        } else {
                            res.status(201).send('Endereço avaliado com sucesso!');
                        }
                    })
            });
    },
    updateAdress(req, res) {
        const { id } = req.params;
        const { postalCode, addressName, city, state } = req.body;
        const updatedAt = new Date();
        connection.query('UPDATE adresses SET postalcode =?, adressName =?,  city =?, state =?, updatedAt =? WHERE id =?', [postalCode, addressName, city, state, updatedAt, id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating the adress.');
            } else {
                res.send('Adress updated successfully');
            }
        })
    },
    deleteAdress(req, res) {
        const { id } = req.params;
        connection.query('DELETE FROM adresses WHERE id =?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error deleting the local');
            } else {
                res.send('Local deleted successfully');
            }
        })
    }
}