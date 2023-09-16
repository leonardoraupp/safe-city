const { connection } = require("../../db")

module.exports = {

    getAll(req, res) {
        connection.query('SELECT * FROM ADRESS', (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the adresses.')
            } else {
                res.send(data);
            }
        })
    },
    get(req, res) {
        const { id } = req.params;
        connection.query('SELECT * FROM locals WHERE localID = ?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error retrieving the adress.');
            } else {
                res.send(data);
            }
        })
    },
    post(req, res) {
        const { incidentType, feedback } = req.body;
        
        connection.query('INSERT INTO adress (incidentType, feedback) VALUES (?, ?)', [incidentType, feedback], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error inserting the adress.');
            } else {
                res.send('Local avalied successfully');
            }
        })
        res.status(201).send('Local avalied');
    },
    put(req, res) {
        const { id } = req.params;
        const { incidentType, feedback } = req.body;
        connection.query('UPDATE locals SET incidentType =?, feedback =? WHERE localID =?', [incidentType, feedback, id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating the adress.');
            } else {
                res.send('Adress updated successfully');
            }
        })
    },
    delete(req, res) {
        const { id } = req.params;
        connection.query('DELETE FROM locals WHERE localID =?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error deleting the local');
            } else {
                res.send('Local deleted successfully');
            }
        })
    }
}