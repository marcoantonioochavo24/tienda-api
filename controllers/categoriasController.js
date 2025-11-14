// controllers/categoriasController.js

const categoriasService = require('../services/categoriasService');

// GET todas
exports.obtenerTodas = (req, res) => {
  const categorias = categoriasService.listar();
  res.json(categorias);
};

// GET por id
exports.obtenerPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const categoria = categoriasService.buscarPorId(id);

  if (categoria) {
    res.json(categoria);
  } else {
    res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }
};

// POST crear
exports.crear = (req, res) => {
  const nueva = categoriasService.crear(req.body);
  res.status(201).json(nueva);
};

// PUT actualizar
exports.actualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const actualizada = categoriasService.actualizar(id, req.body);

  if (actualizada) {
    res.json(actualizada);
  } else {
    res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }
};

// DELETE eliminar
exports.eliminar = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminada = categoriasService.eliminar(id);

  if (eliminada) {
    res.json(eliminada);
  } else {
    res.status(404).json({ mensaje: 'Categoría no encontrada' });
  }
};
