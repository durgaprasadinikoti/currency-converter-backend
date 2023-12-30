const express = require('express');
const router = express.Router();
const currencyConverterController = require('../controllers/currencyConverterController');

router.get('/getCryptoCurrencies', currencyConverterController.getCryptoCurrencies);
router.get('/getCryptoConverterAmount', currencyConverterController.getCryptoConverterAmount);

module.exports = router;
