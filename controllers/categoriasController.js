// controllers/categoriasController.js

const categoriasService = require('../services/categoriasService');

// GET /api/categorias
exports.obtenerTodos = (req, res) => {
  const categorias = categoriasService.listar();
  res.json(categorias);
};

// GET /api/categorias/:id
exports.obtenerPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const categoria = categoriasService.buscarPorId(id);

  if (!categoria) {
    return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }

  res.json(categoria);
};

// POST /api/categorias
exports.crear = (req, res) => {
  const nueva = categoriasService.crear(req.body);
  res.status(201).json(nueva);
};

// PUT /api/categorias/:id
exports.actualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const actualizada = categoriasService.actualizar(id, req.body);

  if (!actualizada) {
    return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }

  res.json(actualizada);
};

// DELETE /api/categorias/:id
exports.eliminar = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminada = categoriasService.eliminar(id);

  if (!eliminada) {
    return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }

  res.json(eliminada);
};
