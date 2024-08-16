const express = require('express');
const addressController = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    addressController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    addressController.getById(req, res)
});

router.post('/', (req, res) => {    
    addressController.registerAddress(req, res)
});

router.put('/:id', (req, res) => {
    addressController.updateAddress(req, res)
});

router.delete('/:id', (req, res) => {
    addressController.deleteAddress(req, res)
});

module.exports = router;