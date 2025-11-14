// controllers/productosController.js
// Aquí van las funciones que responden a cada ruta.

const productosService = require('../services/productosService');

// GET /api/productos
exports.obtenerTodos = (req, res) => {
  const productos = productosService.listar();
  res.json(productos);
};

// GET /api/productos/:id
exports.obtenerPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productosService.buscarPorId(id);

  if (!producto) {
    return res.status(404).json({ mensaje: 'No encontrado' });
  }

  res.json(producto);
};

// POST /api/productos
exports.crear = (req, res) => {
  const nuevo = productosService.crear(req.body);
  res.status(201).json(nuevo);
};

// PUT /api/productos/:id
exports.actualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const actualizado = productosService.actualizar(id, req.body);

  if (!actualizado) {
    return res.status(404).json({ mensaje: 'No encontrado' });
  }

  res.json(actualizado);
};

// DELETE /api/productos/:id
exports.eliminar = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminado = productosService.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({ mensaje: 'No encontrado' });
  }

  res.json(eliminado);
};
