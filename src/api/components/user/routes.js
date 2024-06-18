const express = require("express")
const usersControler = require("./controller")

const router = express.Router(); // creating a router (object).

router.get("/", (req, res) => {
    usersControler.getAllUsers(req, res)
})

router.get("/:id", (req, res) => {
    usersControler.getUserById(req, res)
})

router.post("/", (req, res) => {
    usersControler.registerUser(req, res)

})

router.put("/:id", (req, res) => {
    usersControler.updateUser(req, res)
})

router.delete("/:id", (req, res) => {
    usersControler.deleteUser(req, res)
})

module.exports = router

