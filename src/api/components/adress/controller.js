const { connection } = require("../../../db");

module.exports = {
    getAll(req, res) {
        connection.query(
            'SELECT a.*, aa.score, aa.comment FROM "Addresses" a INNER JOIN "AddressAssessments" aa ON a.id = aa."addressId";',
            (error, data) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error retrieving the Addresses.');
                } else {
                    res.send(data.rows); // Use data.rows to get the actual data
                }
            }
        );
    },

    getById(req, res) {
        const { id } = req.params;
        if (id >= 8) {
            const postalCode = id.toString()
            connection.query(
                'SELECT a.*, aa.score, aa."comment" FROM "Addresses" a INNER JOIN "AddressAssessments" aa ON a.id = aa."addressId" WHERE a."postalCode" = $1;',
                [postalCode],
                (error, data) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Error retrieving the addresses.');
                    } else {
                        res.send(data.rows);
                    }
                }
            );
        } else {
            connection.query(
                'SELECT a.*, aa.score, aa."comment" FROM "Addresses" a INNER JOIN "AddressAssessments" aa ON a.id = aa."addressId" WHERE a.id = $1;',
                [id],
                (error, data) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Error retrieving the address.');
                    } else {
                        res.send(data.rows[0]); // Use data.rows[0] to get the single row
                    }
                }
            );
        }
    },

    registerAddress(req, res) {
        const { postalCode, addressName, city, state, score, comment } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();
        const userId = null;
        const scoreNumber = parseInt(score, 10) || 0

        connection.query(
            `INSERT INTO "Addresses" ("postalCode", "addressName", city, state, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`,
            [postalCode, addressName, city, state, createdAt, updatedAt],
            (error, data) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error registering the address.');
                } else {
                    const addressId = data.rows[0].id; // Use data.rows[0].id to get the inserted ID

                    connection.query(
                        `INSERT INTO "AddressAssessments" ("addressId", "createdAt", score, comment, "userId", "updatedAt")
                         VALUES ($1, $2, $3, $4, $5, $6);`,
                        [addressId, createdAt, scoreNumber, comment, userId, updatedAt],
                        (error) => {
                            if (error) {
                                console.error(error);
                                res.status(500).send('Error evaluating the address.');
                            } else {
                                res.status(201).send('Address evaluated successfully!');
                            }
                        }
                    );
                }
            }
        );
    },

    updateAddress(req, res) {
        const { id } = req.params;
        const { postalCode, addressName, city, state, score, comment } = req.body;
        const updatedAt = new Date();
        const scoreNumber = parseInt(score, 10) || 0

        connection.query(
            `UPDATE "Addresses"
             SET "postalCode" = $1, "addressName" = $2, "city" = $3, "state" = $4, "updatedAt" = $5
             WHERE id = $6;`,
            [postalCode, addressName, city, state, updatedAt, id],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error updating the address.');
                } else {
                    // const addressId = data.rows[0].id;
                    connection.query(
                        `UPDATE "AddressAssessments"
                        SET "addressId" = $1, score = $2, "comment" = $3, "updatedAt" = $4
                        WHERE "addressId" = $5;`,
                        [id, scoreNumber, comment, updatedAt, id],
                        (error) => {
                            if (error) {
                                console.error(error);
                                res.status(500).send('Error evaluating the address.');
                            } else {
                                res.status(200).send('Address updated successfully!');
                            }
                        }
                    );
                }
            }
        );
    },

    deleteAddress(req, res) {
        const { id } = req.params;

        connection.query(
            'DELETE FROM "Addresses" WHERE id = $1;',
            [id],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Error deleting the address.');
                } else {
                    res.send('Address deleted successfully.');
                }
            }
        );
    }
};
