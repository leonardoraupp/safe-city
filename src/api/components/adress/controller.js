const { connection } = require("../../db")

module.exports = {

    getAll(req, res) {
        connection.query('SELECT * FROM adresses', (error, data, field) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the adresses.')
            } else {
                res.send(data);
                console.log(data[0]);
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
        const { postalCode, adressName, city, state } = req.body;

        connection.query('INSERT INTO adresses (postalcode,  adressName,  city, state) VALUES (?, ?, ?, ?)', [postalCode, adressName, city, state], (error, data) => {
            idAdress = data.insertId;
            if (error) {
                console.error(error);
                res.status(500).send('Error registering the adress.');
            } else {
                res.status(201).send('Adress registered successfully');            }
        });
    },
    updateAdress(req, res) {
        const { id } = req.params;
        const { postalCode, adressName, city, state  } = req.body;
        connection.query('UPDATE adresses SET postalcode =?, adressName =?,  city =?, state =? WHERE id =?', [postalCode, adressName, city, state, id], (error, data) => {
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