const { connection } = require("../../../db")

module.exports = {

    getAll(req, res) {
        connection.query('SELECT a.*, aa.score, aa.comment FROM  Addresses a INNER JOIN AddressAssessments aa ON a.id  = aa.addressId', (error, data, field) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the Addresses.')
            } else {
                res.send(data);
            }
        })
    },
    getById(req, res) {
        const { id } = req.params;
        connection.query('SELECT * FROM Addresses WHERE id = ?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the address.');
            } else {
                res.send(data);
            }
        })
    },
    registerAddress(req, res) {
        const { postalCode, addressName, city, state, score, comment } = req.body
        const createdAt = new Date()
        const updatedAt = new Date()
        const userId = null
        connection.query('INSERT INTO Addresses (postalcode, addressName, city, state, createdAt, updatedAt) VALUES(?, ?, ?, ?, ?, ?)',
            [postalCode, addressName, city, state, createdAt, updatedAt],
            (error, data) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Erro ao registrar o endereço.');
                }
                const addressId = data.insertId

                connection.query('INSERT INTO AddressAssessments(addressId, createdAt, score, comment, userId, updatedAt) VALUES(?, ?, ?, ?, ?, ?)',
                    [addressId, createdAt, score, comment, userId, updatedAt],
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
    updateAddress(req, res) {
        const { id } = req.params;
        const { postalCode, addressName, city, state } = req.body;
        const updatedAt = new Date();
        connection.query('UPDATE Addresses SET postalcode =?, addressName =?,  city =?, state =?, updatedAt =? WHERE id =?', [postalCode, addressName, city, state, updatedAt, id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating the address.');
            } else {
                res.send('address updated successfully');
            }
        })
    },
    deleteAddress(req, res) {
        const { id } = req.params;
        connection.query('DELETE FROM Addresses WHERE id =?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error deleting the local');
            } else {
                res.send('Local deleted successfully');
            }
        })
    }
}