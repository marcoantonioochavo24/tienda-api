// routes/pedidosRoutes.js

const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

// De momento solo el GET general con los productos incluidos
router.get('/', pedidosController.obtenerTodos);

module.exports = router;
