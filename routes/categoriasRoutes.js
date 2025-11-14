// routes/categoriasRoutes.js

const express = require('express');
const router = express.Router();

// Importo el controlador de categorías
const categoriasController = require('../controllers/categoriasController');

// Rutas CRUD para categorías
router.get('/', categoriasController.obtenerTodos);
router.get('/:id', categoriasController.obtenerPorId);
router.post('/', categoriasController.crear);
router.put('/:id', categoriasController.actualizar);
router.delete('/:id', categoriasController.eliminar);

// Exporto el router
module.exports = router;
