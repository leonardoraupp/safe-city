const express = require('express');
const adressController = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    adressController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    adressController.getById(req, res)
});

router.post('/', (req, res) => {    
    adressController.registerAdress(req, res)
});

router.put('/:id', (req, res) => {
    adressController.updateAdress(req, res)
});

router.delete('/:id', (req, res) => {
    adressController.deleteAdress(req, res)
});

module.exports = router;