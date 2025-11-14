// routes/categoriasRoutes.js
const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

// GET /api/categorias (todas)
router.get('/', categoriasController.obtenerTodas);

// GET /api/categorias/:id
router.get('/:id', categoriasController.obtenerPorId);

// POST /api/categorias
router.post('/', categoriasController.crear);

// PUT /api/categorias/:id
router.put('/:id', categoriasController.actualizar);

// DELETE /api/categorias/:id
router.delete('/:id', categoriasController.eliminar);

module.exports = router;
