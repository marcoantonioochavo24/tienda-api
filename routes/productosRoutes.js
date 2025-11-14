// routes/productosRoutes.js
// Archivo de rutas de productos. Aquí solo defino las rutas y
// apunto a las funciones del controlador.

const express = require('express');
const router = express.Router(); // Uso el Router de express, no de ningún paquete raro

const productosController = require('../controllers/productosController');

// GET /api/productos  -> listar todos
router.get('/', productosController.obtenerTodos);

// GET /api/productos/1  -> obtener uno por id
router.get('/:id', productosController.obtenerPorId);

// POST /api/productos  -> crear uno nuevo
router.post('/', productosController.crear);

// PUT /api/productos/1 -> actualizar un producto completo
router.put('/:id', productosController.actualizar);

// DELETE /api/productos/1 -> borrar un producto
router.delete('/:id', productosController.eliminar);

// Muy importante exportar el router
module.exports = router;
