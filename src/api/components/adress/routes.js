const express = require('express');
const adressController = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    adressController.getAll(req, res)
}); 

module.exports = router;