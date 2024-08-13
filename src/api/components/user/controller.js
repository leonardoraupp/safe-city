const { query } = require("express")
const { connection } = require("../../../db")

module.exports = {
    registerUser(req, res) {
        const { firstName, lastName, email } = req.body
        const createdAt = new Date()
        const updatedAt = new Date()
        userId = null
        connection.query('INSERT INTO users (firstName, lastName, email, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, email, createdAt, updatedAt], (error, data) => {
            if (error) {
                console.error(error)
                res.status(500).send("Erro ao registrar usuário.")
            } else {
                userId = data.insertId
                res.status(201).send("Usuario registrado com sucesso.")
            }
        })

    },
    getAllUsers(req, res) {
        connection.query('SELECT * FROM users', (error, data) => {
            if (error) {
                console.error(error)
                res.status(500).send("Erro interno no sistema.")
            } else {
                res.send(data)
            }
        })
    },
    getUserById(req, res) {
        const { id } = req.params
        connection.query('SELECT * FROM users WHERE id=?', [id], (error, data) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno no sistema.');
            } else {
                res.send(data);
            }
        })

    },
    updateUser(req, res) {
        const { id } = req.params
        const { firstName, lastName, email } = req.body
        const updatedAt = new Date()
        connection.query('UPDATE users SET firstName=?, lastName=?, email=?, updatedAt=? WHERE id=?', [firstName, lastName, email, updatedAt, id], (error, data) => {
            if (error) {
                console.error(error)
                res.status(500).send("Erro interno no sistema. Não foi possível atualizar o usuário.")
            } else {
                res.send("Usuário atualizado com sucesso.")
            }
        })
    },
    deleteUser(req, res) {
        const { id } = req.params
        connection.query('DELETE FROM users WHERE id=?', [id], (error, data) => {
            if (error) {
                console.error(error)
                res.status(500).send("Erro interno no sistema, não foi possível excluir o usuário.")
            } else {
                res.send("Usuário excluído.")
            }
        })

    }
}